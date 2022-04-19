function calc(opt){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out;
    if(opt == 'Add'){
        out = `Sum of Number is ${Number(a)+Number(b)}`
    }else if(opt == 'Sub'){
        out = `Subtraction of Number is ${Number(a)-Number(b)}`
    }
    else if(opt == 'div'){
        out = `Division of Number is ${Number(a)/Number(b)}`
    }
    else if(opt == 'mul'){
        out = `Multiplication of Number is ${Number(a)*Number(b)}`
    }
    
    document.getElementsByClassName('output')[0].innerText = out
}