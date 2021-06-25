
function showUserInformation(){

   const list = document.querySelector('.list');
   let userInform = localStorage.getItem('saveFormInformation')

   if (userInform){

       let convertingUserInformation = JSON.parse(userInform);

       for (let key in convertingUserInformation){

           let li = document.createElement('LI');

           if (convertingUserInformation[key]){
               li.innerHTML = `${key} - ${convertingUserInformation[key]}`;
               list.append(li);
           }else {
               li.innerHTML = `${key} - данные не заполнены`;
               list.append(li);
           }
       }
   }
    else {
       alert('Контактные данные не заполнены.');
       console.log('Контактные данные не заполнены.');
   }
}
showUserInformation();

//костыль для удаления данных о кнопке submit
function deleteButtonValue(){
    document.querySelector('UL').lastChild.remove();
}
deleteButtonValue();