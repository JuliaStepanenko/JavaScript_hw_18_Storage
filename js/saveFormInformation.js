let convertingUserInformation = JSON.parse(localStorage.saveFormInformation);
console.log(convertingUserInformation);

// let list = document.querySelector('.list');
// let li = document.createElement('LI');
// li.innerHTML =
// list.prepend(li);



   for (let key in convertingUserInformation) {
       if(convertingUserInformation.hasOwnProperty(key)){
           console.log(`${key} : ${convertingUserInformation[key]}`)
       }
   }



