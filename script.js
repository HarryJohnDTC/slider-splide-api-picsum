document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader'); 
  
    const apiUrl = 'https://picsum.photos/v2/list?page=1&limit=5'; 
  
    fetch(apiUrl)
      .then(response => response.json())  
      .then(data => {
        const imageList = document.getElementById('imageList');  
        data.forEach(image => {
          const li = document.createElement('li');
          li.classList.add('splide__slide');
  
          const img = document.createElement('img');
          img.src = image.download_url;  
          img.alt = image.author;  
  
          li.appendChild(img);
          imageList.appendChild(li);
        });
  
       
        var splide = new Splide('.splide', {
          type   : 'loop',
          perPage: 3,
          focus  : 'center',
          gap    : '1rem',
          breakpoints: {
            768: {
              perPage: 1,
            },
          },
        });
  
        splide.mount();
  
        
        setTimeout(() => {
          loader.style.display = 'none'; 
        }, 3000); 
      })
      .catch(error => {
        console.error('Erreur lors du chargement des images:', error);
        loader.style.display = 'none'; 
      });
  });
  