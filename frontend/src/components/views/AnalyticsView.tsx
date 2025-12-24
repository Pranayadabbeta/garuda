import { Car, User, AlertTriangle, MapPin, TrendingUp, Clock, Target } from "lucide-react";

const detectionData = [
  { type: "Vehicle", confidence: 94.2, coords: "42.3601, -71.0589", status: "Tracked", alert: false },
  { type: "Personnel", confidence: 89.1, coords: "42.3602, -71.0590", status: "Alert", alert: true },
  { type: "Personnel", confidence: 91.3, coords: "42.3603, -71.0591", status: "Tracked", alert: false },
  { type: "Vehicle", confidence: 87.8, coords: "42.3604, -71.0592", status: "Tracked", alert: false },
  { type: "Personnel", confidence: 92.5, coords: "42.3605, -71.0593", status: "Alert", alert: true },
];

export function AnalyticsView() {
  return (
    <div className="h-full p-4 animate-fade-in">
      <div className="grid grid-cols-12 gap-4 h-full">
        {/* Detection Table */}
        <div className="col-span-8 glass-card-glow flex flex-col overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Detection Log</span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">
              {detectionData.length} Active Objects
            </span>
          </div>

          <div className="flex-1 overflow-auto scrollbar-thin">
            <table className="w-full">
              <thead className="bg-secondary/30 sticky top-0">
                <tr className="text-xs text-muted-foreground uppercase tracking-wider">
                  <th className="text-left p-3 font-medium">Object Type</th>
                  <th className="text-left p-3 font-medium">Confidence</th>
                  <th className="text-left p-3 font-medium">Coordinates</th>
                  <th className="text-left p-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {detectionData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-secondary/20 transition-colors">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        {item.type === "Vehicle" ? (
                          <Car className="w-4 h-4 text-primary" />
                        ) : (
                          <User className="w-4 h-4 text-accent" />
                        )}
                        <span className="text-sm">{item.type}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-success rounded-full"
                            style={{ width: `${item.confidence}%` }}
                          />
                        </div>
                        <span className="text-sm font-mono">{item.confidence}%</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-1 text-sm font-mono text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {item.coords}
                      </div>
                    </td>
                    <td className="p-3">
                      {item.alert ? (
                        <span className="badge-alert">
                          <AlertTriangle className="w-3 h-3" />
                          Alert
                        </span>
                      ) : (
                        <span className="badge-weather">Tracked</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Analytics sidebar */}
        <div className="col-span-4 space-y-4">
          {/* Mini-map */}
          <div className="glass-card p-4">
            <h3 className="section-title">Spatial Overview</h3>
            <div className="aspect-square bg-secondary/30 rounded-lg relative overflow-hidden">
              {/* Grid overlay */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(hsl(222 30% 25%) 1px, transparent 1px),
                    linear-gradient(90deg, hsl(222 30% 25%) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />
              
              {/* Object markers */}
              <div className="absolute w-3 h-3 rounded-full bg-primary" style={{ top: '30%', left: '25%' }}>
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
              </div>
              <div className="absolute w-2 h-2 rounded-full bg-accent" style={{ top: '45%', left: '60%' }} />
              <div className="absolute w-2 h-2 rounded-full bg-accent" style={{ top: '50%', left: '70%' }} />
              <div className="absolute w-3 h-3 rounded-full bg-primary" style={{ top: '65%', left: '40%' }} />
              <div className="absolute w-2 h-2 rounded-full bg-destructive" style={{ top: '35%', left: '75%' }}>
                <div className="absolute inset-0 rounded-full bg-destructive animate-ping opacity-50" />
              </div>

              {/* Legend */}
              <div className="absolute bottom-2 left-2 flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Vehicle</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-muted-foreground">Personnel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alert summary */}
          <div className="glass-card p-4">
            <h3 className="section-title">Alert Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <span className="text-sm">Unauthorized Access</span>
                </div>
                <span className="text-xs font-mono text-destructive">2</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent/10 border border-accent/20">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-sm">Movement Detected</span>
                </div>
                <span className="text-xs font-mono text-accent">5</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-success/10 border border-success/20">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-success" />
                  <span className="text-sm">Normal Activity</span>
                </div>
                <span className="text-xs font-mono text-success">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
