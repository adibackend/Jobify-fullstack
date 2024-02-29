import { Link } from 'react-router-dom';
import { Logo, FormRow } from '../components';
// import logoimg from '../assets/images/Logo.svg';
const Login = () => {
  return (
    <div className="flex bg-[#F9FAFB]  h-screen  ">
      <div className=" flex h-screen w-screen justify-center items-center">
        <form className=" rounded-md  text-lg shadow-xl ">
          <div className="p-20 mx-5">
            <div className=" space-y-6 tracking-widest ">
              <div className="flex justify-center">
                <Logo />
              </div>
              <div className="flex justify-center">
                <h1 className="text-4xl font-medium ">Login</h1>
              </div>
              <div className="space-y-4">
                <div>
                  <FormRow
                    type="email"
                    name="Email"
                    defaultValue="john@email.com"
                  />
                </div>
                <div>
                  <FormRow
                    type="password"
                    name="Password"
                    defaultValue="*******"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div>
                <button className=" border-sky-600 border-b-4 py-2 bg-[hsl(185,62%,45%)] rounded-md w-full font-medium shadow-md">
                  Submit
                </button>
              </div>
              <div>
                <button className=" border-sky-600 border-b-4 py-2 bg-[hsl(185,62%,45%)] rounded-md w-full font-medium shadow-md">
                  Explore The App!!
                </button>
              </div>
              <div className="tracking-widest flex">
                <p>Not a Member yet ? </p>
                <div>
                  <Link
                    to="/Register"
                    className="p-4 underline hover:underline-offset-4 text-[#2CB1BC] "
                  >
                    Register Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
