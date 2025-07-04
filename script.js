// DOM Elements
const searchBtn = document.getElementById("search-btn");
const searchOverlay = document.getElementById("search-overlay");
const closeSearchBtn = document.querySelector(".close-search");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");
const closeModalBtns = document.querySelectorAll(".close-modal");
const switchToRegisterBtn = document.getElementById("switch-to-register");
const switchToLoginBtn = document.getElementById("switch-to-login");
const mobileFilterToggle = document.getElementById("mobile-filter-toggle");
const mobileFilterClose = document.getElementById("mobile-filter-close");
const filtersSidebar = document.querySelector(".filters-sidebar");
const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");
const calculateBtn = document.getElementById("calculate-btn");

// Featured Cars Data
const featuredCars = [
  {
    id: 1,
    title: "2023 BMW X5 xDrive40i",
    price: 75000,
    image: "images/cars/bmw-x5.jpg",
    badge: "New",
    year: 2023,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 2,
    title: "2022 Mercedes-Benz E-Class",
    price: 68000,
    image: "images/cars/mercedes-e.jpg",
    badge: "New",
    year: 2022,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 3,
    title: "2021 Audi Q7 Premium",
    price: 62000,
    image: "images/cars/audi-q7.jpg",
    badge: "Used",
    year: 2021,
    mileage: 15000,
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 4,
    title: "2023 Tesla Model 3",
    price: 55000,
    image: "images/cars/tesla-model3.jpg",
    badge: "New",
    year: 2023,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Electric",
  },
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Car Enthusiast",
    avatar: "images/users/user1.jpg",
    rating: 5,
    content:
      "I found my dream car on CarHub! The process was smooth from browsing to purchase. The detailed car information and high-quality images helped me make an informed decision.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "First-time Buyer",
    avatar: "images/users/user2.jpg",
    rating: 4,
    content:
      "As a first-time car buyer, I was nervous about the process. CarHub made it easy with their user-friendly interface and helpful customer support. I highly recommend this platform!",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Car Dealer",
    avatar: "images/users/user3.jpg",
    rating: 5,
    content:
      "As a dealer, CarHub has significantly increased our online presence and sales. The platform is intuitive and provides all the tools we need to showcase our inventory effectively.",
  },
];

// Car Listings Data
const carListings = [
  {
    id: 1,
    title: "2023 BMW X5 xDrive40i",
    price: 75000,
    image: "images/cars/bmw-x5.jpg",
    badge: "New",
    year: 2023,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
    type: "SUV",
    brand: "BMW",
  },
  {
    id: 2,
    title: "2022 Mercedes-Benz E-Class",
    price: 68000,
    image: "images/cars/mercedes-e.jpg",
    badge: "New",
    year: 2022,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
    type: "Sedan",
    brand: "Mercedes",
  },
  {
    id: 3,
    title: "2021 Audi Q7 Premium",
    price: 62000,
    image: "images/cars/audi-q7.jpg",
    badge: "Used",
    year: 2021,
    mileage: 15000,
    transmission: "Automatic",
    fuelType: "Gasoline",
    type: "SUV",
    brand: "Audi",
  },
  {
    id: 4,
    title: "2023 Tesla Model 3",
    price: 55000,
    image: "images/cars/tesla-model3.jpg",
    badge: "New",
    year: 2023,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Electric",
    type: "Sedan",
    brand: "Tesla",
  },
  {
    id: 5,
    title: "2020 Toyota Camry XSE",
    price: 32000,
    image: "images/cars/toyota-camry.jpg",
    badge: "Used",
    year: 2020,
    mileage: 25000,
    transmission: "Automatic",
    fuelType: "Gasoline",
    type: "Sedan",
    brand: "Toyota",
  },
  {
    id: 6,
    title: "2022 Honda CR-V Touring",
    price: 38000,
    image: "images/cars/honda-crv.jpg",
    badge: "Used",
    year: 2022,
    mileage: 12000,
    transmission: "Automatic",
    fuelType: "Gasoline",
    type: "SUV",
    brand: "Honda",
  },
];

// Similar Cars Data
const similarCars = [
  {
    id: 1,
    title: "2023 Mercedes-Benz GLE",
    price: 78000,
    image: "images/cars/mercedes-gle.jpg",
    badge: "New",
    year: 2023,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 2,
    title: "2022 Audi Q8",
    price: 72000,
    image: "images/cars/audi-q8.jpg",
    badge: "New",
    year: 2022,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 3,
    title: "2023 Lexus RX 350",
    price: 65000,
    image: "images/cars/lexus-rx.jpg",
    badge: "New",
    year: 2023,
    mileage: 0,
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
];

// Rental Cars Data
const rentalCars = [
  {
    id: 1,
    title: "Toyota Camry",
    price: 45,
    image: "images/rentals/toyota-camry.jpg",
    type: "midsize",
    brand: "toyota",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: ["bluetooth", "navigation", "camera"],
  },
  {
    id: 2,
    title: "Honda Civic",
    price: 40,
    image: "images/rentals/honda-civic.jpg",
    type: "compact",
    brand: "honda",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: ["bluetooth", "camera"],
  },
  {
    id: 3,
    title: "Ford Explorer",
    price: 65,
    image: "images/rentals/ford-explorer.jpg",
    type: "suv",
    brand: "ford",
    seats: 7,
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: ["bluetooth", "navigation", "camera", "leather", "sunroof"],
  },
  {
    id: 4,
    title: "BMW 3 Series",
    price: 75,
    image: "images/rentals/bmw-3.jpg",
    type: "luxury",
    brand: "bmw",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: ["bluetooth", "navigation", "camera", "leather", "sunroof"],
  },
  {
    id: 5,
    title: "Mercedes-Benz C-Class",
    price: 80,
    image: "images/rentals/mercedes-c.jpg",
    type: "luxury",
    brand: "mercedes",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: ["bluetooth", "navigation", "camera", "leather", "sunroof"],
  },
  {
    id: 6,
    title: "Toyota Corolla",
    price: 35,
    image: "images/rentals/toyota-corolla.jpg",
    type: "economy",
    brand: "toyota",
    seats: 5,
    transmission: "Automatic",
    fuelType: "Gasoline",
    features: ["bluetooth"],
  },
];

// Car Parts Data
const carParts = [
  {
    id: 1,
    title: "Bosch Spark Plug",
    price: 15,
    image: "images/parts/spark-plug.jpg",
    category: "engine",
    brand: "bosch",
    condition: "new",
    compatibility: "Multiple vehicles",
  },
  {
    id: 2,
    title: "Brembo Brake Pads",
    price: 85,
    image: "images/parts/brake-pads.jpg",
    category: "brakes",
    brand: "brembo",
    condition: "new",
    compatibility: "BMW, Mercedes, Audi",
  },
  {
    id: 3,
    title: "Denso Air Filter",
    price: 25,
    image: "images/parts/air-filter.jpg",
    category: "engine",
    brand: "denso",
    condition: "new",
    compatibility: "Toyota, Honda, Nissan",
  },
  {
    id: 4,
    title: "Monroe Shock Absorber",
    price: 120,
    image: "images/parts/shock-absorber.jpg",
    category: "suspension",
    brand: "monroe",
    condition: "new",
    compatibility: "Ford, Chevrolet, Dodge",
  },
  {
    id: 5,
    title: "ACDelco Battery",
    price: 150,
    image: "images/parts/battery.jpg",
    category: "electronics",
    brand: "acdelco",
    condition: "new",
    compatibility: "Multiple vehicles",
  },
  {
    id: 6,
    title: "Michelin Tires (Set of 4)",
    price: 600,
    image: "images/parts/tires.jpg",
    category: "wheels",
    brand: "michelin",
    condition: "new",
    compatibility: "Multiple vehicles",
  },
];

// Dealers Data
const dealers = [
  {
    id: 1,
    name: "John Motors",
    image: "images/dealers/john-motors.jpg",
    rating: 4.8,
    location: "New York, NY",
    phone: "(555) 123-4567",
    website: "www.johnmotors.com",
    type: ["new", "used", "certified"],
    brands: ["toyota", "honda", "ford"],
    services: ["financing", "service", "parts"],
  },
  {
    id: 2,
    name: "SpeedCars",
    image: "images/dealers/speedcars.jpg",
    rating: 4.5,
    location: "Los Angeles, CA",
    phone: "(555) 987-6543",
    website: "www.speedcars.com",
    type: ["new", "certified"],
    brands: ["bmw", "mercedes", "audi"],
    services: ["financing", "service", "parts", "bodyshop"],
  },
  {
    id: 3,
    name: "AutoWorld",
    image: "images/dealers/autoworld.jpg",
    rating: 4.2,
    location: "Chicago, IL",
    phone: "(555) 456-7890",
    website: "www.autoworld.com",
    type: ["used", "independent"],
    brands: ["toyota", "honda", "ford", "chevrolet", "nissan"],
    services: ["financing", "service"],
  },
  {
    id: 4,
    name: "Luxury Auto Gallery",
    image: "images/dealers/luxury-auto.jpg",
    rating: 4.9,
    location: "Miami, FL",
    phone: "(555) 789-0123",
    website: "www.luxuryautogallery.com",
    type: ["new", "certified"],
    brands: ["bmw", "mercedes", "lexus", "porsche"],
    services: ["financing", "service", "parts", "rental"],
  },
  {
    id: 5,
    name: "Family Cars",
    image: "images/dealers/family-cars.jpg",
    rating: 4.0,
    location: "Houston, TX",
    phone: "(555) 234-5678",
    website: "www.familycars.com",
    type: ["used", "independent"],
    brands: ["toyota", "honda", "ford", "chevrolet", "hyundai", "kia"],
    services: ["financing", "service"],
  },
];

// Format currency
function formatCurrency(amount) {
  return "$" + amount.toLocaleString("en-US");
}

// Populate Featured Cars
function populateFeaturedCars() {
  const container = document.getElementById("featured-cars-container");
  if (!container) return;

  let html = "";
  featuredCars.forEach((car) => {
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
                        <i class="fas fa-tachometer-alt"></i> ${
                          car.mileage
                        } miles
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
  const container = document.getElementById("testimonial-slider");
  if (!container) return;

  let html = "";
  testimonials.forEach((testimonial) => {
    let stars = "";
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
function populateCarListings(filteredCars = carListings) {
  const container = document.getElementById("car-listings");
  if (!container) return;

  let html = "";
  filteredCars.forEach((car) => {
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
                        <i class="fas fa-tachometer-alt"></i> ${
                          car.mileage
                        } miles
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

  // Update results count
  const resultsNumber = document.getElementById("results-number");
  if (resultsNumber) {
    resultsNumber.textContent = filteredCars.length;
  }
}

// Populate Similar Cars
function populateSimilarCars() {
  const container = document.getElementById("similar-cars-container");
  if (!container) return;

  let html = "";
  similarCars.forEach((car) => {
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
                        <i class="fas fa-tachometer-alt"></i> ${
                          car.mileage
                        } miles
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

// Populate Rental Cars
function populateRentalCars(filteredCars = rentalCars) {
  const container = document.getElementById("rental-listings");
  if (!container) return;

  let html = "";
  filteredCars.forEach((car) => {
    html += `
            <div class="rental-card">
                <div class="rental-image">
                    <img src="${car.image}" alt="${car.title}">
                    <div class="rental-badge">${
                      car.type.charAt(0).toUpperCase() + car.type.slice(1)
                    }</div>
                </div>
                <div class="rental-details">
                    <h3 class="rental-title">${car.title}</h3>
                    <div class="rental-info">
                        <div class="rental-price">$${
                          car.price
                        } <span>/ day</span></div>
                        <div class="car-year">${
                          car.brand.charAt(0).toUpperCase() + car.brand.slice(1)
                        }</div>
                    </div>
                    <div class="rental-meta">
                        <div class="rental-meta-item">
                            <i class="fas fa-user"></i> ${car.seats} seats
                        </div>
                        <div class="rental-meta-item">
                            <i class="fas fa-cog"></i> ${car.transmission}
                        </div>
                        <div class="rental-meta-item">
                            <i class="fas fa-gas-pump"></i> ${car.fuelType}
                        </div>
                    </div>
                    <div class="rental-actions">
                        <button class="btn-primary">Rent Now</button>
                        <button class="btn-outline"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        `;
  });

  container.innerHTML = html;

  // Update results count
  const resultsNumber = document.getElementById("rental-results-number");
  if (resultsNumber) {
    resultsNumber.textContent = filteredCars.length;
  }
}

// Populate Car Parts
function populateCarParts(filteredParts = carParts) {
  const container = document.getElementById("parts-listings");
  if (!container) return;

  let html = "";
  filteredParts.forEach((part) => {
    html += `
            <div class="part-card">
                <div class="part-image">
                    <img src="${part.image}" alt="${part.title}">
                    <div class="part-badge">${
                      part.condition.charAt(0).toUpperCase() +
                      part.condition.slice(1)
                    }</div>
                </div>
                <div class="part-details">
                    <h3 class="part-title">${part.title}</h3>
                    <div class="part-info">
                        <div class="part-price">$${part.price}</div>
                        <div class="part-brand">${
                          part.brand.charAt(0).toUpperCase() +
                          part.brand.slice(1)
                        }</div>
                    </div>
                    <div class="part-compatibility">
                        <i class="fas fa-car"></i> Compatible with: ${
                          part.compatibility
                        }
                    </div>
                    <div class="part-actions">
                        <button class="btn-primary">Add to Cart</button>
                        <button class="btn-outline"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        `;
  });

  container.innerHTML = html;

  // Update results count
  const resultsNumber = document.getElementById("parts-results-number");
  if (resultsNumber) {
    resultsNumber.textContent = filteredParts.length;
  }
}

// Populate Dealers
function populateDealers(filteredDealers = dealers) {
  const container = document.getElementById("dealer-listings");
  if (!container) return;

  let html = "";
  filteredDealers.forEach((dealer) => {
    // Generate stars based on rating
    let stars = "";
    const fullStars = Math.floor(dealer.rating);
    const halfStar = dealer.rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars += '<i class="fas fa-star"></i>';
      } else if (i === fullStars + 1 && halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
      } else {
        stars += '<i class="far fa-star"></i>';
      }
    }

    // Generate brand badges
    let brandBadges = "";
    dealer.brands.forEach((brand) => {
      brandBadges += `<span class="dealer-brand">${
        brand.charAt(0).toUpperCase() + brand.slice(1)
      }</span>`;
    });

    html += `
            <div class="dealer-card">
                <div class="dealer-image">
                    <img src="${dealer.image}" alt="${dealer.name}">
                </div>
                <div class="dealer-details">
                    <div class="dealer-header">
                        <h3 class="dealer-name">${dealer.name}</h3>
                        <div class="dealer-rating">
                            <div class="stars">${stars}</div>
                            <span>${dealer.rating}</span>
                        </div>
                    </div>
                    <div class="dealer-info">
                        <p><i class="fas fa-map-marker-alt"></i> ${dealer.location}</p>
                        <p><i class="fas fa-phone"></i> ${dealer.phone}</p>
                        <p><i class="fas fa-globe"></i> ${dealer.website}</p>
                    </div>
                    <div class="dealer-brands">
                        ${brandBadges}
                    </div>
                    <div class="dealer-actions">
                        <button class="btn-primary">View Inventory</button>
                        <button class="btn-secondary">Contact Dealer</button>
                    </div>
                </div>
            </div>
        `;
  });

  container.innerHTML = html;

  // Update results count
  const resultsNumber = document.getElementById("dealer-results-number");
  if (resultsNumber) {
    resultsNumber.textContent = filteredDealers.length;
  }
}

// Filter Car Listings
function filterCarListings() {
  const typeFilters = Array.from(
    document.querySelectorAll('.car-filter[data-filter="type"]:checked')
  ).map((el) => el.value);
  const brandFilters = Array.from(
    document.querySelectorAll('.car-filter[data-filter="brand"]:checked')
  ).map((el) => el.value);
  const fuelFilters = Array.from(
    document.querySelectorAll('.car-filter[data-filter="fuel"]:checked')
  ).map((el) => el.value);
  const conditionFilters = Array.from(
    document.querySelectorAll('.car-filter[data-filter="condition"]:checked')
  ).map((el) => el.value);
  const priceRange = document.getElementById("price-range");
  const maxPrice = priceRange ? parseInt(priceRange.value) : 100000;

  let filteredCars = carListings.filter((car) => {
    // Filter by price
    if (car.price > maxPrice) return false;

    // Filter by type
    if (typeFilters.length > 0 && !typeFilters.includes(car.type.toLowerCase()))
      return false;

    // Filter by brand
    if (
      brandFilters.length > 0 &&
      !brandFilters.includes(car.brand.toLowerCase())
    )
      return false;

    // Filter by fuel type
    if (
      fuelFilters.length > 0 &&
      !fuelFilters.includes(car.fuelType.toLowerCase())
    )
      return false;

    // Filter by condition
    if (conditionFilters.length > 0) {
      const condition = car.badge === "New" ? "new" : "used";
      if (!conditionFilters.includes(condition)) return false;
    }

    return true;
  });

  // Sort cars
  const sortBy = document.getElementById("sort-by");
  if (sortBy) {
    const sortValue = sortBy.value;

    switch (sortValue) {
      case "price-low":
        filteredCars.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredCars.sort((a, b) => b.price - a.price);
        break;
      case "year-new":
        filteredCars.sort((a, b) => b.year - a.year);
        break;
      case "year-old":
        filteredCars.sort((a, b) => a.year - b.year);
        break;
      case "mileage-low":
        filteredCars.sort((a, b) => a.mileage - b.mileage);
        break;
      case "mileage-high":
        filteredCars.sort((a, b) => b.mileage - a.mileage);
        break;
    }
  }

  populateCarListings(filteredCars);
}

// Filter Rental Cars
function filterRentalCars() {
  const typeFilters = Array.from(
    document.querySelectorAll('.rental-filter[data-filter="type"]:checked')
  ).map((el) => el.value);
  const brandFilters = Array.from(
    document.querySelectorAll('.rental-filter[data-filter="brand"]:checked')
  ).map((el) => el.value);
  const featureFilters = Array.from(
    document.querySelectorAll('.rental-filter[data-filter="features"]:checked')
  ).map((el) => el.value);
  const priceRange = document.getElementById("rental-price-range");
  const maxPrice = priceRange ? parseInt(priceRange.value) : 500;

  let filteredCars = rentalCars.filter((car) => {
    // Filter by price
    if (car.price > maxPrice) return false;

    // Filter by type
    if (typeFilters.length > 0 && !typeFilters.includes(car.type)) return false;

    // Filter by brand
    if (brandFilters.length > 0 && !brandFilters.includes(car.brand))
      return false;

    // Filter by features
    if (featureFilters.length > 0) {
      const hasAllFeatures = featureFilters.every((feature) =>
        car.features.includes(feature)
      );
      if (!hasAllFeatures) return false;
    }

    return true;
  });

  // Sort cars
  const sortBy = document.getElementById("sort-rentals-by");
  if (sortBy) {
    const sortValue = sortBy.value;

    switch (sortValue) {
      case "price-low":
        filteredCars.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredCars.sort((a, b) => b.price - a.price);
        break;
      case "popularity":
        // For this example, we'll just randomize
        filteredCars.sort(() => Math.random() - 0.5);
        break;
      case "rating":
        // For this example, we'll just randomize
        filteredCars.sort(() => Math.random() - 0.5);
        break;
    }
  }

  populateRentalCars(filteredCars);
}

// Filter Car Parts
function filterCarParts() {
  const categoryFilters = Array.from(
    document.querySelectorAll('.parts-filter[data-filter="category"]:checked')
  ).map((el) => el.value);
  const brandFilters = Array.from(
    document.querySelectorAll('.parts-filter[data-filter="brand"]:checked')
  ).map((el) => el.value);
  const conditionFilters = Array.from(
    document.querySelectorAll('.parts-filter[data-filter="condition"]:checked')
  ).map((el) => el.value);
  const priceRange = document.getElementById("parts-price-range");
  const maxPrice = priceRange ? parseInt(priceRange.value) : 1000;

  let filteredParts = carParts.filter((part) => {
    // Filter by price
    if (part.price > maxPrice) return false;

    // Filter by category
    if (categoryFilters.length > 0 && !categoryFilters.includes(part.category))
      return false;

    // Filter by brand
    if (brandFilters.length > 0 && !brandFilters.includes(part.brand))
      return false;

    // Filter by condition
    if (
      conditionFilters.length > 0 &&
      !conditionFilters.includes(part.condition)
    )
      return false;

    return true;
  });

  // Sort parts
  const sortBy = document.getElementById("sort-parts-by");
  if (sortBy) {
    const sortValue = sortBy.value;

    switch (sortValue) {
      case "price-low":
        filteredParts.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filteredParts.sort((a, b) => b.price - a.price);
        break;
      case "popularity":
        // For this example, we'll just randomize
        filteredParts.sort(() => Math.random() - 0.5);
        break;
      case "rating":
        // For this example, we'll just randomize
        filteredParts.sort(() => Math.random() - 0.5);
        break;
    }
  }

  populateCarParts(filteredParts);
}

// Filter Dealers
function filterDealers() {
  const typeFilters = Array.from(
    document.querySelectorAll('.dealer-filter[data-filter="type"]:checked')
  ).map((el) => el.value);
  const brandFilters = Array.from(
    document.querySelectorAll('.dealer-filter[data-filter="brand"]:checked')
  ).map((el) => el.value);
  const serviceFilters = Array.from(
    document.querySelectorAll('.dealer-filter[data-filter="services"]:checked')
  ).map((el) => el.value);
  const ratingFilters = Array.from(
    document.querySelectorAll('.dealer-filter[data-filter="rating"]:checked')
  ).map((el) => parseInt(el.value));

  let filteredDealers = dealers.filter((dealer) => {
    // Filter by type
    if (
      typeFilters.length > 0 &&
      !typeFilters.some((type) => dealer.type.includes(type))
    )
      return false;

    // Filter by brand
    if (
      brandFilters.length > 0 &&
      !brandFilters.some((brand) => dealer.brands.includes(brand))
    )
      return false;

    // Filter by services
    if (
      serviceFilters.length > 0 &&
      !serviceFilters.every((service) => dealer.services.includes(service))
    )
      return false;

    // Filter by rating
    if (ratingFilters.length > 0) {
      const minRating = Math.min(...ratingFilters);
      if (dealer.rating < minRating) return false;
    }

    return true;
  });

  // Sort dealers
  const sortBy = document.getElementById("sort-dealers-by");
  if (sortBy) {
    const sortValue = sortBy.value;

    switch (sortValue) {
      case "rating":
        filteredDealers.sort((a, b) => b.rating - a.rating);
        break;
      case "name-asc":
        filteredDealers.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filteredDealers.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "distance":
        // For this example, we'll just use the original order
        break;
    }
  }

  populateDealers(filteredDealers);
}

// Enhanced filtering with real-time updates
function setupRealTimeFiltering() {
  // Marketplace real-time filtering
  const marketplaceFilters = document.querySelectorAll(".car-filter");
  marketplaceFilters.forEach((filter) => {
    filter.addEventListener("change", filterCarListings);
  });

  // Rental real-time filtering
  const rentalFilters = document.querySelectorAll(".rental-filter");
  rentalFilters.forEach((filter) => {
    filter.addEventListener("change", filterRentalCars);
  });

  // Parts real-time filtering
  const partsFilters = document.querySelectorAll(".parts-filter");
  partsFilters.forEach((filter) => {
    filter.addEventListener("change", filterCarParts);
  });

  // Dealer real-time filtering
  const dealerFilters = document.querySelectorAll(".dealer-filter");
  dealerFilters.forEach((filter) => {
    filter.addEventListener("change", filterDealers);
  });

  // Price range real-time updates
  const marketplacePriceRange = document.getElementById("price-range");
  if (marketplacePriceRange) {
    marketplacePriceRange.addEventListener("input", () => {
      const priceValue = document.getElementById("price-value");
      if (priceValue) {
        priceValue.textContent =
          "$" + parseInt(marketplacePriceRange.value).toLocaleString();
      }
      filterCarListings();
    });
  }

  const partsPriceRange = document.getElementById("parts-price-range");
  if (partsPriceRange) {
    partsPriceRange.addEventListener("input", () => {
      const priceValue = document.getElementById("parts-price-value");
      if (priceValue) {
        priceValue.textContent =
          "$" + parseInt(partsPriceRange.value).toLocaleString();
      }
      filterCarParts();
    });
  }

  // Rental price range (if it has a separate ID later)
  const rentalPriceRange = document.getElementById("rental-price-range");
  if (rentalPriceRange) {
    rentalPriceRange.addEventListener("input", () => {
      const priceValue = document.getElementById("rental-price-value");
      if (priceValue) {
        priceValue.textContent =
          "$" + parseInt(rentalPriceRange.value).toLocaleString();
      }
      filterRentalCars();
    });
  }
}

// Search Overlay
if (searchBtn && searchOverlay && closeSearchBtn) {
  searchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("active");
  });

  closeSearchBtn.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
  });
}

// Modal Functionality
if (loginBtn && registerBtn && loginModal && registerModal) {
  loginBtn.addEventListener("click", () => {
    loginModal.classList.add("active");
  });

  registerBtn.addEventListener("click", () => {
    registerModal.classList.add("active");
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      loginModal.classList.remove("active");
      registerModal.classList.remove("active");
    });
  });

  if (switchToRegisterBtn) {
    switchToRegisterBtn.addEventListener("click", (e) => {
      e.preventDefault();
      loginModal.classList.remove("active");
      registerModal.classList.add("active");
    });
  }

  if (switchToLoginBtn) {
    switchToLoginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      registerModal.classList.remove("active");
      loginModal.classList.add("active");
    });
  }
}

// Mobile Filter Toggle
if (mobileFilterToggle && mobileFilterClose && filtersSidebar) {
  mobileFilterToggle.addEventListener("click", () => {
    filtersSidebar.classList.add("active");
  });

  mobileFilterClose.addEventListener("click", () => {
    filtersSidebar.classList.remove("active");
  });
}

// Price Range Slider
if (priceRange && priceValue) {
  priceRange.addEventListener("input", () => {
    priceValue.textContent = formatCurrency(parseInt(priceRange.value));
  });
}

// Tab Functionality
if (tabBtns.length && tabPanes.length) {
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;

      // Remove active class from all buttons and panes
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanes.forEach((p) => p.classList.remove("active"));

      // Add active class to current button and pane
      btn.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
}

// Car Image Gallery
function changeMainImage(thumbnail) {
  const mainImage = document.getElementById("main-car-image");
  if (!mainImage) return;

  // Update main image
  mainImage.src = thumbnail.src;
  mainImage.alt = thumbnail.alt;

  // Update active thumbnail
  const thumbnails = document.querySelectorAll(".thumbnail-images img");
  thumbnails.forEach((img) => img.classList.remove("active"));
  thumbnail.classList.add("active");
}

// Financing Calculator
if (calculateBtn) {
  calculateBtn.addEventListener("click", () => {
    const vehiclePrice = 75000; // Fixed price for this example
    const downPayment =
      parseFloat(document.getElementById("down-payment").value) || 0;
    const tradeInValue =
      parseFloat(document.getElementById("trade-in-value").value) || 0;
    const loanTerm = parseInt(document.getElementById("loan-term").value) || 60;
    const interestRate =
      parseFloat(document.getElementById("interest-rate").value) || 3.9;

    // Calculate loan amount
    const loanAmount = vehiclePrice - downPayment - tradeInValue;

    // Calculate monthly payment
    const monthlyInterest = interestRate / 100 / 12;
    const monthlyPayment =
      (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm)) /
      (Math.pow(1 + monthlyInterest, loanTerm) - 1);

    // Calculate total interest
    const totalInterest = monthlyPayment * loanTerm - loanAmount;

    // Calculate total cost
    const totalCost = loanAmount + totalInterest;

    // Update results
    document.getElementById("loan-amount").textContent =
      formatCurrency(loanAmount);
    document.getElementById("monthly-payment").textContent =
      formatCurrency(monthlyPayment);
    document.getElementById("total-interest").textContent =
      formatCurrency(totalInterest);
    document.getElementById("total-cost").textContent =
      formatCurrency(totalCost);
  });
}

// Event Listeners for Filters
document.addEventListener("DOMContentLoaded", () => {
  // Initialize pages
  populateFeaturedCars();
  populateTestimonials();
  populateCarListings();
  populateSimilarCars();
  populateRentalCars();
  populateCarParts();
  populateDealers();

  // Setup real-time filtering
  setupRealTimeFiltering();

  // Marketplace Filters
  const applyFilters = document.getElementById("apply-filters");
  if (applyFilters) {
    applyFilters.addEventListener("click", filterCarListings);
  }

  const resetFilters = document.getElementById("reset-filters");
  if (resetFilters) {
    resetFilters.addEventListener("click", () => {
      // Reset checkboxes
      document.querySelectorAll(".car-filter").forEach((checkbox) => {
        checkbox.checked = false;
      });

      // Reset price range
      const priceRange = document.getElementById("price-range");
      if (priceRange) {
        priceRange.value = 100000;
        document.getElementById("price-value").textContent = "$100,000";
      }

      // Reset sort
      const sortBy = document.getElementById("sort-by");
      if (sortBy) {
        sortBy.value = "price-low";
      }

      // Apply reset filters
      populateCarListings();
    });
  }

  // Rental Filters
  const applyRentalFilters = document.getElementById("apply-rental-filters");
  if (applyRentalFilters) {
    applyRentalFilters.addEventListener("click", filterRentalCars);
  }

  const resetRentalFilters = document.getElementById("reset-rental-filters");
  if (resetRentalFilters) {
    resetRentalFilters.addEventListener("click", () => {
      // Reset checkboxes
      document.querySelectorAll(".rental-filter").forEach((checkbox) => {
        checkbox.checked = false;
      });

      // Reset price range
      const priceRange = document.getElementById("rental-price-range");
      if (priceRange) {
        priceRange.value = 250;
        document.getElementById("rental-price-value").textContent = "$250";
      }

      // Reset sort
      const sortBy = document.getElementById("sort-rentals-by");
      if (sortBy) {
        sortBy.value = "price-low";
      }

      // Apply reset filters
      populateRentalCars();
    });
  }

  // Parts Filters
  const applyPartsFilters = document.getElementById("apply-parts-filters");
  if (applyPartsFilters) {
    applyPartsFilters.addEventListener("click", filterCarParts);
  }

  const resetPartsFilters = document.getElementById("reset-parts-filters");
  if (resetPartsFilters) {
    resetPartsFilters.addEventListener("click", () => {
      // Reset checkboxes
      document.querySelectorAll(".parts-filter").forEach((checkbox) => {
        checkbox.checked = false;
      });

      // Reset price range
      const priceRange = document.getElementById("parts-price-range");
      if (priceRange) {
        priceRange.value = 500;
        document.getElementById("parts-price-value").textContent = "$500";
      }

      // Reset sort
      const sortBy = document.getElementById("sort-parts-by");
      if (sortBy) {
        sortBy.value = "relevance";
      }

      // Apply reset filters
      populateCarParts();
    });
  }

  // Dealer Filters
  const applyDealerFilters = document.getElementById("apply-dealer-filters");
  if (applyDealerFilters) {
    applyDealerFilters.addEventListener("click", filterDealers);
  }

  const resetDealerFilters = document.getElementById("reset-dealer-filters");
  if (resetDealerFilters) {
    resetDealerFilters.addEventListener("click", () => {
      // Reset checkboxes
      document.querySelectorAll(".dealer-filter").forEach((checkbox) => {
        checkbox.checked = false;
      });

      // Reset sort
      const sortBy = document.getElementById("sort-dealers-by");
      if (sortBy) {
        sortBy.value = "distance";
      }

      // Apply reset filters
      populateDealers();
    });
  }

  // Sort Change Events
  const sortBy = document.getElementById("sort-by");
  if (sortBy) {
    sortBy.addEventListener("change", filterCarListings);
  }

  const sortRentalsBy = document.getElementById("sort-rentals-by");
  if (sortRentalsBy) {
    sortRentalsBy.addEventListener("change", filterRentalCars);
  }

  const sortPartsBy = document.getElementById("sort-parts-by");
  if (sortPartsBy) {
    sortPartsBy.addEventListener("change", filterCarParts);
  }

  const sortDealersBy = document.getElementById("sort-dealers-by");
  if (sortDealersBy) {
    sortDealersBy.addEventListener("change", filterDealers);
  }

  // Price Range Events
  const marketplacePriceRange = document.getElementById("price-range");
  if (marketplacePriceRange) {
    marketplacePriceRange.addEventListener("input", () => {
      document.getElementById("price-value").textContent =
        "$" + marketplacePriceRange.value;
    });
  }

  const partsPriceRange = document.getElementById("parts-price-range");
  if (partsPriceRange) {
    partsPriceRange.addEventListener("input", () => {
      document.getElementById("parts-price-value").textContent =
        "$" + partsPriceRange.value;
    });
  }

  // Category Cards Click Events
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      if (category) {
        // Reset all filters
        document.querySelectorAll(".parts-filter").forEach((checkbox) => {
          checkbox.checked = false;
        });

        // Check the selected category
        const categoryCheckbox = document.querySelector(
          `.parts-filter[data-filter="category"][value="${category}"]`
        );
        if (categoryCheckbox) {
          categoryCheckbox.checked = true;
          filterCarParts();
        }
      }
    });
  });

  // FAQ Toggle
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle("active");
    });
  });

  // Vehicle Make Change Event
  const vehicleMake = document.getElementById("vehicle-make");
  const vehicleModel = document.getElementById("vehicle-model");
  if (vehicleMake && vehicleModel) {
    vehicleMake.addEventListener("change", () => {
      const make = vehicleMake.value;
      vehicleModel.innerHTML = '<option value="">Select Model</option>';
      vehicleModel.disabled = !make;

      if (make) {
        // Populate models based on make
        let models = [];
        switch (make) {
          case "toyota":
            models = ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma"];
            break;
          case "honda":
            models = ["Civic", "Accord", "CR-V", "Pilot", "Odyssey"];
            break;
          case "ford":
            models = ["F-150", "Escape", "Explorer", "Mustang", "Edge"];
            break;
          case "bmw":
            models = ["3 Series", "5 Series", "X3", "X5", "7 Series"];
            break;
          case "mercedes":
            models = ["C-Class", "E-Class", "GLC", "GLE", "S-Class"];
            break;
        }

        models.forEach((model) => {
          const option = document.createElement("option");
          option.value = model.toLowerCase().replace(" ", "-");
          option.textContent = model;
          vehicleModel.appendChild(option);
        });
      }
    });
  }
});

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.remove("active");
  }
  if (e.target === registerModal) {
    registerModal.classList.remove("active");
  }
  if (e.target === searchOverlay) {
    searchOverlay.classList.remove("active");
  }
});
