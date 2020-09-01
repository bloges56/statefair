export const FoodTicketHolders = () => {
    const eventHub = document.querySelector('#state-fair')
    const contentTarget = document.querySelector('.food')

    eventHub.addEventListener('foodTicketPurchased', event =>{
        contentTarget.innerHTML += `
            <div class="person eater"></div>
        `
    })
}