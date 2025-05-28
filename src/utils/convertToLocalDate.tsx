const convertToLocalDate = (inputDate: number) => {
  const date = new Date(inputDate * 1000);
  return date.toLocaleDateString();
};

export default convertToLocalDate;
