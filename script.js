<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/glide.min.js"></script>

<section class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <li class="glide__slide"><img src="http://via.placeholder.com/2550x550" alt="Image 1"/></li>
      <li class="glide__slide"><img src="http://via.placeholder.com/2550x550" alt="Image 2"/></li>
      <li class="glide__slide"><img src="http://via.placeholder.com/2550x550" alt="Image 3"/></li>
    </ul>
  </div>
</section>

document.addEventListener("DOMContentLoaded", () => {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1, // Sa elementë të shfaqë
    autoplay: 3000 // Koha për ndërrim automatik në milisekonda
  }).mount();
});
