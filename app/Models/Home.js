import { generateId } from "../Utils/generateId.js"


export class Home {
    constructor(data){
        this.id = generateId()
        this.createdAt = new Date()
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqFootage = data.sqFootage
        this.year = data.year
        this.color = data.color
        this.description = data.description
        this.price = data.price
        this.img = data.img
    }
    get CardTemplate() {
        return /*html*/ `
        <div class="col-12 col-md-4 p-4">
          <div class="card">
            <img src="${this.img}" class="card-img-top"
              alt="">
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-between mb-2">
                <span>Bedrooms: ${this.bedrooms} Bathrooms: ${this.bathrooms}</span>
                <span>$ ${this.price}</span>
              </h5>
              <div class="d-flex justify-content-between">
                <button onclick="app.homesController.setActiveHome('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                See Details
                </button>
                <button onclick="app.homesController.removeHome('${this.id}')" title="Delete home!" class="btn btn-danger">
                  <i class="mdi mdi-delete"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        `
      }
      get ActiveHomeTemplate() {
        return /*html*/`
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Bedrooms: ${this.bedrooms} Bathrooms: ${this.bathrooms}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5>
          ${this.createdAt.toLocaleDateString()}
          </h5>
          <img src="${this.img}" alt="home" class="img-fluid">
          <b>Price: $${this.price}</b>
          <p>Description: ${this.description}</p>
          <div>Year Built: ${this.year}</div>
          <div>Color: ${this.color}</div>
          <div>SqFt: ${this.sqFootage}</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        `
      }
    
      static GetHomeFormTemplate() {
        return /*html*/ `
        <form onsubmit="app.homesController.createHome()">
          <div class="form-floating mb-3">
            <input required type="number" class="form-control" id="home-bedrooms" placeholder="Home Bedrooms"
              name="bedrooms">
            <label for="home-bedrooms">Bedrooms</label>
          </div>
          <div class="form-floating mb-3">
            <input required type="number" class="form-control" id="home-bathrooms" placeholder="Home Bathrooms" name="bathrooms">
            <label for="home-bathrooms">Bathrooms</label>
          </div>
          <div class="form-floating mb-3">
            <input required type="url" class="form-control" id="home-img" placeholder="Home Image" name="img">
            <label for="home-img">Image</label>
          </div>
          <div class="form-floating mb-3">
            <input required type="number" class="form-control" id="home-price" placeholder="Home Price" name="price">
            <label for="home-price">Price</label>
          </div>
          <div class="form-floating mb-3">
            <input required type="number" class="form-control" id="home-year" placeholder="Home Year" name="year">
            <label for="home-year">Year</label>
          </div>
          <div class="form-floating mb-3">
            <input required type="number" class="form-control" id="home-sqft" placeholder="Home SqFt" name="sqFootage">
            <label for="home-sqft">SqFt</label>
          </div>
          <div class="form-floating mb-3">
            <input required type="text" class="form-control" id="home-color" placeholder="Home Color" name="color">
            <label for="home-color">Color</label>
          </div>
          <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a description here" id="home-description"
              name="description"></textarea>
            <label for="home-description">Description</label>
          </div>
          <button type="submit" class="btn btn-success mt-3">Submit</button>
          <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
        </form>
        `
      }
}
