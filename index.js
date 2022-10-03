function writeCards(name, event) {
    const thankYous = []
    for (let i = 0; i < name.length; i++) {
        thankYous.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return thankYous
}
 

function countDown(i) {
    while (i >=0) {
        console.log(i)
        i--
    }
}




















// function writeCards(name, phrase) {
//     const newArray = []
//     for (let i = 0; i < name.length; i++) {
//         newArray.push (`Thank you, ${name[i]}, for the wonderful ${phrase} gift!`)
//     }
//     return newArray 
// }

// function countDown(x) {
//     while (x >= 0) {
//         console.log(x)
//     x--
//     }
// }