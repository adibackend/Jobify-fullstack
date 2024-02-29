import { Outlet } from 'react-router-dom';
import { SmallSideBar, BigSideBar, Navbar } from '../components';
import { useContext, useState } from 'react';
// const DashBoard=createContext();

const DashboardLayout = () => {
  const user = { user: 'john' };
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTheme = () => {
    console.log('dark theme');
  };
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const logoutUser = () => {
    console.log('logout user');
  };
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-12">
        <div className="hidden lg:block h-screen   lg:col-span-1">
          <BigSideBar  />
        </div>
        <div className="  lg:col-span-11">
          <div className="lg:hidden">
            <SmallSideBar />
          </div>
          <Navbar />
          <div className="py-8 mx-auto w-[90%] ">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};
// export const useDash=useContext(DashBoard);
export default DashboardLayout;
