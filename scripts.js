function generateNumber(){

    const min = Math.ceil(document.querySelector(".input-origem").value)
    const max = Math.floor(document.querySelector(".input-final").value)

    if(min >= max){
        alert("O valor mínimo tem que ser menor que o valor máximo!")
    } else {        
        const result = Math.floor(Math.random() * (max - min + 1) + min);

        alert(result)
    }
}


// const min = 0
// const max = 100

// console.log(min < max)

// if {
//     const 
// }
