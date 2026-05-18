import { Icon } from "@iconify/react";
import Avatar from "react-avatar";

function NavBar() {
  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between h-16 px-8 py-4 bg-white/10
                backdrop-blur-lg
                border border-white/20
                shadow-2xl
                overflow-hidden
                text-white"
    >
      <div className="flex flex-row gap-4 justify-center items-center">
        <Icon icon="mdi:book-open-page-variant" style={{ color: "white", fontSize: "32px" }} />
        <div className="flex flex-col">
          <span className="font-bold text-sm">Digital Guestbook</span>
          <span className="text-xs">Operator Dashboard</span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="flex justify-between items-center bg-red-400 p-5">
          <div style={{ position: "relative", display: "inline-block", marginTop: "5px" }}>
            <Icon icon="heroicons:bell" style={{ fontSize: "28px", color: "white" }} />
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                height: "10px",
                width: "10px",
                backgroundColor: "#ff4d4f",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Siti Rahayu</span>
          <span className="text-xs">Receptionist</span>
        </div>
        <div>
          <Avatar name="Siti Rahayu" className="rounded-full" size="36" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
