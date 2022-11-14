// FIXME Step 1: Set up your model

import { generateId } from "../Utils/generateId.js"

export class Car {

  constructor (data) {
    this.id = generateId()
    this.make = data.make
    // NOTE JS dates are cool? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    this.createdAt = new Date()
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.mileage = data.mileage
    this.color = data.color
    this.img = data.img
    this.description = data.description
  }

  // FIXME Step 4: place template on our model

  // FIXME Step 7? update our template with fields from the class

  get CarCardTemplate() {
    return `
    <div class="col-12 col-md-4 p-4">
      <div class="card">
        <img src="${this.img}" class="card-img-top"
          alt="${this.model}">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between mb-2">
            <span>${this.make} ${this.model}</span>
            <span>$ ${this.price}</span>
          </h5>
          <div class="d-flex justify-content-between">
            <button onclick="app.carsController.setActiveCar('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            See Details
            </button>
            <button onclick="app.carsController.removeCar('${this.id}')" title="Delete car!" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get ActiveCarTemplate() {
    return `
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${this.make} ${this.model}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <h5>
      ${this.createdAt.toLocaleDateString()}
      </h5>
      <img src="${this.img}" alt="car" class="img-fluid">
      <b>Price: $${this.price}</b>
      <p>${this.description}</p>
      <div>Mileage: ${this.mileage} miles</div>
      <div>Color: ${this.color}</div>
      <div>Year: ${this.year}</div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
    `
  }

  static GetCarFormTemplate() {
    return `
    <form onsubmit="app.carsController.createCar()">
      <div class="form-floating mb-3">
        <input required type="text" minlength="3" class="form-control" id="car-make" placeholder="Car Make"
          name="make">
        <label for="car-make">Make</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="text" class="form-control" id="car-model" placeholder="Car Model" name="model">
        <label for="car-model">Model</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="url" class="form-control" id="car-img" placeholder="Car Image" name="img">
        <label for="car-img">Image</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="car-price" placeholder="Car Price" name="price">
        <label for="car-price">Price</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="car-year" placeholder="Car Year" name="year">
        <label for="car-year">Year</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="car-miles" placeholder="Car Miles" name="mileage">
        <label for="car-miles">Mileage</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="text" class="form-control" id="car-color" placeholder="Car Color" name="color">
        <label for="car-color">Color</label>
      </div>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a description here" id="car-description"
          name="description"></textarea>
        <label for="car-description">Description</label>
      </div>
      <button type="submit" class="btn btn-success mt-3">Submit</button>
      <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
    </form>
    `
  }

}