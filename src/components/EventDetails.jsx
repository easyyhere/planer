import './EventDetails.css'

const EventDetails = ({ event, onClose, onDelete, onEdit }) => {
  const categoryLabels = {
    personal: 'Osobiste',
    work: 'Praca',
    health: 'Zdrowie',
    education: 'Edukacja',
    social: 'Spotkania'
  }

  const categoryColors = {
    personal: '#3b82f6',
    work: '#ef4444',
    health: '#10b981',
    education: '#f59e0b',
    social: '#8b5cf6'
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="event-details-overlay" onClick={onClose}>
      <div className="event-details" onClick={(e) => e.stopPropagation()}>
        <div className="event-details-header">
          <div className="event-title-section">
            <h3 className="event-title">{event.title}</h3>
            <span 
              className="event-category-badge"
              style={{ backgroundColor: categoryColors[event.category] }}
            >
              {categoryLabels[event.category] || event.category}
            </span>
          </div>
          <button onClick={onClose} className="close-btn">
            ✕
          </button>
        </div>

        <div className="event-details-body">
          <div className="event-info-row">
            <span className="info-label">📅 Data:</span>
            <span className="info-value">{formatDate(event.date)}</span>
          </div>

          <div className="event-info-row">
            <span className="info-label">🕐 Godzina:</span>
            <span className="info-value">{event.time}</span>
          </div>

          {event.description && (
            <div className="event-info-row">
              <span className="info-label">📝 Opis:</span>
              <p className="info-description">{event.description}</p>
            </div>
          )}

          {event.createdAt && (
            <div className="event-info-row">
              <span className="info-label">📅 Utworzono:</span>
              <span className="info-value">
                {new Date(event.createdAt).toLocaleDateString('pl-PL')} o {' '}
                {new Date(event.createdAt).toLocaleTimeString('pl-PL')}
              </span>
            </div>
          )}
        </div>

        <div className="event-details-actions">
          <button 
            onClick={() => onEdit(event)}
            className="edit-btn"
          >
            ✏️ Edytuj
          </button>
          <button 
            onClick={() => {
              if (window.confirm('Czy na pewno chcesz usunąć to wydarzenie?')) {
                onDelete(event.id)
                onClose()
              }
            }}
            className="delete-btn"
          >
            🗑️ Usuń
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
