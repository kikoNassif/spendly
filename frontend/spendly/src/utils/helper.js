import moment from "moment";

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
};

export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";

  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
}

export const prepareExpenseBarChartData = (data = []) => {
  const grouped = {};

  data.forEach((item) => {
    const month = moment(item?.date).format("Do MMM");
    if (!grouped[month]) grouped[month] = 0;
    grouped[month] += Number(item?.amount || 0);
  });

  const chartData = Object.keys(grouped).map((month) => ({
    month,
    amount: grouped[month],
  }));

  // Sort by date
  chartData.sort((a, b) => moment(a.month, "Do MMM") - moment(b.month, "Do MMM"));

  return chartData;
}

export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort((a,b) => new Date(a.date) - new Date(b.date));

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format('Do MMM'),
    amount: item?.amount,
    source: item?.source,
  }));

  return chartData;
}