const contentTarget = document.querySelector(".ticketBooth")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "rideTicket"){
        const rideEvent = new CustomEvent("rideTicketPurchased")

        eventHub.dispatchEvent(rideEvent)
    }

    if(clickEvent.target.id === "foodTicket"){
        const rideEvent = new CustomEvent("foodTicketPurchased")

        eventHub.dispatchEvent(rideEvent)
    }

    if(clickEvent.target.id === "gameTicket"){
        const rideEvent = new CustomEvent("gameTicketPurchased")

        eventHub.dispatchEvent(rideEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
    `
}


