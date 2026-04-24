import React, { useState, useRef, useMemo } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import productsList from "../Data/productsListV2.json";

const WA_NUMBER = "919211993105"; // ← your business WhatsApp number

function buildWAMessage(product) {
  return encodeURIComponent(
    `Hello! I'm interested in the following product:\n\n` +
      `*Product:* ${product.productName}\n` +
      `*Category:* ${product.categoryName}\n` +
      `*HS Code:* ${product.hsCode}\n` +
      `\n\nPlease share pricing and availability. Thank you!`,
  );
}

function openWhatsAppEnquiry(product) {
  const msg = buildWAMessage(product);
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
}

function ProductListingPage() {
  const PRODUCTS_PER_PAGE = 12;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    return productsList.filter((product) => {
      const categoryMatch =
        selectedCategory === "all" ||
        product.categoryName.toLowerCase().trim() === selectedCategory;
      const searchMatch =
        product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  const filterProducts = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const getPagination = () => {
    const pages = [];

    const isMobile = window.innerWidth < 600;
    const maxVisible = isMobile ? 3 : 5;

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    // Always show first page
    if (start > 1) {
      pages.push(
        <button key={1} onClick={() => setCurrentPage(1)}>
          1
        </button>,
      );
      if (start > 2) pages.push(<span key="start-ellipsis">...</span>);
    }

    // Middle pages
    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>,
      );
    }

    // Always show last page
    if (end < totalPages) {
      if (end < totalPages - 1) pages.push(<span key="end-ellipsis">...</span>);

      pages.push(
        <button key={totalPages} onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div>
      {/* Header */}
      <Pagehelmet pageTitle="Product Lists" />
      <Breadcrumb title="Product Lists" />

       <section className="catalogue-section" id="products">
        <div className="product-main">
          <div className="section-header">
            <div className="section-label">Our Catalogue</div>
            <h2 className="section-title-new">
              Premium <em>Products</em>
            </h2>
            <p className="section-subtitle-new">
              Handpicked from the world's finest growing regions — each product
              carries a certificate of origin and quality assurance.
            </p>
          </div>

          <div className="category-tabs">
            {[
              { key: "all", label: "🌍 All Products" },
              { key: "rice", label: "🍚 Rice" },
              { key: "spices", label: "✨ Spices" },
              { key: "dehydrated-vegetables", label: "🥕 Dehydrated Veggies" },
              { key: "vegetables", label: "🥦 Vegetables" },
              { key: "fruits", label: "🥭 Fruits" },
              { key: "coffee", label: "☕ Coffee" },
              { key: "tea", label: "🍵 Tea" },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`cat-tab ${selectedCategory === key ? "active" : ""}`}
                onClick={() => filterProducts(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="product-toolbar">
            <div className="result-count">
              Showing {filteredProducts.length} results
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search products..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="products-grid" id="productsGrid">
            {currentProducts.map((product, index) => (
              <div
                className="product-card horizontal"
                data-category={product.categoryName.toLowerCase()}
                key={index}
              >
                {/* LEFT SIDE IMAGE */}
                <div className="product-img-wrap">
                  <span className="product-badge badge-rare">
                    {`HS Code: ${product.hsCode}`}
                  </span>
                  <img src={product.imageUrl} alt={product.productName} />
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="product-body">
                  <div className="product-category-tag">
                    {product.categoryName}
                  </div>

                  <h3 className="product-name">{product.productName}</h3>
                  <div className="product-origin">Origin: India</div>

                  {/* <p className="product-desc">{product.shortDescription}</p> */}

                  <span className="product-section-title">Specification</span>
                  <div className="product-specs">
                    {product.specifications.slice(0, 3).map((spec, i) => (
                      <span key={i} className="product-spec">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <span className="product-section-title">
                    Packaging Options
                  </span>
                  <div className="product-specs">
                    {product.packagingOption.slice(0, 3).map((pack, i) => (
                      <span key={i} className="product-spec">
                        {pack}
                      </span>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="product-actions">
                    <button
                      className="btn-enquiry"
                      onClick={() => openWhatsAppEnquiry(product)}
                    >
                      <i
                        className="fa fa-whatsapp"
                        style={{ marginRight: 6 }}
                      ></i>
                      Send Enquiry
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No products found</h3>
              <p>
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="pagination">
              <button
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {getPagination()}
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductListingPage;
