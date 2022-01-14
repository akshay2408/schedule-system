const initialState = {
  job: [
    {name: 'Morning Adams'},
    {name: 'Evenng Aguirre'}
  ]
}

const jobReducer = (state = initialState , action) => {
  switch (action.type) {
    case "addJob":
      return {
        ...state,
        job: [...state.job, action.job]
      };
    default:
      return state;
  }
};
export default jobReducer;