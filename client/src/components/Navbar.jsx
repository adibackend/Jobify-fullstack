import { FaHome } from 'react-icons/fa';
import { FaAlignLeft } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import Logo from './Logo';
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center rounded-lg bg-[#F5F5F5] shadow-lg px-8">
        <div className="cursor-pointer">
          <FaAlignLeft />
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
