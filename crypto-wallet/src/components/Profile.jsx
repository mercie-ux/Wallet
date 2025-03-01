import { Link } from 'react-router-dom';
const Profile = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md max-w-lg mx-auto mt-4">
        <h2 className="text-lg font-semibold mb-4">Profile</h2>
        <p className="text-gray-700 mb-2">
            Account: 0x1234567890abcdef1234567890abcdef12345678</p>
        <p className="text-gray-700 mb-4">Email: user@example.com</p>
        <Link to="/" 
        className="back-to-dashboard inline-block w-full max-w-[140px] py-2 px-3 text-sm rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 sm:max-w-[160px] sm:text-sm sm:py-2 sm:px-4 md:max-w-[180px] md:text-base md:py-2 md:px-4 lg:max-w-[200px] lg:py-3 lg:px-5 lg:text-base xl:w-auto xl:py-3 xl:px-6 xl:text-lg xl:rounded-lg"
      >
        Back to dashboard
        </Link>
      </div>
    );
  };
  
  export default Profile;