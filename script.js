document.addEventListener("DOMContentLoaded", function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const certificateItems = document.querySelectorAll('.certificate-item');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function(event) {
        event.preventDefault();
        
        const filter = this.getAttribute('data-filter');
        
        // Remove active class from all buttons and add to the clicked one
        filterBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show or hide certificates based on the filter
        certificateItems.forEach(item => {
          if (filter === 'all') {
            // Show all certificates
            item.style.display = 'block';
          } else if (item.getAttribute('data-category') === filter) {
            // Show items that match the selected category
            item.style.display = 'block';
          } else {
            // Hide items that don't match
            item.style.display = 'none';
          }
        });
      });
    });
  });
  