/**
 * Format seconds to human readable text in a compact form:
 * s, m or H:m (not m:s or H:m:s)
 */
export const humanReadableTimeFromSeconds = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const totalMinutes: number = Math.floor(seconds / 60);
  let hours: number = Math.floor(totalMinutes / 60) || 0;
  const minutesToDisplay: number = totalMinutes % 60;
  let timeStr: string = ``;
  if (hours > 0) {
    timeStr += `${hours}h `;
  }
  timeStr += `${minutesToDisplay}m`;

  return timeStr;
};
