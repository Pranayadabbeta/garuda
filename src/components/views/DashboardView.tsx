import { LiveFeed } from "@/components/dashboard/LiveFeed";
import { PipelineStatus } from "@/components/dashboard/PipelineStatus";
import { MetricsPanel } from "@/components/dashboard/MetricsPanel";
import { DetectionList } from "@/components/dashboard/DetectionList";

export function DashboardView() {
  return (
    <div className="h-full grid grid-cols-12 gap-4 p-4 animate-fade-in">
      {/* Main video feed */}
      <div className="col-span-8 row-span-2">
        <LiveFeed />
      </div>

      {/* Right panel */}
      <div className="col-span-4 space-y-4 overflow-auto scrollbar-thin">
        <PipelineStatus />
        <MetricsPanel />
        <DetectionList />
      </div>
    </div>
  );
}
