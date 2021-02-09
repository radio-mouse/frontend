import events from 'events'
import init from 'init'

const start = () => {
    init()
    events()
}

document.addEventListener(`DOMContentLoaded`, start)