let flag = 1;
let first_player = [0, "", "", "", "", ""];
let second_player = [0, "", "", "", "", ""];
let therd_player = [0, "", "", "", "", ""];

function Start(){

}

function startGame(){
    let name = document.getElementById('name');
    let country = document.getElementById('country');
    let plant = document.getElementById('plain');
    let animal = document.getElementById('animal');
    let river = document.getElementById('river');
    let err = document.getElementById('err');

    if(flag == 1)
    record(name, country, plant, animal, river, first_player);
    

    else if(flag == 2)
    record(name, country, plant, animal, river, second_player);
    
    else if(flag == 3)
    record(name, country, plant, animal, river, therd_player);

    else count();
}

function record(name, country, plant, animal, river, arr){
    arr[1] = name;
    arr[2] = country;
    arr[3] = plant;
    arr[4] = animal;
    arr[5] = river;
    flag++;
    if(flag == 4) flag = 0;
}

function count(){
    flag++
    for (let i = 1; i < 6; i++){
        let first = first_player[i], second = second_player[i], therd = therd_player[i];
        for(let j = 0; j < first.length && j < second.length && therd.length; j++){
            
        }
    }
}

function comparison(){

}