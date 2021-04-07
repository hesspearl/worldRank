import React, { useState } from "react";

import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import SearchInput from "../components/SearchInput";
import Table from "../components/table";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");

  const filterCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.count}>found {countries.length}countries</div>
      <SearchInput
        placeholder="Filter by name, region or subregion"
        onChange={onInputChange}
      />
      <Table countries={filterCountries} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
}
