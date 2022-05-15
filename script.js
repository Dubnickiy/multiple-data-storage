let lastId = 1;

const list = document.querySelector(".list");
const form = document.querySelector(".form");
const items = [];


form.addEventListener("submit", ()=>{
    const data = getFormData();
    data.id = ++lastId;
    items.push(data);
    renderItems();
})

function getFormData() {
    return Object.fromEntries( new FormData(form));
}

function buildListItem(itemData) {
    const elem = document.createElement("li");
    elem.classList.add("list-item");
    elem.innerHTML = `
        <div class="cell cell-id">${data.id}</div>
        <div class="cell cell-text">${data.text}</div>
        <div class="cell cell-flag">
            <input type="checkbox" ${data.flag && "checked"}>
        </div>
        <div class="cell cell-number">${data.number}</div>
        <div class="cell cell-date">${data.date}</div>
        <div class="cell cell-buttons"> 
            <button>✏</button>
            <button>🗑️</button>
        </div>
    `;
    return elem;
}

function renderItems() {
    list.replaceChildren(items.map(buildListItem));
}