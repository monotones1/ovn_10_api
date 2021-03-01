"use strict";

/*
STAR WARS
*/
const jsonBtn = document.querySelector("#btn1");
const inputTxt = document.querySelector("#input1");
const jsonOutput = document.querySelector('#json_txt');
const starWarsAPI = 'https://www.swapi.tech/api/people/'

const getJson = () => {
    console.log(starWarsAPI + '?name=' + inputTxt.value);
    fetch(starWarsAPI + '?name=' + inputTxt.value)
        .then(result => result.json())
        .then(resultData => {
            console.log(resultData);

            //var jsonKeys = Object.keys(resultData);

            jsonOutput.innerHTML = '';

            //jsonOutput.innerHTML += resultData.result[0].properties.name; 
            resultData.result.forEach(post => {
                let v1 = post.properties.height; 
                let v2 = post.properties.mass; 
                let v3 = post.properties.gender; 
                let v4 = post.properties.hair_color; 
                let outputText = `Height: ${v1}, Mass: ${v2}, Gender: ${v3}, Hair Color: ${v4}`
                jsonOutput.innerHTML += outputText; 
            })

        })
        .catch(error => {
            console.log('Error:' + error);
        })
}

jsonBtn.addEventListener('click', getJson);

/*
CARD DRAW
*/
const cardAPI = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
const cardBtn = document.querySelector("#btn2");
const cardInput = document.querySelector("#input2");
const cardOutput = document.querySelector('#card_image');

const getCard = () => {
    console.log(cardAPI);
    fetch(cardAPI)
        .then(result => result.json())
        .then(resultData => {
            console.log(resultData);

            //var jsonKeys = Object.keys(resultData);

            cardOutput.innerHTML = '';

            //jsonOutput.innerHTML += resultData.result[0].properties.name; 
            resultData.cards.forEach(post => {
                let v1 = post.image; 
                let outputText = `<img src='${v1}'>`;
                cardOutput.innerHTML = outputText; 
            })

        })
        .catch(error => {
            console.log('Error:' + error);
        })
}

cardBtn.addEventListener('click', getCard);