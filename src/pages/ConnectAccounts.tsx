import React, { useState } from 'react';
import { Check, AlertCircle, CreditCard, Landmark, Wallet } from 'lucide-react';

const ConnectAccounts = () => {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  
  const handleConnect = () => {
    setConnecting(true);
    // Simulate Plaid connection
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
    }, 2000);
  };
  
  // List of supported financial institutions for demo purposes
  const institutions = [
    { name: "Chase", logo: "chase.png", popular: true },
    { name: "Bank of America", logo: "bofa.png", popular: true },
    { name: "Wells Fargo", logo: "wellsfargo.png", popular: true },
    { name: "Citi", logo: "citi.png", popular: true },
    { name: "Capital One", logo: "capitalone.png", popular: true },
    { name: "Discover", logo: "discover.png", popular: false },
    { name: "American Express", logo: "amex.png", popular: false },
    { name: "US Bank", logo: "usbank.png", popular: false },
    { name: "USAA", logo: "usaa.png", popular: false }
  ];
  
  const popularInstitutions = institutions.filter(i => i.popular);
  
  return (
    <div className="animate-fade-in mx-auto max-w-3xl">
      <h1 className="mb-6 text-center text-gray-900">Connect Your Accounts</h1>
      
      {!connected ? (
        <>
          <div className="card mb-8">
            <div className="mb-6 text-center">
              <Wallet className="mx-auto mb-2 h-12 w-12 text-primary-600" />
              <h2 className="mb-2 text-gray-900">Securely Link Your Financial Accounts</h2>
              <p className="text-gray-600">
                Connect your banks and credit cards using Plaid to automatically import transactions
                and track your finances in one place.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="mb-4 text-gray-900">Most Popular Banks</h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {popularInstitutions.map((institution) => (
                  <div
                    key={institution.name}
                    className="flex cursor-pointer flex-col items-center rounded-md border border-gray-200 p-4 hover:border-primary-500 hover:bg-primary-50"
                    onClick={handleConnect}
                  >
                    <div className="mb-2 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Landmark className="h-6 w-6 text-gray-600" />
                    </div>
                    <span className="text-sm font-medium">{institution.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 text-gray-900">Or connect another institution</h3>
              <button
                className={`btn btn-primary w-full ${connecting ? 'opacity-75' : ''}`}
                onClick={handleConnect}
                disabled={connecting}
              >
                {connecting ? (
                  <span className="flex items-center justify-center">
                    <svg className="mr-2 h-4 w-4 animate-spin text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connecting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Launch Plaid Link
                  </span>
                )}
              </button>
            </div>
          </div>
          
          <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-blue-700" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">About your data</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    Your financial data is securely transmitted via Plaid. We never store your bank credentials and all data
                    is encrypted using industry-standard protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="card text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-100">
            <Check className="h-6 w-6 text-success-600" />
          </div>
          <h2 className="mb-2 text-gray-900">Accounts Connected Successfully!</h2>
          <p className="mb-6 text-gray-600">
            We've successfully connected to your accounts and are importing your transactions.
            This process may take a few minutes.
          </p>
          <div className="mb-6 rounded-md bg-gray-50 p-4">
            <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="font-medium">Chase Checking</span>
              <span className="text-success-600">Connected</span>
            </div>
            <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="font-medium">Chase Credit Card</span>
              <span className="text-success-600">Connected</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Chase Savings</span>
              <span className="text-success-600">Connected</span>
            </div>
          </div>
          <a href="/" className="btn btn-primary">
            Go to Dashboard
          </a>
        </div>
      )}
    </div>
  );
};

export default ConnectAccounts;