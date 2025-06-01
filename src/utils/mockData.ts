export const mockTransactions = [
  {
    id: 'tx1',
    date: '2025-01-15',
    merchant: 'Whole Foods',
    amount: -82.45,
    category: 'Groceries',
    account: 'Chase Checking'
  },
  {
    id: 'tx2',
    date: '2025-01-14',
    merchant: 'Netflix',
    amount: -14.99,
    category: 'Entertainment',
    account: 'Chase Credit Card'
  },
  {
    id: 'tx3',
    date: '2025-01-13',
    merchant: 'Uber',
    amount: -24.35,
    category: 'Transportation',
    account: 'Chase Credit Card'
  },
  {
    id: 'tx4',
    date: '2025-01-12',
    merchant: 'Shell',
    amount: -45.20,
    category: 'Transportation',
    account: 'Chase Credit Card'
  },
  {
    id: 'tx5',
    date: '2025-01-10',
    merchant: 'Starbucks',
    amount: -5.65,
    category: 'Dining',
    account: 'Chase Credit Card'
  },
  {
    id: 'tx6',
    date: '2025-01-10',
    merchant: 'Amazon',
    amount: -34.27,
    category: 'Shopping',
    account: 'Chase Credit Card'
  },
  {
    id: 'tx7',
    date: '2025-01-05',
    merchant: 'AT&T',
    amount: -85.00,
    category: 'Utilities',
    account: 'Chase Checking'
  },
  {
    id: 'tx8',
    date: '2025-01-01',
    merchant: 'Rent',
    amount: -1450.00,
    category: 'Housing',
    account: 'Chase Checking'
  },
  {
    id: 'tx9',
    date: '2025-01-01',
    merchant: 'Paycheck',
    amount: 3200.00,
    category: 'Income',
    account: 'Chase Checking'
  },
  {
    id: 'tx10',
    date: '2025-01-15',
    merchant: 'Bonus',
    amount: 500.00,
    category: 'Income',
    account: 'Chase Checking'
  }
];

export const mockAccounts = [
  {
    id: 'acc1',
    name: 'Chase Checking',
    type: 'checking',
    balance: 4356.78,
    institution: 'Chase'
  },
  {
    id: 'acc2',
    name: 'Chase Savings',
    type: 'savings',
    balance: 12500.42,
    institution: 'Chase'
  },
  {
    id: 'acc3',
    name: 'Chase Credit Card',
    type: 'credit',
    balance: -1240.33,
    institution: 'Chase'
  },
  {
    id: 'acc4',
    name: 'Amex Gold Card',
    type: 'credit',
    balance: -680.12,
    institution: 'American Express'
  },
  {
    id: 'acc5',
    name: 'Retirement Fund',
    type: 'investment',
    balance: 45670.89,
    institution: 'Vanguard'
  }
];

export const mockInsights = [
  {
    title: 'Potential Savings',
    description: 'You could save $215/month by reducing subscription services.'
  },
  {
    title: 'Spending Anomaly',
    description: 'Your dining expenses were 30% higher than usual this month.'
  },
  {
    title: 'Budget Alert',
    description: 'You\'ve reached 85% of your shopping budget for this month.'
  },
  {
    title: 'Bill Reminder',
    description: 'Your car insurance payment of $120 is due in 3 days.'
  },
  {
    title: 'Duplicate Charge',
    description: 'We detected a potential duplicate charge from Netflix.'
  },
  {
    title: 'Savings Goal',
    description: 'You\'re on track to reach your vacation savings goal by August.'
  }
];

export const mockMonthlySpending = [
  { month: 'Jan', income: 3700, expenses: 3200, savings: 500 },
  { month: 'Feb', income: 3700, expenses: 3000, savings: 700 },
  { month: 'Mar', income: 3700, expenses: 3400, savings: 300 },
  { month: 'Apr', income: 3700, expenses: 2900, savings: 800 },
  { month: 'May', income: 4200, expenses: 3500, savings: 700 },
  { month: 'Jun', income: 4200, expenses: 3200, savings: 1000 }
];