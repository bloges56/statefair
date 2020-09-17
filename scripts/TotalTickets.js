let totalTickets = 0

const contentTarget = document.querySelector("#total-tickets")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener('anyTicketPruchased', event => {
    totalTickets +=1
    contentTarget.innerHTML = `Total Tickets: ${totalTickets}`
})