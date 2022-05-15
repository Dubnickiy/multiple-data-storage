let lastId = 1;

const list = document.querySelector(".list");
const form = document.querySelector(".form");
const switcherForm = document.querySelector(".switcher-form");
const items = [];

function handleDataInDom(data) {
  const listItem = buildListItem(data);
  list.append(listItem);
}

function handleDataInMemory(data) {
  items.push(data);
  renderItems();
}

const VALUES = {
  dom: 'DOM',
  memory: 'FrontMemory',
};

const handlers = {
  [VALUES.dom]: handleDataInDom,
  [VALUES.memory]: handleDataInMemory,
}

form.addEventListener("submit", function () {
  const data = getFormData();
  data.id = ++lastId;
  handlers[switcherForm.mode.value](data);
});

function getFormData() {
  return Object.fromEntries(new FormData(form));
}

function buildListItem(itemData) {
  const elem = document.createElement("li");
  elem.classList.add("list-item");
  elem.innerHTML = `
        <div class="cell cell-id">${itemData.id}</div>
        <div class="cell cell-text">${itemData.text}</div>
        <div class="cell cell-flag">
            <input type="checkbox" ${itemData.flag && "checked"}>
        </div>
        <div class="cell cell-number">${itemData.number}</div>
        <div class="cell cell-date">${itemData.date}</div>
        <div class="cell cell-buttons"> 
            <button>✏</button>
            <button>🗑️</button>
        </div>
    `;
  return elem;
}

function renderItems() {
  list.replaceChildren(...items.map(buildListItem));
}
