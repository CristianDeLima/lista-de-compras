const itemName = document.getElementById("itemName")
const buttonAdd = document.getElementById("buttonAdd")
const itemDiv = document.getElementById("example")
const items = document.querySelector(".items")
const alertRm = document.querySelector(".removed")
const pao = document.querySelector(".pao-de-forma")

const paoBtn = pao.querySelector(".delete")
paoBtn.addEventListener("click", () => {
  pao.remove()
})

const cafe = document.querySelector(".cafe-preto")
const cafeBtn = cafe.querySelector(".delete")
cafeBtn.addEventListener("click", () => {
  cafe.remove()
})


const suco = document.querySelector(".suco-de-laranja")
const sucoBtn = suco.querySelector(".delete")
sucoBtn.addEventListener("click", () => {
  suco.remove()
})


const bolacha = document.querySelector(".bolacha")
const bolachaBtn = bolacha.querySelector(".delete")
bolachaBtn.addEventListener("click", () => {
  bolacha.remove()
})

buttonAdd.addEventListener("click", () => {
    if (itemName.value === "") {
      alert("Você precisa colocar o nome do item!")
    } else {
      addItem()
      itemName.value = ""
    }
})

function addItem() {
  const newItem = itemDiv.cloneNode(true)
  const nomeDoItem = itemName.value
  newItem.classList.remove("display-none")
  newItem.setAttribute("id", String(nomeDoItem.replace(/\s/g, '')))
  newItem.querySelector("p").textContent = nomeDoItem
  items.append(newItem)
  
  const buttonDel = newItem.querySelector(".delete")
  buttonDel.addEventListener("click", () => {
    newItem.remove()
  })
}