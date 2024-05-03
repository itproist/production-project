import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { MainPageAsync } from "./pages/MainPage/index.async";
import { AboutPageAsync } from "./pages/AboutPage/index.async";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { ClassNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ClassNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
