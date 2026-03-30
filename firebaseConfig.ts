import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { EXPERIENCE, MEDIA_COVERAGES, PERSONAL_INFO, PROJECTS } from "./data";

const firebaseConfig = {
  apiKey: "AIzaSyDlqeowiscIlo4qqYfRyQKxjl48pKTJ_eM",
  authDomain: "portfolioyy2026.firebaseapp.com",
  projectId: "portfolioyy2026",
  storageBucket: "portfolioyy2026.firebasestorage.app",
  messagingSenderId: "959428929197",
  appId: "1:959428929197:web:f219f6def6cd310ce4c824",
  measurementId: "G-GKES70KN6P"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Helper function to seed the database if it's empty
export const seedDatabaseIfEmpty = async () => {
  const docRef = doc(db, "portfolio", "main");
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.log("Seeding database with initial data from data.ts...");
    await setDoc(docRef, {
      personalInfo: PERSONAL_INFO,
      experience: EXPERIENCE,
      mediaCoverages: MEDIA_COVERAGES,
      projects: PROJECTS
    });
    console.log("Database seeded successfully!");
  }
};
