import { useId, useState } from "react";
import "./Filters.css";
import useFilters from "../hooks/useFilters";
const Filters = () => {
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const { filters, setFilters } = useFilters();

  const handleChangeMinPrice = (event) => {
    const newMinPrice = event.target.value;
    setFilters((prevState) => ({
      ...prevState,
      minPrice: newMinPrice,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => {
      return {
        ...prevState,
        category: event.target.value,
      };
    });
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Min Price</label>
        <input
          type="range"
          name={minPriceFilterId}
          id="price"
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          name="category"
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value="all">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Home decoration</option>
        </select>
      </div>
    </section>
  );
};
export default Filters;
