export function ble() {
  return {
    type: "ble"
  }
}

export function changeCity(city) {
  return {
    type: "SET_CITY",
    city: city,
  }
}