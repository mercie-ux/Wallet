import { useState } from "react";

const Receive = ({ addToken }) => {
    const [tokenName, setTokenName] = useState("");
    const [amount, setAmount] = useState("");

    const walletAddress = "0x1234567890abcdef1234567890abcdef12345678"; // Mock wallet address

    const handleReceive = (e) => {
        e.preventDefault();
        if (!tokenName || !amount) return;

        addToken({
            name: tokenName.toUpperCase(),
            balance: parseFloat(amount),
            value: 0, // placeholder value
        });

        setTokenName("");
        setAmount("");
    };  

    return (
        <div className="bg-white p-3 xs:p-4 rounded-lg shadow-md">
            <h2 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-gray-800">Receive Tokens</h2>
            <div className="mb-3 xs:mb-4">
                <div className="w-32 h-32 bg-wallet-blue-light mx-auto flex items-center justify-center text-gray-500 text-sm xs:text-base">
                    <span>QR Code Placeholder</span>
                </div>
                <p className="text-center mt-2 text-sm xs:text-base text-gray-600">{walletAddress}</p>
            </div>
            <form onSubmit={handleReceive}>
                <div className="mb-3 xs:mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Token Name</label>
                    <input
                        type="text"
                        value={tokenName}
                        onChange={(e) => setTokenName(e.target.value)}
                        placeholder="e.g, ETH"
                        className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-wallet-blue"
                    />
                </div>
                <div className="mb-3 xs:mb-4">
                    <label className="block text-sm font-medium mb-1 text-gray-700">Amount</label>
                    <input 
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.0"
                        className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-wallet-blue"
                        min="0"
                        step="0.01"
                    />
                </div>
                <button type="submit" className="w-full bg-wallet-blue text-white font-semibold py-2 rounded-lg hover:bg-wallet-blue-hover active:bg-wallet-blue-active transition-all duration-200">
                    Add Received Token
                </button>
            </form>
        </div>
    );
};

export default Receive;