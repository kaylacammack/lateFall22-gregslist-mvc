import { appState } from "../AppState.js";
import { Home } from "../Models/Home.js"
import { saveState } from "../Utils/Store.js";

class HomesService {
    getHomes() {
        return appState.homes
    }
    setActiveHome(homeId) {
        let foundHome = appState.homes.find(home => home.id == homeId)
        appState.activeHome = foundHome
      }
    createHome(formData) {
        let newHome = new Home(formData)
        // console.log(newCar);
        appState.homes = [...appState.homes, newHome]
        saveState('home', appState.homes)
      }
      removeHome(homeId) {
        // NOTE test that things are talking to each other
        // console.log("it's the car service", carId);
        // NOTE give me a new array of cars, where all of the cars Id's do not match the Id I passed down
        let filteredArray = appState.homes.filter(home => home.id != homeId)
        appState.homes = filteredArray
        saveState('homes', appState.homes)
      }
}

export const homesService = new HomesService()