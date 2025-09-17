 $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $('#content').toggleClass('active');
            });
            
            // Slider functionality
            let currentSlide = 0;
            const slides = $('.slider-item');
            const totalSlides = slides.length;
            
            function showSlide(index) {
                slides.removeClass('active');
                $(slides[index]).addClass('active');
                $('.slider-indicators button').removeClass('active');
                $(`.slider-indicators button[data-slide="${index}"]`).addClass('active');
                currentSlide = index;
            }
            
            function nextSlide() {
                let next = currentSlide + 1;
                if (next >= totalSlides) next = 0;
                showSlide(next);
            }
            
            // Auto slide
            setInterval(nextSlide, 5000);
            
            // Manual controls
            $('.slider-nav.next').on('click', nextSlide);
            
            $('.slider-nav.prev').on('click', function() {
                let prev = currentSlide - 1;
                if (prev < 0) prev = totalSlides - 1;
                showSlide(prev);
            });
            
            $('.slider-indicators button').on('click', function() {
                const slideIndex = $(this).data('slide');
                showSlide(slideIndex);
            });
            
            // Edit slider
            $('.action-btn .bx-edit').closest('button').on('click', function() {
                const sliderId = $(this).closest('tr').find('th').text();
                alert(`Editing slider: ${sliderId}`);
            });
        });