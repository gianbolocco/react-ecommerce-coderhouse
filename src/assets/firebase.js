import { initializeApp } from "firebase/app";

import {getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore'

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
  const products = await promise.json()
  products.forEach( async (prod) => {
    await addDoc(collection(db, 'products'), {
      productName : prod.productName,
      brand: prod.brand,
      category: prod.category,
      img: prod.img,
      stock: prod.stock,
      price: prod.price
    })
  });
}

const getProducts = async() => {
  const products = await getDocs(collection(db, "products"))
  const items = products.docs.map(prod => {
      return {...prod.data(), id: prod.id}
  })
  return items
}

const getProduct =  async (id) => {
  const product = await getDoc(doc(db, "products", id))
  const item = {...product.data(), id: product.id}
  return item
}

const updateProduct = async (id, info) => {
  const estado = await updateDoc(doc(db,"products", id), info)
  return estado
}

const deleteProduct = async(id) =>{
  const estado = await deleteDoc(doc(db, "products", id))
  return estado
}

//CREATE Y READ ORDENES COMPRA

const createPurchaseOrder = async (client, preTotal, date ) => {
  const purchaseOrder = await addDoc(collection(db, "purchaseOrder"),{
      name: client.name,
      email: client.email,
      dni: client.dni,
      address: client.address,
      phoneNumber: client.phoneNumber,
      date: date,
      precioTotal: preTotal,
  })

  return purchaseOrder
}


const getPurchaseOrder =  async (id) => {
  const ordenCompra = await getDoc(doc(db, "purchaseOrder", id))
  const item = {...ordenCompra.data(), id: ordenCompra.id}
  return item
}

export {cargarBDD, getProducts, getProduct, updateProduct, getPurchaseOrder, createPurchaseOrder, deleteProduct}