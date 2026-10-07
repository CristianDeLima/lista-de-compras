const itemName = document.getElementById("itemName")
const buttonAdd = document.getElementById("buttonAdd")
const itemDiv = document.querySelector(".item")
const items = document.querySelector(".items")
const alertRm = document.querySelector(".removed")

buttonAdd.addEventListener("click", () => {
  addItem()
  itemName.value = ""
})

function addItem() {
  const newItem = itemDiv.cloneNode(true)
  newItem.classList.remove("display-none")
  newItem.setAttribute("id", String(itemName.value))
  newItem.querySelector("p").textContent = itemName.value
  items.append(newItem)
  
  const buttonDel = newItem.querySelector(".delete")
  buttonDel.classList.add(itemName.value)
  buttonDel.addEventListener("click", () => {
    newItem.remove()
  })
}