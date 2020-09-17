const contentTarget = document.querySelector(".ticketBooth")
const eventHub = document.querySelector("#state-fair")

const ticketPurchasedEvent = new CustomEvent("anyTicketPruchased")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "rideTicket"){
        const rideEvent = new CustomEvent("rideTicketPurchased")

        
        eventHub.dispatchEvent(rideEvent)
        eventHub.dispatchEvent(ticketPurchasedEvent)
        
    }

    if(clickEvent.target.id === "foodTicket"){
        const foodEvent = new CustomEvent("foodTicketPurchased")

        eventHub.dispatchEvent(foodEvent)
        eventHub.dispatchEvent(ticketPurchasedEvent)
    }

    if(clickEvent.target.id === "gameTicket"){
        const gameEvent = new CustomEvent("gameTicketPurchased")

        eventHub.dispatchEvent(gameEvent)
        eventHub.dispatchEvent(ticketPurchasedEvent)
    }

    if(clickEvent.target.id === "sideshowTicket"){
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")

        eventHub.dispatchEvent(sideshowEvent)
        eventHub.dispatchEvent(ticketPurchasedEvent)
    }

    if(clickEvent.target.id === "fullPackageTicket"){
        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased")

        eventHub.dispatchEvent(fullPackageEvent)
        eventHub.dispatchEvent(ticketPurchasedEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
    `
}


