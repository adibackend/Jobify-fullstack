import { Logo } from '../components/';
const Landing = () => {
  return (
    <>
      <Logo  />
      <div className="relative h-[calc(100vh-200px)]  my-auto">
        <div className="flex items-center justify-center space-x-11 h-full  ">
          <div className="space-y-4">
            <h1 className="text-8xl font-bold">
              Job <span className="text-[#2CB1BC]">Tracking </span>
              App
            </h1>
            <p className="max-w-xl leading-loose font-sans text-lg">
              I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
              bottle single-origin coffee chia. Aesthetic post-ironic venmo,
              quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
              narwhal.
            </p>
            <div className="space-x-2">
              <button className="tracking-widest text-white  bg-[#2CB1BC] rounded-md p-4 hover:bg-[#2CB1BC] hover:scale-105 hover:duration-200  ">
                Register
              </button>
              <button className="bg-[#2CB1BC] tracking-widest text-white   rounded-md p-4 hover:bg-[#2CB1BC] hover:scale-105 hover:duration-200  ">
                Login/Demo user
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://jobify.live/assets/main-bfab0516.svg"
              alt="image hai ji"
              className="flex justify-start h-96 w-96"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing;
