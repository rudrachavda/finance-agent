import React from 'react';
import { CreditCard, Plus, RefreshCw, Trash2 } from 'lucide-react';
import { mockAccounts } from '../utils/mockData';
import { formatCurrency } from '../utils/formatters';

const Accounts = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex flex-col justify-between md:flex-row md:items-center">
        <h1 className="mb-4 text-gray-900 md:mb-0">Connected Accounts</h1>
        <button className="btn btn-primary">
          <Plus className="mr-2 h-4 w-4" />
          Add Account
        </button>
      </div>
      
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockAccounts.map((account) => (
          <div 
            key={account.id}
            className="card border border-gray-200 overflow-hidden transition-all hover:shadow-lg"
          >
            <div className="mb-4 flex items-center">
              <div className={`mr-4 flex h-10 w-10 items-center justify-center rounded-full ${
                account.type === 'checking' ? 'bg-primary-100 text-primary-600' :
                account.type === 'savings' ? 'bg-secondary-100 text-secondary-600' :
                account.type === 'credit' ? 'bg-accent-100 text-accent-600' :
                'bg-gray-100 text-gray-600'
              }`}>
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{account.name}</h4>
                <p className="text-sm text-gray-500">{account.institution}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600">Current Balance</p>
              <p className={`text-xl font-semibold ${
                account.balance >= 0 ? 'text-success-700' : 'text-error-700'
              }`}>
                {formatCurrency(account.balance)}
              </p>
            </div>
            
            <div className="flex text-sm font-medium">
              <button className="flex flex-1 items-center justify-center rounded-bl-lg border-t border-r border-gray-200 py-2 text-primary-600 hover:bg-gray-50">
                <RefreshCw className="mr-1 h-4 w-4" />
                Refresh
              </button>
              <button className="flex flex-1 items-center justify-center rounded-br-lg border-t border-gray-200 py-2 text-error-600 hover:bg-gray-50">
                <Trash2 className="mr-1 h-4 w-4" />
                Remove
              </button>
            </div>
          </div>
        ))}
        
        {/* Add account card */}
        <div className="card border border-dashed border-gray-300 flex items-center justify-center hover:border-primary-500 hover:bg-primary-50 transition-colors cursor-pointer">
          <div className="text-center p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
              <Plus className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="mb-1 text-gray-900">Connect New Account</h3>
            <p className="text-sm text-gray-500">Link your bank or credit card</p>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h3 className="mb-4 text-gray-900">Account Management</h3>
        <p className="mb-4 text-gray-600">
          Your financial data is securely synced with Plaid. You can manage your connected accounts,
          update credentials, or remove accounts at any time.
        </p>
        <div className="rounded-md bg-primary-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <CreditCard className="h-5 w-5 text-primary-600" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-primary-800">Auto-sync enabled</h4>
              <p className="mt-1 text-sm text-primary-700">
                Your accounts will automatically update every 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;