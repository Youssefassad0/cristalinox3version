import React, { useEffect, useState } from "react";
import "./ProductList.css";
import products from "../../Categorie";
import { useParams } from "react-router-dom";

const ProductListWithFilters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { code } = useParams();

  useEffect(() => {
    let result = products.flatMap((category) =>
      category.souscategories.flatMap((subCategory) =>
        subCategory.produits.filter((product) =>
          product.titre.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );

    // Affichage de la valeur du code
    console.log("Code dans l'URL:", code);

    // Filtrer par code si disponible
    if (code) {
      result = result.filter((product) => product.code === code);
      console.log("Produits filtrés par code:", result);
    }

    // Mettre à jour l'état des produits filtrés
    setFilteredProducts(result);
  }, [searchTerm, code]);

  return (
    <div className="products_container">
      {/* Section des produits */}
      <div className="product-list">
        <h2>Nos Produits</h2>
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.images} alt={product.titre} />
                <h3>{product.titre}</h3>
                {/* <p>{product.description}</p> */}
              </div>
            ))
          ) : (
            <p>Aucun produit trouvé pour ce code.</p>
          )}
        </div>
      </div>

      {/* Section des filtres */}
      <div className="products_filters">
        <h2>Filtres</h2>
        <p>Affinez votre recherche ici</p>
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default ProductListWithFilters;
