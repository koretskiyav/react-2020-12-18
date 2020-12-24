export default (obj, key) => {

  const initialValue = 0;
  const sum = obj.reduce((accumulator, currentReview) => {
    return accumulator + currentReview[key];
  }, initialValue);
  const average = sum / obj.length;

  return average;
};
