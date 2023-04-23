const DAY_AND_MONTH_LENGTH = "dd/mm".length;

export function getNorwayTodayAndTomorrow(): { today: string, tomorrow: string } {
  const nowUTC = new Date();
  const tomorrowUTC = new Date();
  tomorrowUTC.setDate(nowUTC.getDate() + 1);

  return {
    today: nowUTC.toLocaleString("en-GB", { timeZone: "Europe/Oslo" }).substring(0, DAY_AND_MONTH_LENGTH),
    tomorrow: tomorrowUTC.toLocaleString("en-GB", { timeZone: "Europe/Oslo" }).substring(0, DAY_AND_MONTH_LENGTH)
  };
}