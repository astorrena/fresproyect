
const $postArchive = document.getElementById("postArchive");

const PostCard = params => {
 const category = "HTML";
 return `<div class="post-card">
  <div>
      <div class="post-categories">
          <span class="post-category">${category}</span>
          <span class="post-category">CSS</span>
      </div>
      <h2 class="post-title">${params.title}</h2>
  </div>
  <div class="card-arrow">
      <div class="arrow">
          <div class="long-arrow-right"></div>
      </div>
  </div>
</div>`;
};

$postArchive.innerHTML += PostCard({title : "Título de prueba para medir longitud del texto del hero"});
$postArchive.innerHTML += PostCard({title : "Título de prueba para medir longitud del texto del hero"});
$postArchive.innerHTML += PostCard({title : "Título de prueba para medir longitud del texto del hero"});
$postArchive.innerHTML += PostCard({title : "Título de prueba para medir longitud del texto del hero"});
$postArchive.innerHTML += PostCard({title : "Título de prueba para medir longitud del texto del hero"});
$postArchive.innerHTML += PostCard({title : "Título de prueba para medir longitud del texto del hero"});
$postArchive.innerHTML += PostCard({title : "Título de prueba para medir longitud del texto del hero"});
