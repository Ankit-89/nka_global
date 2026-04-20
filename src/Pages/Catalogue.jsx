import React, { useState, useMemo } from "react";
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

function DigitalCatalogue() {
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

  return (
    <>
      {/* FLOATING WA */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello! I'd like to enquire about your products.")}`}
        className="wa-float"
        title="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp"></i>
      </a>

      {/* NAVBAR */}
      <nav className="new-nav">
        <a className="nav-logo" href="/">
          <img
            src="/assets/images/logo/NKA-Logo-New.svg"
            alt="NKA Global Exports"
          />
        </a>
        <ul className="nav-links">
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#why-us">Why Us</a>
          </li>
          <li>
            <a href="#inquiry">Contact</a>
          </li>
          <li>
            <a href="#inquiry" className="nav-cta">
              Book Appointment
            </a>
          </li>
        </ul>
      </nav>

      {/* PRODUCTS */}

      <section className="products-section" id="products">
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
                className="product-card"
                data-category={product.categoryName.toLowerCase()}
                key={index}
              >
                <div className="product-img-wrap">
                  <span className="product-badge badge-rare">
                    {`HS Code: ${product.hsCode}`}
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&fit=crop"
                    alt={product.productName}
                  />
                  <div className="product-hover-overlay">
                    <div className="product-hover-content">
                      <div className="product-specs-mini">
                        <span className="spec-chip">
                          {product.specifications[0]}
                        </span>
                        <span className="spec-chip">
                          {product.specifications[1]}
                        </span>
                        <span className="spec-chip">
                          {product.specifications[2]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-body">
                  <div className="product-specs-v1">
                    <div className="product-category-tag">
                      {product.categoryName}
                    </div>
                    <h3 className="product-name">{product.productName}</h3>
                    <div className="product-origin">Origin: India</div>
                    <p className="product-desc">{product.shortDescription}</p>

                    <div>
                      <span className="product-section-title">
                        Specification
                      </span>
                      <div className="product-specs">
                        <span className="product-spec">
                          {product.specifications[0]}
                        </span>
                        <span className="product-spec">
                          {product.specifications[1]}
                        </span>
                        <span className="product-spec">
                          {product.specifications[2]}
                        </span>
                      </div>
                      <span className="product-section-title">
                        Packaging Options
                      </span>
                      <div className="product-specs">
                        <span className="product-spec">
                          {product.packagingOption[0]}
                        </span>
                        <span className="product-spec">
                          {product.packagingOption[1]}
                        </span>
                        <span className="product-spec">
                          {product.packagingOption[2]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ✅ WHATSAPP-INTEGRATED ACTIONS */}
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
                    <button
                      className="btn-wa-mini"
                      onClick={() => openWhatsAppEnquiry(product)}
                      title={`WhatsApp enquiry for ${product.productName}`}
                    >
                      <i className="fa fa-whatsapp"></i>
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
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={currentPage === i + 1 ? "active" : ""}
                >
                  {i + 1}
                </button>
              ))}
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

      <footer>
        <div className="footer-logo">
          <img
            src="/assets/images/logo/white-logo.png"
            alt="NKA Global Exports"
          />
        </div>
        <p>© 2025 NKA Global Exports. All rights reserved.</p>
        <div className="footer-links">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#inquiry">Contact</a>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    </>
  );
}

export default DigitalCatalogue;
