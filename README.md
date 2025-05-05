# Dictionary App

A simple React Native dictionary app that allows users to look up definitions of words. This app uses the Free Dictionary API to fetch definitions.

## Features

- Search for word definitions
- View detailed meaning, examples, and phonetics
- Highlighted synonyms for better visual identification
- Loading indicators during API calls
- Friendly error handling for not found terms or network issues

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dictionary-app.git
   cd dictionary-app
   

2. Install dependencies:
   ```bash
   npm install
   

3. Start the development server:
   ```bash
   npm start
   

4. Follow the instructions in the terminal to open the app:
   - For iOS: Press `i` in the terminal or use the QR code with the Expo Go app
   - For Android: Press `a` in the terminal or use the QR code with the Expo Go app
   - For web: Press `w` in the terminal

### Running Tests

```bash
npm test

## Development Time and Next Steps

### Time Spent
I spent approximately 5 hours on this project:
- 1 hour on initial setup and project planning
- 2 hours implementing the core functionality
- 1 hour on styling and UI improvements
- 1 hour on testing and documentation

### Next Steps
With more time, I would:

1. **Enhance UI/UX**:
   - Add animations for transitions between loading, results, and errors
   - Implement a dark mode theme
   - Add pronunciation audio playback

2. **Expand Features**:
   - Add history of recent searches
   - Implement offline caching for previously searched terms
   - Add word of the day feature

3. **Improve Testing**:
   - Increase test coverage for edge cases
   - Add integration tests
   - Implement E2E testing with Detox

4. **Performance Optimization**:
   - Implement memoization for frequent API calls
   - Optimize component re-rendering

## Tech Stack

- React Native with Expo
- Free Dictionary API (https://api.dictionaryapi.dev/)
- Jest for testing
