document.getElementById('search-icon').addEventListener('click', function() {
   const searchInput = document.getElementById('search-input');
   if (searchInput.style.display === 'none' || searchInput.style.display === '') {
       searchInput.style.display = 'block';
   } else {
       searchInput.style.display = 'none';
   }
});
