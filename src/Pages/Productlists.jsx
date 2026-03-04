import React, { useState, useMemo } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import { Link } from 'react-router-dom'
import Pagehelmet from '../Components/Pagehelmet'
import productsList from '../Data/productsList.json'

function Productlists() {

    const [currentPage, setCurrentPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState("")
    const [sortOption, setSortOption] = useState("menu_order")

    const productsPerPage = 8

    // 🔎 Filter + Sort Logic
    const filteredProducts = useMemo(() => {

        let filtered = productsList.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

        switch (sortOption) {
            case "price":
                return filtered.sort((a, b) => a.price - b.price)
            case "price-desc":
                return filtered.sort((a, b) => b.price - a.price)
            case "date":
                return filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
            default:
                return filtered
        }

    }, [searchTerm, sortOption])

    // Pagination calculation
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        setCurrentPage(1) // reset page when searching
    }

    const handleSort = (e) => {
        setSortOption(e.target.value)
    }

    return (
        <div>
            <Pagehelmet pageTitle="Product Lists" />
            <Breadcrumb title="Product Lists" />

            <section className="shop">
                <div className="container">
                    <div className="shop-inner">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product-list m-md-0 pb-6">

                                    {/* Top Controls */}
                                    <div className="product-count-sort d-flex justify-content-between align-items-center flex-wrap mb-6">

                                        <div className="product-count">
                                            <p>
                                                Showing {filteredProducts.length === 0 ? 0 : indexOfFirstProduct + 1}
                                                –
                                                {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                                                {filteredProducts.length} results
                                            </p>
                                        </div>

                                        {/* Search */}
                                        <div className="searchbar d-flex">
                                            <input
                                                type="search"
                                                className="bg-lightgrey border-0 p-3 text-grey rounded-end-0"
                                                placeholder="Search..."
                                                value={searchTerm}
                                                onChange={handleSearch}
                                            />
                                            <button type="button" className="btn rounded-start-0" data-mdb-ripple-init>
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>

                                        {/* Sort */}
                                        <div className="sort-wrapper">
                                            <select
                                                value={sortOption}
                                                onChange={handleSort}
                                                className="px-2 py-1 border rounded"
                                            >
                                                <option value="menu_order">Default sorting</option>
                                                <option value="price">Price: low to high</option>
                                                <option value="price-desc">Price: high to low</option>
                                                <option value="date">Sort by latest</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Products */}
                                    <div className="product-left text-center">
                                        <div className="row gy-4">

                                            {currentProducts.length > 0 ? (
                                                currentProducts.map((product, index) => (
                                                    <Link
                                                        to={`/Productsingle/${indexOfFirstProduct + index}`}
                                                        className="col-lg-3 col-md-3"
                                                        key={index}
                                                    >
                                                        <div className="product-box p-3 pb-4 box-shadow rounded-2">
                                                            <div className="product-img mb-4">
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.name}
                                                                    className="w-100 rounded-2"
                                                                />
                                                            </div>
                                                            <div className="product-info">
                                                                <h6>{product.name}</h6>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))
                                            ) : (
                                                <p>No products found.</p>
                                            )}

                                        </div>
                                    </div>

                                    {/* Pagination */}
                                    {totalPages > 1 && (
                                        <div className="pagination-wrapper text-center mt-5">

                                            <button
                                                className="btn btn-outline-dark me-2"
                                                disabled={currentPage === 1}
                                                onClick={() => setCurrentPage(currentPage - 1)}
                                            >
                                                Prev
                                            </button>

                                            {[...Array(totalPages)].map((_, index) => (
                                                <button
                                                    key={index}
                                                    className={`btn me-2 ${currentPage === index + 1
                                                            ? "btn-dark"
                                                            : "btn-outline-dark"
                                                        }`}
                                                    onClick={() => setCurrentPage(index + 1)}
                                                >
                                                    {index + 1}
                                                </button>
                                            ))}

                                            <button
                                                className="btn btn-outline-dark"
                                                disabled={currentPage === totalPages}
                                                onClick={() => setCurrentPage(currentPage + 1)}
                                            >
                                                Next
                                            </button>

                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Productlists