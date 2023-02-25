var str = "";

function buttonClick(){
    var arr_1 = [""];
    var arr_2 = [0];
    index = 0;
    count = 0;
    var count_str = 1;
    var count_length = 1.0;
    str += " ";
    for (var i = 0; i < str.length; i++){

        if( str[i] != " " && str[i] != "." && str[i] != "," && str[i] != "!"){
            arr_1[index] += str[i];
            count++;
            count_length++;
        }
        else if(str[i - 1] != " " && str[i - 1] != "." && str[i - 1] != "," && str[i - 1] != "!"){
            if(count_length / 10 >= 1){
                count_str++;
                count_length = 0;
            }
            arr_2[index] = count;
            index++;
            count = 0;
            if (i + 1 < str.length){
                arr_1.push("");
                arr_2.push(0);
            }
        }
        
    }
    
    console.log("Строк");
    console.log(count_str);
    Max_length(arr_1, arr_2);
    Out(arr_1, arr_2, count_str);
}

function OnInp(el){
    str = el.value;
}

function Out(arr_1, arr_2, count_str){
    console.log("out");
    var out = document.getElementById('output');
    var string = "";
    var tmp = 0;
    var tmp_i = 0;
    var j = 0;
    while (j < arr_1.length){
        tmp = 0;
        tmp_i = 0;
        for (var i = 0; i < arr_2.length; i++){
            if(arr_2[i] > tmp || arr_2[i] == tmp) {
                tmp = arr_2[i];
                tmp_i = i;
            }
            
        }
        string += arr_1[tmp_i] + "  ";
        delete arr_1[tmp_i];
        delete arr_2[tmp_i];
        j++;
    }

    out.innerHTML = (string);
}

function Max_length(arr_1, arr_2){
    var index = 0;
    var max = 0;
    var c_str = 1;
    c_str--;
    for (var i = 0; i < arr_2.length; i++){
        if(arr_2[i] > max){
            max = arr_2[i];
            index = i;
        }
    }
    var sum = 0;
    for (var i = 0; i <= index; i++){
        sum += arr_2[i];
    }
    c_str = Math.floor(sum / 10);
    if(sum % 10 == 0) c_str++;
    var leng = document.getElementById('length');
    leng.innerHTML = ("Самое длинное слово находится в " + c_str+ " строке");
}