import React from "react";
import ProductCard from "../components/clothng-store/ProductCard";

import MidSection from '../components/clothng-store/MidSection'
export default function MainPage() {
  const productsInfo = [
    {id:1,
      imgLink:
        "https://assets.website-files.com/5cefb7fee84af048d3ceaa5a/5cefbe06d6ce24c2d934a438_tshirt1.jpg",
      prodName: "T-SHIRTS",
      linkTo: "/store",
    },
    {id:2,
      imgLink:
        "https://assets.website-files.com/5cefb7fee84af048d3ceaa5a/5cefbd06d9c5cca2432e5c29_1%20(1).png",
      prodName: "CAPS",
      linkTo: "/store",
    },
    {id:3,
      imgLink:
        "https://assets.website-files.com/5d9d08afa8a650b6a1830c36/5d9daf7658a892eb733a0a02_2016.6.22_SFP_Photoshoot1851b__92743.1467324920.1280.1280.jpg",
      prodName: "ACCESSORIES",
      linkTo: "/store",
    },
  ];

  return (
    <>
      <div className="container-fluid">
       <MidSection />
        {/* PRODUCTS GRID */}
        <div style={{ maxWidth: "1200px", margin: "0 auto 30px auto" }} className="row ">
          {productsInfo.map((product) => {
            return (
              <div key={product.id} className="col-4 ">
                {" "}
                <ProductCard basic={true} key={product.id} {...product} />{" "}
              </div>
            );
          })}
          {/* PRODUCTS GRID END */}
        </div>
     
      </div>
     
    </>
  );
}
