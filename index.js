class Toggable {
  constructor(el){
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = falser
    this.onClick = this.onClick.bind(this)
    this.el.addEventListener('click', this.onClick)
  }

  onClick(ev) {
    this.activated = !this.activated
    this.toggleText()
  }

  toggleText() {
    this.el.innerHTML = this.activated ? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)