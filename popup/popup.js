const imageDisplay = document.querySelectorAll(".pop-up img").forEach(image = () => {
    image.onclick = () => {
        document.querySelector(".popup-image").style.display = "block";
    }
})


// imageDisplay.forEach(image=()=>{
//    image.onclick = () =>{
//     document.querySelector(".popup-image").style.display = "block";
// document.querySelector(".popup-image img").src = image.getAttribute('src')
//    }
// })

