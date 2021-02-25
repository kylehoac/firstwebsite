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



//document.write('img src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"');