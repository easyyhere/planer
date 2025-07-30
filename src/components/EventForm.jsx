import { useState } from 'react'
import './EventForm.css'

const EventForm = ({ selectedDate, onAddEvent, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: selectedDate ? selectedDate.toISOString().split('T')[0] : '',
    time: '12:00',
    category: 'personal'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.title.trim()) {
      alert('Proszę podać tytuł wydarzenia')
      return
    }

    onAddEvent(formData)
    
    // Reset formularza
    setFormData({
      title: '',
      description: '',
      date: selectedDate ? selectedDate.toISOString().split('T')[0] : '',
      time: '12:00',
      category: 'personal'
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const categories = [
    { value: 'personal', label: 'Osobiste', color: '#3b82f6' },
    { value: 'work', label: 'Praca', color: '#ef4444' },
    { value: 'health', label: 'Zdrowie', color: '#10b981' },
    { value: 'education', label: 'Edukacja', color: '#f59e0b' },
    { value: 'social', label: 'Spotkania', color: '#8b5cf6' }
  ]

  return (
    <div className="event-form-overlay">
      <div className="event-form">
        <div className="form-header">
          <h3>Dodaj nowe wydarzenie</h3>
          <button onClick={onClose} className="close-btn">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Tytuł *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Wpisz tytuł wydarzenia"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Opis</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Dodaj opis wydarzenia (opcjonalnie)"
              rows={3}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Data</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Godzina</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category">Kategoria</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Anuluj
            </button>
            <button type="submit" className="submit-btn">
              Dodaj wydarzenie
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EventForm
