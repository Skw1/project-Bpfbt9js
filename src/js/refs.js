/*
simple refs API

usage:

add to your html tags class '.js-object' and data-attribute 'data-jsname="yourName"'

import refsAPI from './js/refs.js';
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


*/

export default class {
  constructor() {
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
