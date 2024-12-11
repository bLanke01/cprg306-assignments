import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Get items for a user
export const getItems = async (userId) => {
  const items = [];
  const q = query(collection(db, `users/${userId}/items`));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
};

// Add an item for a user
export const addItem = async (userId, item) => {
  const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
  return docRef.id;
};
