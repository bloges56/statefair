export const SideshowTicketHolders = () => {
    const eventHub = document.querySelector('#state-fair')
    const contentTarget = document.querySelector('.sideshow')

    eventHub.addEventListener('sideshowTicketPurchased', event => {
        contentTarget.innerHTML += `
            <div class="person gawker"></div>
        `
    })
}