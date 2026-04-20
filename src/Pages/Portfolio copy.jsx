import React, { useState, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Mail,
  Star,
  ShoppingCart,
  MapPin,
} from "lucide-react";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import productsList from "../Data/productsListV2.json";

function PortfolioPage() {
  const PRODUCTS_PER_PAGE = 6;

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

  const filterProducts = (category, btn) => {
    setSelectedCategory(category);
    setCurrentPage(1); // reset pagination
  };

  function submitForm(btn) {
    const textEl = document.getElementById("submitText");
    textEl.textContent = "⏳ Sending...";
    btn.disabled = true;
    setTimeout(() => {
      textEl.textContent = "✅ Enquiry Sent! We'll respond within 24 hours.";
      btn.style.background = "#2D7A3A";
    }, 1500);
  }

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    nav.style.boxShadow =
      window.scrollY > 40 ? "0 4px 30px rgba(43,75,182,0.1)" : "none";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  // document
  //   .querySelectorAll(".product-card, .why-card, .highlight-item")
  //   .forEach((el) => {
  //     el.style.opacity = "0";
  //     el.style.transform = "translateY(24px)";
  //     el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  //     observer.observe(el);
  //   });
  return (
    <>
      {/*-- FLOATING WA--*/}
      <a
        href="https://wa.me/919876543210?text=Hello!%20I'm%20interested%20in%20your%20products."
        className="wa-float"
        title="Chat on WhatsApp"
      >
        <i className="fa fa-whatsapp"></i>
      </a>

      {/*--NAVBAR--*/}
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

      {/*--HERO--*/}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">
            NKA Global Exports — Premium Agricultural Trade
          </div>
          <h1 className="hero-title">
            From Earth's
            <br />
            <em>Finest Origins</em>
            <br />
            To Your Table
          </h1>
          <p className="hero-tagline">Trade Smarter, Trade Bigger</p>
          <p className="hero-desc">
            Curating the world's most exceptional rice varieties, artisan
            spices, premium coffees, estate teas, and fresh seasonal produce —
            sourced responsibly, delivered with integrity.
          </p>
          <div className="hero-actions">
            <a href="#inquiry" className="btn-primary">
              <i className="fa fa-calendar"></i> Book Appointment
            </a>
            <a href="https://wa.me/919876543210" className="btn-whatsapp">
              <i className="fa fa-whatsapp"></i> WhatsApp Us
            </a>
            <a href="#products" className="btn-outline">
              View Catalogue
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">18+</span>
              <div className="stat-label">
                Years of
                <br />
                Export Excellence
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-num">42</span>
              <div className="stat-label">
                Countries
                <br />
                Served Globally
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-num">300+</span>
              <div className="stat-label">
                Premium
                <br />
                Products
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-num">99%</span>
              <div className="stat-label">
                Client
                <br />
                Retention
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-grid">
            <div className="hero-grid-item">
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&fit=crop"
                alt="Basmati Rice"
              />
              <div className="hero-tag">Basmati Rice</div>
            </div>
            <div className="hero-grid-item">
              <img
                src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&fit=crop"
                alt="Spices"
              />
              <div className="hero-tag">Exotic Spices</div>
            </div>
            <div className="hero-grid-item">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&fit=crop"
                alt="Coffee"
              />
              <div className="hero-tag">Specialty Coffee</div>
            </div>
            <div className="hero-grid-item">
              <img
                src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&fit=crop"
                alt="Tea"
              />
              <div className="hero-tag">Estate Tea</div>
            </div>
          </div>
        </div>
      </section>

      {/*--PRODUCTS--*/}
      <section className="products-section" id="products">
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
          <button
            className={`cat-tab ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => filterProducts("all")}
          >
            🌍 All Products
          </button>

          <button
            className={`cat-tab ${selectedCategory === "rice" ? "active" : ""}`}
            onClick={() => filterProducts("rice")}
          >
            🍚 Rice
          </button>

          <button
            className={`cat-tab ${selectedCategory === "spices" ? "active" : ""}`}
            onClick={() => filterProducts("spices")}
          >
            ✨ Spices
          </button>

          <button
            className={`cat-tab ${selectedCategory === "coffee" ? "active" : ""}`}
            onClick={() => filterProducts("coffee")}
          >
            ☕ Coffee
          </button>

          <button
            className={`cat-tab ${selectedCategory === "tea" ? "active" : ""}`}
            onClick={() => filterProducts("tea")}
          >
            🍵 Tea
          </button>

          <button
            className={`cat-tab ${selectedCategory === "fruits" ? "active" : ""}`}
            onClick={() => filterProducts("fruits")}
          >
            🥭 Fruits
          </button>

          <button
            className={`cat-tab ${selectedCategory === "vegetables" ? "active" : ""}`}
            onClick={() => filterProducts("vegetables")}
          >
            🥦 Vegetables
          </button>
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
              onChange={(e) => setSearchQuery(e.target.value)}
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
                <span className={`product-badge badge-rare`}>
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
                <div className="product-category-tag">
                  {product.categoryName}
                </div>
                <h3 className="product-name">{product.productName}</h3>
                <div className="product-origin">Origin: India</div>
                <p className="product-desc">{product.shortDescription}</p>
                <div className="product-specs-v1">
                  <div>
                    <span className="product-section-title">Specification</span>
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
                  </div>
                  <div>
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
                <div className="product-actions">
                  <a href="#inquiry" className="btn-enquiry">
                    ✉ Send Enquiry
                  </a>
                  <a href="https://wa.me/919876543210" className="btn-wa-mini">
                    <i className="fa fa-whatsapp"></i>
                  </a>
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
        {/* <div className="product-card" data-category="rice">
            <div className="product-img-wrap">
              <span className="product-badge badge-premium">Best Seller</span>
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&fit=crop"
                alt="Basmati Rice"
              />
              <div className="product-hover-overlay">
                <div className="product-hover-content">
                  <div className="product-specs-mini">
                    <span className="spec-chip">Aged 2 Yrs</span>
                    <span className="spec-chip">Non-GMO</span>
                    <span className="spec-chip">Export Grade</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-body">
              <div className="product-category-tag">Rice</div>
              <h3 className="product-name">Premium Basmati Rice</h3>
              <div className="product-origin">Punjab, India</div>
              <p className="product-desc">
                Long-grain aromatic basmati aged 2 years. Superior flavor and
                perfect fluffy texture. FSSAI and ISO certified export quality.
              </p>
              <div className="product-specs">
                <span className="product-spec">2-Year Aged</span>
                <span className="product-spec">Non-GMO</span>
                <span className="product-spec">1121 Variety</span>
              </div>
              <div className="product-actions">
                <a href="#inquiry" className="btn-enquiry">
                  ✉ Send Enquiry
                </a>
                <a
                  href="https://wa.me/919876543210?text=Interested in Premium Basmati Rice"
                  className="btn-wa-mini"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
          <div className="product-card" data-category="spices">
            <div className="product-img-wrap">
              <span className="product-badge badge-organic">Organic</span>
              <img
                src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=700&fit=crop"
                alt="Turmeric"
              />
              <div className="product-hover-overlay">
                <div className="product-hover-content">
                  <div className="product-specs-mini">
                    <span className="spec-chip">8–10% Curcumin</span>
                    <span className="spec-chip">Pesticide Free</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-body">
              <div className="product-category-tag">Spices</div>
              <h3 className="product-name">Golden Turmeric Powder</h3>
              <div className="product-origin">Nizamabad, India</div>
              <p className="product-desc">
                Sun-dried turmeric with 8–10% curcumin content. Pure, free of
                additives. High medicinal grade, FSSAI certified.
              </p>
              <div className="product-specs">
                <span className="product-spec">High Curcumin</span>
                <span className="product-spec">Organic</span>
                <span className="product-spec">Fresh Ground</span>
              </div>
              <div className="product-actions">
                <a href="#inquiry" className="btn-enquiry">
                  ✉ Send Enquiry
                </a>
                <a
                  href="https://wa.me/919876543210?text=Interested in Golden Turmeric Powder"
                  className="btn-wa-mini"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
          <div className="product-card" data-category="coffee">
            <div className="product-img-wrap">
              <span className="product-badge badge-rare">Single Origin</span>
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&fit=crop"
                alt="Arabica Coffee"
              />
              <div className="product-hover-overlay">
                <div className="product-hover-content">
                  <div className="product-specs-mini">
                    <span className="spec-chip">Grade AA</span>
                    <span className="spec-chip">Washed Process</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-body">
              <div className="product-category-tag">Coffee</div>
              <h3 className="product-name">Arabica Green Beans</h3>
              <div className="product-origin">Coorg, Karnataka</div>
              <p className="product-desc">
                Single-origin Arabica from Coorg's misty highlands. Tasting
                notes of dark chocolate and citrus. Grade AA specialty.
              </p>
              <div className="product-specs">
                <span className="product-spec">Grade AA</span>
                <span className="product-spec">Shade Grown</span>
                <span className="product-spec">Washed</span>
              </div>
              <div className="product-actions">
                <a href="#inquiry" className="btn-enquiry">
                  ✉ Send Enquiry
                </a>
                <a
                  href="https://wa.me/919876543210?text=Interested in Arabica Green Beans"
                  className="btn-wa-mini"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
          <div className="product-card" data-category="tea">
            <div className="product-img-wrap">
              <span className="product-badge badge-export">First Flush</span>
              <img
                src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=700&fit=crop"
                alt="Darjeeling Tea"
              />
              <div className="product-hover-overlay">
                <div className="product-hover-content">
                  <div className="product-specs-mini">
                    <span className="spec-chip">FTGFOP1</span>
                    <span className="spec-chip">GI Tagged</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-body">
              <div className="product-category-tag">Tea</div>
              <h3 className="product-name">Darjeeling First Flush</h3>
              <div className="product-origin">Darjeeling, West Bengal</div>
              <p className="product-desc">
                FTGFOP1 grade first flush leaves harvested March–April. Floral
                muscatel character, golden cup with complex finish.
              </p>
              <div className="product-specs">
                <span className="product-spec">FTGFOP1</span>
                <span className="product-spec">GI Tagged</span>
                <span className="product-spec">Estate Direct</span>
              </div>
              <div className="product-actions">
                <a href="#inquiry" className="btn-enquiry">
                  ✉ Send Enquiry
                </a>
                <a
                  href="https://wa.me/919876543210?text=Interested in Darjeeling First Flush Tea"
                  className="btn-wa-mini"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
          <div className="product-card" data-category="fruits">
            <div className="product-img-wrap">
              <span className="product-badge badge-fresh">Season Pick</span>
              <img
                src="https://images.unsplash.com/photo-1605027990121-cbae9e0642df?w=700&fit=crop"
                alt="Alphonso Mango"
              />
              <div className="product-hover-overlay">
                <div className="product-hover-content">
                  <div className="product-specs-mini">
                    <span className="spec-chip">GI Certified</span>
                    <span className="spec-chip">No Chemicals</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-body">
              <div className="product-category-tag">Fruits</div>
              <h3 className="product-name">Alphonso Mangoes</h3>
              <div className="product-origin">Ratnagiri, Maharashtra</div>
              <p className="product-desc">
                GI-certified Alphonso — king of fruits. Naturally ripened,
                saffron-hued flesh, honey-sweet aroma. Premium export packaging.
              </p>
              <div className="product-specs">
                <span className="product-spec">GI Certified</span>
                <span className="product-spec">Chemical Free</span>
                <span className="product-spec">Premium Pack</span>
              </div>
              <div className="product-actions">
                <a href="#inquiry" className="btn-enquiry">
                  ✉ Send Enquiry
                </a>
                <a
                  href="https://wa.me/919876543210?text=Interested in Alphonso Mangoes"
                  className="btn-wa-mini"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
          <div className="product-card" data-category="vegetables">
            <div className="product-img-wrap">
              <span className="product-badge badge-organic">Organic</span>
              <img
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&fit=crop"
                alt="Baby Vegetables"
              />
              <div className="product-hover-overlay">
                <div className="product-hover-content">
                  <div className="product-specs-mini">
                    <span className="spec-chip">Cold Chain</span>
                    <span className="spec-chip">GAP Certified</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-body">
              <div className="product-category-tag">Vegetables</div>
              <h3 className="product-name">Baby Vegetables Mix</h3>
              <div className="product-origin">Nashik, Maharashtra</div>
              <p className="product-desc">
                Premium baby vegetables — carrot, zucchini, beet, leek — GAP
                certified, cold-chain preserved, 48-hour farm to airfreight.
              </p>
              <div className="product-specs">
                <span className="product-spec">GAP Certified</span>
                <span className="product-spec">Cold Chain</span>
                <span className="product-spec">Air Freight</span>
              </div>
              <div className="product-actions">
                <a href="#inquiry" className="btn-enquiry">
                  ✉ Send Enquiry
                </a>
                <a
                  href="https://wa.me/919876543210?text=Interested in Baby Vegetables"
                  className="btn-wa-mini"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
          <div className="product-card" data-category="spices">
            <div className="product-img-wrap">
              <span className="product-badge badge-rare">Rare</span>
              <img
                src="https://images.unsplash.com/photo-1596040299844-d0bb3cf97482?w=700&fit=crop"
                alt="Cumin"
              />
              <div className="product-hover-overlay">
                <div className="product-hover-content">
                  <div className="product-specs-mini">
                    <span className="spec-chip">Hand Roasted</span>
                    <span className="spec-chip">High Oil</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-body">
              <div className="product-category-tag">Spices</div>
              <h3 className="product-name">Premium Cumin Seeds</h3>
              <div className="product-origin">Rajasthan, India</div>
              <p className="product-desc">
                Hand-roasted cumin with high volatile oil content. Intense
                earthy aroma for superior tempering and spice blends.
              </p>
              <div className="product-specs">
                <span className="product-spec">Hand Roasted</span>
                <span className="product-spec">High Oil</span>
                <span className="product-spec">Rajasthan</span>
              </div>
              <div className="product-actions">
                <a href="#inquiry" className="btn-enquiry">
                  ✉ Send Enquiry
                </a>
                <a
                  href="https://wa.me/919876543210?text=Interested in Premium Cumin Seeds"
                  className="btn-wa-mini"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
          <div className="product-card" data-category="coffee">
            <div className="product-img-wrap">
              <span className="product-badge badge-premium">Premium</span>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=700&fit=crop"
                alt="Robusta Coffee"
              />
              <div className="product-hover-overlay">
                <div className="product-hover-content">
                  <div className="product-specs-mini">
                    <span className="spec-chip">Bold Roast</span>
                    <span className="spec-chip">Natural Process</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-body">
              <div className="product-category-tag">Coffee</div>
              <h3 className="product-name">Robusta Bold Blend</h3>
              <div className="product-origin">Chikmagalur, Karnataka</div>
              <p className="product-desc">
                Full-bodied Robusta with deep earthy notes and thick crema.
                Perfect for espresso blends. Naturally processed at altitude.
              </p>
              <div className="product-specs">
                <span className="product-spec">Bold Body</span>
                <span className="product-spec">Natural Process</span>
                <span className="product-spec">High Altitude</span>
              </div>
              <div className="product-actions">
                <a href="#inquiry" className="btn-enquiry">
                  ✉ Send Enquiry
                </a>
                <a
                  href="https://wa.me/919876543210?text=Interested in Robusta Bold Blend"
                  className="btn-wa-mini"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
          <div className="product-card" data-category="tea">
            <div className="product-img-wrap">
              <span className="product-badge badge-organic">Orthodox</span>
              <img
                src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700&fit=crop"
                alt="Assam Tea"
              />
              <div className="product-hover-overlay">
                <div className="product-hover-content">
                  <div className="product-specs-mini">
                    <span className="spec-chip">BOPF Grade</span>
                    <span className="spec-chip">Malty Brisk</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-body">
              <div className="product-category-tag">Tea</div>
              <h3 className="product-name">Assam Orthodox CTC</h3>
              <div className="product-origin">Jorhat, Assam</div>
              <p className="product-desc">
                BOPF grade Assam CTC with strong malty briskness. Rich amber
                liquor, robust and bold. Ideal for milk tea and tea bags.
              </p>
              <div className="product-specs">
                <span className="product-spec">BOPF Grade</span>
                <span className="product-spec">Malty</span>
                <span className="product-spec">Bulk Export</span>
              </div>
              <div className="product-actions">
                <a href="#inquiry" className="btn-enquiry">
                  ✉ Send Enquiry
                </a>
                <a
                  href="https://wa.me/919876543210?text=Interested in Assam Orthodox CTC Tea"
                  className="btn-wa-mini"
                >
                  💬
                </a>
              </div>
            </div>
          </div> */}
      </section>

      {/*--ABOUT / PROFILE--*/}
      <section className="about-section" id="about">
        <div className="about-left">
          <div className="about-label">Our Story</div>
          <h2 className="about-title">
            Rooted in <em>Heritage,</em>
            <br />
            Driven by <em>Quality</em>
          </h2>
          <p className="about-text">
            NKA Global Exports was built with a singular vision: to bring the
            world's most authentic agricultural produce to global markets
            without compromise. We partner directly with farmers, cooperatives,
            and estates — eliminating middlemen to ensure both superior quality
            and fair farm-gate pricing.
          </p>
          <p className="about-text">
            From the aromatic rice fields of Punjab to the spice gardens of
            Kerala, from Coorg's coffee estates to Darjeeling's high-altitude
            tea gardens — every product in our catalogue has been personally
            vetted, tasted, and certified by our quality team.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-num">ISO</span>
              <div className="highlight-text">
                9001:2015 Certified Quality Management System
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-num">APEDA</span>
              <div className="highlight-text">
                Registered Agricultural Exporter with Govt. of India
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-num">FSSAI</span>
              <div className="highlight-text">
                Licensed Food Safety & Standards Authority
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-num">USDA</span>
              <div className="highlight-text">
                Organic Certified for Select Product Lines
              </div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="profile-frame">
            <img
              src="/assets/images/profile/profile.jpeg"
              alt="Founder — NKA Global Exports"
              className="profile-img"
            />
          </div>
          <div className="profile-card">
            <div className="profile-name">ANKIT KAPOOR</div>
            <div className="profile-role">Founder & Director</div>
            <p className="profile-quote">
              "Every grain, every leaf, every spice that leaves our hands
              carries our commitment — to our farmers and to you. Trade Smarter,
              Trade Bigger."
            </p>
          </div>
        </div>
      </section>

      {/*-- WHY CHOOSE US--*/}
      <section className="why-section" id="why-us">
        <div className="section-header">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">
            Built on <em>Trust,</em>
            <br />
            Sustained by Excellence
          </h2>
          <p className="section-subtitle">
            Three pillars that have kept our clients returning — year after
            year, decade after decade.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-number">01</div>
            <span className="why-icon">🏆</span>
            <h3 className="why-title">Unwavering Credibility</h3>
            <p className="why-text">
              Every shipment comes with full documentation — phytosanitary
              certificates, lab test reports, certificate of origin, and
              third-party quality audits. Zero history of rejected shipments at
              international ports. Our word is our warranty.
            </p>
          </div>
          <div className="why-card">
            <div className="why-number">02</div>
            <span className="why-icon">⚖️</span>
            <h3 className="why-title">Absolute Consistency</h3>
            <p className="why-text">
              Our grading systems and quality protocols ensure the sample you
              approve is exactly what arrives in your warehouse — every single
              time. We maintain buffer stocks to guarantee supply continuity 365
              days a year.
            </p>
          </div>
          <div className="why-card">
            <div className="why-number">03</div>
            <span className="why-icon">🤝</span>
            <h3 className="why-title">Long-Term Relationships</h3>
            <p className="why-text">
              87% of our clients have been with us for over 5 years. We don't
              pursue transactions — we pursue partnerships. Dedicated account
              managers, priority pricing, and flexible terms that grow alongside
              your business.
            </p>
          </div>
        </div>
      </section>

      {/*-- APPOINTMENT BANNER--*/}
      <section className="appt-banner" id="appointment">
        <div className="appt-content">
          <h2 className="appt-title">Ready to Source the Best?</h2>
          <p className="appt-text">
            Book a 30-minute consultation — no obligation. We'll match you with
            the right products and pricing.
          </p>
        </div>
        <div className="appt-actions">
          <a href="#inquiry" className="btn-appt">
            <i className="fa fa-calendar"></i> Book Appointment
          </a>
          <a
            href="https://wa.me/919876543210?text=I'd%20like%20to%20book%20a%20consultation"
            className="btn-appt-wa"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp Now
          </a>
        </div>
      </section>

      {/*-- INQUIRY FORM --*/}
      <section className="inquiry-section" id="inquiry">
        <div className="inquiry-left">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Let's Start
            <br />a <em>Conversation</em>
          </h2>
          <p className="inquiry-intro">
            Whether you're looking to place a bulk order, explore our catalogue,
            or have a question about sourcing — our team responds within 4 hours
            during business days.
          </p>
          <div className="contact-methods">
            <a href="tel:+919876543210" className="contact-method">
              <div className="cm-icon">📞</div>
              <div className="cm-info">
                <span className="cm-label">Call Us</span>
                <span className="cm-value">+91 98765 43210</span>
              </div>
            </a>
            <a
              href="mailto:info@nkaglobalexports.com"
              className="contact-method"
            >
              <div className="cm-icon">✉️</div>
              <div className="cm-info">
                <span className="cm-label">Email Us</span>
                <span className="cm-value">info@nkaglobalexports.com</span>
              </div>
            </a>
            <a href="https://wa.me/919876543210" className="contact-method">
              <div className="cm-icon">💬</div>
              <div className="cm-info">
                <span className="cm-label">WhatsApp</span>
                <span className="cm-value">
                  +91 98765 43210 (Instant Reply)
                </span>
              </div>
            </a>
            <div className="contact-method">
              <div className="cm-icon">📍</div>
              <div className="cm-info">
                <span className="cm-label">Office</span>
                <span className="cm-value">NKA Global Exports, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className="inquiry-form">
          <h3 className="form-title">Send an Enquiry</h3>
          <p className="form-subtitle">
            We'll respond with pricing, samples, and availability within 24
            hours.
          </p>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your full name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your company"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                className="form-input"
                placeholder="you@company.com"
              />
            </div>
            <div className="form-group">
              <label className="form-label">WhatsApp / Phone *</label>
              <input
                type="tel"
                className="form-input"
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>
          <div className="form-group full">
            <label className="form-label">Product of Interest *</label>
            <select className="form-select">
              <option value="">— Select a product category —</option>
              <option>Premium Basmati Rice</option>
              <option>Jasmine / Sona Masuri Rice</option>
              <option>Turmeric / Cumin / Red Chili Powder</option>
              <option>Whole Spices (Cardamom, Cumin, etc.)</option>
              <option>Arabica / Robusta Green Coffee Beans</option>
              <option>Darjeeling / Assam Tea</option>
              <option>Alphonso / Kesar Mangoes</option>
              <option>Fresh Vegetables (Baby Veg, Onion, Garlic)</option>
              <option>Custom / Mixed Requirement</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Estimated Quantity</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. 20 MT / Month"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Destination Country *</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. USA, UAE, UK"
              />
            </div>
          </div>
          <div className="form-group full">
            <label className="form-label">Your Message</label>
            <textarea
              className="form-textarea"
              placeholder="Tell us about your requirements — quality grade, packaging preference, certifications needed..."
            ></textarea>
          </div>
          <button
            className="form-submit"
            type="button"
            onClick={() => submitForm(this)}
          >
            <span id="submitText">📩 Submit Enquiry</span>
          </button>
          <p className="form-note">
            🔒 Your information is private and never shared with third parties.
          </p>
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
          <a href="https://wa.me/919876543210">WhatsApp</a>
        </div>
      </footer>
    </>
  );
}

export default PortfolioPage;
