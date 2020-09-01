export const GameTicketHolders = () => {
    const eventHub = document.querySelector('#state-fair')
    const contentTarget = document.querySelector('.games')

    eventHub.addEventListener('gameTicketPurchased', event => {
        contentTarget.innerHTML += `
            <div class="person player"></div>
        `
    })
}