const getColor=()=>{
    // Hex code

    let randomNumber = Math.floor(Math.random() * 16777215);
    let randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color").innerHTML = randomCode;
    navigator.clipboard.writeText(randomCode)
}

colorBtn.addEventListener('click',getColor);

getColor();  

