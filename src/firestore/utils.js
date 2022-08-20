import { collection, getDocs } from "firebase/firestore";
import { db } from ".";

export const getAbout = async () => {
  let aboutData = [];
  const snapshot = await getDocs(collection(db, "about"));
  snapshot.forEach((doc) => {
    aboutData.push({ id: doc.id, ...doc.data() });
  });
  return aboutData;
};