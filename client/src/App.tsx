import styles from "./index.module.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router";
import Generator from "./pages/Generator";
import Home from "./pages/Home";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";
import Header from "./dashboard/components/Header";

function App() {
  return (
    <main className={styles.main}>
      <BrowserRouter>
        <Header />
        <div>
          <SideMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate" element={<Generator />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
