$(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $('#content').toggleClass('active');
            });
            
            // Filter button active state
            $('.filter-btn').on('click', function() {
                $('.filter-btn').not(this).removeClass('btn-primary').addClass('btn-outline-primary');
                $(this).removeClass('btn-outline-primary').addClass('btn-primary');
                
                const filter = $(this).text().trim();
                alert(`Filtering orders by: ${filter}`);
            });
            
            // View order details
            $('.action-btn .bx-show').closest('button').on('click', function() {
                const orderId = $(this).closest('tr').find('th').text();
                alert(`Viewing details for: ${orderId}`);
            });
        });