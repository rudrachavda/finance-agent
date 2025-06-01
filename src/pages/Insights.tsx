import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { MessageSquare, Send } from 'lucide-react';
import { mockInsights, mockMonthlySpending } from '../utils/mockData';
import { formatCurrency } from '../utils/formatters';

const Insights = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { text: "Welcome to AI Insights! Ask me questions about your finances.", isUser: false }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    const userMessage = { text: query, isUser: true };
    setMessages([...messages, userMessage]);
    
    // Simulate AI response
    const response = { 
      text: getAIResponse(query), 
      isUser: false 
    };
    
    setTimeout(() => {
      setMessages(prev => [...prev, response]);
    }, 1000);
    
    setQuery('');
  };
  
  // Simple mock AI response system
  const getAIResponse = (q: string) => {
    const lowerQuery = q.toLowerCase();
    
    if (lowerQuery.includes('food') && lowerQuery.includes('last month')) {
      return "You spent $382.45 on food last month, which is 15% less than your 3-month average. Great job!";
    } else if (lowerQuery.includes('highest expense')) {
      return "Your highest expense category last month was Housing at $1,450.00, followed by Transportation at $385.20.";
    } else if (lowerQuery.includes('save') || lowerQuery.includes('saving')) {
      return "Based on your spending habits, you could potentially save an additional $215 per month by reducing subscription services and dining out expenses.";
    } else if (lowerQuery.includes('budget')) {
      return "You're currently within budget for most categories. However, your Entertainment spending is 23% above your set budget for this month.";
    } else {
      return "I'm not sure I understood that question. Try asking about specific spending categories, comparisons to previous months, or budgeting advice.";
    }
  };

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  return (
    <div className="animate-fade-in">
      <h1 className="mb-6 text-gray-900">Financial Insights</h1>
      
      {/* Spending trends chart */}
      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="card">
          <h3 className="mb-4 text-gray-900">Monthly Spending Trends</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={mockMonthlySpending}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                <Legend />
                <Line type="monotone" dataKey="income" stroke="#10B981" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="expenses" stroke="#EF4444" />
                <Line type="monotone" dataKey="savings" stroke="#6366F1" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="card">
          <h3 className="mb-4 text-gray-900">Budget vs. Actual</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { name: 'Housing', budget: 1500, actual: 1450 },
                  { name: 'Food', budget: 500, actual: 483 },
                  { name: 'Transport', budget: 300, actual: 385 },
                  { name: 'Utilities', budget: 250, actual: 220 },
                  { name: 'Entertainment', budget: 200, actual: 245 },
                ]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(value as number)} />
                <Legend />
                <Bar dataKey="budget" fill="#6366F1" />
                <Bar dataKey="actual" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* AI chatbot */}
      <div className="card mb-8">
        <div className="mb-4 flex items-center">
          <MessageSquare className="mr-2 h-5 w-5 text-primary-600" />
          <h3 className="text-gray-900">Ask about your finances</h3>
        </div>
        
        <div className="mb-4 h-64 overflow-y-auto rounded-md border border-gray-200 bg-gray-50 p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-3 max-w-3/4 rounded-lg p-3 ${
                msg.isUser
                  ? 'ml-auto bg-primary-600 text-white'
                  : 'bg-white text-gray-800 shadow'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            className="input flex-1"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="How much did I spend on food last month?"
          />
          <button type="submit" className="btn btn-primary">
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
      
      {/* Insights cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockInsights.map((insight, index) => (
          <div key={index} className="card">
            <h4 className="mb-2 text-gray-900">{insight.title}</h4>
            <p className="mb-4 text-sm text-gray-600">{insight.description}</p>
            <div className="text-sm font-medium text-primary-600 hover:text-primary-700">
              <a href="#">Learn more &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;