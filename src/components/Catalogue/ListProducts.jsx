import React, { useEffect } from "react";
import "./ProductList.css";
import products from "../../Categorie";


const ProductListWithFilters = () => {

  return (
    <div className="products_container">
      {/* Section des produits (80%) */}
      <div className="product-list">
        <h2>Nos Produits</h2>
        <div className="product-grid">
        {products.flatMap((category) =>
            category.souscategories.flatMap((subCategory) =>
              subCategory.produits.map((product, index) => (
                <div key={index} className="product-card">
                  <img src={product.images} alt={product.titre} />
                  <h3>{product.titre}</h3>
                  <p>{product.description}</p>
                </div>
              ))
            )
          )}
        </div>
      </div>

      {/* Section des filtres (20%) */}
      <div className="products_filters">
        <h2>Filtres</h2>
        <p>Affinez votre recherche ici</p>
      </div>
    </div>
  );
};

export default ProductListWithFilters;
