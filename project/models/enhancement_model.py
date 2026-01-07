import os
import cv2
import numpy as np

# Optional PyTorch-based enhancement model wrapper
try:
    import torch
    TORCH_AVAILABLE = True
except Exception:
    TORCH_AVAILABLE = False

MODEL_PATH = os.path.join(os.path.dirname(__file__), "enhancement_model.pt")


class EnhancementModel:
    def __init__(self, model_path=MODEL_PATH, device=None):
        self.device = device
        self.model = None
        self.use_torch = False

        if TORCH_AVAILABLE and os.path.exists(model_path):
            try:
                # Prefer TorchScript model for simple loading
                self.model = torch.jit.load(model_path, map_location=device or 'cpu')
                self.model.eval()
                self.use_torch = True
            except Exception:
                try:
                    # Fallback: load via torch.load
                    self.model = torch.load(model_path, map_location=device or 'cpu')
                    if hasattr(self.model, 'eval'):
                        self.model.eval()
                        self.use_torch = True
                except Exception:
                    self.model = None
                    self.use_torch = False

    def enhance(self, image_bgr: np.ndarray) -> np.ndarray:
        """
        image_bgr: HxWx3 uint8 (OpenCV BGR)
        returns enhanced image in same BGR format
        """
        if self.use_torch and self.model is not None:
            try:
                img = image_bgr[:, :, ::-1].astype(np.float32) / 255.0  # BGR -> RGB
                img = np.transpose(img, (2, 0, 1))  # C H W
                tensor = torch.from_numpy(img).unsqueeze(0).to(next(self.model.parameters()).device if hasattr(self.model, 'parameters') else 'cpu')

                with torch.no_grad():
                    out = self.model(tensor)

                if isinstance(out, (list, tuple)):
                    out = out[0]

                out = out.squeeze(0).cpu().numpy()
                out = np.clip(np.transpose(out, (1, 2, 0)) * 255.0, 0, 255).astype(np.uint8)
                out_bgr = out[:, :, ::-1]
                return out_bgr
            except Exception:
                # If torch inference fails, fallback to simple enhancement
                pass

        # Fallback enhancement: CLAHE on L channel (simple and robust)
        lab = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2LAB)
        l, a, b = cv2.split(lab)
        clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
        cl = clahe.apply(l)
        enhanced_lab = cv2.merge((cl, a, b))
        enhanced = cv2.cvtColor(enhanced_lab, cv2.COLOR_LAB2BGR)
        return enhanced


# convenience singleton
_model_singleton = None


def get_model():
    global _model_singleton
    if _model_singleton is None:
        _model_singleton = EnhancementModel()
    return _model_singleton


def enhance_image(image_bgr: np.ndarray) -> np.ndarray:
    """Public helper used by app.py"""
    model = get_model()
    return model.enhance(image_bgr)
