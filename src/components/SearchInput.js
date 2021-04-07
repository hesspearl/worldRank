import React from "react";
import { SearchRounded } from "@material-ui/icons";
import styles from "../styles/SearchInput.module.css";

function SearchInput({ ...rest }) {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input className={styles.input} {...rest} />
    </div>
  );
}

export default SearchInput;
