function Hero() {
  return (
    <div className="container min-w-full h-screen flex items-center">
      <div className="container mx-auto flex flex-row">
        <div className="w-2/4">
          <p className=" text-7xl font-bold mb-6">
            Buy, sell and mint fractions of NFTs.?
          </p>
          <p className="text-xl mb-14">
            Fractional ownership of the world’s most sought after NFTs.
            Fractional reduces entry costs, increases access, and allows for
            synergy with other DeFi primitives.
          </p>
          <button className=" flex flex-row items-center text-xl font-semibold px-6 py-3 text-white bg-gray-900 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
              fill="#000000"
              className="fill-current text-yellow-500 "
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,16.5v-9l7,4.5L9.5,16.5z" />
              </g>
            </svg>
            View Demo
          </button>
        </div>
        <div className="w-2/4"></div>
      </div>
    </div>
  );
}

export default Hero;
