import styles from "./styles.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Cervo, Leao, Vaca, Ovelha, Abelha } from "../pages";
import { Menu, MenuLateral, Footer, Ad } from "../components";

export default function Router() {
  return (
    <BrowserRouter>
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <Menu />
        </div>
        <div className={styles["sidenav"]}>
          <MenuLateral />
        </div>
        <div className={styles["content"]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cervo" element={<Cervo />} />
            <Route path="/Leao" element={<Leao />} />
            <Route path="/Vaca" element={<Vaca />} />
            <Route path="/Ovelha" element={<Ovelha />} />
            <Route path="/Abelha" element={<Abelha />} />
          </Routes>
        </div>
        <div className={styles["anuncios"]}>
          <Ad />
        </div>
        <div className={styles["footer"]}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
