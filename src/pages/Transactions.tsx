import React, { useState } from 'react';
import { Search, Filter, Download, ChevronDown } from 'lucide-react';
import { mockTransactions } from '../utils/mockData';
import { formatCurrency } from '../utils/formatters';

const Transactions = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [dateRange, setDateRange] = useState<string>('Last 30 days');
  
  const categories = ['All', ...Array.from(new Set(mockTransactions.map(t => t.category)))];
  const dateRanges = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last year', 'Custom'];
  
  // Filter transactions based on selected category
  const filteredTransactions = selectedCategory === 'All' 
    ? mockTransactions 
    : mockTransactions.filter(t => t.category === selectedCategory);

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex flex-col justify-between md:flex-row md:items-center">
        <h1 className="mb-4 text-gray-900 md:mb-0">Transactions</h1>
        <div className="flex items-center space-x-2">
          <button className="btn btn-outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </button>
          <button className="btn btn-outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </button>
        </div>
      </div>
      
      {/* Filters */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            placeholder="Search transactions..."
          />
        </div>
        
        <div className="relative">
          <select
            className="block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <select
            className="block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            {dateRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Transactions table */}
      <div className="card overflow-hidden">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Merchant
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Account
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                      {transaction.merchant}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                        {transaction.category}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      {transaction.date}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      {transaction.account}
                    </td>
                    <td className={`whitespace-nowrap px-4 py-4 text-right text-sm font-medium ${
                      transaction.amount < 0 ? 'text-error-600' : 'text-success-600'
                    }`}>
                      {formatCurrency(transaction.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;