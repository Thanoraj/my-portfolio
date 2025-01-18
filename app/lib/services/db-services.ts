"use server";

import { collection, getDocs, getFirestore } from "firebase/firestore";

import app from "../configs/init-db";

console.log(app);

const db = getFirestore();

export const getMyInfo = async (): Promise<
  Record<string, Record<string, unknown>>
> => {
  const sections: Record<string, Record<string, unknown>> = {};
  const querySnapshot = await getDocs(collection(db, "my-info"));
  querySnapshot.forEach((doc) => {
    sections[`${doc.id}`] = doc.data();
  });

  console.log(sections);

  return sections;
};
