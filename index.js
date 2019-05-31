function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let grandnode = document.getElementById('app').querySelectorAll('#grand-node div')
  let deepnode = grandnode[grandnode.length-1]
  return deepnode
}

function increaseRankBy(n) {
  let rank = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
}
