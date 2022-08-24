import { collection, getDocs } from "firebase/firestore";
import { db } from ".";

export const getData = async (collectionName) => {
  let data = [];
  const snapshot = await getDocs(collection(db, collectionName));
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};