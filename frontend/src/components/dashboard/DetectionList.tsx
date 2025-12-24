import { Car, User, AlertTriangle, MapPin } from "lucide-react";

const detections = [
  { id: 1, type: "Vehicle", confidence: 94, coords: "42.3601, -71.0589", icon: Car, alert: false },
  { id: 2, type: "Personnel", confidence: 89, coords: "42.3602, -71.0590", icon: User, alert: true },
  { id: 3, type: "Personnel", confidence: 91, coords: "42.3603, -71.0591", icon: User, alert: false },
];

export function DetectionList() {
  return (
    <div className="glass-card p-4">
      <h3 className="section-title">Active Detections</h3>
      <div className="space-y-2">
        {detections.map((detection) => (
          <div 
            key={detection.id} 
            className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              detection.type === "Vehicle" ? "bg-primary/20" : "bg-accent/20"
            }`}>
              <detection.icon className={`w-4 h-4 ${
                detection.type === "Vehicle" ? "text-primary" : "text-accent"
              }`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{detection.type}</span>
                {detection.alert && (
                  <AlertTriangle className="w-3.5 h-3.5 text-accent" />
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span className="font-mono truncate">{detection.coords}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-mono text-foreground">{detection.confidence}%</span>
              <p className="text-xs text-muted-foreground">Conf.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
