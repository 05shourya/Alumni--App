// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCQmeKWeSP7l_RMN9CQC4NSSvSmsQS3A3E",
	authDomain: "alumni-connect-bc85c.firebaseapp.com",
	projectId: "alumni-connect-bc85c",
	storageBucket: "alumni-connect-bc85c.firebasestorage.com",
	messagingSenderId: "208235872874",
	appId: "1:208235872874:web:ef2e64a773198796d68013",
	measurementId: "G-8BELKDWP1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const db = getFirestore()
const storage = getStorage()

export { analytics, auth, db, storage }