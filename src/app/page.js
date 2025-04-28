"use client"; //renderizado no lado cliente

import Image from "next/image";
import styles from "./page.module.css";
import Categories from "@/components/Categories";
import Search from "@/components/Search";
import Card from "../components/Card";
import { filterProducts, searchProducts } from "@/service";
import { useState } from "react";

export default function Home() {
  const [btnClicked, setBtnClicked] = useState("Entradas");
  const [srchdTxt, setSrchdTxt] = useState("");
  const [list, setList] = useState(filterProducts("Entradas"));

  const handleFilter = (category) => {
    setList(filterProducts(category));
    setBtnClicked(category);
    setSrchdTxt("");
  };

  const handleSearch = (typedText) => {
    setSrchdTxt(typedText);
    if (typedText.length > 2) {
      setList(searchProducts(typedText));
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.banner}></section>

      <main className={styles.main}>
        <Categories
          onClickEntradas={() => handleFilter("Entradas")}
          onClickMassas={() => handleFilter("Massas")}
          onClickCarnes={() => handleFilter("Carnes")}
          onClickBebidas={() => handleFilter("Bebidas")}
          onClickSaladas={() => handleFilter("Saladas")}
          onClickSobremesas={() => handleFilter("Sobremesas")}
          selectedBtn={btnClicked}
        />
        <Search
          onChange={(event) => handleSearch(event.target.value)}
          value={srchdTxt}
        />

        <section className={styles.foodMenu}>
          <h2>Cardápio</h2>
          <div className={styles.cards}>
            {list.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                image={product.image}
                category={product.category}
                description={product.description}
                price={product.price}
                length={product.length}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
