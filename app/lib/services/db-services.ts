"use server";

import { collection, getDocs, getFirestore } from "firebase/firestore";

import { getFirebaseApp } from "../configs/init-db";

const app = getFirebaseApp();
console.log(app);

const db = app ? getFirestore(app) : null;

export const getMyInfo = async () => {
  if (!db) {
    console.error("Firebase not initialized");
    return [];
  }
  
  try {
    const querySnapshot = await getDocs(collection(db, "my-info"));
    const documents: unknown[] = [];

    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, data: doc.data() });
    });

    return documents;
  } catch (error) {
    console.error("Error fetching documents:", error);
    return [];
  }
};
