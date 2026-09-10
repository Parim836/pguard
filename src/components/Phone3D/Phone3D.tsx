import "./styles/Phone3D.css";

function Phone3D() {
  return (
    <div className="phone3d-scene">
      <div className="phone3d-area">
        <div className="phone3d-wrapper">
          <div className="phone3d">
            <div className="phone3d-back">
              <div className="phone3d-camera-module">
                <div className="phone3d-lens phone3d-lens-1" />
                <div className="phone3d-lens phone3d-lens-2" />
                <div className="phone3d-lens phone3d-lens-3" />

                <div className="phone3d-flash" />
              </div>

              <div className="phone3d-logo"></div>
            </div>

            <div className="phone3d-body">
              <div className="phone3d-button phone3d-action-button" />
              <div className="phone3d-button phone3d-volume-up" />
              <div className="phone3d-button phone3d-volume-down" />

              <div className="phone3d-button phone3d-power-button" />

              <div className="phone3d-screen">
                <div className="phone3d-screen-light" />

                <div className="phone3d-dynamic-island">
                  <div className="phone3d-camera-dot" />
                </div>
              </div>
            </div>
          </div>

          <div className="phone3d-shadow" />
        </div>
      </div>
    </div>
  );
}

export default Phone3D;
