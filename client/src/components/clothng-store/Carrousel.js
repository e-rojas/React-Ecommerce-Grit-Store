import React from "react";
import { NavLink } from "react-router-dom";
import img_1 from "../../images/car-img-1.png";
import img_2 from "../../images/car-img-2.png";
import img_3 from "../../images/car-img-3.png";
export default function Carrousel() {
  return (
    <>
      <header>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            {/* Slide One - Set the background image for this slide in the line below */}
            <div
              className="carousel-item active"
              style={{
                backgroundImage: `url(${img_1})`,
              }}
            >
              <div
                /*  style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  height: "100%",
                  justifyContent: "center",
                  paddingRight: "12%",
                }} */
                style={{ paddingRight: "14%" }}
                className=" text-dark d-flex h-100 align-items-center justify-content-end animated rollIn  bounce delay-1s"
              >
                <div>
                  <h2 className="display-4 "># Shades</h2>
                  <p className="lead">Forever Sunny Street.</p>
                 <NavLink to='/store'> <button className="btn btn-dark">Shop Now</button></NavLink>
                </div>
              </div>
            </div>
            {/* Slide Two - Set the background image for this slide in the line below */}
            <div
              className="carousel-item"
              style={{
                backgroundImage: `url(${img_2})`,
              }}
            >
              <div
                style={{ paddingRight: "14%" }}
                className=" text-dark d-flex h-100 align-items-center justify-content-end animated   jackInTheBox
               delay-1s"
              >
                <div>
                  <h2 className="display-4 "># Vans</h2>
                  <p className="lead">Authentic Old School Era!</p>
                  <NavLink to='/store'> <button className="btn btn-dark">Shop Now</button></NavLink>
                </div>
              </div>
            </div>
            {/* Slide Three - Set the background image for this slide in the line below */}
            <div
              className="carousel-item"
              style={{
                backgroundImage: `url(${img_3})`,
              }}
            >
              <div
                style={{ paddingLeft: "14%" }}
                className=" text-dark d-flex h-100 align-items-center justify-content-start animated rollIn  delay-1s"
              >
                <div>
                  <h2 className="display-4 "># Jeans</h2>
                  <p className="lead">Long Live Leg Season</p>
                  <NavLink to='/store'> <button className="btn btn-dark">Shop Now</button></NavLink>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
    </>
  );
}
