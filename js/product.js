$(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $('#content').toggleClass('active');
            });
            
            // Product status filter simulation
            $('.badge-status').on('click', function() {
                const status = $(this).text().trim();
                alert(`Filtering by: ${status}`);
            });
        });