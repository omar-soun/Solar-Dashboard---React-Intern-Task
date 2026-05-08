export const siteInfo = {
  siteName: "Sunfield Solar Farm",
  location: "Colombo, Sri Lanka",
  totalPanels: 120,
  activePanels: 114,
  installedCapacityKW: 48,
};

export const liveStats = {
  currentOutputKW: 31.4,
  peakOutputTodayKW: 44.2,
  efficiencyPercent: 87.3,
  irradianceWm2: 812,
  panelTempCelsius: 43.5,
  batteryLevelPercent: 72,
  gridExportKW: 12.6,
  selfConsumptionKW: 18.8,
};

export const energySummary = {
  todayKWh: 186.4,
  thisWeekKWh: 1024.8,
  thisMonthKWh: 4312.5,
  totalLifetimeKWh: 87450.2,
  co2SavedKgToday: 93.2,
  co2SavedKgTotal: 43725.1,
};

export const hourlyToday = [
  { hour: "06:00", kw: 2.1 },
  { hour: "07:00", kw: 8.4 },
  { hour: "08:00", kw: 15.6 },
  { hour: "09:00", kw: 22.3 },
  { hour: "10:00", kw: 30.1 },
  { hour: "11:00", kw: 38.7 },
  { hour: "12:00", kw: 44.2 },
  { hour: "13:00", kw: 42.8 },
  { hour: "14:00", kw: 39.5 },
  { hour: "15:00", kw: 33.2 },
  { hour: "16:00", kw: 24.6 },
  { hour: "17:00", kw: 14.1 },
  { hour: "18:00", kw: 5.3 },
];

export const weeklyData = [
  { day: "Mon", kWh: 198.4 },
  { day: "Tue", kWh: 172.1 },
  { day: "Wed", kWh: 210.5 },
  { day: "Thu", kWh: 188.3 },
  { day: "Fri", kWh: 156.9 },
  { day: "Sat", kWh: 45.2 },
  { day: "Sun", kWh: 53.4 },
];

export const panelGroups = [
  { groupId: "A", panels: 30, outputKW: 11.8, status: "Normal" },
  { groupId: "B", panels: 30, outputKW: 10.2, status: "Normal" },
  { groupId: "C", panels: 30, outputKW: 9.4, status: "Degraded" },
  { groupId: "D", panels: 30, outputKW: 0, status: "Offline" },
];
