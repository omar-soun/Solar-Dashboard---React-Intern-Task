import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { useTheme } from '../context/ThemeContext';

export default function WeeklyChart({ data }) {
  const { isDark } = useTheme();

  const gridColor     = isDark ? '#1f2937' : '#e5e7eb';
  const tickColor     = isDark ? '#6b7280' : '#9ca3af';
  const tooltipBg     = isDark ? '#111827' : '#ffffff';
  const tooltipBorder = isDark ? '#374151' : '#e5e7eb';
  const tooltipLabel  = isDark ? '#e5e7eb' : '#111827';
  const lowBarColor   = isDark ? '#92400e' : '#fcd34d';

  return (
    <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors duration-200">
      <h2 className="text-base font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-5">
        Weekly Output
      </h2>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="day"
            tick={{ fill: tickColor, fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: gridColor }}
          />
          <YAxis
            tick={{ fill: tickColor, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            unit=" kWh"
          />
          <Tooltip
            contentStyle={{
              background: tooltipBg,
              border: `1px solid ${tooltipBorder}`,
              borderRadius: '8px',
              fontSize: '13px',
            }}
            labelStyle={{ color: tooltipLabel, marginBottom: '2px' }}
            itemStyle={{ color: '#f59e0b' }}
            formatter={(value) => [`${value} kWh`, 'Energy']}
            cursor={{ fill: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)' }}
          />
          <Bar dataKey="kWh" radius={[4, 4, 0, 0]}>
            {data.map((entry) => (
              <Cell key={entry.day} fill={entry.kWh < 100 ? lowBarColor : '#f59e0b'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
