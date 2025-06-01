import React, { useState } from 'react';
import { Bell, CreditCard, Lock, User, Wallet, ToggleLeft, ToggleRight } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    anomalies: true,
    bills: true,
    insights: false,
    summaries: true
  });
  
  const [sheetSync, setSheetSync] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="animate-fade-in">
      <h1 className="mb-6 text-gray-900">Settings</h1>
      
      <div className="space-y-8">
        {/* Profile Settings */}
        <div className="card">
          <div className="mb-4 flex items-center">
            <User className="mr-2 h-5 w-5 text-primary-600" />
            <h3 className="text-gray-900">Profile Settings</h3>
          </div>
          
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="input"
                defaultValue="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="input"
                defaultValue="john.doe@example.com"
              />
            </div>
          </div>
          
          <button className="btn btn-primary">
            Save Changes
          </button>
        </div>
        
        {/* Google Sheets Integration */}
        <div className="card">
          <div className="mb-4 flex items-center">
            <Wallet className="mr-2 h-5 w-5 text-secondary-600" />
            <h3 className="text-gray-900">Google Sheets Integration</h3>
          </div>
          
          <p className="mb-4 text-gray-600">
            Sync your financial data with Google Sheets for more detailed analysis and customization.
          </p>
          
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Auto-sync with Google Sheets</h4>
              <p className="text-xs text-gray-500">Automatically update your Google Sheet when new transactions are imported</p>
            </div>
            <button
              type="button"
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              onClick={() => setSheetSync(!sheetSync)}
            >
              <span className="sr-only">Toggle Google Sheets sync</span>
              <span
                className={`${
                  sheetSync ? 'translate-x-5 bg-primary-600' : 'translate-x-0 bg-white'
                } pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out`}
              ></span>
            </button>
          </div>
          
          <div className="mb-4">
            <label htmlFor="sheet-url" className="mb-1 block text-sm font-medium text-gray-700">
              Google Sheet URL
            </label>
            <input
              type="text"
              id="sheet-url"
              className="input"
              placeholder="https://docs.google.com/spreadsheets/d/..."
            />
          </div>
          
          <div className="mb-4">
            <h4 className="mb-2 text-sm font-medium text-gray-900">Data to Sync</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="sync-transactions" className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                <label htmlFor="sync-transactions" className="ml-2 text-sm text-gray-700">Transactions</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="sync-categories" className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                <label htmlFor="sync-categories" className="ml-2 text-sm text-gray-700">Categories</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="sync-accounts" className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" defaultChecked />
                <label htmlFor="sync-accounts" className="ml-2 text-sm text-gray-700">Account Balances</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="sync-insights" className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                <label htmlFor="sync-insights" className="ml-2 text-sm text-gray-700">Insights and Analytics</label>
              </div>
            </div>
          </div>
          
          <button className="btn btn-primary">
            Connect Google Sheet
          </button>
        </div>
        
        {/* Notifications */}
        <div className="card">
          <div className="mb-4 flex items-center">
            <Bell className="mr-2 h-5 w-5 text-accent-600" />
            <h3 className="text-gray-900">Notifications</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Anomaly Detection</h4>
                <p className="text-xs text-gray-500">Get notified about unusual spending or potential fraud</p>
              </div>
              <button 
                type="button" 
                onClick={() => handleNotificationChange('anomalies')}
                className="text-primary-600"
              >
                {notifications.anomalies ? <ToggleRight className="h-6 w-6" /> : <ToggleLeft className="h-6 w-6" />}
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Bill Reminders</h4>
                <p className="text-xs text-gray-500">Get notified about upcoming bills and payments</p>
              </div>
              <button 
                type="button" 
                onClick={() => handleNotificationChange('bills')}
                className="text-primary-600"
              >
                {notifications.bills ? <ToggleRight className="h-6 w-6" /> : <ToggleLeft className="h-6 w-6" />}
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Weekly Summaries</h4>
                <p className="text-xs text-gray-500">Receive weekly summaries of your spending and saving</p>
              </div>
              <button 
                type="button" 
                onClick={() => handleNotificationChange('summaries')}
                className="text-primary-600"
              >
                {notifications.summaries ? <ToggleRight className="h-6 w-6" /> : <ToggleLeft className="h-6 w-6" />}
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Financial Insights</h4>
                <p className="text-xs text-gray-500">Get personalized financial insights and tips</p>
              </div>
              <button 
                type="button" 
                onClick={() => handleNotificationChange('insights')}
                className="text-primary-600"
              >
                {notifications.insights ? <ToggleRight className="h-6 w-6" /> : <ToggleLeft className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Security */}
        <div className="card">
          <div className="mb-4 flex items-center">
            <Lock className="mr-2 h-5 w-5 text-primary-600" />
            <h3 className="text-gray-900">Security</h3>
          </div>
          
          <div className="mb-4">
            <h4 className="mb-2 text-sm font-medium text-gray-900">Change Password</h4>
            <div className="mb-2">
              <label htmlFor="current-password" className="mb-1 block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                id="current-password"
                className="input"
                placeholder="••••••••"
              />
            </div>
            
            <div className="mb-2">
              <label htmlFor="new-password" className="mb-1 block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                className="input"
                placeholder="••••••••"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="confirm-password" className="mb-1 block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="input"
                placeholder="••••••••"
              />
            </div>
            
            <button className="btn btn-primary">
              Update Password
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h4 className="mb-2 text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
            <p className="mb-4 text-sm text-gray-600">
              Enable two-factor authentication for an extra layer of security.
            </p>
            <button className="btn btn-outline">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;