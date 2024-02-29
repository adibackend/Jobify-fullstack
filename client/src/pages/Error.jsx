import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <>
        <div className="mt-28">
          <div className="space-y-7">
            <div className="flex justify-center ">
              <img src={img} alt="" className="max-w-2xl" />
            </div>
            <div className="flex justify-center">
              <Link
                to="/"
                className="text-blue-500 underline hover:underline-offset-4 hover:scale-110 hover:duration-200   hover:text-blue-700"
              >
                Home Page
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  console.log(error);
  return (
    <>
      <h1>Error</h1>
      <Link to="/" className="underline">
        back home
      </Link>
    </>
  );
};
export default Error;
