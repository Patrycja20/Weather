export default function (state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'ble':
      return {...state, ble: "gffgh"};
    default:
      return state;
  }
}