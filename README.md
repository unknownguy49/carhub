# CarHub - Car Showcase and Marketplace

## Overview

CarHub is a comprehensive car showcase and marketplace platform that allows users to browse, filter, and explore various vehicles, rental cars, car parts, and dealers. The platform features a dark-themed, responsive design with intuitive navigation and interactive elements.

Live Demo: [carhubweb.vercel.app](https://carhubweb.vercel.app)

## Features

### Home Page
- Hero section with featured car showcase
- Featured categories with interactive cards
- Featured cars section with filtering options
- How it works section explaining the platform process
- Customer testimonials
- Dealer partnership information

### Marketplace
- Advanced filtering system by type, brand, fuel type, and condition
- Price range slider
- Sorting options (price, year, mileage)
- Responsive grid layout for car listings
- Detailed car cards with key information

### Car Details
- Comprehensive car information display
- Image gallery with thumbnails
- Specifications table
- Features list
- Dealer information
- Financing calculator
- Similar cars recommendations
- Tabbed interface for details, specs, reviews, and financing

### Rentals
- Search form with date and location options
- Filtering by car type, brand, and features
- Price range filter
- Sorting options
- Detailed rental car cards
- Rental information section
- FAQ section with toggle functionality

### Parts
- Category browsing with interactive cards
- Filtering by category, brand, and condition
- Price range filter
- Sorting options
- Detailed part cards with compatibility information
- Parts information section

### Dealers
- Search form with location options
- Filtering by dealer type, brands, services, and rating
- Sorting options
- Detailed dealer cards with contact information and ratings
- Dealer partnership information

### Global Features
- Dark-themed design
- Responsive layout for all device sizes
- Interactive modals for login and registration
- Mobile-friendly navigation
- Interactive UI elements with hover effects

## Tech Stack

- **Frontend**:
  - HTML5
  - CSS3 (Custom variables, Flexbox, Grid)
  - JavaScript (ES6+)
  
- **Database**:
  - MySQL (for production implementation)
  - JavaScript arrays (for demo implementation)
  
- **Deployment**:
  - Vercel

## File Structure

```
carhub/
├── index.html              # Home page
├── marketplace.html        # Marketplace page
├── rentals.html            # Rentals page
├── parts.html              # Parts page
├── dealers.html            # Dealers page
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript file
├── images/
│   ├── cars/               # Car images
│   ├── rentals/            # Rental car images
│   ├── parts/              # Car parts images
│   ├── dealers/            # Dealer images
│   └── users/              # User avatars for testimonials
└── README.md               # Project documentation
```

## Local Development Setup

### Prerequisites
- Web browser (Chrome, Firefox, Safari, or Edge)
- Code editor (VS Code, Sublime Text, or similar)
- Local server environment (optional, for testing)

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/unknownguy49/carhub.git
   cd carhub
   ```

2. **Set up local server (Optional)**
   
   You can use any of the following methods:
   
   - **Using Python**:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     ```
   
   - **Using Node.js**:
     ```bash
     # Install http-server globally
     npm install -g http-server
     
     # Run server
     http-server -p 8000
     ```
   
   - **Using VS Code**:
     Install the "Live Server" extension and click "Go Live" in the status bar.

3. **Open in browser**
   
   If using a local server, navigate to:
   ```
   http://localhost:8000
   ```
   
   Alternatively, you can open the HTML files directly in your browser.

## Implementation Notes

### Demo vs Production

The current implementation uses JavaScript arrays to simulate database functionality:

- `carListings` array for marketplace cars
- `rentalCars` array for rental vehicles
- `carParts` array for parts inventory
- `dealers` array for dealer listings

In a production environment, these would be replaced with MySQL database queries.

### Filtering System

The filtering system works by:
1. Collecting filter values from checkboxes and range inputs
2. Filtering the data arrays based on selected criteria
3. Sorting the filtered results based on user selection
4. Updating the DOM with the filtered and sorted results

### Responsive Design

The application uses:
- CSS variables for consistent theming
- Media queries for responsive layouts
- Flexbox and Grid for modern layouts
- Mobile-first approach for smaller screens

## Contributing

1.  Fork the repository.
2.  Clone the repository locally:

        ```sh
        git clone https://github.com/your-username/SkillHive.git
        ```

3.  Create a new branch for your feature:

        ```sh
        git checkout -b feature-name
        ```

4.  Commit changes:

        ```sh
        git commit -m "Add new feature"
        ```

5.  Push the branch:

        ```sh
        git push origin feature-name
        ```

6.  Open a Pull Request.

## Contact
For any questions or feedback, feel free to reach out:
- E-mail: dibyadyutidutta49@gmail.com
- LinkedIn: https://linkedin.com/in/dibyadyuti-dutta