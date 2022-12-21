import { initializeApp } from "firebase/app";

import {getFirestore, addDoc, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-ecommerce-coder-1c951.firebaseapp.com",
  projectId: "react-ecommerce-coder-1c951",
  storageBucket: "react-ecommerce-coder-1c951.appspot.com",
  messagingSenderId: "414560139568",
  appId: "1:414560139568:web:3ed1cabf6b8d9cc75c30f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach( async (prod) => {
    await addDoc(collection(db, 'productos'), {
      productName : prod.productName,
      brand: prod.brand,
      category: prod.category,
      img: prod.img,
      stock: prod.stock,
      price: prod.price
    })
  });
}

export {cargarBDD}