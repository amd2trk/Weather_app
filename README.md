# Weather App

A modern, responsive weather application that provides current weather information and a 3-day forecast for any location worldwide.

## ⚠️ Important Notice

**The WeatherAPI key included in this repository is currently not working.** To use this application, you will need to:

1. Sign up for a free API key at [WeatherAPI.com](https://www.weatherapi.com/)
2. Replace the API key in `js/index.js` (line 1):
   ```javascript
   let apiKey = 'YOUR_NEW_API_KEY_HERE'
   ```

## Features

- **Real-time Weather Data**: Displays current temperature, weather conditions, precipitation, wind speed, and wind direction
- **3-Day Forecast**: Shows weather predictions for the next two days including high/low temperatures
- **Geolocation Support**: Automatically detects your current location on first load
- **Location Search**: Search for weather information in any city worldwide
- **Responsive Design**: Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices
- **Contact Page**: Includes a contact form and map integration for user inquiries

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with CSS variables for theming
- **Bootstrap 5**: Responsive grid system and components
- **JavaScript (ES6+)**: Async/await for API calls and DOM manipulation
- **Font Awesome**: Icon library for weather and UI icons
- **WeatherAPI**: External API for weather data

## Project Structure

```
amd2trk-weather_app/
├── index.html          # Main weather page
├── contact.html        # Contact page with form
├── css/
│   ├── style.css      # Main stylesheet
│   └── media.css      # Responsive media queries
├── js/
│   └── index.js       # JavaScript logic for API calls and UI
└── webfonts/          # Font Awesome icon fonts
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amd2trk-weather_app
   ```

2. **⚠️ API Key Configuration (REQUIRED)**
   - The current API key in the code is **not functional**
   - Sign up for a free account at [WeatherAPI.com](https://www.weatherapi.com/)
   - Copy your API key from the dashboard
   - Open `js/index.js` and replace the API key on line 1:
     ```javascript
     let apiKey = 'YOUR_NEW_API_KEY_HERE'  // Replace with your actual key
     ```

3. **Launch the Application**
   - Open `index.html` in a web browser
   - Allow location permissions when prompted for automatic location detection
   - **Note**: The app will not function without a valid API key

## Usage

### Weather Search
1. Enter a city name in the search bar on the home page
2. Click the "Find" button or start typing to see live results
3. View current weather and 3-day forecast

### Navigation
- **Home**: Main weather display page
- **News**: Navigate to news section (placeholder)
- **Live Cameras**: Access live camera feeds (placeholder)
- **Photos**: View weather-related photos (placeholder)
- **Contact**: Access the contact form and company information

## Color Scheme

The app uses a modern dark theme with cyan accents:
- Primary Background: `#1e202b`
- Secondary Background: `#262936`
- Lighter Background: `#313442`
- Accent Color (Cyan): `rgb(0, 154, 214)`

## API Integration

The app integrates with WeatherAPI.com's forecast endpoint:
```javascript
http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3
```

**Data Retrieved:**
- Current temperature and conditions
- Weather icons and descriptions
- Precipitation levels
- Wind speed and direction
- 3-day forecast with min/max temperatures

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

**Note**: Geolocation requires HTTPS in production environments.

## Troubleshooting

### App not loading weather data?
- **Check your API key**: Make sure you've replaced the default key with your own valid key
- **Check console errors**: Open browser DevTools (F12) and check the Console tab for error messages
- **Verify API quota**: Free WeatherAPI accounts have usage limits. Check your dashboard
- **Check internet connection**: The app requires an active internet connection

## Credits

- Design template: Themezy
- Weather data: [WeatherAPI.com](https://www.weatherapi.com/)
- Icons: Font Awesome
- Framework: Bootstrap 5

## License

Copyright 2014 Company name. All rights reserved.

---

**Note**: This project requires an active internet connection and a valid WeatherAPI.com API key for full functionality.
