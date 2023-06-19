import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWFRb4h0MI8WTHQjfqh0G2ylWYsoMKfdw",
  authDomain: "beastprizes.firebaseapp.com",
  projectId: "beastprizes",
  storageBucket: "beastprizes.appspot.com",
  messagingSenderId: "105103089831",
  appId: "1:105103089831:web:17b62cf9f3a386f5c6fb82",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const writeDataToDocs = async (obj, collectionName) => {
  try {
    await addDoc(collection(db, collectionName), obj);
  } catch (error) {
    console.error("Error adding document: ", Error(error));
  }
};
