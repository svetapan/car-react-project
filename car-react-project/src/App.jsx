import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {
  HomePage,
  CatalogPage,
  FavoritesPage,
  NotFoundPage,
} from "./components/pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
