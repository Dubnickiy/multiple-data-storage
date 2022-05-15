let lastId = 1;
const list = document.querySelector(".list");

const form = document.querySelector(".form");
form.addEventListener("submit", ()=>{
    const elem = document.createElement("li");
    elem.classList.add("list-item");
    const data = Object.fromEntries( new FormData(form));
    lastId++;
    elem.innerHTML = `
        <div class="cell cell-id">${lastId}</div>
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
    list.append(elem);

})