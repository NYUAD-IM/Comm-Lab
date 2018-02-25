// find the element we're interested in and save it for later
let message = document.getElementById('title')

message.addEventListener("mouseover", changeTitle)

function changeTitle (){
 message.innerHTML = "Bienvenido"
}

message.addEventListener("mouseout", addNew)

function addNew()
{
  let newh2 = document.createElement('h2')
  newh2.innerHTML = "Thanks yo"
  message.appendChild(newh2)
  console.log(newh2)
}
