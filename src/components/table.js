import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import React, { useState } from "react";
import styles from "../styles/table.module.css";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }
  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <div />;
  }

  if (direction == "desc") {
    return (
      <div className={styles.headingArrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.headingArrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};
function Table({ countries }) {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedCountries = orderBy(countries, value, direction);

  const directionValue = () => {
    if (!direction) {
      return setDirection("desc");
    } else if (direction === "desc") {
      return setDirection("asc");
    } else {
      return setDirection(null);
    }
  };

  const setDirectionAndValue = (value) => {
    directionValue();
    setValue(value);
  };
  return (
    <div>
      <div className={styles.heading}>
        <button
          className={styles.heading_name}
          onClick={() => setDirectionAndValue("name")}
        >
          <div>Name</div>
          {value === "name" && <SortArrow direction={direction} />}
        </button>
        <button
          className={styles.heading_population}
          onClick={() => setDirectionAndValue("population")}
        >
          <div> Population</div>
          {value === "population" && <SortArrow direction={direction} />}
        </button>
      </div>
      {orderedCountries.map((country) => {
        return (
          <div className={styles.row}>
            <div className={styles.name}>{country.name}</div>
            <div className={styles.population}>{country.population}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Table;
