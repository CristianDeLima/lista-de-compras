const itemName = document.getElementById("itemName")
const buttonAdd = document.getElementById("buttonAdd")
const itemDiv = document.querySelector(".item")
const items = document.querySelector(".items")

buttonAdd.addEventListener("click", (event) => {
  addItem()
})

function addItem() {
  const newItem = itemDiv.cloneNode(true)
  newItem.classList.remove("display-none")
  newItem.setAttribute("id", String(itemName.value))
  newItem.querySelector("p").textContent = itemName.value
  items.append(newItem)
  console.log(newItem)
}
˝