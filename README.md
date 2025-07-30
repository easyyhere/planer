# 📅 Planer - Aplikacja Kalendarz

Nowoczesna aplikacja kalendarza stworzona w React + Vite, która pozwala na zarządzanie wydarzeniami i planowanie czasu.

## 🚀 Funkcjonalności

### ✅ Już zaimplementowane:
- **Widok kalendarza miesięcznego** - przejrzysta siatka z nazwami dni
- **Dodawanie wydarzeń** - formularz z kategoryzacją wydarzeń  
- **Kategoryzowanie wydarzeń** - 5 kategorii z kolorami (Osobiste, Praca, Zdrowie, Edukacja, Spotkania)
- **Wyświetlanie wydarzeń** - wydarzenia wyświetlane jako kolorowe pille na kalendarzu
- **Szczegóły wydarzeń** - kliknięcie w wydarzenie pokazuje szczegóły
- **Nawigacja między miesiącami** - łatwe przełączanie między miesiącami
- **Lokalne przechowywanie** - wydarzenia zapisywane w localStorage
- **Responsywny design** - działa na urządzeniach mobilnych
- **Licznik wydarzeń** - wyświetla liczbę wszystkich wydarzeń

### 🔮 Planowane funkcjonalności:
- **Edycja wydarzeń** - możliwość edycji istniejących wydarzeń
- **Wyszukiwanie** - wyszukiwanie wydarzeń po tytule/kategorii
- **Filtry** - filtrowanie wydarzeń po kategorii
- **Export/Import** - eksport do JSON/CSV
- **Powiadomienia** - przypomnienia o nadchodzących wydarzeniach
- **Widok tygodniowy** - alternatywny widok kalendarza
- **Wielojęzyczność** - wsparcie dla innych języków

## 🛠️ Technologie

- **React 19** - biblioteka do budowania interfejsu
- **Vite** - szybkie narzędzie do budowania
- **CSS3** - nowoczesne style z Flexbox i Grid
- **LocalStorage** - lokalne przechowywanie danych

## 🚀 Uruchomienie

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Budowanie wersji produkcyjnej
npm run build

# Podgląd wersji produkcyjnej
npm run preview
```

## 📱 Jak używać

1. **Dodawanie wydarzeń**: Kliknij przycisk "+ Dodaj wydarzenie" lub wybierz datę w kalendarzu
2. **Przeglądanie wydarzeń**: Wydarzenia są wyświetlane jako kolorowe pille na odpowiednich dniach
3. **Szczegóły wydarzeń**: Kliknij na wydarzenie, aby zobaczyć szczegóły
4. **Usuwanie wydarzeń**: W szczegółach wydarzenia kliknij przycisk "Usuń"
5. **Nawigacja**: Użyj przycisków "Poprzedni"/"Następny" aby zmieniać miesiące

## 🎨 Kategorie wydarzeń

- 🔵 **Osobiste** - osobiste sprawy, hobby
- 🔴 **Praca** - spotkania, deadliny, zadania
- 🟢 **Zdrowie** - wizyty u lekarza, trening
- 🟡 **Edukacja** - kursy, nauka, egzaminy  
- 🟣 **Spotkania** - spotkania towarzyskie, randki

## 📦 Struktura projektu

```
src/
├── components/          # Komponenty React
│   ├── Calendar.jsx     # Główny komponent kalendarza
│   ├── EventForm.jsx    # Formularz dodawania wydarzeń
│   ├── EventDetails.jsx # Szczegóły wydarzenia
│   └── *.css           # Style komponentów
├── utils/              # Funkcje pomocnicze
│   └── storage.js      # Zarządzanie localStorage
├── App.jsx             # Główny komponent aplikacji
├── main.jsx           # Punkt wejścia
└── index.css          # Globalne style
```

## 🤝 Rozwój

Aplikacja jest w aktywnym rozwoju. Planowane są następne funkcjonalności i ulepszenia UI/UX.

## 📄 Licencja

MIT License - możesz swobodnie używać i modyfikować kod.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
