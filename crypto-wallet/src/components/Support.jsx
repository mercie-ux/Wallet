import { Link } from "react-router-dom";
const Support = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Support</h2>
        <p>Email: support@hotwallet.com</p>
        <p>Help Center: <a href="#" className="text-blue-600 hover:underline">Visit</a></p>
      <Link to="/" 
      className="back-to-dashboard inline-block w-full max-w-[140px] py-2 px-3 text-sm rounded-md bg-wallet-blue text-white font-semibold hover:bg-wallet-blue-hover active:bg-wallet-blue-active transition-all duration-200 sm:max-w-[160px] sm:text-sm sm:py-2 sm:px-4 md:max-w-[180px] md:text-base md:py-2 md:px-4 lg:max-w-[200px] lg:py-3 lg:px-5 lg:text-base xl:w-auto xl:py-3 xl:px-6 xl:text-lg xl:rounded-lg"
      >
      Back to Dashboard
      </Link>
      </div>
    );
  };
  
  export default Support;