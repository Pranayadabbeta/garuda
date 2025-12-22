import { Bell, Settings, Clock, Wifi } from "lucide-react";

export function Header() {
  return (
    <header className="h-14 bg-card/30 border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-mono">
            {new Date().toLocaleTimeString("en-US", { 
              hour12: false, 
              hour: "2-digit", 
              minute: "2-digit", 
              second: "2-digit" 
            })}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4 text-success" />
          <span className="text-xs text-muted-foreground">Connected</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="badge-weather">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Live Feed Active
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground">
          <Bell className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-lg hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground">
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
