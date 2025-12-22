import { Activity, Eye, Target, Clock } from "lucide-react";

const metrics = [
  { label: "Detection Rate", value: "98.2%", icon: Target, trend: "+2.1%" },
  { label: "Visibility Score", value: "87%", icon: Eye, trend: "+15%" },
  { label: "Processing Time", value: "42ms", icon: Clock, trend: "-8ms" },
  { label: "Objects Tracked", value: "12", icon: Activity, trend: "+3" },
];

export function MetricsPanel() {
  return (
    <div className="glass-card p-4">
      <h3 className="section-title">Real-Time Metrics</h3>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric-card">
            <div className="flex items-center gap-2 mb-1">
              <metric.icon className="w-3.5 h-3.5 text-primary" />
              <span className="data-label">{metric.label}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="data-value">{metric.value}</span>
              <span className="text-xs text-success font-mono">{metric.trend}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
