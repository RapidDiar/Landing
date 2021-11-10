function Header() {
  return (
    <div className="min-w-full border-b-2 bg-white">
      <div className="container mx-auto flex flex-row justify-between">
        <div className="self-center">
          <p className="font-sans text-3xl">Logo</p>
        </div>
        <div className="flex flex-row space-x-4 text-2xl ">
          <button className="border-b-4 py-7 border-white tracking-wide font-semibold hover:border-yellow-300">
            Home
          </button>
          <button className="border-b-4 py-7 border-white tracking-wide font-semibold hover:border-yellow-300">
            Discover
          </button>
        </div>
        <div className="self-center text-2xl  ">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-300 px-9 py-3 rounded-full tracking-wide font-semibold ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
