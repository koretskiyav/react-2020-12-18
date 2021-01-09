import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  console.log('before guid: ', store.getState());
  if (action.type === ADD_REVIEW) {
    //action.payload.review = { ...action.payload.review, id: generateGuid() }
    action.payload.review.id = generateGuid();
  }
  debugger;
  next(action);
  console.log('after guid: ', store.getState());
};

//https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function generateGuid() {
  var result, i, j;
  result = '';
  for (j = 0; j < 32; j++) {
    if (j === 8 || j === 12 || j === 16 || j === 20) result = result + '-';
    i = Math.floor(Math.random() * 16)
      .toString(16)
      .toUpperCase();
    result = result + i;
  }
  return result;
}
