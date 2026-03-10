import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import HomePage from '../../pages/Home/HomePage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;