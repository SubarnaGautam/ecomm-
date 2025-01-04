const searchinput = document.querySelector(".search-input")
searchinput.style.display = "none";
const dropdownbtn = document.querySelector(".dropdown-btn")
const dropdowncontent = document.querySelector(".dropdown-content")

/*dropdownbtn.addEventListener("click", function(){
    dropdowncontent.classList.toggle('show');
    console.log("clicked")
})*/

document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function () {
        const content = this.nextElementSibling;
        if (content) {
            content.classList.toggle('show');
        }
    });
});

// Optional: Close dropdowns if clicked outside
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.classList.remove('show');
        });
    }
});

// Dynamically set the current year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer-content p');
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} Your Website. All rights reserved.`;
});

// Toggle Search Bar Visibility
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

searchIcon.addEventListener('click', () => {
    searchInput.style.display = searchInput.style.display === 'none' || searchInput.style.display === '' 
        ? 'block' 
        : 'none';
});

// Update Cart Count (Example Functionality)
const cartCount = document.getElementById('cartCount');
let cartItems = 0;

document.getElementById('cartIcon').addEventListener('click', () => {
    cartItems++;
    cartCount.textContent = cartItems;
});


// Add event listeners for dropdown buttons
document.querySelectorAll('.dropdown-btn').forEach((button) => {
    button.addEventListener('click', function () {
        // Toggle visibility of the respective dropdown content
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = 
            dropdownContent.style.display === 'block' ? 'none' : 'block';

        // Close other open dropdowns
        document.querySelectorAll('.dropdown-content').forEach((content) => {
            if (content !== dropdownContent) {
                content.style.display = 'none';
            }
        });
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        document.querySelectorAll('.dropdown-content').forEach((content) => {
            content.style.display = 'none';
        });
    }
});
