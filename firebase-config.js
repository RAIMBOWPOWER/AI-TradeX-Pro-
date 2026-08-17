// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmcTYw6C3nbD0IhTECrTADKompEw37Aho",
  authDomain: "jod-mods-admin-panel.firebaseapp.com",
  databaseURL: "https://jod-mods-admin-panel-default-rtdb.firebaseio.com",
  projectId: "jod-mods-admin-panel",
  storageBucket: "jod-mods-admin-panel.firebasestorage.app",
  messagingSenderId: "683303332956",
  appId: "1:683303332956:web:4970cdc335924600cdca99",
  measurementId: "G-2BMR5ZPYHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };