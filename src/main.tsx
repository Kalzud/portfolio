/**
 * Main Entry Point for the React Application
 * Author: Emmanuel O. Uduma
 * Description: Renders the App component within the root element using React StrictMode for enhanced error handling.
 * Accessibility: This entry point doesn't need specific ARIA roles but ensures overall app stability with StrictMode.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx'; // Import the main App component
import './index.css'; // Import the global styles for the app

// Ensure the 'root' element exists and render the App inside it with React StrictMode
const rootElement = document.getElementById('root'); // Get the root element where the app will be rendered

// Check if the root element is found
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode> {/* StrictMode helps identify potential problems in the app */}
      <App /> {/* The main App component */}
    </StrictMode>,
  );
} else {
  console.error("Root element not found! Make sure your index.html has a div with id 'root'.");
}
