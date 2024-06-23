const input = document.querySelector("input");
const button = document.querySelectorAll("button");
let buttonarray = Array.from(button);
let string = "";
buttonarray.forEach((btn1) => {
    btn1.addEventListener("click", (e) => {

    if(e.target.innerHTML=="Del"){
        string=string.substring(0,string.length-1)
        input.value = string;
    }
    else if(e.target.innerHTML=="Ac"){
        string=""
        input.value = string;
    }
    else if(e.target.innerHTML=="="){
        string=eval(string)
        input.value = string;
    }
    else{
        
        string += e.target.innerHTML;
        input.value = string;
        console.log(e.target.innerHTML);
    }



  });
});

