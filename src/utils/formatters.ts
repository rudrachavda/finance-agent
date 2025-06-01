/**
 * Formats a number as currency
 */
export const formatCurrency = (amount: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  
  return formatter.format(amount);
};

/**
 * Formats a date as a readable string
 */
export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Formats a percentage value
 */
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};