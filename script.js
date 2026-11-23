const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  menuButton.textContent = open ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  menuButton.textContent = '☰';
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#nombre').value.trim();
  document.querySelector('#form-status').textContent = name ? `¡Gracias, ${name}! Este formulario es una demostración escolar y no envía mensajes.` : 'Escribe tu nombre para continuar.';
});

// EDITA AQUÍ los datos reales de los cuatro integrantes.
const integrantes = [
 {nombre:'Miguel Ángel Arias',rol:'Líder y encargado de GitHub',descripcion:'Coordina el equipo y organiza la publicación de la página web del proyecto de cacao.',foto:'fotos/miguel-angel.jpg'},
 {nombre:'Fátima del Pilar Pérez',rol:'Investigación histórica',descripcion:'Participa en la investigación de la historia y la importancia cultural del cacao.'},
 {nombre:'María Guadalupe Domínguez',rol:'Menú y especialidades',descripcion:'Colabora en la selección y presentación de las propuestas gastronómicas elaboradas con cacao.',foto:'fotos/maria-guadalupe.jpg'},
 {nombre:'Alexis Gutiérrez',rol:'Fotografías y diseño',descripcion:'Colabora en la parte visual y en el diseño del proyecto.'}
];
const memberButtons=document.querySelectorAll('.member-button');
memberButtons.forEach(button=>button.addEventListener('click',()=>{
 const index=Number(button.dataset.member), persona=integrantes[index];
 memberButtons.forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});
 const avatar=document.querySelector('#member-avatar');
 avatar.replaceChildren();
 if(persona.foto){const img=document.createElement('img');img.src=persona.foto;img.alt='Fotografía de '+persona.nombre;avatar.append(img);}
 else {avatar.textContent=persona.nombre.split(' ').map(w=>w[0]).slice(0,2).join('');}
 document.querySelector('#member-name').textContent=persona.nombre;
 document.querySelector('#member-role').textContent=persona.rol;
 document.querySelector('#member-bio').textContent=persona.descripcion;
}));
const categoryButtons=document.querySelectorAll('.category-tab');
categoryButtons.forEach(button=>button.addEventListener('click',()=>{
 const category=button.dataset.category;
 categoryButtons.forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 document.querySelectorAll('.menu-card').forEach(card=>{card.hidden=category!=='todos'&&card.dataset.category!==category;});
}));
document.querySelectorAll('.recipe-toggle').forEach(button=>button.addEventListener('click',()=>{
 const detail=button.nextElementSibling;detail.hidden=!detail.hidden;
 button.setAttribute('aria-expanded',String(!detail.hidden));
 button.textContent=detail.hidden?'Ver preparación ↓':'Ocultar preparación ↑';
}));
