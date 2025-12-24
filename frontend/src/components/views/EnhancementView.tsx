import { useState } from "react";
import { ArrowLeftRight, TrendingUp, Eye, BarChart } from "lucide-react";

export function EnhancementView() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="h-full p-4 animate-fade-in">
      <div className="grid grid-cols-12 gap-4 h-full">
        {/* Comparison View */}
        <div className="col-span-9 glass-card-glow overflow-hidden flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <ArrowLeftRight className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Enhancement Comparison</span>
            </div>
            <span className="badge-weather">Hybrid Diffusion-Based Enhancement</span>
          </div>

          <div className="flex-1 relative">
            {/* Comparison container */}
            <div className="absolute inset-0 flex">
              {/* Raw input side */}
              <div 
                className="relative overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-muted/80 to-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-lg bg-secondary/50 mb-4 mx-auto flex items-center justify-center opacity-50">
                      <span className="text-4xl">🌫️</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Degraded Input</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Fog / Low Visibility</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-destructive/80 text-destructive-foreground px-3 py-1 rounded text-xs font-mono">
                  RAW INPUT
                </div>
              </div>

              {/* Enhanced output side */}
              <div 
                className="relative overflow-hidden flex-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-lg bg-primary/20 mb-4 mx-auto flex items-center justify-center border border-primary/30">
                      <span className="text-4xl">✨</span>
                    </div>
                    <p className="text-sm text-foreground">Enhanced Output</p>
                    <p className="text-xs text-primary/70 mt-1">Clear / High Visibility</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-success/80 text-success-foreground px-3 py-1 rounded text-xs font-mono">
                  ENHANCED
                </div>
              </div>

              {/* Slider handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <ArrowLeftRight className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </div>

            {/* Slider control */}
            <input
              type="range"
              min="10"
              max="90"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 accent-primary"
            />
          </div>
        </div>

        {/* Metrics sidebar */}
        <div className="col-span-3 space-y-4">
          <div className="glass-card p-4">
            <h3 className="section-title">Enhancement Metrics</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-success" />
                    PSNR
                  </span>
                  <span className="text-sm font-mono text-success">+8.2 dB</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-success/50 to-success rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-2">
                    <Eye className="w-3.5 h-3.5 text-primary" />
                    SSIM
                  </span>
                  <span className="text-sm font-mono text-primary">+0.24</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary/50 to-primary rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-2">
                    <BarChart className="w-3.5 h-3.5 text-accent" />
                    Visibility
                  </span>
                  <span className="text-sm font-mono text-accent">+42%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-accent/50 to-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="section-title">Processing Info</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Input Resolution</span>
                <span className="font-mono">1920×1080</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Processing Time</span>
                <span className="font-mono text-success">38ms</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Enhancement Model</span>
                <span className="font-mono text-primary">SwD-LDM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
