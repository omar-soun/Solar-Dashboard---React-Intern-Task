function SummaryTile({ label, value, unit }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 text-center transition-colors duration-200">
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{value.toLocaleString()}</p>
      <p className="text-xs font-semibold text-amber-500 dark:text-amber-400 mt-1">{unit}</p>
      <p className="text-gray-500 dark:text-gray-400 text-xs mt-1.5">{label}</p>
    </div>
  );
}

export default function EnergySummary({ energySummary }) {
  const tiles = [
    { label: "Today's Energy", value: energySummary.todayKWh, unit: 'kWh' },
    { label: 'This Week', value: energySummary.thisWeekKWh, unit: 'kWh' },
    { label: 'This Month', value: energySummary.thisMonthKWh, unit: 'kWh' },
    { label: 'Lifetime Total', value: energySummary.totalLifetimeKWh, unit: 'kWh' },
    { label: 'CO₂ Saved Today', value: energySummary.co2SavedKgToday, unit: 'kg' },
  ];

  return (
    <section>
      <h2 className="text-base font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-3">
        Energy Summary
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tiles.map((tile) => (
          <SummaryTile key={tile.label} label={tile.label} value={tile.value} unit={tile.unit} />
        ))}
      </div>
    </section>
  );
}
