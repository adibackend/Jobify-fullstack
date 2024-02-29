import { Link } from 'react-router-dom';
import { Logo, FormRow } from '../components/';
const Register = () => {
  return (
    <>
      <div className=" bg-[#F9FAFB] flex justify-center items-center h-screen">
        <form className="w-fit bg-[#fffff] text-black shadow-xl rounded-md space-y-6 p-20 text-lg tracking-widest mx-5">
          <div className="flex justify-center">
            <Logo />
            <img src={Logo} alt="" />
          </div>
          <div className="flex justify-center">
            <h1 className="text-4xl font-medium ">Register</h1>
          </div>
          <div>
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
          <div className="flex justify-center">
            <button className="w-full border-sky-600 border-b-4 py-2 bg-[hsl(185,62%,45%)] rounded-md font-medium shadow-md">
              Submit
            </button>
          </div>
          <div className="flex justify-center  ">
            <div>
              <p>Already have an account? </p>
            </div>
            <div>
              <Link
                to="/login"
                className="p-4 underline hover:underline-offset-4 text-[#2CB1BC] "
              >
                login Page
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
