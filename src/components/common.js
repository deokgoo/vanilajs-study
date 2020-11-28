const Common = {
  init(el) {
    if (!el) throw "element not found";
    this.el = el;
    return this;
  },
  on(evt, callBack) {
    this.el.addEventListener(evt, callBack);
    return this;
  },
  emit(evt, payload) {
    const customEvent = new CustomEvent(evt, { detail: payload });
    this.el.dispatchEvent(customEvent);
    return this;
  },
  hide() {
    this.el.style.display = 'none';
    return this;
  },
  show() {
    this.el.style.display = '';
    return this;
  },
};

export default Common;
