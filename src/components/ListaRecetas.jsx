import React from "react";
import RecetaCard from "./RecetaCard";

const ListaRecetas = ({ recetas }) => {
  return (
    <div className="lista-recetas">
      {recetas.map((receta) => (
        <RecetaCard key={receta.id} receta={receta} />
      ))}
    </div>
  );
};

export default ListaRecetas;
