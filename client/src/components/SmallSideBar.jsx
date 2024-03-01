import { BigSideBar, Logo } from '.';
import { useDashBoard } from '../pages/DashboardLayout';
import { IoCloseSharp } from 'react-icons/io5';
import links from '../utils/links';
import { NavLink } from 'react-router-dom/dist/umd/react-router-dom.development';
const SmallSideBar = () => {
  const { showSideBar, toggleSideBar } = useDashBoard();
  return (
    <>
      <div className={showSideBar ? 'block' : 'hidden'}>
        <div className="fixed inset-0 bg-gray-500  w-screen h-screen  bg-opacity-75 flex items-center justify-center ">
          <div className="bg-white p-4 rounded shadow-lg w-[90%] h-[90%]">
            <div>
              <button onClick={toggleSideBar}>

              <IoCloseSharp />
              </button>
            </div>
            <div className="flex  flex-col items-center justify-center ">
              <div className="h-26 mt-5 ">
                <Logo />
              </div>
              <div className="h-[calc(100%-20%)]  items-center justify-center mt-28 grid grid-cols-1 place-items-center">
                <div className=" mx-auto my-auto">
                  {links.map((Links) => {
                    const { text, path, icon } = Links;
                    return (
                      <>
                        <div className="grid place-items-center">
                          <NavLink to={path} key={text} className="text-xl  ">
                            <div className="flex space-x-4 items-center">
                              <label
                                htmlFor={text}
                                className="hover:text-[#2CB1BC]"
                              >
                                {icon}
                              </label>
                              <p
                                id={text}
                                className="leading-loose hover:underline hover:underline-offset-2 hover:text-[#2CB1BC]"
                              >
                                {text}
                              </p>
                            </div>
                          </NavLink>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SmallSideBar;
