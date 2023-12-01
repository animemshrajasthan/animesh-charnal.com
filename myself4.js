<script>
           function loadFolder(folderName) {
            document.getElementById("gallery").style.display = "none";
            document.getElementById("gallery-page").style.display = "block";

            // Simulate loading images dynamically based on the folder
            fetch(`folders/${folderName}.json`) // Simulate fetching folder data from the server
                .then(response => response.json())
                .then(images => {
                    const galleryPage = document.getElementById("gallery-page");
                    galleryPage.innerHTML = "";

                    // Create image elements dynamically
                    images.forEach(imageSrc => {
                        const img = document.createElement("img");
                        img.src = imageSrc;
                        img.alt = "Gallery Image";
                        galleryPage.appendChild(img);
                    });
                })
                .catch(error => {
                    console.error("Error loading folder:", error);
                });
        }

        function closeGallery() {
            document.getElementById("gallery").style.display = "block";
            document.getElementById("gallery-page").style.display = "none";
        }
		
		
		<script>
        $(document).ready(function () {
            // Add smooth scrolling to all links
            $("a").on('click', function (event) {
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });
        });
		
		
		
		
		
		setTimeout(function () {
                $('.welcome-container').fadeOut(2, function () {
                    $('.content').fadeIn(2);
                });
            }, 1); // Change the delay as needed
        });
    </script>
// Change header background on scroll
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.style.backgroundColor = '#555'; // Change to your desired color
    } else {
        header.style.backgroundColor = '#333'; // Change to your original color
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    
</script>