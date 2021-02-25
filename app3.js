function specialMessage(){
    if (userName == 'Kyle'){
        document.write('<h2>' + 'Goodbye Kyle' + '</h3>');
    } else {
        document.write('<h2>' + 'Goodbye ' + userNameOutside + '</h3>');
    }
}
// specialMessage();