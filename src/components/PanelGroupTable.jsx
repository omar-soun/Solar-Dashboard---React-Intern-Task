const STATUS_BADGE = {
  Normal:   'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
  Degraded: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800',
  Offline:  'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800',
};

const ROW_HIGHLIGHT = {
  Normal:   '',
  Degraded: 'bg-yellow-50 dark:bg-yellow-950/20',
  Offline:  'bg-red-50 dark:bg-red-950/20',
};

export default function PanelGroupTable({ panelGroups }) {
  return (
    <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors duration-200">
      <h2 className="text-base font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-5">
        Panel Groups
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="text-left text-gray-500 font-medium pb-3 pr-6">Group</th>
              <th className="text-left text-gray-500 font-medium pb-3 pr-6">Panels</th>
              <th className="text-left text-gray-500 font-medium pb-3 pr-6">Output (kW)</th>
              <th className="text-left text-gray-500 font-medium pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {panelGroups.map((group) => (
              <tr
                key={group.groupId}
                className={`border-b border-gray-100 dark:border-gray-800/40 ${ROW_HIGHLIGHT[group.status]}`}
              >
                <td className="py-3.5 pr-6 font-semibold text-gray-900 dark:text-white">Group {group.groupId}</td>
                <td className="py-3.5 pr-6 text-gray-600 dark:text-gray-300">{group.panels}</td>
                <td className="py-3.5 pr-6 text-gray-600 dark:text-gray-300">{group.outputKW}</td>
                <td className="py-3.5">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${STATUS_BADGE[group.status]}`}>
                    {group.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
