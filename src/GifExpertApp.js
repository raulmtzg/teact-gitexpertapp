import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  // const handleAdd = () => {
  //Operador spread agrega elementos al arreglo al final o al inicio
  //   setCategories([...categories, "HunterXHunter"]);
  // };

  return (
    <>
      <h2>Buscador GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {/* El map funcion como un ciclo, se puede utilizar para recorrer arreglos
            recibe dos argumentos por default: 1 el elemento del arreglo y 2. el indice
           */}
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
