const workers = {
  Barista: {
    id: 1,
    job_assign: ['Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', ],
  },
  Security: {
    id: 2,
    job_assign: ['Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', ]
  },
  Waiter: {
    id: 3,
    job_assign: ['Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', ]
  },
  Painter:{
    id: 4,
    job_assign: ['Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', 'Assign Job', ]
  }
}

const userReducer = (state = workers, action) => {
  switch (action.type) {
    case "assignWork":
      if( action.work.user_type === 'Barista') {
        return {
          ...state,
          Barista: {...state.Barista, job_assign: state.Barista.job_assign.map((work, i) => {if(action.work.index!==i){return work}else{return action.work.job_name}})}
        };
      } else if( action.work.user_type === 'Security') {
        return {
          ...state,
          Security: {...state.Security, job_assign: state.Security.job_assign.map((work, i) => {if(action.work.index!==i){return work}else{return action.work.job_name}})}
        };
      } else if( action.work.user_type === 'Waiter') {
        return {
          ...state,
          Waiter: {...state.Waiter, job_assign: state.Waiter.job_assign.map((work, i) => {if(action.work.index!==i){return work}else{return action.work.job_name}})}
        };
      } else {
        return {
          ...state,
          Painter: {...state.Painter, job_assign: state.Painter.job_assign.map((work, i) => {if(action.work.index!==i){return work}else{return action.work.job_name}})}
        };
      }
    default:
      return state;
  }
};

export default userReducer;