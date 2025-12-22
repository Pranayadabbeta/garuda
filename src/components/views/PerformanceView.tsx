import { Cpu, Zap, Clock, Battery, Server, Gauge, TrendingUp, BarChart3 } from "lucide-react";

const performanceMetrics = [
  { label: "Inference Latency", value: "42ms", target: "<50ms", icon: Clock, status: "good" },
  { label: "FPS", value: "30", target: "30", icon: Gauge, status: "good" },
  { label: "GPU Utilization", value: "68%", target: "<80%", icon: Cpu, status: "good" },
  { label: "Power Draw", value: "15W", target: "<20W", icon: Battery, status: "good" },
];

const chartData = [
  { time: "0s", latency: 45 },
  { time: "5s", latency: 42 },
  { time: "10s", latency: 44 },
  { time: "15s", latency: 41 },
  { time: "20s", latency: 43 },
  { time: "25s", latency: 42 },
  { time: "30s", latency: 40 },
];

export function PerformanceView() {
  return (
    <div className="h-full p-4 animate-fade-in overflow-auto scrollbar-thin">
      {/* Header */}
      <div className="glass-card-glow p-6 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
              <Server className="w-6 h-6 text-success" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Edge Deployment Status</h2>
              <p className="text-sm text-muted-foreground">NVIDIA Jetson Nano • ARM Cortex-A57</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="badge-weather">
              <Zap className="w-3 h-3" />
              Power Efficient
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-success/20 text-success border border-success/30">
              Optimal Performance
            </span>
          </div>
        </div>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {performanceMetrics.map((metric) => (
          <div key={metric.label} className="glass-card p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <metric.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-mono font-semibold">{metric.value}</span>
              <span className="text-xs text-success font-mono">Target: {metric.target}</span>
            </div>
            <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-success/50 to-success rounded-full" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Latency chart */}
        <div className="col-span-8 glass-card p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="section-title mb-0">Latency Over Time</h3>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-xs text-success font-mono">Stable</span>
            </div>
          </div>
          
          {/* Simple chart visualization */}
          <div className="h-48 flex items-end justify-between gap-2 px-4">
            {chartData.map((point, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-gradient-to-t from-primary/50 to-primary rounded-t transition-all duration-300 hover:from-primary/70 hover:to-primary"
                  style={{ height: `${(point.latency / 50) * 100}%` }}
                />
                <span className="text-xs text-muted-foreground font-mono">{point.time}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
            <span className="text-xs text-muted-foreground">Average: 42.4ms</span>
            <span className="text-xs text-muted-foreground">Min: 40ms • Max: 45ms</span>
          </div>
        </div>

        {/* System specs */}
        <div className="col-span-4 space-y-4">
          <div className="glass-card p-4">
            <h3 className="section-title">Hardware Specs</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Platform</span>
                <span className="font-mono">Jetson Nano</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">GPU</span>
                <span className="font-mono">128-core Maxwell</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Memory</span>
                <span className="font-mono">4GB LPDDR4</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Storage</span>
                <span className="font-mono">32GB eMMC</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="section-title">Optimization</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded bg-success/10 border border-success/20">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-xs">TensorRT Optimized</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-success/10 border border-success/20">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-xs">FP16 Precision</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-success/10 border border-success/20">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="text-xs">Model Quantization</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 bg-gradient-to-br from-primary/10 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Defense Ready</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Optimized for military and security applications with real-time performance guarantees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
