import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);
const initialState = {
  current_date: moment(),
  week: 1,
  schedule_range: Array.from(moment.range(moment().add(1, 'weeks').startOf('isoWeek'), moment().add(2, 'weeks').startOf('week')).by('day'))
}

const scheduleReducer = (state = initialState , action) => {
  switch (action.type) {
    case "nextWeek":
      return {
        ...state,
        current_date: moment(state.current_date).add(1, 'weeks')
      };
    case "previousWeek":
      return {
        ...state,
        current_date: moment(state.current_date).subtract(1, 'weeks')
      };
    default:
      return state;
  }
};
export default scheduleReducer;