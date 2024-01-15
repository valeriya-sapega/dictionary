import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import './SharedLayout.css';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const {
    fontFamily: { font },
  } = useSelector((state) => state.font);

  return (
    <div className="container" style={{ fontFamily: font }}>
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
export default SharedLayout;
