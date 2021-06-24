// Домашка #18 — Storage

// 1. Собрать данные с формы при ее сабмите
// 2. Сохранить эти данные в качестве объекта внутри localStorage (не забываем о преобразовании в json)
// 3. Создать второй html файл, в котором списком (ul > li) вывести все те данные, которые пользователь ввел в форму ранее
// 4. Если данных нет, то показать соответствующее сообщение

const formInformation = document.getElementById('form');

formInformation.addEventListener('submit' , function (event) {
    event.preventDefault();

    let userInformation = formInformation.elements;
    let saveFormInformation = {};

    for ( let key of userInformation){
        saveFormInformation[key.name] = key.value;
    }

    localStorage.setItem(
        'saveFormInformation',
        JSON.stringify(saveFormInformation)
    );

    window.open('saveFormInformation.html');
})


function convertingInformation(){

    if(localStorage.saveFormInformation){

        let userInformation = formInformation.elements;
        let convertingUserInformation = JSON.parse(localStorage.saveFormInformation);

        for( let key of userInformation) {
            key.value = convertingUserInformation[key.name];
        }

    } else {
        alert('Вы впервые посетили нас. Пожалуйста, заполните форму.');
        console.log('Вы впервые посетили нас. Пожалуйста, заполните форму.');
    }

}

convertingInformation();