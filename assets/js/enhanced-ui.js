// Enhanced UI JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading animation
    initLoader();
    
    // Initialize animations
    initAnimations();
    
    // Initialize side panels
    initSidePanels();
});

// Loading Animation
function initLoader() {
    // Create loader element
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    
    // Create loader icon
    const loaderIcon = document.createElement('div');
    loaderIcon.className = 'loader-icon';
    
    // Append loader icon to loader
    loader.appendChild(loaderIcon);
    
    // Append loader to body
    document.body.appendChild(loader);
    
    // Hide loader after 1.8 seconds
    setTimeout(function() {
        loader.classList.add('loader-hidden');
        
        // Remove loader from DOM after animation completes
        setTimeout(function() {
            loader.remove();
        }, 500);
    }, 1800);
}

// Initialize animations for content elements
function initAnimations() {
    // Get all elements that should be animated
    const animatedElements = document.querySelectorAll('.container, h1, h2, p, .image, .album-card, .gallery-item, .contact-form');
    
    // Add animation classes to elements
    let delay = 0;
    animatedElements.forEach((element, index) => {
        element.classList.add('fade-in');
        
        // Add delay classes in sequence
        if (index % 3 === 0) {
            element.classList.add('fade-in-delay-1');
        } else if (index % 3 === 1) {
            element.classList.add('fade-in-delay-2');
        } else {
            element.classList.add('fade-in-delay-3');
        }
    });
}

// Initialize side panels
function initSidePanels() {
    // Create left side panel
    createSidePanel('left', 'Quick Links', [
        { text: 'Home', url: 'swiftie.html' },
        { text: 'Biography', url: 'bio.html' },
        { text: 'Music', url: 'music.html' },
        { text: 'Albums', url: 'gallary.html' },
        { text: 'Sign In', url: 'form.html' }
    ]);
    
    // Create right side panel
    createSidePanel('right', 'Taylor Swift Facts', null, [
        'Taylor Swift was born on December 13, 1989.',
        'She began her career as a country music singer at age 14.',
        'Her album "Lover" features pastel colors and a more upbeat tone.',
        'She has won 11 Grammy Awards.',
        'She wrote her album "Folklore" during the COVID-19 pandemic.'
    ]);
}

// Create a side panel
function createSidePanel(position, title, links, facts) {
    // Create panel container
    const panel = document.createElement('div');
    panel.className = `side-panel side-panel-${position}`;
    
    // Create panel content
    const panelContent = document.createElement('div');
    panelContent.className = 'panel-content';
    
    // Add title
    const panelTitle = document.createElement('h3');
    panelTitle.textContent = title;
    panelContent.appendChild(panelTitle);
    
    // Add links if provided
    if (links) {
        const linkList = document.createElement('ul');
        linkList.className = 'panel-links';
        
        links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.text;
            listItem.appendChild(anchor);
            linkList.appendChild(listItem);
        });
        
        panelContent.appendChild(linkList);
    }
    
    // Add facts if provided
    if (facts) {
        const factList = document.createElement('ul');
        factList.className = 'panel-facts';
        
        facts.forEach(fact => {
            const listItem = document.createElement('li');
            listItem.textContent = fact;
            factList.appendChild(listItem);
        });
        
        panelContent.appendChild(factList);
    }
    
    // Append content to panel
    panel.appendChild(panelContent);
    
    // Create toggle button
    const toggleButton = document.createElement('div');
    toggleButton.className = `panel-toggle panel-toggle-${position}`;
    toggleButton.innerHTML = position === 'left' ? '&#9654;' : '&#9664;';
    
    // Add event listener to toggle button
    toggleButton.addEventListener('click', function() {
        panel.classList.toggle('open');
        toggleButton.innerHTML = panel.classList.contains('open') 
            ? (position === 'left' ? '&#9664;' : '&#9654;')
            : (position === 'left' ? '&#9654;' : '&#9664;');
    });
    
    // Append panel and toggle button to body
    document.body.appendChild(panel);
    document.body.appendChild(toggleButton);
}

// Add hover effect to all interactive elements
function addHoverEffects() {
    const interactiveElements = document.querySelectorAll('a, button, .btn, .image, .album-card, .gallery-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 15px rgba(255, 182, 193, 0.5)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}
