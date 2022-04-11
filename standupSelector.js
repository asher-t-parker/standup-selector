// apprentice list
const apprentices = ['Asher', 'Amanda', 'An', 'Bria', 'Ty', 'Colin', 'Jovante', 'Kristian', 'McKenzie', 'Rex', 'Ross', 'Ryan', 'Will'];
  
//randomising functions 
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

function hostSelector(array) {
    const host = array[randIndex(array)];
    return host;
}

console.log(randIndex(apprentices));
console.log(shuffle(apprentices));
console.log(tripletiser(apprentices));
console.log(hostSelector(apprentices));

//DOM Interaction
const listItems = document.querySelectorAll("li");
const hostLine = document.getElementById("h2");

function assign() {
    const selectedHost = hostSelector(apprentices);
    hostLine.innerHTML = `Your host today will be: ${selectedHost}`;
    const shuffledArr = tripletiser(apprentices);
    for(let i = 0; i < listItems.length; i++) {
        listItems[i].innerHTML = shuffledArr[i];
    }
}

const shuffleButton = document.getElementById("button");
shuffleButton.addEventListener('click', assign);    


