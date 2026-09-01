import React from 'react';

const Filter = ({
  categories,
  selectedCategory,
  searchTerm,
  sortOption,
  onCategoryChange,
  onSearchChange,
  onSortChange,
  onClearFilters
}) => {
  return (
    <section className="filter-section mb-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-3">Filter Products</h4>
          
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="categoryFilter" className="form-label fw-bold">
                Category
              </label>
              <select
                id="categoryFilter"
                className="form-select"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                aria-label="Filter by category"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="col-md-4">
              <label htmlFor="searchInput" className="form-label fw-bold">
                Search
              </label>
              <input
                type="text"
                id="searchInput"
                className="form-control"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label="Search products by name"
              />
            </div>
            
            <div className="col-md-4">
              <label htmlFor="sortSelect" className="form-label fw-bold">
                Sort By
              </label>
              <select
                id="sortSelect"
                className="form-select"
                value={sortOption}
                onChange={(e) => onSortChange(e.target.value)}
                aria-label="Sort products"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <div className="mt-3">
            <button
              className="btn btn-outline-secondary"
              onClick={onClearFilters}
              aria-label="Clear all filters"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
