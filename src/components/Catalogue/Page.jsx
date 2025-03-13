import React, { useState } from "react";
import "./ProductList.css";
import products from "../../Categorie";
import './Page.css'

const ProductListWithCategories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = products.map((category) => {
    return {
      ...category,
      souscategories: category.souscategories.filter((subCategory) =>
        subCategory.nom.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    };
  }).filter(category => category.souscategories.length > 0);

  return (
    <div className="products_container">
      <div className="product-list">
        <h2 className="main-title">Nos Catégories</h2>
        {filteredCategories.map((category) => (
          <div key={category.code} className="category-section">
            <h3 className="category-title">{category.nom}</h3>
            <div className="subcategory-grid">
              {category.souscategories.map((subCategory) => (
                <div key={subCategory.nom} className="subcategory-card">
                  <img src={subCategory.image} alt={subCategory.nom} className="subcategory-image" />
                  <div className="overlay">
                    <p className="view-details">Voir Détails</p>
                  </div>
                  <h4 className="subcategory-name">{subCategory.nom}</h4>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="products_filters">
        <h2 className="filter-title">Filtres</h2>
        <input
          type="text"
          placeholder="Rechercher une sous-catégorie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default ProductListWithCategories;