document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const toggleMenuButton = document.querySelector('.toggle-menu');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    function showTab(tabId) {
        tabContents.forEach(tab => tab.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    }

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const tabId = this.getAttribute('data-tab');
        if (tabId) {
            showTab(tabId);
        }
    });
  });

    toggleMenuButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        content.classList.toggle('collapsed');
    });
    
    dropdownToggles.forEach(toggle => {
     toggle.addEventListener('click', function(event) {
        event.preventDefault();
      });
    });

    // Inicialmente mostrar la pestaña "hogar"
    showTab('hogar');
    
});
