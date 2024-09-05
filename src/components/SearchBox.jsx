import React from "react";
import styles from "./searchBox.module.css";

function SearchBox({ filter, setFilter }) {
  return (
    <form>
      <label className={styles.labelFind}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        ></input>
      </label>
    </form>
  );
}

export default SearchBox;
