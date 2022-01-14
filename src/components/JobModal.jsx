/* eslint-disable no-sequences */
import React, { Component } from 'react';
import { addJob, removeJob } from '../actions/JobAction';
import assignWork from '../actions/UserAction';
import { connect } from 'react-redux';
import '../styles/jobModal.scss';

class jobModal extends Component {
    state = {
        job: '',
        openAddJobModal: false
    }

    render() {
        const { handleModal, addJob, assignWork, jobInfo } = this.props;
        const { job, openAddJobModal } = this.state;
        return (
            <div className='modal_section'>
                <div className="modal_content">
                    <span onClick={handleModal} className="close">&times;</span>
                    {openAddJobModal
                        ?
                            <div className='job_list'>
                                <h1>Add Job</h1>
                                <input type='text' onChange={event => this.setState({job: event.target.value})} />
                                <button onClick={() => {addJob({name: job}); this.setState({openAddJobModal: false});}}>Submit</button>
                            </div>
                        :
                            <div className='job_list'>
                                <button onClick={() => this.setState({openAddJobModal: true})}>Add Job</button>
                                {this.props.jobReducer.job.length > 0 && <h1>Jobs</h1>}
                                {
                                    this.props.jobReducer.job && this.props.jobReducer.job.map(
                                        (jobs, i) => <div onClick={() => {assignWork({...jobInfo, job_name: jobs.name}); handleModal();}} className='job_section' key={i}>
                                            <span>Name:</span>
                                            <p>{jobs.name}</p>
                                        </div>
                                    )
                                }
                            </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({
    addJob: (job) => dispatch(addJob(job)),
    removeJob: (job) => dispatch(removeJob(job)),
    assignWork: (work) => dispatch(assignWork(work)),
});

export default connect(mapStateToProps, mapDispatchToProps)(jobModal);