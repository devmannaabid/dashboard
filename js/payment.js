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
                alert(`Filtering transactions by: ${filter}`);
            });
            
            // View transaction details
            $('.action-btn .bx-show').closest('button').on('click', function() {
                const transactionId = $(this).closest('tr').find('th').text();
                alert(`Viewing details for: ${transactionId}`);
            });
            
            // Generate invoice
            $('.action-btn .bx-receipt').closest('button').on('click', function() {
                const transactionId = $(this).closest('tr').find('th').text();
                alert(`Generating invoice for: ${transactionId}`);
            });
            
            // Revenue chart
            const ctx = document.getElementById('revenueChart').getContext('2d');
            const revenueChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['1 Nov', '5 Nov', '10 Nov', '15 Nov', '20 Nov', '25 Nov', '30 Nov'],
                    datasets: [{
                        label: 'Revenue',
                        data: [1250, 1900, 1800, 2200, 1750, 2450, 3000],
                        backgroundColor: 'rgba(78, 115, 223, 0.05)',
                        borderColor: 'rgba(78, 115, 223, 1)',
                        pointRadius: 3,
                        pointBackgroundColor: 'rgba(78, 115, 223, 1)',
                        pointBorderColor: 'rgba(78, 115, 223, 1)',
                        pointHoverRadius: 3,
                        pointHoverBackgroundColor: 'rgba(78, 115, 223, 1)',
                        pointHoverBorderColor: 'rgba(78, 115, 223, 1)',
                        pointHitRadius: 10,
                        pointBorderWidth: 2,
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '$' + value;
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        });