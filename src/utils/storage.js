// Funkcje pomocnicze do zarządzania danymi w localStorage

const STORAGE_KEY = 'planer-events'

export const saveEvents = (events) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
  } catch (error) {
    console.error('Błąd podczas zapisywania wydarzeń:', error)
  }
}

export const loadEvents = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch (error) {
    console.error('Błąd podczas wczytywania wydarzeń:', error)
    return []
  }
}

export const clearEvents = () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Błąd podczas czyszczenia wydarzeń:', error)
  }
}

// Funkcje pomocnicze do formatowania dat
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatTime = (time) => {
  return time
}

export const isSameDay = (date1, date2) => {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate()
}

// Funkcja do generowania unikalnego ID
export const generateId = () => {
  return Date.now() + Math.random()
}
