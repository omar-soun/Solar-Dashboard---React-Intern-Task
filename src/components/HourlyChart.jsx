import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '../context/ThemeContext';

export default function HourlyChart({ data }) {
  const { isDark } = useTheme();

  const gridColor      = isDark ? '#1f2937' : '#e5e7eb';
  const tickColor      = isDark ? '#6b7280' : '#9ca3af';
  const tooltipBg      = isDark ? '#111827' : '#ffffff';
  const tooltipBorder  = isDark ? '#374151' : '#e5e7eb';
  const tooltipLabel   = isDark ? '#e5e7eb' : '#111827';

  return (
    <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors duration-200">
      <h2 className="text-base font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-5">
        Hourly Output — Today
      </h2>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="hourlyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="hour"
            tick={{ fill: tickColor, fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: gridColor }}
          />
          <YAxis
            tick={{ fill: tickColor, fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            unit=" kW"
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
            formatter={(value) => [`${value} kW`, 'Output']}
          />
          <Area
            type="monotone"
            dataKey="kw"
            stroke="#f59e0b"
            strokeWidth={2}
            fill="url(#hourlyGradient)"
            dot={false}
            activeDot={{ r: 4, fill: '#f59e0b', strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}
