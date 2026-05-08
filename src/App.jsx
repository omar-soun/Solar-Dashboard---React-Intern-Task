import { siteInfo, liveStats, energySummary, hourlyToday, weeklyData, panelGroups } from './data/solarData';
import SiteHeader from './components/SiteHeader';
import LiveMetrics from './components/LiveMetrics';
import EnergySummary from './components/EnergySummary';
import HourlyChart from './components/HourlyChart';
import WeeklyChart from './components/WeeklyChart';
import PanelGroupTable from './components/PanelGroupTable';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <SiteHeader siteInfo={siteInfo} />
      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-10 space-y-6">
        <LiveMetrics liveStats={liveStats} />
        <EnergySummary energySummary={energySummary} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HourlyChart data={hourlyToday} />
          <WeeklyChart data={weeklyData} />
        </div>
        <PanelGroupTable panelGroups={panelGroups} />
      </main>
    </div>
  );
}
