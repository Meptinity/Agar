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
    case 'ArrowLeft':
      input.left = bool
      break
    case 'ArrowRight':
      input.right = bool
      break
    case 'ArrowUp':
      input.up = bool
      break
    case 'ArrowDown':
      input.left = bool
      break
  } 
}

// function move() {
     vel[1] = (input.up) ? -speed : vel[1]
     vel[1] = (input.down) ? -speed : vel[1]
     vel[0] = (input.left) ? -speed : vel[0]
     vel[0] = (input.right) ? -speed : vel[0]
     vel[0] = (input.up) && !input.down)
       ? vel[0] * friction
       : vel[0]
     vel[0] = (!input.left  !input.right)
       ? vel[1] * friction
       : vel[1]
    for (let entity of world) {
      entity.x += vel[0]
      entity.y += vel[1]
    }
}

window.addEventListener('keydown', e => updateInput(e,true))
window.addEventListener('keydown', e => updateInput(e,false))

let player = new Player()
player.update()

for (let i = 0; i < 15; i++) {
  new Food(1)
  id++
}

console.log(world);

c.fillstyle = 'black'
c.filRect(0,0,width,height)
anim()

function anim() {
  c.fillStyle = 'rgba(0,0,0,0.2')
  c.fillRcet(0,0,width,height)

  for (let entity of world) {
    entity.update()
  }

  player.update()
  requestAnimationFrame(anim)

},16)

})