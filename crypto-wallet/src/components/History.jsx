const History = ({ transactions }) => {
    return (
      <div className="bg-white p-3 xs:p-4 rounded-lg shadow-md">
        <h2 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-gray-800">Transaction History</h2>
        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions yet.</p>
        ) : (
          <ul className="space-y-3">
            {transactions.map((tx, index) => (
              <li key={index} className="border-b py-2">
                <p className="text-sm xs:text-base">
                  <span className="font-medium text-wallet-blue">{tx.type}</span> {tx.amount} {tx.token}{" "}
                  {tx.type === "Send" ? "to" : "from"} {tx.recipient || "You"}
                </p>
                <p className="text-xs xs:text-sm text-gray-500">{new Date(tx.date).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default History;