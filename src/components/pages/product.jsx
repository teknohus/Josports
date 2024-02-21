import React from "react"; 

export default function Product() {

  const handleCatcher = () => {
    
  }
  const handleFielder = () => {
    
  }
  const handleFB = () => {
    
  }

   return(
    <main id="main">
    {/* Product Block */}
    <div className="hb-fielders-glove">
      <div className="container">
        <div className="heading">
          <h2>Glove Builder</h2>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="hb-content bg-white ">
              <div className="hb-content-header">
                <div className="d-flex justify-content-center">
                  <div className="col-heading-content">
                    <div className="upper-heading-content">
                      <h3>Catcher</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-box my-3">
                <img src={`/wp-content/reactpress/apps/builder/build/images/catcher.png`} className="mx-auto" alt="layer-45" />
              </div>
              <div className="btn-box text-center">
                <button onClick={handleCatcher} className="btn" disabled>Coming Soon</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
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
                <img src={`/wp-content/reactpress/apps/builder/build/images/fielder.png`} className="mx-auto" alt="layer-45" />
              </div>
              <div className="btn-box text-center">
                <button onClick={handleFielder} className="btn">Select</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
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
                <img src={`/wp-content/reactpress/apps/builder/build/images/firstbase.png`} className="mx-auto" alt="layer-45" />
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