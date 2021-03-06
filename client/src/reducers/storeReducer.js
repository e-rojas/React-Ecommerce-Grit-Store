const initialStateCartList = [
  { id: 1, prodName: "Gangsta", price: 29.0, imgLink: "link" },
];
const storeReducer = (state = initialStateCartList, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.item];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
      case 'CLEAR_CART':
        return []
    default:
      return state;
  }
};
export default storeReducer;
