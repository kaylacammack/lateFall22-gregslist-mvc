import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { saveState } from "../Utils/Store.js";
class JobsService {
    setActiveJob(jobId) {
        let foundJob = appState.jobs.find(j => j.id == jobId)
        appState.activeJob = foundJob
    }
    createJob(formData) {
        let newJob = new Job(formData)
        appState.jobs = [...appState.jobs, newJob]
        saveState('jobs', appState.jobs)
    }
    removeJob(jobId) {
        let filteredArray = appState.jobs.filter(j => j.id != jobId)
        appState.jobs = filteredArray
        saveState('jobs', appState.jobs)
    }
}

export const jobsService = new JobsService()

