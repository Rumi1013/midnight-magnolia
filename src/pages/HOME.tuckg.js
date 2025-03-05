import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-midnight-blue text-linen min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 bg-velvet-black text-gold shadow-lg">
        <h1 className="text-3xl font-bold font-playfair">Midnight Magnolia</h1>
        <ul className="flex space-x-6 text-lg font-montserrat">
          <li><Link href="#services">Our Services</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#store">Store</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <header className="relative flex items-center justify-center text-center py-32">
        <Image
          src="/hero-image.jpg" // Replace with actual hero image URL
          alt="Midnight Magnolia Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-75"
        />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl font-bold font-playfair text-gold">Rooted in Power, Blooming in Truth.</h2>
          <p className="text-xl font-cormorant mt-4 text-antique-pearl">
            Experience the intersection of heritage, mysticism, and cultural storytelling.
          </p>
          <Link href="#services">
            <button className="mt-6 px-6 py-3 bg-gold text-velvet-black font-semibold text-lg rounded-lg shadow-md hover:bg-warm-taupe transition">
              Explore Our Services
            </button>
          </Link>
        </div>
      </header>

      {/* Footer */}
      <footer className="text-center p-6 bg-velvet-black text-gold font-montserrat">
        <p>&copy; {new Date().getFullYear()} Midnight Magnolia. All rights reserved.</p>
      </footer>
    </div>
  );
}


.hero-section {
    position: relative;
    min-height: 80vh;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(28, 28, 28, 0.7);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    color: var(--color-secondary);
}

/* Custom Button Styles */
.custom-button {
    background-color: var(--color-accent) !important;
    color: var(--color-text) !important;
    transition: background-color 0.3s ease !important;
    border: none !important;
    border-radius: 4px !important;
    padding: 12px 30px !important;
}

.custom-button:hover {
    background-color: #c21900 !important;
    transform: translateY(-2px);
}

/* Gallery Grid */
.gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.gallery-item {
    overflow: hidden;
    border-radius: 4px;
}

.gallery-item img {
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

/* Blog Post Cards */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.blog-post {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    padding: 20px;
    transition: transform 0.3s ease;
}

.blog-post:hover {
    transform: translateY(-5px);
}

/* Form Styling */
.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(204, 185, 75, 0.3) !important;
    color: var(--color-text) !important;
    border-radius: 4px !important;
    padding: 12px !important;
    width: 100% !important;
    transition: all 0.3s ease !important;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: var(--color-secondary) !important;
    background: rgba(255, 255, 255, 0.1) !important;
    outline: none !important;
}

/* Custom Text Styles */
.heading-primary {
    font-family: 'Playfair Display', serif !important;
    color: var(--color-primary) !important;
}

.text-secondary {
    color: var(--color-secondary) !important;
}

/* Footer Styling */
.footer-container {
    background-color: var(--color-purple);
    color: var(--color-text);
}

/* Social Icons */
.social-icon {
    color: var(--color-secondary) !important;
    transition: color 0.3s ease !important;
}

.social-icon:hover {
    color: var(--color-accent) !important;
}

/* Mobile Responsive Adjustments */
@media (max-width: 768px) {
    .navigation-menu {
        flex-direction: column;
        gap: 15px;
    }
    
    .blog-grid {
        grid-template-columns: 1fr;
    }
}

/* Animation Classes */
.fade-in {
    animation: fadeIn 1s ease-out;
}

.slide-up {
    animation: slideUp 0.8s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--color-background);
}

::-webkit-scrollbar-thumb {
    background: var(--color-secondary);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--color-accent);
}

/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Custom Properties */
:root {
    --color-primary: #F4870E;     /* Bright Orange */
    --color-secondary: #CCB94B;   /* Gold */
    --color-accent: #AD1700;      /* Vibrant Red */
    --color-background: #1C1C1C;  /* Deep Black */
    --color-green: #434932;       /* Deep Green */
    --color-purple: #6A345C;      /* Dark Purple */
    --color-teal: #0E3F50;        /* Deep Teal */
    --color-text: #EDEDED;        /* Light Text */
    
    --transition-standard: all 0.3s ease-in-out;
    --shadow-standard: 0 4px 6px rgba(0, 0, 0, 0.1);
    --border-radius: 4px;
}

/* Font Imports - Add to HTML */
/* @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Montserrat:wght@400;600&family=Playfair+Display:wght@400;700&display=swap'); */

body {
    font-family: 'Lora', serif;
    color: var(--color-text);
    background-color: var(--color-background);
    line-height: 1.6;
    overflow-x: hidden;
}

/* Utility Classes */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-padding {
    padding: 80px 0;
}

/* Header */
.header {
    background-color: var(--color-green);
    padding: 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: var(--shadow-standard);
    transition: var(--transition-standard);
}

.header.scrolled {
    padding: 10px;
    background-color: rgba(67, 73, 50, 0.95);
    backdrop-filter: blur(10px);
}

.site-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.5em;
    color: var(--color-primary);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: var(--transition-standard);
}

.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 15px;
}

.navbar a {
    font-family: 'Montserrat', sans-serif;
    color: var(--color-secondary);
    text-decoration: none;
    position: relative;
    padding: 5px 0;
    transition: var(--transition-standard);
}

.navbar a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: var(--transition-standard);
}

.navbar a:hover::after {
    width: 100%;
}

/* Hero Section */
.hero {
    background-image: url('path/to/hero-image.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: var(--color-secondary);
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(28, 28, 28, 0.7);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
}

.hero h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2em, 5vw, 3.5em);
    margin-bottom: 20px;
    animation: fadeInDown 1s ease-out;
}

.hero p {
    font-size: clamp(1em, 2vw, 1.2em);
    margin-bottom: 30px;
    animation: fadeInUp 1s ease-out;
}

/* Sections */
.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.5em;
    margin-bottom: 40px;
    text-align: center;
    color: var(--color-primary);
}

/* Blog Section */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.blog-post {
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--border-radius);
    padding: 20px;
    transition: var(--transition-standard);
}

.blog-post:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-standard);
}

/* Gallery Section */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius);
    aspect-ratio: 1;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-standard);
}

.gallery-item:hover img {
    transform: scale(1.1);
}

/* Contact Form */
.contact form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.contact input,
.contact textarea {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(204, 185, 75, 0.3);
    border-radius: var(--border-radius);
    color: var(--color-text);
    transition: var(--transition-standard);
}

.contact input:focus,
.contact textarea:focus {
    outline: none;
    border-color: var(--color-secondary);
    background: rgba(255, 255, 255, 0.1);
}

.contact button {
    background-color: var(--color-accent);
    color: var(--color-text);
    padding: 12px 30px;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition-standard);
}

.contact button:hover {
    background-color: #c21900;
    transform: translateY(-2px);
}

/* Animations */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Media Queries */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 15px;
    }

    .section-padding {
        padding: 40px 0;
    }

    .hero {
        min-height: 60vh;
        background-attachment: scroll;
    }
}

@media (max-width: 480px) {
    .site-title {
        font-size: 2em;
    }

    .gallery-grid {
        grid-template-columns: 1fr;
    }
}