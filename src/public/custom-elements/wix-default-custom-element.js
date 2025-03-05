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
