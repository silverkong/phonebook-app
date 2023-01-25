// 초기화 값
let initialState = {
  contactList: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SAVE":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: payload.name, phone: payload.phone },
        ],
      };
    default:
      return { ...state };
  }
}

export default reducer;
