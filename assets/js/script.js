// Shop page javascript
// Initialize
window.onload = function () {
    populateFilters();
    displayAlbums();
};

// Album Data (Example)
const albums = [
    { title: "Aghori Mhori Mei", category: "CD", band: "The Smashing Pumpkins", performer: "Billy Corgan", year: "2024", price: "Rs. 10,500 PKR", image: "assets/images/AghoriMhoriMei_300x.avif" },
    { title: "A Rush of Blood", category: "CD", band: " COLDPLAY", performer: " Chris Martin", year: "2016", price: "Rs. 10,500 PKR", image: "assets/images/arush_300x.avif" },
    { title: "Parachutes", category: "DVD", band: " COLDPLAY", performer: " Chris Martin", year: "2020", price: "Rs. 10,500 PKR", image: "assets/images/Parachutes_140gBlackEcoRecord_300x.avif" },
    { title: "Queen 1", category: "DVD", band: "QUEEN", performer: "Freddie Mercury", year: "1973", price: "Rs. 10,500 PKR", image: "assets/images/Queen1_1_300x.avif" },
    { title: "Dismantle Atomic Bomb", category: "DVD", band: "U2", performer: "Bono Paul David Hewson", year: "2004", price: "Rs. 10,500 PKR", image: "assets/images/redinkspot_300x.avif" },
    { title: "Fruitcake Cassette", category: "Tape", band: "BMG Records", performer: "Sabrina Carpenter", year: "1996", price: "Rs. 10,500 PKR", image: "assets/images/CASSETTE_2.jpg" },
    { title: "Small Changes", category: "DVD", band: "Polydor Records", performer: "Michael Kiwanuka", year: "2019", price: "Rs. 10,500 PKR", image: "assets/images/SmallChanges_AlternateArtwork_IrishRetailExclusiveBlueMarbleVinyl_1_300x.avif" },
    { title: "Under A Rock", category: "Book", price: "Rs. 10,500 PKR", image: "assets/images/Under A Rock pic.webp" },
    { title: "Feminist Punk", category: "Book", price: "Rs. 10,500 PKR", image: "assets/images/Rebel Gir.webp" },
    { title: "The Story of Mary", category: "Book", price: "Rs. 10,500 PKR", year: "2024", image: "assets/images/The Story.webp" },
    { title: "High Rising", category: "Book", year: "2024", price: "Rs. 10,500 PKR", image: "assets/images/BOOK 8 PIC.webp" },
    { title: "Issue 11", category: "Magazine", year: "2024", price: "Rs. 10,500 PKR", image: "assets/images/issue pic.webp" },
    { title: "Amazing Trivia", category: "Magazine", year: "2023", price: "Rs. 10,500 PKR", image: "assets/images/Magazine 6-2.jpg" },
    { title: "Quench Magazine", category: "Magazine", year: "2023", price: "Rs. 10,500 PKR", image: "assets/images/que Magazine.webp" },
    { title: "The Big Takeover", category: "Magazine", year: "2024", price: "Rs. 10,500 PKR", image: "assets/images/4-Magazine.webp" },
    { title: "The Addams Family", category: "Movie", year: "1991", price: "Rs. 10,500 PKR", image: "assets/images/movie5.jpg" },
    { title: "Family Matters", category: "Movie", year: "2023", price: "Rs. 10,500 PKR", image: "assets/images/movie 2.jpg" },
    { title: "Delhi-6", category: "Movie", year: "2009", price: "Rs. 10,500 PKR", image: "assets/images/movie 3.jpg" },
    { title: "Captain Planet", category: "Movie", year: "2024", price: "Rs. 10,500 PKR", image: "assets/images/movie 4.jpg" }

];

// Initialize Filters
const uniqueCategories = [...new Set(albums.map(album => album.category).filter(Boolean))];
const uniqueBands = [...new Set(albums.map(album => album.band).filter(Boolean))];
const uniquePerformers = [...new Set(albums.map(album => album.performer).filter(Boolean))];
const uniqueYears = [...new Set(albums.map(album => album.year).filter(Boolean))];

function populateFilters() {
    populateFilter("albumCategory", uniqueCategories, "All Categories");
    populateFilter("bandFilter", uniqueBands, "All Bands");
    populateFilter("soloFilter", uniquePerformers, "All Performers");
    populateFilter("releaseYearFilter", uniqueYears, "All Years");
}

function populateFilter(filterId, options, defaultOption) {
    const select = document.getElementById(filterId);
    select.innerHTML = `<option selected>${defaultOption}</option>`;
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
}


// Display Albums
function displayAlbums() {
    const albumDisplay = document.getElementById("albumDisplay");
    albumDisplay.innerHTML = ""; // Clear previous content

    albums.forEach(album => {
        const col = document.createElement("div");
        col.className = "col-6 col-sm-4 col-md-4 col-lg-3 mb-4 album-card";
        col.setAttribute("data-category", album.category);
        col.setAttribute("data-band", album.band);
        col.setAttribute("data-performer", album.performer);
        col.setAttribute("data-year", album.year);

        col.innerHTML = `
<div class="card shadow border-0">
    <a href="#">
      <img src="${album.image}" class="card-img-top img-fluid" alt="${album.title}">
    </a>
    <div class="card-body text-center">
        <h5 class="card-title">${album.title}</h5>
        <p class="card-text">Category: ${album.category}</p>
        <p class="card-text"><strong>Release Year: ${album.year}</strong></p>
        <p class="card-text fw-normal">
                    <strike class="text-bg-success rounded">Rs 12000</strike> ${album.price}
                </p>
        <a href="#" class="btn btn-success rounded-5">Shop Now</a>
    </div>
</div>
`;
        albumDisplay.appendChild(col);
    });
}


// Filter Albums
function filterAlbums() {
    const category = document.getElementById("albumCategory").value;
    const band = document.getElementById("bandFilter").value;
    const performer = document.getElementById("soloFilter").value;
    const year = document.getElementById("releaseYearFilter").value;
    const albums = document.querySelectorAll('.album-card');

    albums.forEach(album => {
        const matchesCategory = category === "All Categories" || album.getAttribute('data-category') === category;
        const matchesBand = band === "All Bands" || album.getAttribute('data-band') === band;
        const matchesPerformer = performer === "All Performers" || album.getAttribute('data-performer') === performer;
        const matchesYear = year === "All Years" || album.getAttribute('data-year') === year;

        album.style.display = (matchesCategory && matchesBand && matchesPerformer && matchesYear) ? "block" : "none";
    });
}

// Search Albums
function searchAlbums() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const albums = document.querySelectorAll('.album-card');

    albums.forEach(album => {
        const title = album.querySelector('.card-title').textContent.toLowerCase();
        album.style.display = title.includes(query) ? "block" : "none";
    });
}




// Initialize animations after loading albums
window.onload = function () {
    populateFilters();
    displayAlbums();
    animateOnScroll();
};


// Preloder Js
window.addEventListener("load", function () {
    setTimeout(function () {
        const preloader = document.getElementById("preloader");
        preloader.style.display = "none"; // Hide preloader

        // Show main content
        const content = document.getElementById("content");
        content.style.display = "block";
    }, 500); // Adjust the timeout as needed
});


const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Sample data for album sales per month (for Chart 1)
const salesData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: 'Album Sales (in units) - Chart 1',
        data: [50, 100, 75, 150, 200, 120, 180, 210, 190, 220, 250, 300], // Monthly sales data
        backgroundColor: 'rgba(56, 142, 60, 0.2)', // Greenish color with opacity
        borderColor: 'rgba(56, 142, 60, 1)', // Greenish border
        borderWidth: 2
    }]
};

// Sample data for album sales per month (for Chart 2)
const salesData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: 'Album Sales (in units) - Chart 2',
        data: [80, 120, 90, 180, 250, 150, 220, 260, 210, 230, 270, 310],
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        borderColor: 'rgba(33, 150, 243, 1)',
        borderWidth: 2
    }]
};

// Chart.js configuration for creating the first sales chart (Chart 1)
const config1 = {
    type: 'line',
    data: salesData1,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Sales (Units)'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        }
    }
};

// Chart.js configuration for creating the second sales chart (Chart 2)
const config2 = {
    type: 'line',
    data: salesData2,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Sales (Units)'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        }
    }
};

// Create the charts
const salesChart1 = new Chart(
    document.getElementById('salesChart1'),
    config1
);

const salesChart2 = new Chart(
    document.getElementById('salesChart2'),
    config2
);


