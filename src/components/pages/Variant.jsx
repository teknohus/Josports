import React from "react";
import glovesData from "./fielder-infield.json";

export default function Variant() {
  return (
    <main id="main">
      <div className="hb-fielders-glove">
        <div className="container">
          <div className="heading">
            <h2>Fielder - Infield</h2>
          </div>
          <div className="row justify-content-center text-center hb-gap">
            {glovesData.map((glove, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <div className="hb-content bg-white d-flex flex-column justify-content-between h-100">
                  <div className="hb-img-dicript">
                    <div className="hb-content-header">
                      <div className="d-flex justify-content-center">
                        <div className="col-heading-content">
                          <div className="upper-heading-content flex-wrap">
                            <p className="hb-dicrip">{glove.name}</p>
                            <h2 className="hb-product-price">{glove.price}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-box my-3">
                      <img
                        src={glove.image}
                        className="mx-auto"
                        alt="layer-45"
                      />
                    </div>
                    <div className="dicription-box mb-3">
                      <ul>
                        <p className="fw-bold">Highlights</p>
                        {glove.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="btn-box text-center">
                    <button
                      className="btn"
                      disabled={glove.name !== "Legend Edition"}
                    >
                      {glove.name === "Legend Edition"
                        ? "Customize"
                        : "Coming Soon"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
