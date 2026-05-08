import StatCard from './StatCard';

export default function LiveMetrics({ liveStats }) {
  const stats = [
    { title: 'Current Output', value: liveStats.currentOutputKW, unit: 'kW' },
    { title: "Today's Peak", value: liveStats.peakOutputTodayKW, unit: 'kW' },
    { title: 'Efficiency', value: liveStats.efficiencyPercent, unit: '%' },
    { title: 'Battery Level', value: liveStats.batteryLevelPercent, unit: '%' },
    { title: 'Grid Export', value: liveStats.gridExportKW, unit: 'kW' },
    { title: 'Self Consumption', value: liveStats.selfConsumptionKW, unit: 'kW' },
  ];

  return (
    <section>
      <h2 className="text-base font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-3">
        Live Stats
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} value={stat.value} unit={stat.unit} />
        ))}
      </div>
    </section>
  );
}
