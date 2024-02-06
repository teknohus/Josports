import React from "react";

export default function Variant() {

  const handleCatcher = () => {

  }
  const handleFielder = () => {

  }
  const handleFB = () => {

  }

  return (
    <main id="main">
      {/* Product Block */}
      <div className="hb-fielders-glove">
        <div className="container">
          <div className="heading">
            <h2>Glove Builder</h2>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-4 col-sm-6">
              <div className="hb-content bg-white ">
                <div className="hb-content-header">
                  <div className="d-flex justify-content-center">
                    <div className="col-heading-content">
                      <div className="upper-heading-content flex-wrap">
                        <p className="hb-dicrip">Catcher</p>
                        <h2 className="hb-product-price">$180</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-box my-3">
                  <img src={`/images/catcher.png`} className="mx-auto" alt="layer-45" />
                </div>
                <div className="dicription-box mb-3">
                  <ul>
                    <p className="fw-bold">Highlights</p>
                    <li>The Original Signature Series Pattern</li>
                    <li>Most Customizable Model</li>
                    <li>Available in Single or Dual Welting</li>
                    <li>Mesh and Inlay Options</li>
                    <li>Medium Pocket</li>
                    <li>Available in Sizes 11, 11.25, 11.5, 11.75, 12, 12.25</li>
                  </ul>
                </div>
                <div className="btn-box text-center">
                  <button onClick={handleCatcher} className="btn" disabled>Coming Soon</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="hb-content bg-white ">
                <div className="hb-content-header">
                  <div className="d-flex justify-content-center">
                    <div className="col-heading-content black">
                      <div className="upper-heading-content black">
                        <h3>Fielder</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-box my-3">
                  <img src={`/images/fielder.png`} className="mx-auto" alt="layer-45" />
                </div>
                <div className="dicription-box mb-3">
                  <ul>
                    <p className="fw-bold">Highlights</p>
                    <li>The Original Signature Series Pattern</li>
                    <li>Most Customizable Model</li>
                    <li>Available in Single or Dual Welting</li>
                    <li>Mesh and Inlay Options</li>
                    <li>Medium Pocket</li>
                    <li>Available in Sizes 11, 11.25, 11.5, 11.75, 12, 12.25</li>
                  </ul>
                </div>
                <div className="btn-box text-center">
                  <button onClick={handleFielder} className="btn">Select</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="hb-content bg-white ">
                <div className="hb-content-header">
                  <div className="d-flex justify-content-center">
                    <div className="col-heading-content">
                      <div className="upper-heading-content">
                        <h3>First Base</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-box my-3">
                  <img src={`/images/firstbase.png`} className="mx-auto" alt="layer-45" />
                </div>
                <div className="dicription-box mb-3">
                  <ul>
                    <p className="fw-bold">Highlights</p>
                    <li>The Original Signature Series Pattern</li>
                    <li>Most Customizable Model</li>
                    <li>Available in Single or Dual Welting</li>
                    <li>Mesh and Inlay Options</li>
                    <li>Medium Pocket</li>
                    <li>Available in Sizes 11, 11.25, 11.5, 11.75, 12, 12.25</li>
                  </ul>
                </div>
                <div className="btn-box text-center">
                  <button onClick={handleFB} className="btn" disabled>Coming Soon</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}