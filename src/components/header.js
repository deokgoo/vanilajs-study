import common from './common.js';

const Header = Object.create(common);

const title = 'Deok Movie';

Header.setUp = function (el) {
  this.init(el);
  this.setTitle();
  return this;
};

Header.setTitle = function () {
  this.el.textContent = title;
};

export default Header;
