export const getArrayDaysFromTwoDates = (from: Date, to: Date): Date[] => {
  const days = [];

  for (let i = from; i <= to; i.setDate(i.getDate() + 1)) {
    days.push(new Date(i));
  }

  return days;
};
