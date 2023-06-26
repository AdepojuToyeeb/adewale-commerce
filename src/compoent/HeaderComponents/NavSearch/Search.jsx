import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavSearch.css";
import { useSelector } from "react-redux";
import { PRODUCTS } from "../../../files/products";
import SearchDisplay from "../SearchDisplay/SearchDisplay";
import styled from "styled-components";

export const ClearButton = styled.button`
  
  border:none;
  height: 100%;
  width: 5%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d9534f;
`;
function Search() {
  const [search, setSearch] = useState("");
  const filterComponent = (e) => {
    setSearch(e.target.value);
  };

  const FilterSearch = PRODUCTS.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log("FilterSearch----", FilterSearch);
  const handleClear = () => {
    if (search) {
      setSearch("");
    }
  };
  return (
    <form className="search">
      <div className="search-content">
        <div className="input">
          <input
            type="text"
            placeholder="Search products, brands and categories"
            onChange={filterComponent}
            value={search}
          />
          {!search ? (
            <span className="icon">
              <FontAwesomeIcon icon="magnifying-glass" />
            </span>
          ) : (
            <ClearButton type="button" onClick={handleClear}>
              X
            </ClearButton>
          )}

          <SearchDisplay search={search} FilterSearch={FilterSearch} />
        </div>
      </div>
    </form>
  );
}

export default Search;
