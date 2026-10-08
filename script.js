const itemName = document.getElementById("itemName")
const buttonAdd = document.getElementById("buttonAdd")
const itemDiv = document.getElementById("example")
const items = document.querySelector(".items")
const warningItemRemoved = document.querySelector(".removed")
const removeAlert = document.querySelector(".removeAlert")
const item = document.querySelectorAll(".item")

function deleteItems(item) {
  item.querySelector(".delete").addEventListener("click", () => {
    item.remove()
    warningItemRemoved.classList.remove("display-none")
    setTimeout(() => {
      warningItemRemoved.classList.add("display-none")
    }, 5000);
  })
}

item.forEach(deleteItems)

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
  
  deleteItems(newItem)
}

removeAlert.addEventListener("click", () => {
  warningItemRemoved.classList.add("display-none")
})