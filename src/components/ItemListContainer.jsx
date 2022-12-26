import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useDarkModeContext } from "../context/DarkModeContext";
import { getProducts } from "../assets/firebase";

// Define la cantidad de elementos por página
const ITEMS_PER_PAGE = 8;

const ItemListContainer = () => {
  // Inicializa el estado para almacenar los elementos a mostrar y el número de página actual
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { darkMode } = useDarkModeContext();
  const { brand, category } = useParams();

  useEffect(() => {
    getProducts().then(products => {
      let productsList = products.filter(prod => prod.stock > 0);
      if (brand) {
        productsList = productsList.filter(prod => prod.brand === brand);
      }
      if (category) {
        productsList = productsList.filter(prod => prod.category === category);
      }
      // Calcula el número total de páginas
      const total = Math.ceil(productsList.length / ITEMS_PER_PAGE);
      setTotalPages(total);
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const currentPageItems = productsList.slice(startIndex, endIndex);
      const cardProducts = ItemList({ productsList: currentPageItems });
      setProducts(cardProducts);
    });
  }, [brand, category, currentPage]);

  // Función para ir a una página determinada
  const goToPage = pageNumber => {
    setCurrentPage(pageNumber);
  };

    // Crea un array con todos los números de página
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={`pt-32 duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <h1 className="pb-10 font-extrabold text-5xl text-center">
        Productos:{" "}
        <span className="font-light">{category}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 lg:px-20">
        {products}
      </div>
      {/* Mostrar botones de "siguiente" y "anterior" */}
      <div className="text-center pt-10">
        {currentPage > 1 && (
          <button className={`text-2xl font-bold mx-2 p-5 rounded-md duration-300 hover:bg-indigo-500 hover:text-white ${darkMode ? "bg-gray-900" : "bg-gray-100"} `} onClick={() => goToPage(currentPage - 1)}>Anterior</button>
        )}
        {currentPage < totalPages && (
          <button className={`text-2xl font-bold mx-2 p-5 rounded-md duration-300 hover:bg-indigo-500 hover:text-white ${darkMode ? "bg-gray-900" : "bg-gray-100"} `} onClick={() => goToPage(currentPage + 1)}>Siguiente</button>
        )}
      </div>
      {/* Mostrar índice de páginas */}
      <div className="py-5 text-center duration-300">
        <p className="font-black text-2xl" >Indice: {currentPage}</p>
        {pages.map(page => (
          <button onClick={() => goToPage(page)} className="text-xl font-bold p-3 m-3 rounded-full duration-300 hover:bg-indigo-500 hover:text-white" key={page}>{page}</button>))}
      </div>
    </div>
    )
}

export default ItemListContainer;

// Pagination creado con ayuda de GPT-3