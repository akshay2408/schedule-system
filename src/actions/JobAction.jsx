export const addJob = (job) => {
    return {
      type: "addJob",
      job: job
    }
  }
  
  export const removeJob = () => {
    return {
      type: "removeJob"
    }
  }