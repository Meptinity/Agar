let canvas =document.querySelecetor('canvas')
let c = canvas.getContext('2d')

let height
let width 
canvas.width = width = window.innerWidth
canvas.height = height = window.innerHeight

let input = {

  up : false,
  down : false,
  left : false,
  right : false
}

function move(e,bool) {
  switch (e.key) {