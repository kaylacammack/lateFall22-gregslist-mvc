import { appState } from "../AppState.js"
import { Home } from "../Models/Home.js"
import { homesService } from "../Services/HomesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

export class HomesController {
    constructor(){
        appState.on('homes', _drawHomes)
        appState.on('activeHome', _drawActiveHome)
    }

    async removeHome(homeId) {
        if (await Pop.confirm('Are you sure want to delete that home')) {
            homesService.removeHome(homeId)
        }
    }
    
    createHome() {
        // NOTE don't refresh the page
        window.event.preventDefault()
        let form = window.event.target
        let formData = getFormData(form)
        homesService.createHome(formData)
    }
    
    setActiveHome(homeId) {
        homesService.setActiveHome(homeId)
    }

    showHomes() {
        _drawHomes()
    }
}

function _drawHomes() {
    let template = ''
    homesService.getHomes().forEach(home => template += home.CardTemplate)
    setHTML('listings', template)
    setHTML('listings-form', Home.GetHomeFormTemplate())
}

function _drawActiveHome() {
    setHTML('details', appState.activeHome.ActiveHomeTemplate)
}