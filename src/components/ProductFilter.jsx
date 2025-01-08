import React, { useState, useEffect, useRef } from "react";

const ProductFilter = ({ onFilterChange }) => {
  const [category, setCategory] = useState("allproducts");
  const [maxPrice, setMaxPrice] = useState(6000);
  const selectRef = useRef(null);

  useEffect(() => {
    const loadFlyonUI = async () => {
      await import("flyonui/flyonui");
      if (selectRef.current) {
        window.HSStaticMethods.autoInit(selectRef.current);
      }
    };

    loadFlyonUI();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange(e.target.value, maxPrice); // Pass category and max price to parent
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = e.target.value;
    setMaxPrice(newMaxPrice);
    onFilterChange(category, newMaxPrice); // Pass new max price to parent
  };

  return (
    <div className="max-w-full">
      {/* Filter Dropdown */}
      <div>
        <label htmlFor="category" className="block mb-2 text-lg font-medium">
          Category
        </label>
        <select
          ref={selectRef}
          value={category}
          onChange={handleCategoryChange}
          className="hidden"
          data-select={JSON.stringify({
            placeholder: `<span class="inline-flex items-center">
                          <span class="icon-[tabler--filter] flex-shrink-0 size-4 me-2"></span> Filter
                        </span>`,
            toggleTag: "<button type='button' aria-expanded='false'></button>",
            toggleClasses: "advance-select-toggle",
            dropdownClasses: "advance-select-menu",
            optionClasses: "advance-select-option selected:active",
            optionTemplate: `<div class="flex justify-between items-center w-full">
                            <span data-title></span>
                            <span class="icon-[tabler--check] flex-shrink-0 size-4 text-primary hidden selected:block"></span>
                          </div>`,
            extraMarkup: `<span class="icon-[tabler--caret-up-down] flex-shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2"></span>`,
          })}
        >
          <option value="allproducts">All Products</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      {/* Price Range Filter - Single Max Price */}
      <div className="mt-6">
        <label className="block mb-2 text-lg font-medium">Price Range</label>

        {/* Max Price */}
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="0"
            max="6000"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="range"
            step="100"
            aria-label="max-range"
          />
        </div>

        <div className="w-full flex justify-between text-xs px-2">
          <span>₹0</span>
          <span>₹500</span>
          <span>₹1500</span>
          <span>₹3000</span>
          <span>₹6000</span>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
