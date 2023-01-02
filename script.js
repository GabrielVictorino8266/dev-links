function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if(html.classList.contains('ligth')){
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')
  // }
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar1.png")
    img.setAttribute("alt", "Foto de Gabriel")
  } else {
    img.setAttribute("src", "./assets/Avatar2.png")
    img.setAttribute("alt", "Foto do Darth Vader")
  }
}
