import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
 
  return userInfo && userInfo.user.type === 13 ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace />
  );
};
export default AdminRoute;