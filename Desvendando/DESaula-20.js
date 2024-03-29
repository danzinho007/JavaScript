// Switch Case

function teste(key) {
    switch (key) {
        case 'Daniel':
            console.log("Daniel aqui")
            break;
        case 'Julio':
            console.log("Julio e  ")
        case 'Raquel':
            return console.log("Raquel aqui")
        case 'Animal':
        case 'Urso' :
            console.log("Animal aqui")
            return 'Urso aqui';
        default:
            console.log("Qualquer outro aqui")
            break;
    }
}
teste('Julio')
teste('Animal')
