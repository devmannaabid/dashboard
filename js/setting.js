$(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $('#content').toggleClass('active');
            });
            
            // Settings tabs navigation
            $('#settingsTabs .nav-link').on('click', function() {
                // Remove active class from all tabs and sections
                $('#settingsTabs .nav-link').removeClass('active');
                $('.settings-section').removeClass('active');
                
                // Add active class to clicked tab
                $(this).addClass('active');
                
                // Show corresponding section
                const sectionId = $(this).data('section') + '-section';
                $('#' + sectionId).addClass('active');
            });
            
            // Theme color selection
            $('.theme-color').on('click', function() {
                $('.theme-color').removeClass('active');
                $(this).addClass('active');
                
                const color = $(this).data('color');
                alert(`Theme color changed to: ${color}`);
            });
            
            // Avatar upload
            $('.avatar-upload-btn').on('click', function() {
                alert('Avatar upload dialog would open here');
            });
        });