# React Weather App

A simple, responsive weather application built with React.js.  
It allows users to search for any city, displays current weather, and shows a 5-day forecast.  
The app also remembers the last successfully searched city using `localStorage`.

---

## **Features**

- Search any city and view current weather (temperature, humidity, condition).
- 5-day weather forecast displayed in a clean card layout.
- Loading indicator while fetching data.
- Error handling for invalid city searches.
- Last searched city saved in localStorage and displayed below the search bar.
- Clickable last searched city to quickly reload its weather.
- Responsive and centered design.

---

## **Demo Screenshot**

<!-- ![Weather App Screenshot](src/assets/Weather-App-Screenshot.png) -->
<img src="https://github.com/kinishneema/Weather-App/blob/main/public/Weather-App-Screenshot.png" alt="Weather App Screenshot" width="500"/>

---

## **Installation & Setup**

1. Clone the repository:

```bash
git clone https://github.com/kinishneema/Weather-App
cd Weather-App
```

2. Install dependencies:

```bash
npm install
```

3. Make sure your API key is set in `src/api.js`:

```bash
const API_KEY = "YOUR_API_KEY"; // replace with your OpenWeatherMap API key
```

4. Start the development server:

```bash
npm run dev
```
