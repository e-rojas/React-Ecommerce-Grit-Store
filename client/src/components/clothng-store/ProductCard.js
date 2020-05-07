import React from "react";
import {Link} from 'react-router-dom'
export default function ProductCard({ imgLink, prodName, linkTo,basic, marginTop,price}) {
  return (
    <>
      <div style={{width:'16rem',marginTop:marginTop}} className="card pb-0">
        <div
          style={{
            backgroundImage:
            `url('${imgLink}')`
         }}
          className="card-image"
        ></div>
        <div className="card-body text-center">
         {
           basic ? ( <div className="card-title">
           <Link to={linkTo}>
             <button type="button" className="btn btn-primary btn-sm font1">
              {prodName}
             </button>
           </Link>
         </div>) :( 
         <div className="card-body mb-0 pb-0">
           <div className="card-title text-left">
         <h5> {prodName}</h5>
         <h5> ${price.toFixed(2)} </h5>
         <div className="card-text">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         </div>
         <button type="button" className="btn btn-primary btn-sm font1 mt-1">
           add +
             </button>
         </div>
         </div>
         )
         }
        </div>
      </div>
    </>
  );
}
