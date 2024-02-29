import log from '../assets/images/logo.svg';
const Logo = () => {
  return (
    <>
      <nav className="flex justify-start max-w-7xl mx-auto ">
        <img src={log} alt="logo" className=" p-4 " />
      </nav>
    </>
  );
};

export default Logo;
