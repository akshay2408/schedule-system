import React, { Component } from 'react';
import { connect } from 'react-redux';
import userAction from '../actions/UserAction';
import { nextWeek, previousWeek } from '../actions/ScheduleAction';
import '../styles/main.scss';
import Scheduler from './Scheduler';
import moment from 'moment';

class Main extends Component {
    render() {
        return (
            <div className='main_container'>
                <div className='inner_container'>
                    <div className='time_range'>
                        {`${moment(this.props.scheduleReducer.current_date).date()} - ${moment(this.props.scheduleReducer.current_date).add(1, 'weeks').format('DD MMM yyyy')}[Week #${this.props.scheduleReducer.week}]`}
                    </div>
                    <div className='slider'>
                        <button onClick={() => this.props.previousWeek()}>{'<<'}</button>
                        <button onClick={() => this.props.nextWeek()}>{'>>'}</button>
                    </div>
                </div>
                <Scheduler props={this.props} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({
    userAction: (payload) => dispatch(userAction(payload)),
    nextWeek: () => dispatch(nextWeek()),
    previousWeek: () => dispatch(previousWeek())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
