import React, { useEffect, useState } from "react";
import "./ProductList.css";
import products from "../../Categorie";
import { useParams } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ProductListWithFilters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const { code } = useParams();

  useEffect(() => {
    let result = products.flatMap((category) =>
      category.souscategories.flatMap((subCategory) =>
        subCategory.produits.filter((product) =>
          product.titre.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );

    if (code) {
      result = result.filter((product) => product.code === code);
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset page on filter change
  }, [searchTerm, code]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="products_container">
      <div className="product-list">
        <h2>Nos Produits</h2>
        <div className="product-grid">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.images} alt={product.titre} />
                <h3>{product.titre}</h3>
              </div>
            ))
          ) : (
            <p>Aucun produit trouvé.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="page-btn"
            >
              <FaArrowAltCircleLeft />
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={
                  currentPage === index + 1 ? "active page-btn" : "page-btn"
                }
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="page-btn"
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        )}
      </div>

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
    </div>
  );
};

export default ProductListWithFilters;
