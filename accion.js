var botonburger = document.getElementById("menuicono");
var interacti = document.getElementById("manuactivo");

function togglemenu(){
  interacti.classList.toggle('active')
};

function showmenu(){
  interacti.classList.add('active')
};

function hidemenu(){
  interacti.classList.remove('active')
};

var consulta = window.matchMedia("(max-width: 500px)");
consulta.addListener(mediaquery);

function mediaquery(){
  if (consulta.matches) {
    console.log('si se cumplio la condicion');
    botonburger.addEventListener('touchstart', togglemenu);
  }

  else {
    console.log('no se cumplio la condicion');
  }
}

mediaquery();

var blazy = new Blazy({
  selector: 'img'
});

var cuero = document.body;

var ges = new Hammer(cuero);
ges.on('swipeleft', hidemenu);
ges.on('swiperight', showmenu);
