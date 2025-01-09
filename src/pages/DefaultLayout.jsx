import { Outlet } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
export default function DefaultLayout() {
  return (
    <div>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>

      <FooterComponent />
    </div>
  );
}
