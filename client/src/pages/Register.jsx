import { Link } from 'react-router-dom';
import { Logo, FormRow } from '../components/';
const Register = () => {
  return (
    <>
      <div className=" min-h-screen flex items-center justify-center ">
        <form className=" text-black space-y-2 p-10 w-[30%] shadow-xl mt-4 rounded-lg border-t-[hsl(185,62%,45%)] border-4 tracking-widest min-h-fit">
          <div className="flex justify-center ">
            <Logo />
            <img src={Logo} alt="" />
          </div>
          <div className="flex justify-center">
            <h1 className="text-4xl font-medium ">Register</h1>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <FormRow type="text" name="Name" defaultValue="john" />
              <FormRow type="text" name="Location" defaultValue="Seattle" />
              <FormRow
                type="email"
                name="Email"
                defaultValue="john@email.com"
              />
              <FormRow
                type="password"
                name="Password"
                defaultValue="********"
              />
              <FormRow
                type="password"
                name="Confirm Password"
                defaultValue="********"
              />
            </div>
          </div>
          <div className=" space-y-4 ">
            <div className="flex justify-center">
              <button className="\ bg-[hsl(185,62%,45%)] r\ font-semibold border-sky-600 border-b-4  rounded-md px-3 py-2 hover:bg-cyan-700 w-[95%] ">
                Submit
              </button>
            </div>
            <div className="flex justify-center space-x-4 ">
              <div>
                <p>Already have an account? </p>
              </div>
              <div className="">
                <Link
                  to="/login"
                  className="\ text-[#2CB1BC] underline hover:underline-offset-4 hover:text-cyan-700"
                >
                  login Page
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
