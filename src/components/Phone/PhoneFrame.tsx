import type { ReactNode, Ref } from "react";
import { Wifi } from "lucide-react";
import "./style.css";

/** Shared hardware for the Smart Search and Hourly Report previews. */
export default function PhoneFrame({ children, wrapperRef }: {
  children: ReactNode;
  wrapperRef?: Ref<HTMLDivElement>;
}) {
  return (
    <div ref={wrapperRef} className="phone3d-wrapper">
      <div className="phone3d">
        <div className="phone3d-back">
          <div className="phone-camera">
            <div className="camera-lens lens-1" />
            <div className="camera-lens lens-2" />
            <div className="camera-lens lens-3" />
            <div className="camera-flash" />
          </div>
          <div className="apple-logo"></div>
        </div>
        <div className="phone3d-body">
          <div className="side-button action-button" />
          <div className="side-button volume-up" />
          <div className="side-button volume-down" />
          <div className="side-button power-button" />
          <div className="phone-screen">
            <div className="status-bar">
              <div className="status-date">9:41</div>
              <div className="status-icons">
                <div className="signal-icon"><span /><span /><span /><span /></div>
                <Wifi size={15} strokeWidth={2.5} />
                <div className="battery-icon"><div className="battery-level" /><div className="battery-tip" /></div>
              </div>
            </div>
            <div className="dynamic-island"><div className="dynamic-camera" /></div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
