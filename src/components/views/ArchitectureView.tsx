import { Camera, Zap, Layers, Grid3X3, Box, Tag, ArrowRight } from "lucide-react";

const architectureSteps = [
  {
    stage: "Input",
    title: "Camera Feed",
    subtitle: "Fog / Rain / Night",
    icon: Camera,
    color: "text-muted-foreground",
    bgColor: "bg-secondary/50",
  },
  {
    stage: "Enhancement",
    title: "SwD Module",
    subtitle: "Weather Denoising",
    icon: Zap,
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    stage: "Enhancement",
    title: "LDM Module",
    subtitle: "Latent Diffusion",
    icon: Layers,
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    stage: "Enhancement",
    title: "Patch Diffusion",
    subtitle: "Feature-Level Fusion",
    icon: Grid3X3,
    color: "text-primary",
    bgColor: "bg-primary/20",
  },
  {
    stage: "Detection",
    title: "YOLOv8-Nano",
    subtitle: "Object Detection",
    icon: Box,
    color: "text-success",
    bgColor: "bg-success/20",
  },
  {
    stage: "Output",
    title: "Results",
    subtitle: "Bounding Boxes + Labels",
    icon: Tag,
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
];

export function ArchitectureView() {
  return (
    <div className="h-full p-4 animate-fade-in overflow-auto scrollbar-thin">
      <div className="glass-card-glow p-6 mb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">System Architecture</h2>
            <p className="text-sm text-muted-foreground">Modular Two-Stage Deep Learning Framework</p>
          </div>
          <span className="badge-weather">Production Ready</span>
        </div>

        {/* Flow diagram */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4">
          {architectureSteps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="flex flex-col items-center min-w-[140px]">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {step.stage}
                </span>
                <div className={`w-20 h-20 rounded-xl ${step.bgColor} flex items-center justify-center border border-border/50`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <span className="text-sm font-medium mt-2">{step.title}</span>
                <span className="text-xs text-muted-foreground">{step.subtitle}</span>
              </div>
              {idx < architectureSteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-border flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Technical details */}
      <div className="grid grid-cols-3 gap-4">
        <div className="glass-card p-4">
          <h3 className="section-title">Enhancement Stage</h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-secondary/30">
              <p className="text-sm font-medium">SwD Enhancement</p>
              <p className="text-xs text-muted-foreground mt-1">
                Selective weather denoising for initial clarity improvement
              </p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/30">
              <p className="text-sm font-medium">Latent Diffusion Model</p>
              <p className="text-xs text-muted-foreground mt-1">
                Deep feature reconstruction in latent space
              </p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/30">
              <p className="text-sm font-medium">Patch-Based Fusion</p>
              <p className="text-xs text-muted-foreground mt-1">
                Multi-scale feature integration for enhanced details
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-4">
          <h3 className="section-title">Detection Stage</h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-success/10 border border-success/20">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">YOLOv8-Nano</p>
                <span className="text-xs font-mono text-success">Active</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Lightweight architecture optimized for edge deployment
              </p>
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Model Size</span>
                <span className="font-mono">3.2 MB</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Parameters</span>
                <span className="font-mono">3.2M</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Classes</span>
                <span className="font-mono">80</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-4">
          <h3 className="section-title">Output Stage</h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-sm font-medium">Detection Output</p>
              <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                <li>• Bounding box coordinates</li>
                <li>• Object class labels</li>
                <li>• Confidence scores</li>
                <li>• Tracking IDs</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-secondary/30">
              <p className="text-sm font-medium">Supported Classes</p>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded">Vehicle</span>
                <span className="px-2 py-0.5 text-xs bg-accent/20 text-accent rounded">Personnel</span>
                <span className="px-2 py-0.5 text-xs bg-secondary text-muted-foreground rounded">Terrain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
