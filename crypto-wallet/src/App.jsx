import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";
import Send from "./components/Send";
import Receive from "./components/Receive";
import History from "./components/History";
import TokenSection from "./components/TokenSection";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Security from "./components/Security";
import Support from "./components/Support";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [transactions, setTransactions] = useState([]); // store transaction history
  const [tokens, setTokens] = useState([
    { name: "ETH", balance: 2.5, value: 2500 },
    { name: "BTC", balance: 0.1, value: 3000 },
  ]);// Sample token data

  // toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add a transaction to history
  const addTranscation = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Add a received token to the token list
  const addToken = (token) => {
    const existingToken = tokens.find((t) => t.name === token.name);
    if (existingToken) {
      setTokens(
        tokens.map((t) => t.name === token.name ? {...t, balance: t.balance + token.amount }: t)
      );
    } else {
      setTokens([...tokens,{...token, value: token.value || 0 }]);
    }
  };
  return (
    <Router>
      <div className="min-h-screen bg-wallet-blue-light font-sans">
        {/*Header with Hamburger Menu */}
        <header className="bg-wallet-blue text-white p-4 flex justify-between items-center">
          <h1 className="text-xl xs:text-xl font-bold">Hot Wallet</h1>
          <button onClick={toggleMenu} className="text-xl xs:text-2xl focus:outline-none">
            {isMenuOpen ? "❌" : "☰"}
          </button>
        </header>

        {/*Hamburger Menu */}
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/*Main Content */}
        <main className="p-3 xs:p-4">
          <Routes>
            <Route 
              path="/"
              element={
                <>
                  <div className="mb-6">
                    <TokenSection tokens={tokens} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Send 
                      tokens={tokens} 
                      addTranscation={addTranscation}
                      setTokens={setTokens}
                    />
                    <Receive addToken={addToken} />
                  </div>
                  <History transactions={transactions} />
                </>
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/security" element={<Security />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;