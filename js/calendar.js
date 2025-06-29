import { Calendar }             from '@fullcalendar/core';
import dayGridPlugin            from '@fullcalendar/daygrid';
import icalendarPlugin          from '@fullcalendar/icalendar';

document.addEventListener('DOMContentLoaded', () => {

  // hide past events
  const now = new Date();
  Array.from(document.querySelectorAll("event-item__item")).forEach((eventItem) => {
      const eventDate = new Date(eventItem.dataset.date);
      if(eventDate < now) {
          eventItem.remove();
      }
  });

  // populate the calendar
  const cal = new Calendar(document.getElementById('club-calendar'), {
    plugins: [dayGridPlugin, icalendarPlugin],
    timeZone: 'Australia/Darwin',
    initialView: 'dayGridMonth',
    events: {
      url: './events.ics',
      format: 'ics'
    }
  });
  cal.render();
});
