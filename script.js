// DOM Elements
const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('search-overlay');
const closeSearchBtn = document.querySelector('.close-search');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const switchToRegisterBtn = document.getElementById('switch-to-register');
const switchToLoginBtn = document.getElementById('switch-to-login');
const mobileFilterToggle = document.getElementById('mobile-filter-toggle');
const mobileFilterClose = document.getElementById('mobile-filter-close');
const filtersSidebar = document.querySelector('.filters-sidebar');
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const calculateBtn = document.getElementById('calculate-btn');

// Featured Cars Data
const featuredCars = [
    {
        id: 1,
        title: '2023 BMW X5 xDrive40i',
        price: 75000,
        image: 'images/cars/bmw-x5.jpg',
        badge: 'New',
        year: 2023,
        mileage: 0,
        transmission: 'Automatic',
        fuelType: 'Gasoline'
    },
    {
        id: 2,
        title: '2022 Mercedes-Benz E-Class',
        price: 68000,
        image: 'images/cars/mercedes-e.jpg',
        badge: 'New',
        year: 2022,
        mileage: 0,
        transmission: 'Automatic',
        fuelType: 'Gasoline'
    },
    {
        id: 3,
        title: '2021 Audi Q7 Premium',
        price: 62000,
        image: 'images/cars/audi-q7.jpg',
        badge: 'Used',
        year: 2021,
        mileage: 15000,
        transmission: 'Automatic',
        fuelType: 'Gasoline'
    },
    {
        id: 4,
        title: '2023 Tesla Model 3',
        price: 55000,
        image: 'images/cars/tesla-model3.jpg',
        badge: 'New',
        year: 2023,
        mileage: 0,
        transmission: 'Automatic',
        fuelType: 'Electric'
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        role: 'Car Enthusiast',
        avatar: 'images/users/user1.jpg',
        rating: 5,
        content: 'I found my dream car on CarHub! The process was smooth from browsing to purchase. The detailed car information and high-quality images helped me make an informed decision.'
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        role: 'First-time Buyer',
        avatar: 'images/users/user2.jpg',
        rating: 4,
        content: 'As a first-time car buyer, I was nervous about the process. CarHub made it easy with their user-friendly interface and helpful customer support. I highly recommend this platform!'
    },
    {
        id: 3,
        name: 'Michael Brown',
        role: 'Car Dealer',
        avatar: 'images/users/user3.jpg',
        rating: 5,
        content: 'As a dealer, CarHub has significantly increased our online presence and sales. The platform is intuitive and provides all the tools we need to showcase our inventory effectively.'
    }
];

// Car Listings Data
const carListings = [
    {
        id: 1,
        title: '2023 BMW X5 xDrive40i',
        price: 75000,
        image: 'images/cars/bmw-x5.jpg',
        badge: 'New',
        year: 2023,
        mileage: 0,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        type: 'SUV',
        brand: 'BMW'
    },
    {
        id: 2,
        title: '2022 Mercedes-Benz E-Class',
        price: 68000,
        image: 'images/cars/mercedes-e.jpg',
        badge: 'New',
        year: 2022,
        mileage: 0,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        type: 'Sedan',
        brand: 'Mercedes'
    },
    {
        id: 3,
        title: '2021 Audi Q7 Premium',
        price: 62000,
        image: 'images/cars/audi-q7.jpg',
        badge: 'Used',
        year: 2021,
        mileage: 15000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        type: 'SUV',
        brand: 'Audi'
    },
    {
        id: 4,
        title: '2023 Tesla Model 3',
        price: 55000,
        image: 'images/cars/tesla-model3.jpg',
        badge: 'New',
        year: 2023,
        mileage: 0,
        transmission: 'Automatic',
        fuelType: 'Electric',
        type: 'Sedan',
        brand: 'Tesla'
    },
    {
        id: 5,
        title: '2020 Toyota Camry XSE',
        price: 32000,
        image: 'images/cars/toyota-camry.jpg',
        badge: 'Used',
        year: 2020,
        mileage: 25000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        type: 'Sedan',
        brand: 'Toyota'
    },
    {
        id: 6,
        title: '2022 Honda CR-V Touring',
        price: 38000,
        image: 'images/cars/honda-crv.jpg',
        badge: 'Used',
        year: 2022,
        mileage: 12000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        type: 'SUV',
        brand: 'Honda'
    }
];

// Similar Cars Data
const similarCars = [
    {
        id: 1,
        title: '2023 Mercedes-Benz GLE',
        price: 78000,
        image: 'images/cars/mercedes-gle.jpg',
        badge: 'New',
        year: 2023,
        mileage: 0,
        transmission: 'Automatic',
        fuelType: 'Gasoline'
    },
    {
        id: 2,
        title: '2022 Audi Q8',
        price: 72000,
        image: 'images/cars/audi-q8.jpg',
        badge: 'New',
        year: 2022,
        mileage: 0,
        transmission: 'Automatic',
        fuelType: 'Gasoline'
    },
    {
        id: 3,
        title: '2023 Lexus RX 350',
        price: 65000,
        image: 'images/cars/lexus-rx.jpg',
        badge: 'New',
        year: 2023,
        mileage: 0,
        transmission: 'Automatic',
        fuelType: 'Gasoline'
    }
];

// Format currency
function formatCurrency(amount) {
    return '$' + amount.toLocaleString('en-US');
}

// Populate Featured Cars
function populateFeaturedCars() {
    const container = document.getElementById('featured-cars-container');
    if (!container) return;

    let html = '';
    featuredCars.forEach(car => {
        html += `
            <div class="car-card">
                <div class="car-image">
                    <img src="${car.image}" alt="${car.title}">
                    <div class="car-badge">${car.badge}</div>
                </div>
                <div class="car-details">
                    <h3 class="car-title">${car.title}</h3>
                    <div class="car-info">
                        <div class="car-price">${formatCurrency(car.price)}</div>
                        <div class="car-year">${car.year}</div>
                    </div>
                    <div class="car-meta">
                        <div class="car-meta-item">
                            <i class="fas fa-tachometer-alt"></i> ${car.mileage} miles
                        </div>
                        <div class="car-meta-item">
                            <i class="fas fa-cog"></i> ${car.transmission}
                        </div>
                        <div class="car-meta-item">
                            <i class="fas fa-gas-pump"></i> ${car.fuelType}
                        </div>
                    </div>
                    <div class="car-actions">
                        <button class="btn-primary">View Details</button>
                        <button class="btn-outline"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Populate Testimonials
function populateTestimonials() {
    const container = document.getElementById('testimonial-slider');
    if (!container) return;

    let html = '';
    testimonials.forEach(testimonial => {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= testimonial.rating) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }

        html += `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <div class="testimonial-avatar">
                        <img src="${testimonial.avatar}" alt="${testimonial.name}">
                    </div>
                    <div class="testimonial-author">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
                <div class="testimonial-content">
                    "${testimonial.content}"
                </div>
                <div class="testimonial-rating">
                    ${stars}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Populate Car Listings
function populateCarListings() {
    const container = document.getElementById('car-listings');
    if (!container) return;

    let html = '';
    carListings.forEach(car => {
        html += `
            <div class="car-card">
                <div class="car-image">
                    <img src="${car.image}" alt="${car.title}">
                    <div class="car-badge">${car.badge}</div>
                </div>
                <div class="car-details">
                    <h3 class="car-title">${car.title}</h3>
                    <div class="car-info">
                        <div class="car-price">${formatCurrency(car.price)}</div>
                        <div class="car-year">${car.year}</div>
                    </div>
                    <div class="car-meta">
                        <div class="car-meta-item">
                            <i class="fas fa-tachometer-alt"></i> ${car.mileage} miles
                        </div>
                        <div class="car-meta-item">
                            <i class="fas fa-cog"></i> ${car.transmission}
                        </div>
                        <div class="car-meta-item">
                            <i class="fas fa-gas-pump"></i> ${car.fuelType}
                        </div>
                    </div>
                    <div class="car-actions">
                        <button class="btn-primary">View Details</button>
                        <button class="btn-outline"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Populate Similar Cars
function populateSimilarCars() {
    const container = document.getElementById('similar-cars-container');
    if (!container) return;

    let html = '';
    similarCars.forEach(car => {
        html += `
            <div class="car-card">
                <div class="car-image">
                    <img src="${car.image}" alt="${car.title}">
                    <div class="car-badge">${car.badge}</div>
                </div>
                <div class="car-details">
                    <h3 class="car-title">${car.title}</h3>
                    <div class="car-info">
                        <div class="car-price">${formatCurrency(car.price)}</div>
                        <div class="car-year">${car.year}</div>
                    </div>
                    <div class="car-meta">
                        <div class="car-meta-item">
                            <i class="fas fa-tachometer-alt"></i> ${car.mileage} miles
                        </div>
                        <div class="car-meta-item">
                            <i class="fas fa-cog"></i> ${car.transmission}
                        </div>
                        <div class="car-meta-item">
                            <i class="fas fa-gas-pump"></i> ${car.fuelType}
                        </div>
                    </div>
                    <div class="car-actions">
                        <button class="btn-primary">View Details</button>
                        <button class="btn-outline"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Search Overlay
if (searchBtn && searchOverlay && closeSearchBtn) {
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
    });

    closeSearchBtn.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });
}

// Modal Functionality
if (loginBtn && registerBtn && loginModal && registerModal) {
    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('active');
    });

    registerBtn.addEventListener('click', () => {
        registerModal.classList.add('active');
    });

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.classList.remove('active');
            registerModal.classList.remove('active');
        });
    });

    if (switchToRegisterBtn) {
        switchToRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.remove('active');
            registerModal.classList.add('active');
        });
    }

    if (switchToLoginBtn) {
        switchToLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            registerModal.classList.remove('active');
            loginModal.classList.add('active');
        });
    }
}

// Mobile Filter Toggle
if (mobileFilterToggle && mobileFilterClose && filtersSidebar) {
    mobileFilterToggle.addEventListener('click', () => {
        filtersSidebar.classList.add('active');
    });

    mobileFilterClose.addEventListener('click', () => {
        filtersSidebar.classList.remove('active');
    });
}

// Price Range Slider
if (priceRange && priceValue) {
    priceRange.addEventListener('input', () => {
        priceValue.textContent = formatCurrency(parseInt(priceRange.value));
    });
}

// Tab Functionality
if (tabBtns.length && tabPanes.length) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to current button and pane
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Car Image Gallery
function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('main-car-image');
    if (!mainImage) return;
    
    // Update main image
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    thumbnails.forEach(img => img.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Financing Calculator
if (calculateBtn) {
    calculateBtn.addEventListener('click', () => {
        const vehiclePrice = 75000; // Fixed price for this example
        const downPayment = parseFloat(document.getElementById('down-payment').value) || 0;
        const tradeInValue = parseFloat(document.getElementById('trade-in-value').value) || 0;
        const loanTerm = parseInt(document.getElementById('loan-term').value) || 60;
        const interestRate = parseFloat(document.getElementById('interest-rate').value) || 3.9;
        
        // Calculate loan amount
        const loanAmount = vehiclePrice - downPayment - tradeInValue;
        
        // Calculate monthly payment
        const monthlyInterest = interestRate / 100 / 12;
        const monthlyPayment = loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm) / (Math.pow(1 + monthlyInterest, loanTerm) - 1);
        
        // Calculate total interest
        const totalInterest = (monthlyPayment * loanTerm) - loanAmount;
        
        // Calculate total cost
        const totalCost = loanAmount + totalInterest;
        
        // Update results
        document.getElementById('loan-amount').textContent = formatCurrency(loanAmount);
        document.getElementById('monthly-payment').textContent = formatCurrency(monthlyPayment);
        document.getElementById('total-interest').textContent = formatCurrency(totalInterest);
        document.getElementById('total-cost').textContent = formatCurrency(totalCost);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateFeaturedCars();
    populateTestimonials();
    populateCarListings();
    populateSimilarCars();
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
    }
    if (e.target === registerModal) {
        registerModal.classList.remove('active');
    }
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
    }
});