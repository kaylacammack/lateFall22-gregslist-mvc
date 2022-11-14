import { Job } from "../Models/Job.js"
import { appState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawJobs() {
    let template = ''
    appState.jobs.forEach(job => template += job.JobCardTemplate)
    setHTML('listings', template)
    setHTML('listings-form', Job.GetJobFormTemplate())
  }
  
  function _drawActiveJob() {
    setHTML('details', appState.activeJob.activeJobTemplate)
  }
  
  
  // FIXME Step 5: Create a controller with a console log in the contructor
  export class JobsController {
  
    constructor () {
      // NOTE first step should always be get a console log
      // console.log('Hello Jeremy, your cars controller is working')
      // _drawCars()
      appState.on('jobs', _drawJobs)
      appState.on('activeJob', _drawActiveJob)
    }
  
    // NOTE only use async/await for Pop.confirm this week
    async removeJob(jobId) {
      if (await Pop.confirm('Are you sure want to delete that job?')) {
        jobsService.removeJob(jobId)
      }
    }
  
    createJob() {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      jobsService.createJob(formData)
    }
  
    setActiveJob(jobId) {
      jobsService.setActiveJob(jobId)
    }
  
    showJobs() {
      _drawJobs()
    }
  
  }