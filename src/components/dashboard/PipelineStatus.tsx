import { CheckCircle2, Zap, Layers, Grid3X3 } from "lucide-react";

const pipelineSteps = [
  { id: "swd", label: "SwD Enhancement", icon: Zap, status: "active" },
  { id: "ldm", label: "Latent Diffusion", icon: Layers, status: "active" },
  { id: "patch", label: "Patch Diffusion", icon: Grid3X3, status: "active" },
];

export function PipelineStatus() {
  return (
    <div className="glass-card p-4">
      <h3 className="section-title">Enhancement Pipeline</h3>
      <div className="space-y-2">
        {pipelineSteps.map((step) => (
          <div key={step.id} className="pipeline-step">
            <CheckCircle2 className="w-4 h-4" />
            <step.icon className="w-3.5 h-3.5" />
            <span className="flex-1">{step.label}</span>
            <span className="text-xs opacity-70">Active</span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Model</span>
          <span className="font-mono text-foreground">YOLOv8-Nano</span>
        </div>
        <div className="flex items-center justify-between text-xs mt-2">
          <span className="text-muted-foreground">Optimization</span>
          <span className="font-mono text-success">Edge Optimized</span>
        </div>
      </div>
    </div>
  );
}
