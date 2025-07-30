import { useState, useEffect } from 'react'
import './App.css'
import Calendar from './components/Calendar'
import EventForm from './components/EventForm'
import { saveEvents, loadEvents, generateId } from './utils/storage'

function App() {
  const [events, setEvents] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showEventForm, setShowEventForm] = useState(false)

  // Wczytaj wydarzenia przy starcie aplikacji
  useEffect(() => {
    const savedEvents = loadEvents()
    setEvents(savedEvents)
  }, [])

  // Zapisuj wydarzenia przy każdej zmianie
  useEffect(() => {
    if (events.length > 0) {
      saveEvents(events)
    }
  }, [events])

  const addEvent = (event) => {
    const newEvent = { 
      ...event, 
      id: generateId(),
      createdAt: new Date().toISOString()
    }
    setEvents(prevEvents => [...prevEvents, newEvent])
    setShowEventForm(false)
  }

  const deleteEvent = (eventId) => {
    setEvents(prevEvents => {
      const newEvents = prevEvents.filter(event => event.id !== eventId)
      saveEvents(newEvents) // Zapisz od razu po usunięciu
      return newEvents
    })
  }

  const editEvent = (eventId, updatedEvent) => {
    setEvents(prevEvents => {
      const newEvents = prevEvents.map(event =>
        event.id === eventId ? { ...event, ...updatedEvent } : event
      )
      saveEvents(newEvents)
      return newEvents
    })
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📅 Planer</h1>
        <div className="header-actions">
          <span className="events-count">
            Wydarzenia: {events.length}
          </span>
          <button 
            className="add-event-btn"
            onClick={() => setShowEventForm(true)}
          >
            + Dodaj wydarzenie
          </button>
        </div>
      </header>

      <main className="app-main">
        <Calendar 
          events={events}
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          onDeleteEvent={deleteEvent}
          onEditEvent={editEvent}
        />
        
        {showEventForm && (
          <EventForm
            selectedDate={selectedDate}
            onAddEvent={addEvent}
            onClose={() => setShowEventForm(false)}
          />
        )}
      </main>
    </div>
  )
}

export default App
