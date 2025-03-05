<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Midnight Magnolia | Digital Entrepreneurship</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lora:wght@400;500&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            /* Brand Colors */
            --midnight-blue: #0A192F;
            --magnolia-white: #FAF3E0;
            --rich-gold: #D4AF37;
            --sage-green: #A3B18A;
            --dark-navy: #051224;
            
            /* Functional Colors */
            --primary: var(--midnight-blue);
            --secondary: var(--rich-gold);
            --accent: var(--sage-green);
            --text-light: var(--magnolia-white);
            --text-dark: var(--primary);
            
            /* Typography */
            --font-headers: 'Playfair Display', serif;
            --font-body: 'Lora', serif;
            --font-accents: 'Montserrat', sans-serif;
            
            /* Spacing */
            --spacing-xs: 8px;
            --spacing-sm: 16px;
            --spacing-md: 24px;
            --spacing-lg: 48px;
            --spacing-xl: 72px;
            
            /* Borders */
            --border-radius-sm: 4px;
            --border-radius-md: 8px;
            --border-radius-lg: 16px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-body);
            color: var(--text-light);
            background-color: var(--primary);
            line-height: 1.6;
            font-size: 16px;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--spacing-sm);
        }

        /* Header Styles */
        .site-header {
            background-color: var(--primary);
            padding: var(--spacing-md) 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
        }

        .logo-text {
            font-family: var(--font-headers);
            font-size: 24px;
            font-weight: bold;
            color: var(--secondary);
            margin-left: var(--spacing-sm);
        }

        .nav-menu {
            display: flex;
            list-style: none;
        }

        .nav-item {
            margin-left: var(--spacing-md);
        }

        .nav-link {
            font-family: var(--font-accents);
            color: var(--text-light);
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.5px;
            position: relative;
            transition: all 0.3s ease;
        }

        .nav-link:after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--secondary);
            transition: width 0.3s ease;
        }

        .nav-link:hover {
            color: var(--secondary);
        }

        .nav-link:hover:after {
            width: 100%;
        }

        .cart-icon {
            position: relative;
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        .cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: var(--secondary);
            color: var(--primary);
            font-family: var(--font-accents);
            font-size: 12px;
            font-weight: 600;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            min-height: 600px;
            background-color: var(--primary);
            display: flex;
            align-items: center;
            position: relative;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin-top: 80px;
            overflow: hidden;
        }

        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(10, 25, 47, 0.7);
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            padding: 0 var(--spacing-md);
        }

        .hero-title {
            font-family: var(--font-headers);
            font-size: 3.5rem;
            font-weight: 700;
            color: var(--secondary);
            margin-bottom: var(--spacing-md);
            line-height: 1.2;
        }

        .hero-subtitle {
            font-family: var(--font-body);
            font-size: 1.5rem;
            color: var(--text-light);
            margin-bottom: var(--spacing-lg);
            line-height: 1.5;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .btn {
            font-family: var(--font-accents);
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 12px 28px;
            border-radius: var(--border-radius-sm);
            transition: all 0.3s ease;
            cursor: pointer;
            display: inline-block;
        }

        .btn-primary {
            background-color: var(--secondary);
            color: var(--primary);
            border: none;
        }

        .btn-primary:hover {
            background-color: #EACB54;
            transform: translateY(-2px);
        }

        .btn-secondary {
            background-color: transparent;
            color: var(--secondary);
            border: 2px solid var(--secondary);
        }

        .btn-secondary:hover {
            background-color: rgba(212, 175, 55, 0.1);
            transform: translateY(-2px);
        }

        /* Mission Section */
        .mission-section {
            padding: var(--spacing-xl) 0;
            background-color: var(--dark-navy);
        }

        .section-title {
            font-family: var(--font-headers);
            font-size: 2.5rem;
            color: var(--secondary);
            margin-bottom: var(--spacing-lg);
            text-align: center;
            position: relative;
            padding-bottom: var(--spacing-sm);
        }

        .section-title:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 2px;
            background-color: var(--secondary);
        }

        .mission-block {
            background-color: rgba(10, 25, 47, 0.5);
            padding: var(--spacing-lg);
            border-radius: var(--border-radius-md);
            margin: var(--spacing-lg) 0;
            position: relative;
            border: 1px solid var(--accent);
        }

        .mission-text {
            font-family: var(--font-body);
            font-size: 1.2rem;
            line-height: 1.8;
            color: var(--text-light);
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        /* Values Section */
        .values-section {
            padding: var(--spacing-xl) 0;
        }

        .values-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--spacing-lg);
            margin-top: var(--spacing-lg);
        }

        .value-card {
            background-color: rgba(5, 18, 36, 0.5);
            border-radius: var(--border-radius-md);
            padding: var(--spacing-lg);
            text-align: center;
            border: 1px solid rgba(163, 177, 138, 0.3);
            transition: all 0.3s ease;
        }

        .value-card:hover {
            transform: translateY(-5px);
            border-color: var(--secondary);
        }

        .value-icon {
            font-size: 2.5rem;
            color: var(--secondary);
            margin-bottom: var(--spacing-md);
        }

        .value-title {
            font-family: var(--font-headers);
            font-size: 1.5rem;
            color: var(--secondary);
            margin-bottom: var(--spacing-sm);
        }

        .value-text {
            font-family: var(--font-body);
            color: var(--text-light);
        }

        /* Featured Products */
        .products-section {
            padding: var(--spacing-xl) 0;
            background-color: var(--dark-navy);
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--spacing-lg);
            margin-top: var(--spacing-lg);
        }

        .product-card {
            background-color: rgba(10, 25, 47, 0.7);
            border-radius: var(--border-radius-md);
            overflow: hidden;
            transition: all 0.3s ease;
            border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .product-card:hover {
            transform: translateY(-5px);
            border-color: var(--secondary);
        }

        .product-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-bottom: 2px solid rgba(212, 175, 55, 0.3);
        }

        .product-content {
            padding: var(--spacing-md);
        }

        .product-title {
            font-family: var(--font-headers);
            font-size: 1.3rem;
            color: var(--text-light);
            margin-bottom: var(--spacing-xs);
        }

        .product-price {
            font-family: var(--font-accents);
            font-weight: 600;
            font-size: 1.2rem;
            color: var(--secondary);
            margin-bottom: var(--spacing-sm);
        }

        .product-description {
            font-family: var(--font-body);
            color: var(--text-light);
            margin-bottom: var(--spacing-md);
            font-size: 0.9rem;
            line-height: 1.5;
        }

        .view-all-container {
            text-align: center;
            margin-top: var(--spacing-lg);
        }

        /* About Founder */
        .founder-section {
            padding: var(--spacing-xl) 0;
            position: relative;
        }

        .founder-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-lg);
            align-items: center;
        }

        .founder-image-container {
            position: relative;
            height: 450px;
            border-radius: var(--border-radius-md);
            overflow: hidden;
            border: 2px solid var(--secondary);
        }

        .founder-image {
            width: 100%;
            height: 100