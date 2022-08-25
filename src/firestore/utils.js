import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from ".";

export const getData = async (collectionName) => {
  let data = [];
  const snapshot = await getDocs(collection(db, collectionName));
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

export const deleteWork = async (workId) => {
  await deleteDoc(doc(db, "works", workId));
};
