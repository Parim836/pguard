import "./Phone3D.css";

function Phone3D() {
  return (
    <div className="phone3d-scene">

      <div className="phone3d-area">

        <div className="phone3d-wrapper">

          <div className="phone3d">

            {/* BACK */}
            <div className="phone3d-back">

              <div className="phone3d-camera-module">

                <div className="phone3d-lens phone3d-lens-1" />
                <div className="phone3d-lens phone3d-lens-2" />
                <div className="phone3d-lens phone3d-lens-3" />

                <div className="phone3d-flash" />

              </div>

              <div className="phone3d-logo">
                
              </div>

            </div>


            {/* BODY */}
            <div className="phone3d-body">

              {/* LEFT BUTTONS */}
              <div className="phone3d-button phone3d-action-button" />
              <div className="phone3d-button phone3d-volume-up" />
              <div className="phone3d-button phone3d-volume-down" />

              {/* RIGHT BUTTON */}
              <div className="phone3d-button phone3d-power-button" />


              {/* FRONT SCREEN */}
              <div className="phone3d-screen">

                <div className="phone3d-screen-light" />

                <div className="phone3d-dynamic-island">
                  <div className="phone3d-camera-dot" />
                </div>

              </div>

            </div>

          </div>


          {/* GROUND SHADOW */}
          <div className="phone3d-shadow" />

        </div>

      </div>

    </div>
  );
}

export default Phone3D;