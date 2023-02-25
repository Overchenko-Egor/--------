var str = "";

function buttonClick(){
    var arr_1 = [""];
    var arr_2 = [0];
    index = 0;
    count = 0;
    str += " ";
    for (var i = 0; i < str.length; i++){
        
        
        if( str[i] != " " && str[i] != "." && str[i] != "," && str[i] != "!"){
            arr_1[index] += str[i];
            count++;
        }
        else if(str[i - 1] != " " && str[i - 1] != "." && str[i - 1] != "," && str[i - 1] != "!"){
            
            arr_2[index] = count;
            index++;
            count = 0;
            if (i + 1 < str.length){
                arr_1.push("");
                arr_2.push(0);
            }
        }
        
    }
    for (var i = 0; i < arr_1.length;i++){
        console.log(arr_1[i]);
    }
    for (var i = 0; i < arr_2.length;i++){
        console.log(arr_2[i]);
    }
    
    Out(arr_1, arr_2);
}

function OnInp(el){
    str = el.value;
    console.log(str);
}

function Out(arr_1, arr_2){
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
            console.log(arr_2[i]);
            if(arr_2[i] > tmp || arr_2[i] == tmp) {
                tmp = arr_2[i];
                tmp_i = i;
            }
            
        }
        console.log (tmp);
        string += arr_1[tmp_i] + "  ";
        delete arr_1[tmp_i];
        delete arr_2[tmp_i];
        j++;
    }
    out.innerHTML = string;
}