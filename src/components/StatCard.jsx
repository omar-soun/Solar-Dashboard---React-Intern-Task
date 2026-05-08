export default function StatCard({ title, value, unit }) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 transition-colors duration-200">
      <p className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">{title}</p>
      <p className="text-3xl font-bold text-amber-500 dark:text-amber-400 leading-none">
        {value}
        <span className="text-sm font-medium text-gray-400 ml-1.5">{unit}</span>
      </p>
    </div>
  );
}
