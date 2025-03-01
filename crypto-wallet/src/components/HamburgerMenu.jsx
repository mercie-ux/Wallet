import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaLock, FaQuestionCircle } from 'react-icons/fa';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
    return (
        <nav className={`fixed top-0 right-0 h-full w-64 bg-wallet-blue text-white transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}>
            <div className="p-3 xs:p-4">
                <button onClick={toggleMenu} className="text-xl xs:text-2xl mb-3 xs:mb-4 focus:outline-none">
                    ✖  
                </button>
                <ul className="space-y-3 xs:space-y-4">
                    <li>
                        <Link to="/" onClick={toggleMenu} className="flex items-center gap-2 text-white hover:text-wallet-blue-light text-sm xs:text-base sm:text-lg py-2">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" onClick={toggleMenu} className="flex items-center gap-2 text-white hover:text-wallet-blue-light text-sm xs:text-base sm:text-lg py-2">
                            <FaUser className="text-base xs:text-lg sm:text-xl" />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" onClick={toggleMenu} className="flex items-center gap-2 text-white hover:text-wallet-blue-light text-sm xs:text-base sm:text-lg py-2">
                        <FaCog className="text-base xs:text-lg sm:text-xl" />
                        Settings    
                        </Link>
                    </li>
                    <li>
                        <Link to="/security" onClick={toggleMenu} className="flex items-center gap-2 text-white hover:text-wallet-blue-light text-sm xs:text-base sm:text-lg py-2">
                        <FaLock className="text-base xs:text-lg sm:text-xl" />
                        Security
                        </Link>
                    </li>
                    <li>
                        <Link to="/support" onClick={toggleMenu} className="flex items-center gap-2 text-white hover:text-wallet-blue-light text-sm xs:text-base sm:text-lg py-2">
                        <FaQuestionCircle className="text-base xs:text-lg sm:text-xl" /> Support
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HamburgerMenu;