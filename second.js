let flag = 1;
let first_player = [0, "", "", "", "", ""];
let second_player = [0, "", "", "", "", ""];
let therd_player = [0, "", "", "", "", ""];
let alphabet = "абвгдежзиклмнопрстуфхцчшэюя";
let letter = "";
let hod = document.getElementById('hod');
let res = document.getElementById('results');

random();
let html_letter = document.getElementById('letter');
html_letter.innerHTML = "Буква " + letter;

function startGame(){
    let name = document.getElementById('name').value;
    let country = document.getElementById('country').value;
    let plant = document.getElementById('plant').value;
    let animal = document.getElementById('animal').value;
    let river = document.getElementById('river').value;

    if(flag == 1){
    record(name, country, plant, animal, river, first_player);
    hod.innerHTML = "ХОДИТ ВТОРОЙ ИГРОК";
    }
    
    else if(flag == 2){
    record(name, country, plant, animal, river, second_player);
    hod.innerHTML = "ХОДИТ ТРЕТИЙ ИГРОК";
    }
    
    else if(flag == 3){
    record(name, country, plant, animal, river, therd_player);
    hod.innerHTML = "ХОДИТ ПЕРВЫЙ ИГРОК";
    }
    document.getElementById('name').value = "";
    document.getElementById('country').value = "";
    document.getElementById('plant').value = "";
    document.getElementById('animal').value = "";
    document.getElementById('river').value = "";
}

function record(name, country, plant, animal, river, arr){
    arr[1] = name;
    arr[2] = country;
    arr[3] = plant;
    arr[4] = animal;
    arr[5] = river;
    flag++;
    if(flag == 4) {
        flag = 0;
        count();
    }
}

function count(){
    flag++;
    for (let i = 1; i < 6; i++){
        let first = first_player[i], second = second_player[i], therd = therd_player[i];
        if(check(first, second)){
            if(first[0] == letter)
            first_player[0] += 1;
            if(second[0] == letter)
            second_player[0] += 1;
        }
        if(check(first, therd)){
            if(first[0] == letter)
            first_player[0] += 1;
            if(therd[0] == letter)
            therd_player[0] += 1;
        }
        if(check(second, therd)){
            if(therd[i] == letter)
            therd_player[0] += 1;
            if(second[0] == letter)
            second_player[0] += 1;
        }
    }
    random();
    html_letter.innerHTML = "Буква " + letter;
    results();
}

function check(one, two){
    let replay = 0;
    for (let i = 0; i < one.length && i < two.length; i++){
        if(one[i] == two[i])
        replay++;
    }
    if(replay == one.length && replay == two.length){

        return false;
    }
    else
    return true;
}

function random(){
    let min = Math.ceil(0);
    let max = Math.floor(alphabet.length);
    letter = alphabet[Math.floor(Math.random() * (max - min) + min)];
}

function results(){
    res.innerHTML += "1-й ИГРОК - " + first_player[0] + " баллов:   ";
    print_res(first_player);
    res.innerHTML += "2-й ИГРОК - " + second_player[0] + " баллов:  ";
    print_res(second_player);
    res.innerHTML += "3-й ИГРОК - " + therd_player[0] + " баллов:   ";
    print_res(therd_player);
    res.innerHTML += '</br>';
}
function print_res(palyer){
    for (let i = 1; i < palyer.length; i++){
        res.innerHTML += palyer[i] + "  ";
    }
    res.innerHTML += '</br>';
}