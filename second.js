let flag = 1;
//let first_player = [0, "", "", "", "", ""];
//let second_player = [0, "", "", "", "", ""];
//let therd_player = [0, "", "", "", "", ""];
let alphabet = "абвгдежзиклмнопрстуфхцчшэюя";
let letter = "";
let hod = document.getElementById('hod');
let res = document.getElementById('results');


class LinkedListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  
    toString() {
      return this.value;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    append (value){
        const newNode = new LinkedListNode(value);

        if(!this.head || !this.tail){
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    toArray(){
        const nodes = [];
        let currentNode = this.head;
        while(currentNode){
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    toString(){
        return this.toArray().map(node => node.toString()).toString();
    }
  }

  const first_player = new LinkedList();
  fillList(first_player);

  const second_player = new LinkedList();
  fillList(second_player);

  const therd_player = new LinkedList();
  fillList(therd_player);

  function fillList(player){
    player.append(0).append('').append('').append('').append('').append('');

    let currentNode = player.head;
    while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
    }
  }

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

function record(name, country, plant, animal, river, player){

    let j = 1;
    let current = player.head;
    current = current.next;

    while (current != null) {
        switch(j){
            case 1: player.value = name;
                    break;
            case 2: player.value = country;
                    break;
            case 3: player.value = plant;
                    break;
            case 4: player.value = animal;
                    break;
            case 5: player.value = river;
                    break;
            default: break;
        }
        console.log(current.value);
        current = current.next;
        j++;
    }

    flag++;
    if(flag == 4) {
        flag = 0;
        count();
    }
}

function count(){

    let currentFirst = first_player.head;
    currentFirst = currentFirst.next;

    let currentSecond = second_player.head;
    currentSecond = currentSecond.next;

    let currentTherd = therd_player.head;
    currentTherd = currentTherd.next;

    while (currentFirst != null) {
        let first = currentFirst.value, second = currentSecond.value, therd = currentTherd.value;
        if(check(first, second)){
            if(first[0] == letter)
            currentFirst.head.value += 1;
            if(second[0] == letter)
            currentSecond.head.value += 1;
        }
        if(check(first, therd)){
            if(first[0] == letter)
            currentFirst.head.value += 1;
            if(therd[0] == letter)
            currentTherd.head.value += 1;
        }
        if(check(second, therd)){
            if(therd[0] == letter)
            currentTherd.head.value += 1;
            if(second[0] == letter)
            currentSecond.head.value += 1;
        }
        currentFirst = currentFirst.next;
    }

    flag++;
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
    res.innerHTML += "1-й ИГРОК - " + first_player.head.value + " баллов:   ";
    print_res(first_player);
    res.innerHTML += "2-й ИГРОК - " + second_player.head.value + " баллов:  ";
    print_res(second_player);
    res.innerHTML += "3-й ИГРОК - " + therd_player.head.value + " баллов:   ";
    print_res(therd_player);
    res.innerHTML += '</br>';
}
function print_res(palyer){

    let current = player.head;
    current = current.next;

    while (current != null){
        res.innerHTML += current.toString() + "  ";
    }
    res.innerHTML += '</br>';
}
/*
задание 
комменты 
верстка html

 */