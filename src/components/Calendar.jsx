import { useState } from 'react'
import './Calendar.css'
import EventDetails from './EventDetails'

const Calendar = ({ events, selectedDate, onDateSelect, onDeleteEvent, onEditEvent }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Funkcje pomocnicze do zarządzania datami
  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
  const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
  const startDate = new Date(startOfMonth)
  startDate.setDate(startDate.getDate() - startOfMonth.getDay())

  const monthNames = [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
  ]

  const dayNames = ['Nie', 'Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob']

  // Generowanie dni miesiąca
  const generateCalendarDays = () => {
    const days = []
    const date = new Date(startDate)

    for (let i = 0; i < 42; i++) { // 6 tygodni x 7 dni
      days.push(new Date(date))
      date.setDate(date.getDate() + 1)
    }

    return days
  }

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth)
    newMonth.setMonth(currentMonth.getMonth() + direction)
    setCurrentMonth(newMonth)
  }

  const isToday = (date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isSelectedDate = (date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString()
  }

  const isCurrentMonth = (date) => {
    return date.getMonth() === currentMonth.getMonth()
  }

  const getEventsForDate = (date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate.toDateString() === date.toDateString()
    })
  }

  const handleEventClick = (e, event) => {
    e.stopPropagation()
    setSelectedEvent(event)
  }

  const days = generateCalendarDays()

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => navigateMonth(-1)} className="nav-btn">
          ← Poprzedni
        </button>
        <h2 className="month-year">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <button onClick={() => navigateMonth(1)} className="nav-btn">
          Następny →
        </button>
      </div>

      <div className="calendar-grid">
        {dayNames.map(day => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}

        {days.map((date, index) => {
          const dayEvents = getEventsForDate(date)
          
          return (
            <div
              key={index}
              className={`calendar-day ${
                isCurrentMonth(date) ? 'current-month' : 'other-month'
              } ${isToday(date) ? 'today' : ''} ${
                isSelectedDate(date) ? 'selected' : ''
              }`}
              onClick={() => onDateSelect(date)}
            >
              <span className="day-number">{date.getDate()}</span>
              
              {dayEvents.length > 0 && (
                <div className="day-events">
                  {dayEvents.slice(0, 3).map(event => (
                    <div
                      key={event.id}
                      className={`event-pill ${event.category || 'default'}`}
                      onClick={(e) => handleEventClick(e, event)}
                      title={`${event.title} - ${event.time}\nKliknij żeby zobaczyć szczegóły`}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 3 && (
                    <div className="more-events">
                      +{dayEvents.length - 3} więcej
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {selectedEvent && (
        <EventDetails
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onDelete={onDeleteEvent}
          onEdit={(event) => {
            // Tutaj możemy dodać funkcjonalność edycji
            console.log('Edycja wydarzenia:', event)
            setSelectedEvent(null)
          }}
        />
      )}
    </div>
  )
}

export default Calendar
