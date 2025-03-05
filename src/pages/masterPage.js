import wixLocation from 'wix-location';

$w.onReady(function () {
    // Initialize navigation highlighting
    highlightCurrentNav();
    
    // Setup cart counter
    updateCartCounter();
    
    // Configure theme colors from brand guide
    setThemeColors();

    function updateCartCounter() {
        // Add logic to update the cart counter
        console.log("Cart counter updated");
    }
    
    function setThemeColors() {
        // Apply brand colors programmatically
        const colors = {
            midnightBlue: "#0A192F",
            magnoliaWhite: "#FAF3E0",
            richGold: "#D4AF37",
            sageGreen: "#A3B18A"
        };
        
        $w('#headerBg').style.backgroundColor = colors.midnightBlue;
        $w('#footerBg').style.backgroundColor = colors.magnoliaWhite;
        $w('#ctaButton').style.backgroundColor = colors.richGold;
        $w('#ctaButton').style.color = colors.sageGreen;
    }

    function highlightCurrentNav() {
        const currentPath = wixLocation.url;
        const navItems = $w.at("#navigationMenu").children;

        navItems.forEach(item => {
            const itemPath = item.href;
            if (itemPath === currentPath) {
                item.style.backgroundColor = "#D4AF37"; // Highlight with rich gold color
            } else {
                item.style.backgroundColor = ""; // Reset background color
            }
        });
    }
});

