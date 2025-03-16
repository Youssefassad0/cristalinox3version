import React, { useState } from "react";
import "./ProductList.css";
import products from "../../Categorie";

const ProductListWithFilters = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les produits en fonction du titre
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products_container">
      {/* Section des filtres (20%) */}
      <div className="products_filters">
        <h2>Filtres</h2>
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Section des produits (80%) */}
      <div className="product-list">
        <h2>Nos Produits</h2>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListWithFilters;
