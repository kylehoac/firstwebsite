function getusername(){
    let userName = prompt('Please enter your name');
    if (userName == 'Kyle'){
        document.write('<h2>' + "Welcome " + 'Master' + "!" + '</h2>');
    }  else {
        document.write('<h2>' + "Welcome " + userName + "!" + '</h2>');
    }
    return userName;
}
let userName = getusername();
function specialMessage(){
    if (userName == 'Kyle'){
        document.write('<h2>' + 'Goodbye Master' + '</h3>');
    } else {
        document.write('<h2>' + 'Goodbye ' + userName + '</h3>');
    } 
}
function getHours(){
    let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = "Good evening!";
}   else if (hourNow > 12) {
    greeting = "Good afternoon!";
}   else if (hourNow > 0) {
    greeting = "Good morning";
}   else {
    greeting = "Welcome!";
}

document.write("<h3>" + greeting + "</h3>");
}

function numberGuessingGame(){
    let correctAnswer = 7;
    let guesses = 5;
    for(let i = 0; i < guesses; i++){
        let userAnswer = prompt('Please enter a number from 1-10');
        if(userAnswer == correctAnswer){
            alert('You got it right')
            break;
        }
    }
}

numberGuessingGame();

function didyoushower(){
    let shower = prompt('Have you showered today');
    if (shower == 'yes'){
        alert('you dont smell bad!');
    }   else if (shower == 'no'){
        alert('you smell bad!');
    }   else {
        alert('Please take a shower');
    }
    return shower;
}
let shower = didyoushower();

function starrating(){
    let answer = prompt('Please rate my website 1-5 stars');
    for(let i = 0; i < answer; i++){
        document.write(`<img src="https://toppng.com/uploads/preview/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png">`);
    }
}