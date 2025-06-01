import React from 'react';
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { CreditCard, TrendingUp, TrendingDown, AlertTriangle, DollarSign } from 'lucide-react';
import { mockTransactions } from '../utils/mockData';
import { formatCurrency } from '../utils/formatters';

const Dashboard = () => {
  // For demo purposes, we'll calculate spending by category
  const categoryTotals = mockTransactions.reduce((acc, transaction) => {
    const { category, amount } = transaction;
    if (amount < 0) { // Only count expenses
      acc[category] = (acc[category] || 0) + Math.abs(amount);
    }
    return acc;
  }, {} as Record<string, number>);

  const categoryData = Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value: parseFloat(value.toFixed(2)),
  }));

  // Monthly spending data
  const monthlyData = [
    { name: 'Jan', spending: 1200 },
    { name: 'Feb', spending: 1100 },
    { name: 'Mar', spending: 1300 },
    { name: 'Apr', spending: 900 },
    { name: 'May', spending: 1500 },
    { name: 'Jun', spending: 1200 },
  ];

  // Sample colors for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  return (
    <div className="animate-fade-in">
      <h1 className="mb-6 text-gray-900">Financial Dashboard</h1>
      
      {/* Quick stats */}
      <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Cash flow */}
        <div className="card border-l-4 border-primary-500">
          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Cash Flow</p>
              <p className="text-2xl font-semibold text-gray-900">+$1,200.00</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="mr-1.5 h-4 w-4 text-success-500" />
            <span className="text-success-700">+8% from last month</span>
          </div>
        </div>
        
        {/* Monthly spending */}
        <div className="card border-l-4 border-secondary-500">
          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-600">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Spending</p>
              <p className="text-2xl font-semibold text-gray-900">$3,240.00</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingDown className="mr-1.5 h-4 w-4 text-error-500" />
            <span className="text-error-700">+12% from last month</span>
          </div>
        </div>
        
        {/* Upcoming bills */}
        <div className="card border-l-4 border-accent-500">
          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Upcoming Bills</p>
              <p className="text-2xl font-semibold text-gray-900">$840.00</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-gray-600">Due in next 7 days</span>
          </div>
        </div>
        
        {/* Anomalies */}
        <div className="card border-l-4 border-error-500">
          <div className="flex items-center">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-error-100 text-error-600">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Anomalies Detected</p>
              <p className="text-2xl font-semibold text-gray-900">2</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-error-700">Possible duplicate charges</span>
          </div>
        </div>
      </div>
      
      {/* Charts */}
      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Spending by category */}
        <div className="card">
          <h3 className="mb-4 text-gray-900">Spending by Category</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Monthly spending trends */}
        <div className="card">
          <h3 className="mb-4 text-gray-900">Monthly Spending Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                <Bar dataKey="spending" fill="#4338CA" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Recent transactions */}
      <div className="card">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-gray-900">Recent Transactions</h3>
          <a href="/transactions" className="text-sm font-medium text-primary-600 hover:text-primary-700">
            View all
          </a>
        </div>
        <div className="overflow-hidden">
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
                    <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {mockTransactions.slice(0, 5).map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">
                        {transaction.merchant}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          {transaction.category}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500">
                        {transaction.date}
                      </td>
                      <td className={`whitespace-nowrap px-4 py-3 text-right text-sm font-medium ${
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
    </div>
  );
};

export default Dashboard;