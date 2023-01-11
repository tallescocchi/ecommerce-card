let index = 0

let icon = document.querySelector(".icon")
let imgGif = document.querySelector(".imgGif")
  
function toggleMode() {
  if(index == 0){
    icon.setAttribute('src', './assets/vector-close.png')
    imgGif.setAttribute('src', './assets/sofa.gif')

    index++
  }else{
    icon.setAttribute('src', './assets/vector-360.png')
    imgGif.setAttribute('src', './assets/sofa-estatico.png')

    index--
  }
  console.log(index)
}