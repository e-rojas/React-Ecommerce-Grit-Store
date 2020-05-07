import React, { useEffect, useState } from "react";

import storeDatabase from "../database/store";
import ProductCard from "../components/clothng-store/ProductCard";


export default function Store() {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    setStoreData(storeDatabase);
  }, []);

  return (
    <div className="container-fluid">
      <div id="prduct-select-row" className="row ">
        <div
          style={{ maxWidth: "1200px", margin: "0 auto" }}
          className="col d-flex flex-wrap justify-content-around"
        >
          {storeData.map((product) => {
            return <ProductCard key={product.id} marginTop={40} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
