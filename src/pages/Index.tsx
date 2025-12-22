import { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { DashboardView } from "@/components/views/DashboardView";
import { EnhancementView } from "@/components/views/EnhancementView";
import { AnalyticsView } from "@/components/views/AnalyticsView";
import { ArchitectureView } from "@/components/views/ArchitectureView";
import { PerformanceView } from "@/components/views/PerformanceView";

const Index = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [, setTime] = useState(new Date());

  // Update time every second for header clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardView />;
      case "enhancement":
        return <EnhancementView />;
      case "analytics":
        return <AnalyticsView />;
      case "architecture":
        return <ArchitectureView />;
      case "performance":
        return <PerformanceView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-hidden">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default Index;
