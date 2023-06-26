import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SearchDisplay.css";

class SearchDisplay extends Component {
  state = {};
  render() {
    const { FilterSearch, search } = this.props;
    return (
      <div>
        {search && (
          <div className="search-display">
            <ul className="nav-search text-dark">
              {!FilterSearch.length == 0 ? (
                FilterSearch.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to={`product/${item.id}`}>
                        {item.name} {item.model}
                      </Link>
                    </li>
                  );
                })
              ) : (
                <p className="text-center">No Item Found</p>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default SearchDisplay;
