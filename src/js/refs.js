/*
simple refs API

usage:

add to your html tags class 'js-object' and data-attribute 'data-jsname="yourName"'

import refsAPI from './refs.js';
const frontEnd = new refsAPI();

object frontEnd will will containe all your nodes as properties.

Example:

<div class="js-object" data-jsname="A">                //nodeA
      <div class="js-object" data-jsname="B"></div>    //nodeB
</div>                                                 
<div class="js-object" data-jsname="C"></div>          //nodeC
<div class="js-object" data-jsname="D"></div>          //nodeD

results to

frontEnd==={
    A : nodeA
    B : nodeB
    C : nodeC
    D : nodeD
}


frontEnd.refresh() - updates all nodes. use after adding new nodes to the document


*/

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
