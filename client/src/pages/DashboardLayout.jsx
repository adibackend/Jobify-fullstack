import { Outlet } from 'react-router-dom';
import { SmallSideBar, BigSideBar, Navbar } from '../components';
import { useContext, useState,createContext } from 'react';
const DashBoard=createContext();

const DashboardLayout = () => {
  const user = { user: 'john' };
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTheme = () => {
    console.log('dark theme');
  };
  const toggleSideBar = () => {
    console.log('toggedsidebar')
    setShowSideBar(!showSideBar);
  };
  const logoutUser = () => {
    console.log('logout user');
  };
  return (
    <>
    <div>

      <DashBoard.Provider value={{user,logoutUser,toggleSideBar,toggleDarkTheme,isDarkTheme,showSideBar}}>
        <main className="grid grid-cols-1 lg:grid-cols-12">
          <div className="hidden lg:block h-screen   lg:col-span-1">
            <BigSideBar />
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
      </DashBoard.Provider>
    </div>
    </>
  );
};
export const useDashBoard =()=> useContext(DashBoard);
export default DashboardLayout;
