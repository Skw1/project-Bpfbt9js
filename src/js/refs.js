

export default class {
  constructor() {
    //add nodes as attributes
    const nodes = document.querySelectorAll('.js-object');
    for (let i = 0; i < nodes.length; i++) {
      if ('dataset' in nodes[i]) {
        if ('jsname' in nodes[i].dataset) {
          this[nodes[i].dataset.jsname] = nodes[i];
        }
      }
    }
  }

  refresh() {
    //delete all attributes
    for (var key in this) {
      if (key in this) {
        delete this[key];
      }
    }
    //add nodes as attributes
    const nodes = document.querySelectorAll('.js-object');
    for (let i = 0; i < nodes.length; i++) {
      if ('dataset' in nodes[i]) {
        if ('jsname' in nodes[i].dataset) {
          this[nodes[i].dataset.jsname] = nodes[i];
        }
      }
    }
  }
}
