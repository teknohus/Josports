import React from "react"; 

export default function Fielder() {

   return(
    <main id="main">
    {/* Product Block */}
    <div className="hb-fielders-glove">
      <div className="container">
        <div className="heading">
          <h2>Fielder Glove</h2>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="hb-content bg-white ">
              <div className="hb-content-header">
                <div className="d-flex justify-content-center">
                  <div className="col-heading-content">
                    <div className="upper-heading-content">
                      <h3>Infield</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-box my-3">
                <img src={`/wp-content/reactpress/apps/builder/build/images/infield.png`} className="mx-auto" alt="layer-45" />
              </div>
              <div className="btn-box text-center">
                <button className="btn">Select</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="hb-content bg-white ">
              <div className="hb-content-header">
                <div className="d-flex justify-content-center">
                  <div className="col-heading-content">
                    <div className="upper-heading-content">
                      <h3>Outfield</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-box my-3">
                <img src={`/wp-content/reactpress/apps/builder/build/images/outfield.png`} className="mx-auto" alt="layer-45" />
              </div>
              <div className="btn-box text-center">
                <button className="btn" disabled>Coming Soon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
   )
}