# Maison Belle — Luxury Beauty Parlour Website

A premium, elegant, and fully responsive beauty parlour website designed for **Maison Belle**, a luxury beauty studio focused on beauty, self-care, and timeless elegance.

The website combines sophisticated visual design with smooth animations and interactive experiences to create a modern luxury beauty brand presence.

## ✨ Features

* Premium luxury beauty aesthetic
* Fully responsive design
* Mobile, tablet, laptop, and desktop support
* Smooth GSAP animations
* Scroll-triggered animations
* Interactive hover effects
* Elegant typography
* Luxury service cards
* Editorial-style image gallery
* Client testimonials
* About section with layered imagery
* Premium feature highlights
* FAQ section
* Newsletter section
* Responsive navigation
* Call-to-action sections
* Modern footer
* Smooth scrolling experience

## 🛠️ Technologies Used

* **HTML5** — Semantic website structure
* **CSS3** — Responsive styling, layouts, effects, and animations
* **JavaScript** — Interactions and functionality
* **GSAP** — Advanced animations and scroll effects
* **Font Awesome** — Icons
* **Google Fonts** — Typography

## 🎨 Design Direction

Maison Belle follows a soft luxury visual identity inspired by modern beauty studios and editorial fashion brands.

### Color Palette

* Ivory
* Warm Beige
* Soft Blush
* Champagne Gold
* Dark Charcoal
* Warm Neutral Tones

The interface uses:

* Soft gradients
* Glassmorphism
* Rounded organic shapes
* Editorial typography
* Large imagery
* Subtle shadows
* Gold accents
* Cinematic hover effects

## 📂 Project Structure

```text
maison-belle-luxury-beauty/
│
├── index.html
│
├── style.css
│
├── script.js
│
├── images/
│   ├── hero.jpg
│   ├── about-salon.jpg
│   ├── service-spa.jpg
│   ├── service-hair.jpg
│   ├── service-facial.jpg
│   ├── service-nails.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   ├── gallery-5.jpg
│   ├── gallery-6.jpg
│   ├── client-1.jpg
│   ├── client-2.jpg
│   └── client-3.jpg
│
└── README.md
```

## 📄 Website Sections

### 01 — Hero

A luxury introduction to Maison Belle featuring:

* Brand statement
* Primary CTA
* Secondary CTA
* Experience statistics
* Premium salon imagery
* Floating information cards
* Animated visual elements

### 02 — Features

Highlights the Maison Belle experience through four core values:

* Certified Experts
* Organic Products
* Personalized Care
* Luxury Experience

### 03 — About

Introduces the philosophy behind Maison Belle with layered photography, experience statistics, brand messaging, and luxury service principles.

### 04 — Services

Signature services are presented through immersive image cards:

* Hair Styling
* Facial & Skin Care
* Nail Art

Each card includes interactive hover effects and animated content.

### 05 — Gallery

An editorial-style gallery showcasing the beauty studio, treatments, styling, and luxury atmosphere.

The masonry-inspired layout creates visual variation instead of using a conventional image grid.

### 06 — Testimonials

Client experiences are displayed through elegant testimonial cards featuring:

* Five-star ratings
* Client profiles
* Reviews
* Verified client indicators
* Interactive hover animations

### 07 — FAQ

A frequently asked questions section designed to make important information easily accessible to visitors.

### 08 — Newsletter

A refined newsletter CTA encouraging visitors to stay connected with Maison Belle.

### 09 — Footer

The final brand section containing navigation, contact information, social links, and supporting website information.

## 🎬 Animation System

GSAP is used throughout the website to create a smooth and premium experience.

Animations include:

* Hero entrance animations
* Scroll-triggered reveals
* Image movement
* Floating elements
* Card animations
* Hover interactions
* Parallax-style effects
* Staggered content reveals

Example:

```javascript
gsap.from(".service-card", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".services-grid",
    start: "top 80%"
  }
});
```

## 📱 Responsive Design

The website is designed to adapt across different screen sizes.

### Desktop

* Multi-column layouts
* Large editorial imagery
* Floating cards
* Spacious typography

### Tablet

* Adaptive grid layouts
* Reduced spacing
* Rebalanced imagery

### Mobile

* Single-column layouts
* Stacked CTAs
* Responsive typography
* Touch-friendly controls
* Optimized image sizes
* Reduced decorative elements

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/maison-belle-luxury-beauty.git
```

Navigate into the project:

```bash
cd maison-belle-luxury-beauty
```

Open `index.html` in your browser.

No build tools or frameworks are required.

## 🌐 Deployment

This project can be deployed easily using platforms such as:

* GitHub Pages
* Netlify
* Vercel

Because the website uses HTML, CSS, and JavaScript, it can be deployed as a static website.

## 📸 Project Preview

Add screenshots of the website here after uploading them to your repository.

Example:

```markdown
![Maison Belle Website Preview](images/preview.jpg)
```

## 🎯 Purpose

This project was created as a premium frontend website concept for a luxury beauty parlour.

The focus was to combine:

**Luxury + Beauty + Editorial Design + Motion + Responsive Development**

into one cohesive digital experience.



## 👩‍💻 Author

**Shreya Rane**

Frontend Developer & Web Designer

---

⭐ If you like this project, consider giving the repository a star.
