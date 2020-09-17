export const FullPackageTicketHolders = () => {
    const eventHub = document.querySelector('#state-fair')
    const contentTargets = document.getElementsByClassName('people')

    eventHub.addEventListener('fullPackageTicketPurchased', event => {
        for(var target of contentTargets){
            target.innerHTML += `
                <div class="person bigSpender"></div>
            `
        };
    })
}