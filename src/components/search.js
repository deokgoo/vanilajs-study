import common from "./common.js";

const Search = Object.create(common);

const ENTER_KEYCODE = 13;

Search.setUp = function (el) {
  this.init(el);
  this.render();

  this.input = this.el.querySelector("input");

  this.bindEvent();

  return this;
};

Search.render = function () {
  const form = '<form><input type="text" placeholder="search"></form>';
  this.el.innerHTML = form;
};

Search.bindEvent = function () {
  this.on("submit", (evt) => evt.preventDefault());
  this.input.addEventListener("keydown", (evt) => {
    this.onInput(evt);
  });
};

// Event Listener
Search.onInput = function (evt) {
  if (evt.keyCode !== ENTER_KEYCODE) return;

  const query = evt.target.value;

  this.emit('@search', { query });
};

export default Search;
