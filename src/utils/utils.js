export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-GB', { timeZone: 'UTC' });
};
