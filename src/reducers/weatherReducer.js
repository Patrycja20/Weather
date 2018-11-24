export default function (state = [], action) {
  switch (action.type) {
    case 'ble':
      return {...state, ble: "gffgh"};
    default:
      return state;
  }
}