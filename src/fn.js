function mkElem(elem) {
  return document.createElement(elem);
}

function mkElemC(elem, className) {
  let domItem = document.createElement(elem);
  domItem.classList.add(className);

  return domItem;
}

function mkElemD(elem, idName) {
  let domItem = document.createElement(elem);
  domItem.setAttribute("id", idName);

  return domItem;
}

function tdClass(className, value) {
  let elem = document.createElement("td");
  elem.classList.add(className);
  elem.textContent = value;

  return elem;
}

// eslint-disable-next-line no-unused-vars
function appendMultip(parent, ...args) {
  let argds = [...arguments];

  for (let item of argds) {
    if (item !== argds[0]) {
      parent.appendChild(item);
    }
  }

  return parent;
}

function changeToDeg(arr) {
  arr.map((item) => {
    console.log(item);
    let num = Number(item.textContent);
    let celc = ((num - 32) * 5) / 9;

    item.textContent = celc.toFixed(1);
  });
}

function changeToFahr(arr) {
  arr.map((item) => {
    let num = Number(item.textContent);
    let fahr = (num * 9) / 5 + 32;

    item.textContent = fahr.toFixed(1);
  });
}

function thScope(value) {
  let th = document.createElement("th");
  th.setAttribute("scope", "col");
  th.textContent = value;

  return th;
}

function thRowSpan(span, scope, value) {
  let th = document.createElement("th");
  th.setAttribute("rowspan", span);
  th.setAttribute("scope", scope);
  th.textContent = value;

  return th;
}

function thColspan(span, scope, value) {
  let th = document.createElement("th");
  th.setAttribute("colspan", span);
  th.setAttribute("scope", scope);
  th.textContent = value;

  return th;
}

export {
  mkElem,
  mkElemC,
  mkElemD,
  tdClass,
  appendMultip,
  changeToDeg,
  changeToFahr,
  thScope,
  thRowSpan,
  thColspan,
};
