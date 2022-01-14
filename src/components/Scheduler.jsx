import moment from 'moment';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import JobModal from './JobModal';

class Scheduler extends Component {

    state = {
        openModal: false,
        index: null,
        job_type: ''
    }

    handleModal = (index, job_type) => {
        this.setState({
            openModal: !this.state.openModal,
            index,
            job_type
        })
    }

    render() {
        const { props } = this.props;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {
                                props.scheduleReducer.schedule_range.map(
                                    (range, i) => <th key={i}>
                                        <div className='header_section'>
                                            <span>{moment(range).format('ddd')}</span>
                                            <span>{moment(range).format('DD-MM-YYYY')}</span>
                                        </div>
                                    </th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Barista</td>
                            {
                                props.userReducer.Barista.job_assign.map(
                                    (job, i) => <td onClick={() => this.handleModal(i, 'Barista')} key={i}>
                                        <div className={`${job==='Assign Job' ? 'job_assignment' : 'assigned_job'}`}>{job}</div>
                                    </td>
                                )
                            }
                        </tr>
                        <tr>
                            <td>Security</td>
                            {
                                props.userReducer.Security.job_assign.map(
                                    (job, i) => <td onClick={() => this.handleModal(i, 'Security')} key={i}>
                                        <div className={`${job==='Assign Job' ? 'job_assignment' : 'assigned_job'}`}>{job}</div>
                                    </td>
                                )
                            }
                        </tr>
                        <tr>
                            <td>Waiter</td>
                            {
                                props.userReducer.Waiter.job_assign.map(
                                    (job, i) => <td onClick={() => this.handleModal(i, 'Waiter')} key={i}>
                                        <div className={`${job==='Assign Job' ? 'job_assignment' : 'assigned_job'}`}>{job}</div>
                                    </td>
                                )
                            }
                        </tr>
                        <tr>
                            <td>Painter</td>
                            {
                                props.userReducer.Painter.job_assign.map(
                                    (job, i) => <td onClick={() => this.handleModal(i, 'Painter')} key={i}>
                                        <div className={`${job==='Assign Job' ? 'job_assignment' : 'assigned_job'}`}>{job}</div>
                                    </td>
                                )
                            }
                        </tr>
                    </tbody>
                </table>
                {this.state.openModal &&
                    <JobModal jobInfo={{index: this.state.index, user_type: this.state.job_type}} handleModal={this.handleModal} />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, null)(Scheduler);
