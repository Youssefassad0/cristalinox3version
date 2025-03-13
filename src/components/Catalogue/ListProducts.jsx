import React from "react";
import "./ProductList.css";
const products = [
  { id: 1, title: "Chaise Moderne", img: "/products/chaises/chaise1.jpeg" },
  { id: 1, title: "Chaise Moderne", img: "/products/chaises/chaise2.jpeg" },
  { id: 1, title: "Chaise Moderne", img: "/products/chaises/chaise3.jpeg" },
  { id: 2, title: "Table en Verre", img: "/products/tables/table1.jpeg" },
  { id: 3, title: "Lampe Design", img: "/products/lampes/lampe1.jpeg" },
  { id: 4, title: "Canapé Confort", img: "/products/canapes/canape1.jpeg" },
  { id: 5, title: "Étagère Bois", img: "/products/etagere/etagere1.jpeg" },
  { id: 6, title: "Bureau Minimaliste", img: "/products/bureaux/bureau1.jpeg" },
  { id: 7, title: "Fauteuil Élégant", img: "/products/fauteuils/fauteuil1.jpeg" },
  { id: 8, title: "Lit Scandinave", img: "/products/lits/lit1.jpeg" }
];

const ProductListWithFilters = () => {
  return (
    <div className="products_container">
      {/* Section des produits (80%) */}
      <div className="product-list">
        <h2>Nos Produits</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
            </div>
          ))}
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
