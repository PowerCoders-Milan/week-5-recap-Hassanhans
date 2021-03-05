

//Prompt the user to provide a password.//

//If the password is correct then add the class green to the text 
//and remove the class transparent in order to show it.//
var text = prompt('Please Insert your Number');
 var pTag = document.querySelector('p');

 if(text === 'hassan'){
     pTag.classList.remove('transparent')
     pTag.classList.add('green');
 }