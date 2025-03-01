const TokenSection = ({ tokens }) => {
    return (
      <div className="bg-white p-3 xs:p-4 rounded-lg shadow-md">
        <h2 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-gray-800">Your Tokens</h2>
        {tokens.length === 0 ? (
          <p className="text-gray-500">No tokens yet.</p>
        ) : (
          <ul className="space-y-3">
            {tokens.map((token, index) => (
              <li key={index} className="flex justify-between items-center border-b py-2">
                <span className="font-medium text-wallet-blue">{token.name}</span>
                <div className="text-right">
                  <p className="text-sm xs:text-base text-gray-700">{token.balance} {token.name}</p>
                  <p className="text-xs xs:text-sm text-gray-500">${token.value.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default TokenSection;