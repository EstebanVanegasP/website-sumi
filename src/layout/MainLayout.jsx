import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';
import WhatsAppFloatButton from '../components/ui/WhatsAppFloatButton/WhatsAppFloatButton';

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}

export default MainLayout;