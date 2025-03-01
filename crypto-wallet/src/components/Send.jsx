import { useState } from "react";

const Send = ({ addTransaction, tokens, setTokens }) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState(tokens[0]?.name || "");

  const handleSend = (e) => {
    e.preventDefault();
    if (!recipient || !amount || !selectedToken) return;

    const token = tokens.find((t) => t.name === selectedToken);
    if (!token || token.balance < parseFloat(amount)) {
      alert("Insufficient balance!");
      return;
    }

    // Update token balance
    setTokens(
      tokens.map((t) =>
        t.name === selectedToken
          ? { ...t, balance: t.balance - parseFloat(amount) }
          : t
      )
    );

    // Add transaction to history
    addTransaction({
      type: "Send",
      token: selectedToken,
      amount: parseFloat(amount),
      recipient,
      date: new Date().toISOString(),
    });

    // Reset form
    setRecipient("");
    setAmount("");
  };

  return (
    <div className="bg-white p-3 xs:p-4 rounded-lg shadow-md">
      <h2 className="text-lg xs:text-lg font-semibold mb-3 xs:mb-4 text-gray-800">Send Tokens</h2>
      <form onSubmit={handleSend}>
        <div className="mb-3 xs:mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">Token</label>
          <select
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value)}
            className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-wallet-blue"
          >
            {tokens.map((token) => (
              <option key={token.name} value={token.name}>
                {token.name} ({token.balance})
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 xs:mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">Recipient Address</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="0x..."
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
        <button
          type="submit"
          className="w-full bg-wallet-blue text-white font-semibold py-2 rounded-lg hover:bg-wallet-blue-hover active:bg-wallet-blue-active transition-all duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Send;