import { Video, Maximize2, Camera } from "lucide-react";

export function LiveFeed() {
  return (
    <div className="glass-card-glow h-full flex flex-col overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <Video className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Primary Feed - CAM_01</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge-weather">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Fog Detected
          </span>
          <button className="p-1.5 rounded hover:bg-secondary/50 transition-colors">
            <Maximize2 className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="flex-1 relative bg-background/50 overflow-hidden">
        {/* Simulated video feed with grid overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, transparent 0%, hsl(187 92% 50% / 0.02) 50%, transparent 100%),
              linear-gradient(hsl(222 30% 15% / 0.5) 1px, transparent 1px),
              linear-gradient(90deg, hsl(222 30% 15% / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 40px 40px, 40px 40px'
          }}
        />

        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan-line"
          />
        </div>

        {/* Simulated surveillance scene elements */}
        <div className="absolute inset-4 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Vehicle bounding box */}
            <div 
              className="bounding-box bounding-box-vehicle"
              style={{ left: '15%', top: '40%', width: '120px', height: '70px' }}
            >
              <span className="absolute -top-5 left-0 text-xs font-mono text-primary">
                Vehicle • 94%
              </span>
            </div>

            {/* Personnel bounding boxes */}
            <div 
              className="bounding-box bounding-box-personnel"
              style={{ left: '55%', top: '35%', width: '40px', height: '90px' }}
            >
              <span className="absolute -top-5 left-0 text-xs font-mono text-accent whitespace-nowrap">
                Personnel • 89%
              </span>
            </div>

            <div 
              className="bounding-box bounding-box-personnel"
              style={{ left: '70%', top: '38%', width: '35px', height: '85px' }}
            >
              <span className="absolute -top-5 left-0 text-xs font-mono text-accent whitespace-nowrap">
                Personnel • 91%
              </span>
            </div>

            {/* Center camera icon placeholder */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Camera className="w-24 h-24 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Bottom overlay with stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-primary">FPS: 30</span>
              <span className="text-xs font-mono text-muted-foreground">RES: 1920×1080</span>
              <span className="text-xs font-mono text-muted-foreground">LATENCY: 42ms</span>
            </div>
            <span className="text-xs font-mono text-success">● RECORDING</span>
          </div>
        </div>
      </div>
    </div>
  );
}
