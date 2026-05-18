import { Outlet } from "react-router-dom";
import bgBlur from "../../../assets/images/bg-blur.jpg";
import NavBar from "../NavBar/NavBar";

function Layout() {
  return (
    <div className="h-screen bg-center flex w-screen overflow-hidden" style={{ backgroundImage: `url(${bgBlur})`, backgroundSize: "cover" }}>
      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
