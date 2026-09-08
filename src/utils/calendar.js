/**
 * Calendar integration utilities for Google Calendar and Apple/Outlook iCal (.ics)
 */

export function getGoogleCalendarUrl(event) {
  const formatTime = (isoStr) => isoStr.replace(/-|:|\.\d\d\d/g, "");
  const start = formatTime(event.startDate);
  const end = formatTime(event.endDate);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${start}/${end}`,
    details: event.description,
    location: event.location,
    sf: "true",
    output: "xml"
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(event) {
  const formatTime = (isoStr) => isoStr.replace(/-|:|\.\d\d\d/g, "");
  const start = formatTime(event.startDate);
  const end = formatTime(event.endDate);

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ganpati Chaturthi 2026//Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:ganpati-2026-${Date.now()}@invitation`,
    `DTSTAMP:${formatTime(new Date().toISOString().slice(0, 19))}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Ganpati-Chaturthi-2026.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
