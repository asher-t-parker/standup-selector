const apprentices = ['Asher', 'Amanda', 'An', 'Bria', 'Ty', 'Colin', 'Jovante', 'Kristian', 'McKenzie', 'Rex', 'Ross', 'Ryan', 'Will'];
  
function randIndex(array) { 
    const randIndex = Math.floor(Math.random() * array.length);
    return randIndex;
}

function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {     
        const j = randIndex(array);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function tripletiser(array) {
    let trishuffled = apprentices;
    for(let i = 0; i < 3; i++) {
        trishuffled = shuffle(trishuffled);
    }
    return trishuffled;
}
  
console.log(tripletiser(apprentices));

