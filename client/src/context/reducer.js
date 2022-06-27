export const initState = {
  currentUser: null,
  currentProduct: null,
  displayUsers: false,
  createUser: false,
  createProduct: false,
};

export const reducer = (state, action) => {
  console.log(action.type);

  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.client,
      };
    case "SET_CURRENT_PRODUCT":
      return {
        ...state,
        currentProduct: action.product,
      };
    case "TOGGLE_CREATE_USER":
      return {
        ...state,
        createUser: !state.createUser,
      };
    case "TOGGLE_CREATE_PRODUCT":
      return {
        ...state,
        createProduct: !state.createProduct,
      };
    case "TOGGLE_DISPLAY_USERS":
      return {
        ...state,
        displayUsers: !state.displayUsers,
      };
    default:
      return state;
  }
};
