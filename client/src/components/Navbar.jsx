import { FaHome } from 'react-icons/fa';
import { FaAlignLeft } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import Logo from './Logo';
import { useDashBoard } from '../pages/DashboardLayout';

const Navbar = () => {
  const a=useDashBoard();
  console.log(a)
  return (
    <>
      <nav className="flex justify-between items-center rounded-lg bg-[#F5F5F5] shadow-lg px-8">
        <div className="cursor-pointer">
          <button onClick={a.toggleSideBar}>

          <FaAlignLeft />
          </button>
        </div>
        <div className="w-24">
          <Logo />
        </div>
        <div className="cursor-pointer">
          <IoMdLogOut />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
