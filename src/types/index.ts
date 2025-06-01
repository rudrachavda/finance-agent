export interface Transaction {
  id: string;
  date: string;
  merchant: string;
  amount: number;
  category: string;
  account: string;
  description?: string;
  pending?: boolean;
}

export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'investment' | 'other';
  balance: number;
  institution: string;
  mask?: string;
  subtype?: string;
}

export interface Category {
  id: string;
  name: string;
  color?: string;
  icon?: string;
  parent?: string;
}

export interface Budget {
  id: string;
  category: string;
  amount: number;
  period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  spent?: number;
  remaining?: number;
}

export interface PlaidLinkOptions {
  token: string;
  onSuccess: (public_token: string, metadata: any) => void;
  onExit?: (err: any, metadata: any) => void;
  onEvent?: (eventName: string, metadata: any) => void;
}

export interface GoogleSheetConfig {
  sheetId: string;
  enabled: boolean;
  lastSync?: string;
  syncOptions: {
    transactions: boolean;
    accounts: boolean;
    categories: boolean;
    insights: boolean;
  };
}

export interface UserSettings {
  name: string;
  email: string;
  notifications: {
    anomalies: boolean;
    bills: boolean;
    insights: boolean;
    summaries: boolean;
  };
  darkMode: boolean;
  googleSheet?: GoogleSheetConfig;
  currency: string;
}

export interface InsightData {
  title: string;
  description: string;
  type?: 'info' | 'warning' | 'success' | 'danger';
  date?: string;
  relatedTransactions?: string[];
  dismissed?: boolean;
}