import { generateId } from "../Utils/generateId.js"
export class Job {
    constructor(data) {
        this.id = generateId()
        this.date = new Date()
        this.company = data.company
        this.title = data.title
        this.description = data.description
        this.pay = data.pay
    }

    get JobCardTemplate() {
        return /*html*/ `
        <div class="col-12 col-md-4 p-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title d-flex justify-content-between mb-2">
                        <span>Company: ${this.company} Job Title: ${this.title}</span>
                        <span>$ ${this.pay}</span>
                    </h5>
                </div>
                <div class="d-flex justify-content-between">
                    <button onclick="app.jobsController.setActiveJob('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    See Details
                    </button>
                    <button onclick="app.jobsController.removeJob('${this.id}')" title="Delete Job!" class="btn btn-danger">
                        <i class="mdi mdi-delete"></i>
                    </button>
                </div>
            </div>
        </div>
        `
    }

    get activeJobTemplate(){
        return /*html*/ `
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${this.company} ${this.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5>
          ${this.date.toLocaleDateString()}
          </h5>
          <b>Pay: $${this.pay}</b>
          <p>${this.description}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    `
    }

    static GetJobFormTemplate() {
        return /*html*/ `
            <form onsubmit="app.jobsController.createJob()">
              <div class="form-floating mb-3">
                <input required type="text" minlength="3" class="form-control" id="job-company" placeholder="job-company"
                  name="company">
                <label for="job-company">Company</label>
              </div>
              <div class="form-floating mb-3">
                <input required type="text" class="form-control" id="job-title" placeholder="Job Title" name="title">
                <label for="job-title">Job Title</label>
              </div>
              <div class="form-floating mb-3">
                <input required type="number" class="form-control" id="job-pay" placeholder="job-pay" name="pay">
                <label for="job-pay">Job Pay Per Hour</label>
              </div>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a description here" id="job-description"
                  name="description"></textarea>
                <label for="job-description">Description</label>
              </div>
              <button type="submit" class="btn btn-success mt-3">Submit</button>
              <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
            </form>
        `
        }

}