// 초기화 값
let initialState = {
  count: 0,
  id: "",
  password: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE":
      return {
        ...state,
        name: action.payload.name,
        phone: action.payload.phone,
      };
    default:
      return { ...state };
  }
}

export default reducer;
