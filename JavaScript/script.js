function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  const titles = ["Software Developer", "Frontend Developer", "Backend Developer", "Student", ""];
  let currentTitleIndex = 0;
  let charIndex = 0;
  const typingSpeed = 150; // Typing speed in milliseconds
  const erasingSpeed = 100; // Erasing speed in milliseconds
  const delayBetweenTitles = 2000; // Delay between titles in milliseconds
  
  function typeWriter() {
    const dynamicTextElement = document.getElementById("dynamic-text");
    const currentTitle = titles[currentTitleIndex];
  
    if (charIndex < currentTitle.length) {
      dynamicTextElement.innerHTML = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      setTimeout(eraseWriter, delayBetweenTitles);
    }
  }
  
  function eraseWriter() {
    const dynamicTextElement = document.getElementById("dynamic-text");
    if (charIndex > 0) {
      dynamicTextElement.innerHTML = dynamicTextElement.innerHTML.slice(0, -1);
      charIndex--;
      setTimeout(eraseWriter, erasingSpeed);
    } else {
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
      setTimeout(typeWriter, typingSpeed);
    }
  }
  
  // Start the typewriter effect when the page loads
  window.onload = function() {
    typeWriter();
  };

  // Header

  let lastScrollPosition = 0;
  const nav = document.getElementById('desktop-nav'); // oder 'hamburger-nav' je nach Bedarf

  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
      // Runter scrollen
      nav.style.top = '-60px'; // Versteckt den Header, passt die Höhe an
    } else {
      // Hoch scrollen
      nav.style.top = '0';
    }

    lastScrollPosition = currentScrollPosition;
  });