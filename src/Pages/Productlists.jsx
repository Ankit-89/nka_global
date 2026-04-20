import React, { useState, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Heart, Mail, Star, ShoppingCart, MapPin } from 'lucide-react';
import Breadcrumb from '../Components/Breadcrumb'
import Pagehelmet from '../Components/Pagehelmet'

function ProductListingPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const sliderRef = useRef(null);

  const productsPerPage = 8;

  // Real Products Data with actual image URLs
  const products = [
    {
      id: 1,
      name: 'Premium Basmati Rice - 5kg',
      category: 'rice',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviews: 245,
      image: '/assets/images/speakers/s2.png',
      badge: 'Best Seller',
      origin: 'Punjab, India',
      description: 'Long-grain aromatic basmati rice from the fertile plains of Punjab. Hand-selected and aged for 2 years to deliver superior flavor and perfect fluffy texture. Perfect for biryani, pilaf, and special occasions.',
      specifications: ['2-Year Aged', 'Non-GMO', 'Premium Grade', 'Aromatic']
    },
    {
      id: 2,
      name: 'Pure Golden Turmeric Powder',
      category: 'spices',
      price: 12.50,
      originalPrice: 15.00,
      rating: 4.9,
      reviews: 189,
      image: '/assets/images/speakers/s3.png',
      badge: 'Organic',
      origin: 'Nizamabad, India',
      description: 'Handpicked turmeric roots from the Nizamabad region, sun-dried and ground fresh. Rich golden color with high curcumin content (8-10%). Pure and free from any additives or fillers.',
      specifications: ['8-10% Curcumin', 'Pesticide Free', 'No Fillers', 'Fresh Ground']
    },
    {
      id: 3,
      name: 'Black Cardamom Pods',
      category: 'spices',
      price: 18.75,
      originalPrice: 22.00,
      rating: 4.7,
      reviews: 156,
      image: '/assets/images/speakers/s4.png',
      badge: 'Premium',
      origin: 'Kerala, India',
      description: 'Large, aromatic black cardamom pods from the Western Ghats of Kerala. Perfect for masalas, curries, and traditional cooking. Distinctive smoky flavor with complex aromatic notes.',
      specifications: ['Kerala Origin', 'Smoky Aroma', 'Large Pods', 'Authentic Flavor']
    },
    {
      id: 4,
      name: 'Jasmine Rice - Supreme Quality',
      category: 'rice',
      price: 16.99,
      originalPrice: 19.99,
      rating: 4.6,
      reviews: 203,
      image: '/assets/images/speakers/s5.png',
      badge: 'New',
      origin: 'Thailand',
      description: 'Fragrant jasmine rice with delicate floral notes and naturally sticky texture. Sustainably grown in Thai highlands. Ideal for Southeast Asian cuisines and rice bowls.',
      specifications: ['Thailand Grown', 'Sticky Texture', 'Floral Aroma', 'Organic Certified']
    },
    {
      id: 5,
      name: 'Red Chili Powder - Extra Hot',
      category: 'spices',
      price: 8.99,
      originalPrice: 10.99,
      rating: 4.5,
      reviews: 412,
      image: '/assets/images/speakers/s6.png',
      badge: 'Hot Pick',
      origin: 'Andhra Pradesh, India',
      description: 'Premium ground red chili powder from Andhra Pradesh with deep crimson color. Perfect heat level for Indian cuisine. Used in every Indian kitchen for centuries.',
      specifications: ['Andhra Region', 'High Heat', 'Deep Color', 'Pure Blend']
    },
    {
      id: 6,
      name: 'Brown Basmati Rice - Healthy Choice',
      category: 'rice',
      price: 13.50,
      originalPrice: 16.50,
      rating: 4.4,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1586080876-5d2d7e28e1bb?w=600&h=600&fit=crop&blend=https://images.unsplash.com/photo-1552690048-7eadc6fcda17?w=600&h=600&fit=crop&blend-mode=lighten',
      badge: 'Bestseller',
      origin: 'Punjab, India',
      description: 'Whole grain brown basmati with superior nutritional value. Nutty flavor and chewy texture. Perfect for health-conscious consumers seeking wholesome options.',
      specifications: ['Whole Grain', 'High Fiber', 'Nutty Flavor', 'Non-GMO']
    },
    {
      id: 7,
      name: 'Premium Cumin Seeds',
      category: 'spices',
      price: 11.99,
      originalPrice: 14.00,
      rating: 4.9,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1596040299844-d0bb3cf97482?w=600&h=600&fit=crop',
      badge: 'Essential',
      origin: 'Rajasthan, India',
      description: 'Hand-roasted cumin seeds from Rajasthan with exceptional aroma and taste. Essential spice for tempering, curries, and traditional spice blends. High oil content for intense flavor.',
      specifications: ['Rajasthan Grown', 'Hand Roasted', 'High Oil Content', 'Aromatic']
    },
    {
      id: 8,
      name: 'Sona Masuri Rice - Daily Essential',
      category: 'rice',
      price: 10.50,
      originalPrice: 12.50,
      rating: 4.3,
      reviews: 175,
      image: 'https://images.unsplash.com/photo-1586080876-5d2d7e28e1bb?w=600&h=600&fit=crop',
      badge: 'Popular',
      origin: 'Karnataka, India',
      description: 'Short-grain masuri rice from South India. Light and easy to digest, making it perfect as a daily staple. Uniform shape and consistent quality every time.',
      specifications: ['South India', 'Short Grain', 'Easy Digest', 'Daily Staple']
    },
    {
      id: 9,
      name: 'Coriander Powder - Ground Fresh',
      category: 'spices',
      price: 9.75,
      originalPrice: 11.50,
      rating: 4.7,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1599599810828-f5cf4f39f1e2?w=600&h=600&fit=crop',
      badge: 'Fresh',
      origin: 'Madhya Pradesh, India',
      description: 'Ground coriander seeds with citrus notes and warm spice character. Essential ingredient for Indian gravies and masalas. Fresh ground to maintain maximum flavor and aroma.',
      specifications: ['Citrus Notes', 'Fresh Ground', 'Pure Coriander', 'Aromatic']
    },
    {
      id: 10,
      name: 'Arborio Rice - Risotto Master',
      category: 'rice',
      price: 15.99,
      originalPrice: 18.50,
      rating: 4.6,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&h=600&fit=crop',
      badge: 'Premium',
      origin: 'Punjab, India',
      description: 'Italian arborio rice now grown in India. Creates creamy texture when cooked. Perfect for risotto and fusion rice dishes. Short-grain variety with high starch content.',
      specifications: ['Creamy Texture', 'Risotto Grade', 'Italian Style', 'Premium Quality']
    },
    {
      id: 11,
      name: 'Black Cumin Seeds - Rare Spice',
      category: 'spices',
      price: 16.50,
      originalPrice: 19.50,
      rating: 4.8,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1599599810969-d2498edd0d1f?w=600&h=600&fit=crop',
      badge: 'Rare',
      origin: 'Kashmir, India',
      description: 'Rare nigella seeds with distinctive peppery flavor. Used in tempering, pickles, and specialty curries. High medicinal value and antioxidant properties.',
      specifications: ['Nigella Seeds', 'Peppery Flavor', 'Medicinal Value', 'Rare']
    },
    {
      id: 12,
      name: 'Parboiled Rice - Budget Friendly',
      category: 'rice',
      price: 7.99,
      originalPrice: 9.50,
      rating: 4.2,
      reviews: 321,
      image: 'https://images.unsplash.com/photo-1586080876-5d2d7e28e1bb?w=600&h=600&fit=crop',
      badge: 'Economy',
      origin: 'West Bengal, India',
      description: 'Traditional parboiled rice with beautiful golden color. Retains nutrients and maintains firmness during cooking. Budget-friendly yet nutritious daily staple.',
      specifications: ['Golden Color', 'Nutrient Rich', 'Firm Texture', 'Affordable']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products', icon: '🌍', count: products.length },
    { id: 'rice', label: 'Rice Varieties', icon: '🍚', count: products.filter(p => p.category === 'rice').length },
    { id: 'spices', label: 'Premium Spices', icon: '✨', count: products.filter(p => p.category === 'spices').length },
    { id: 'rice', label: 'Rice Varieties', icon: '🍚', count: products.filter(p => p.category === 'rice').length },
    { id: 'spices', label: 'Premium Spices', icon: '✨', count: products.filter(p => p.category === 'spices').length },
    { id: 'rice', label: 'Rice Varieties', icon: '🍚', count: products.filter(p => p.category === 'rice').length },
    { id: 'spices', label: 'Premium Spices', icon: '✨', count: products.filter(p => p.category === 'spices').length },
    { id: 'rice', label: 'Rice Varieties', icon: '🍚', count: products.filter(p => p.category === 'rice').length },
    { id: 'spices', label: 'Premium Spices', icon: '✨', count: products.filter(p => p.category === 'spices').length },
    { id: 'rice', label: 'Rice Varieties', icon: '🍚', count: products.filter(p => p.category === 'rice').length },
    { id: 'spices', label: 'Premium Spices', icon: '✨', count: products.filter(p => p.category === 'spices').length }
  ];

  // Filter and Search
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 220;
      if (direction === 'left') {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleEnquiry = (productName) => {
    alert(`Enquiry sent for ${productName}. We'll contact you soon!`);
  };

  return (
    <div className="product-listing-wrapper">
      {/* Header */}
       <Pagehelmet pageTitle="Product Lists" />
            <Breadcrumb title="Product Lists" />

      {/* Category Slider Section */}
      <div className="plp-category-section">
        <div className="plp-category__header">
          <h2 className="plp-category__title">Top Category</h2>
          <p className="plp-category__subtitle">Find exactly what you're looking for</p>
        </div>

        <div className="plp-category__slider-wrapper">
          <button 
            className="plp-category__btn plp-category__btn--left" 
            onClick={() => scrollSlider('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <div ref={sliderRef} className="plp-category__slider">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`plp-category__item ${activeCategory === cat.id ? 'plp-category__item--active' : ''}`}
              >
                <span className="plp-category__icon">{cat.icon}</span>
                <span className="plp-category__label">{cat.label}</span>
                <span className="plp-category__count">({cat.count})</span>
              </button>
            ))}
          </div>

          <button 
            className="plp-category__btn plp-category__btn--right" 
            onClick={() => scrollSlider('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="plp-products">
        <div className="plp-products__header">
          <div className="plp-products__info">
            <p className="plp-products__count">
              Showing {filteredProducts.length === 0 ? 0 : indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
            </p>
          </div>
          <div className="plp-products__search">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="plp-products__search-input"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="plp-products__list">
          {currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="plp-product-card"
              >
                {/* Image Section */}
                <div className="plp-product-card__image-section">
                  <div className="plp-product-card__image-container">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="plp-product-card__image"
                      loading="lazy"
                    />
                    {/* <div className="plp-product-card__image-overlay">
                      <button
                        className={`plp-product-card__wishlist ${wishlist.includes(product.id) ? 'plp-product-card__wishlist--active' : ''}`}
                        onClick={() => toggleWishlist(product.id)}
                        aria-label="Add to wishlist"
                      >
                        <Heart size={20} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div> */}
                  </div>
                </div>

                {/* Content Section */}
                <div className="plp-product-card__content">
                  {/* Badge */}
                  <span className="plp-product-card__badge">{product.badge}</span>

                  {/* Origin */}
                  <div className="plp-product-card__origin">
                    <MapPin size={14} />
                    <span>{product.origin}</span>
                  </div>

                  {/* Title */}
                  <h3 className="plp-product-card__title">{product.name}</h3>

                  {/* Rating */}
                  {/* <div className="plp-product-card__rating">
                    <div className="plp-product-card__stars">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(product.rating) ? 'plp-star-filled' : 'plp-star-empty'}
                        />
                      ))}
                    </div>
                    <span className="plp-product-card__reviews">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div> */}

                  {/* Description */}
                  {/* <p className="plp-product-card__description">
                    {product.description}
                  </p> */}

                  {/* Specifications */}
                  <div className="plp-product-card__specs">
                    {product.specifications.map((spec, i) => (
                      <span key={i} className="plp-product-card__spec-tag">✓ {spec}</span>
                    ))}
                  </div>

                  {/* Price Section */}
                  {/* <div className="plp-product-card__pricing">
                    <div className="plp-product-card__price-wrapper">
                      <span className="plp-product-card__price">${product.price.toFixed(2)}</span>
                      {product.originalPrice > product.price && (
                        <>
                          <span className="plp-product-card__original-price">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                          <span className="plp-product-card__discount">
                            Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                          </span>
                        </>
                      )}
                    </div>
                  </div> */}

                  {/* Action Buttons */}
                  <div className="plp-product-card__actions">
                    <button 
                      className="plp-product-card__btn plp-product-card__btn--enquiry"
                      onClick={() => handleEnquiry(product.name)}
                    >
                      <Mail size={18} />
                      Send Enquiry
                    </button>
                    {/* <button className="plp-product-card__btn plp-product-card__btn--cart">
                      <ShoppingCart size={18} />
                    </button> */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="plp-products__empty">
              <p>No products found. Try adjusting your search or category.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="plp-pagination">
            <button
              className="plp-pagination__btn plp-pagination__btn--prev"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              ← Previous
            </button>

            <div className="plp-pagination__numbers">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  className={`plp-pagination__number ${currentPage === i + 1 ? 'plp-pagination__number--active' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              className="plp-pagination__btn plp-pagination__btn--next"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
