import { Monitor, Layers, BarChart3, GitBranch, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Live Monitor", icon: Monitor },
  { id: "enhancement", label: "Enhancement", icon: Layers },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "architecture", label: "Architecture", icon: GitBranch },
  { id: "performance", label: "Performance", icon: Cpu },
];

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-card/50 border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center">
          <div>
            <h1 className="text-sm font-semibold text-foreground">Garuda</h1>
            <p className="text-xs text-muted-foreground">Operations Dashboard</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <p className="section-title px-4 mb-3">Navigation</p>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "nav-item w-full",
              activeView === item.id && "nav-item-active"
            )}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="glass-card p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="status-indicator status-active" />
            <span className="text-xs text-muted-foreground">System Status</span>
          </div>
          <p className="text-xs font-mono text-success">All Systems Operational</p>
        </div>
      </div>
    </aside>
  );
}
