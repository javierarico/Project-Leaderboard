let body = document.body;
body.style.fontFamily = "Open Sans, sans-serif";

let title = document.createElement('h1');
title.classList = "title";
title.textContent = "30 Days Of Javascript Challenge Leaderboard";
title.style.textAlign = "center";
title.style.fontWeight = "lighter";
title.style.margin = "5vh";
body.appendChild(title);

let inputWrapper = document.createElement('div');
inputWrapper.classList = "input-wrapper";
inputWrapper.style.display = "flex";
inputWrapper.style.flexDirection = "row";
inputWrapper.style.justifyContent = "center";
inputWrapper.style.alignItems = "center";
inputWrapper.style.margin = "0vh 5vw";
body.appendChild(inputWrapper);

let inputFirstName = document.createElement('input');
inputFirstName.classList = "input-first-name";
inputFirstName.placeholder = "First Name";
inputFirstName.style.width = "15vw";
inputFirstName.style.marginRight = "1vw";
inputFirstName.style.padding = ".5rem"
inputWrapper.appendChild(inputFirstName);

let inputLastName = document.createElement('input');
inputLastName.classList = "input-last-name";
inputLastName.placeholder = "Last Name";
inputLastName.style.width = "15vw";
inputLastName.style.marginRight = "1vw";
inputLastName.style.padding = ".5rem"
inputWrapper.appendChild(inputLastName);

let inputCountry = document.createElement('input');
inputCountry.classList = "input-country";
inputCountry.placeholder = "Country";
inputCountry.style.width = "15vw";
inputCountry.style.marginRight = "1vw";
inputCountry.style.padding = ".5rem";
inputWrapper.appendChild(inputCountry);

let inputScore = document.createElement('input');
inputScore.classList = "input-score";
inputScore.placeholder = "Player Score";
inputScore.style.width = "15vw";
inputScore.style.marginRight = "1vw";
inputScore.style.padding = ".5rem"
inputWrapper.appendChild(inputScore);

let addBtn = document.createElement('button');
addBtn.classList = "add-player";
addBtn.style.height = "2.3rem";
addBtn.style.width = "15vw";
addBtn.textContent = "Add Player";
addBtn.style.backgroundColor = "#ebcccc";
addBtn.style.border = "none";
addBtn.style.color = "#ffffff";
inputWrapper.appendChild(addBtn);

let warningTxt = document.createElement('p');
warningTxt.classList = "warning-text";
warningTxt.style.textAlign = "center";
warningTxt.style.color = "red";
warningTxt.style.fontWeight = "bolder";
warningTxt.style.fontSize = ".8rem";
body.appendChild(warningTxt);

let contentWrapper = document.createElement('div');
contentWrapper.classList = "dynamic-content-wrapper";
contentWrapper.style.margin = "5vh 7vw";
contentWrapper.style.display = "flex";
contentWrapper.style.flexDirection = "column-reverse";
body.appendChild(contentWrapper);

function createNewItem(first,last,country,score){
    let itemList = document.createElement('div');
    itemList.classList = "item-list";
    itemList.style.marginBottom = "1vh";
    itemList.style.backgroundColor = "#ebcccc";
    itemList.style.borderRadius = "5px";
    itemList.style.display = "grid";
    itemList.style.gap = ".5rem"
    itemList.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    contentWrapper.appendChild(itemList);

    let firstCol = document.createElement('div');
    firstCol.style.display = "flex";
    firstCol.style.flexDirection = "column";
    firstCol.style.justifyContent = "center";
    firstCol.style.alignItems = "center";
    firstCol.style.marginLeft = "4vw";
    itemList.appendChild(firstCol);

    let fullName = document.createElement('p');
    fullName.textContent = `${first} ${last}`;
    fullName.style.marginBottom = "0";
    fullName.style.fontSize = "1rem";
    firstCol.appendChild(fullName);

    let creationDate = document.createElement('p');
    creationDate.textContent = currentTime();
    creationDate.style.color = "#9e9e9e";
    creationDate.style.marginTop = ".1rem";
    creationDate.style.fontSize = ".7rem";
    firstCol.appendChild(creationDate);

    let secondCol = document.createElement('div');
    secondCol.style.display = "flex";
    secondCol.style.justifyContent = "center";
    secondCol.style.alignItems = "center";
    itemList.appendChild(secondCol);

    let secondColTxt = document.createElement('p');
    secondColTxt.textContent = country;
    secondCol.appendChild(secondColTxt);

    let thirdCol = document.createElement('div');
    thirdCol.style.display = "flex";
    thirdCol.style.justifyContent = "center";
    thirdCol.style.alignItems = "center";
    itemList.appendChild(thirdCol);

    let thirdColTxt = document.createElement('p');
    thirdColTxt.textContent = score;
    thirdCol.appendChild(thirdColTxt);

    let fourthCol = document.createElement('div');
    fourthCol.style.display = "flex";
    fourthCol.style.flexDirection = "row";
    fourthCol.style.alignItems = "center";
    fourthCol.style.gap = "1vw";
    fourthCol.style.marginRight = "4vw";
    itemList.appendChild(fourthCol);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.style.fontSize = ".8rem";
    deleteBtn.style.padding = "1vw";
    deleteBtn.style.color = "red";
    deleteBtn.style.backgroundColor = "#ffffff";
    deleteBtn.style.border = "none";
    deleteBtn.style.borderRadius = "100%";
    fourthCol.appendChild(deleteBtn);

    let addFiveBtn = document.createElement('button');
    addFiveBtn.textContent = "+5";
    addFiveBtn.style.fontSize = ".8rem";
    addFiveBtn.style.padding = "1vw";
    addFiveBtn.style.backgroundColor = "#ffffff";
    addFiveBtn.style.border = "none";
    addFiveBtn.style.borderRadius = "100%";
    fourthCol.appendChild(addFiveBtn);

    let restFiveBtn = document.createElement('button');
    restFiveBtn.textContent = "-5";
    restFiveBtn.style.fontSize = ".8rem";
    restFiveBtn.style.padding = "1vw";
    restFiveBtn.style.backgroundColor = "#ffffff";
    restFiveBtn.style.border = "none";
    restFiveBtn.style.borderRadius = "100%";
    fourthCol.appendChild(restFiveBtn);

    deleteBtn.addEventListener('mouseenter', e => {
        deleteBtn.style.backgroundColor = "#f2f2f2";
    });

    deleteBtn.addEventListener('mouseleave', e => {
        deleteBtn.style.backgroundColor = "#ffffff";
    });

    deleteBtn.addEventListener('click', e => {
        contentWrapper.removeChild(itemList);

    });

    addFiveBtn.addEventListener('mouseenter', e => {
        addFiveBtn.style.backgroundColor = "#f2f2f2";
    });

    addFiveBtn.addEventListener('mouseleave', e => {
        addFiveBtn.style.backgroundColor = "#ffffff";
    });

    addFiveBtn.addEventListener('click', e => {
        let oldValue = Number(thirdCol.textContent);
        let newValue = oldValue + 5;
        if(newValue <= 100){
            thirdCol.textContent = newValue;
        } else {
            thirdCol.textContent = 100;
        }
    });

    restFiveBtn.addEventListener('mouseenter', e => {
        restFiveBtn.style.backgroundColor = "#f2f2f2";
    });

    restFiveBtn.addEventListener('mouseleave', e => {
        restFiveBtn.style.backgroundColor = "#ffffff";
    });

    restFiveBtn.addEventListener('click', e => {
        let oldValue = Number(thirdCol.textContent);
        let newValue = oldValue - 5;
        if(newValue >= 0){
            thirdCol.textContent = newValue;
        } else {
            thirdCol.textContent = 0;
        }
    });
}
createNewItem("Javiera", "Rico", "Argentina", 90);
createNewItem("Pablo", "Benza", "USA", 95);
createNewItem("Agustina", "Martinez", "Chile", 50);
createNewItem("Martin", "Perez", "Spain", 70);


/* EVENT LISTENERS */
let firstNameValue;
inputFirstName.addEventListener('change', e => {
    firstNameValue = e.target.value;
});

let lastNameValue;
inputLastName.addEventListener('change', e => {
    lastNameValue = e.target.value;
});

let countryValue;
inputCountry.addEventListener('change', e => {
    countryValue = e.target.value;
});

let scoreValue;
inputScore.addEventListener('change', e => {
    scoreValue = e.target.value;
});

addBtn.addEventListener('click', e => {
    //Valida que ningun campo este vacio al apretar add, y que el score field sea numerico entre 0 y 100
    if(firstNameValue != undefined && lastNameValue != undefined && countryValue != undefined && typeof scoreValue == "string"){
        if(scoreValue >= 0 && scoreValue <= 100){
            createNewItem(firstNameValue, lastNameValue, countryValue, scoreValue);
            warningTxt.textContent = "";
        } else {
            warningTxt.textContent = "Please enter a number value from 0 to 100";
        }

    } else if (firstNameValue != undefined && lastNameValue != undefined && countryValue != undefined && scoreValue != undefined){
        createNewItem(firstNameValue, lastNameValue, countryValue, scoreValue);
        warningTxt.textContent = "";
    } else {
        warningTxt.textContent = "All fields are required";
    }
    inputFirstName.value = "";
    inputLastName.value = "";
    inputCountry.value = "";
    inputScore.value = "";
    firstNameValue = undefined;
    lastNameValue = undefined;
    countryValue = undefined;
    scoreValue = undefined;
});

addBtn.addEventListener('mouseenter', e => {
    addBtn.style.backgroundColor = "#c78f8f";
});

addBtn.addEventListener('mouseleave', e => {
    addBtn.style.backgroundColor = "#ebcccc";
});

function currentTime(){
    const now = new Date();
    let month = now.getMonth();
    let day = now.getDate();
    let year = now.getFullYear();
    let hours = now.getHours();
    let mins = now.getMinutes();

    if (hours < 10){
        hours = "0" + hours;
    } else {
        hours = hours;
    }

    if (mins < 10){
        mins = "0" + mins;
    } else {
        mins = mins;
    }

    if (day < 10){
        day = "0" + day;
    } else {
        day = day;
    }

    let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for(let i = 0; i < monthArr.length; i++){
        monthString = monthArr[month];
    }
    let fullTime = `${monthString} ${day}, ${year} ${hours}:${mins}`
   return fullTime;
}