// Define DOM elements
const heroImage = document.querySelector("#hero__animation__img");
const heroGreeting = document.querySelector("#hero-greeting");
const heroName = document.querySelector("#hero-name");
const heroTitle = document.querySelector("#hero-title");

const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
const bl = document.querySelector("#grid__bl");
const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
const blContent = document.querySelector("#grid__bl__content");
const brContent = document.querySelector("#grid__br__content");

// Function to update hero text
function updateHeroText(corner) {
  const heroTextElement = document.querySelector("#hero-text");

  if (corner === "") {
    heroTextElement.classList.remove("hero-text--pushed");
  } else {
    heroTextElement.classList.add("hero-text--pushed");
  }

  switch (corner) {
    case "top-left":
      heroGreeting.textContent = "About Me";
      heroName.textContent = "Naveen";
      heroTitle.textContent = "My Background";
      break;
    case "top-right":
      heroGreeting.textContent = "My Skills";
      heroName.textContent = "Naveen";
      heroTitle.textContent = "Technical Expertise";
      break;
    case "bottom-left":
      heroGreeting.textContent = "My Work";
      heroName.textContent = "Naveen";
      heroTitle.textContent = "Projects Portfolio";
      break;
    case "bottom-right":
      heroGreeting.textContent = "Get In Touch";
      heroName.textContent = "Naveen";
      heroTitle.textContent = "Let's Connect";
      break;
    default:
      heroGreeting.textContent = "Hello I'm";
      heroName.textContent = "Naveen";
      heroTitle.textContent = "VLSI Engineer";
  }
}

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

// Define colors and positions
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(0) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(0) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(0) translateY(0)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(0) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

let activeCorner = "";

window.addEventListener("resize", handleWindowResize);

function handleWindowResize() {
  // Layout is now handled by CSS media queries and .content-active class
  // This function can be used for extra JS-based logic if needed in the future
}

let lastReverseAnimation = "";
let lastSide = "";

function getDirectAnimation(fromCorner, toCorner) {
  const transitions = {
    "top-left_bottom-left": "animate-tl-to-bl",
    "bottom-left_top-left": "animate-bl-to-tl",
    "top-right_bottom-right": "animate-tr-to-br",
    "bottom-right_top-right": "animate-br-to-tr",
    "top-left_top-right": "animate-tl-to-tr",
    "top-left_bottom-right": "animate-tl-to-br",
    "bottom-left_top-right": "animate-bl-to-tr",
    "bottom-left_bottom-right": "animate-bl-to-br",
    "top-right_top-left": "animate-tr-to-tl",
    "top-right_bottom-left": "animate-tr-to-bl",
    "bottom-right_top-left": "animate-br-to-tl",
    "bottom-right_bottom-left": "animate-br-to-bl"
  };

  const key = `${fromCorner}_${toCorner}`;
  return transitions[key] || null;
}

function playAnimation(animation, reverseAnimation, currentSide, targetCorner) {
  heroImage.className = "";
  const directAnimationClass = activeCorner !== "" ? getDirectAnimation(activeCorner, targetCorner) : null;

  if (directAnimationClass) {
    heroImage.classList.add(directAnimationClass);
    lastReverseAnimation = reverseAnimation;
    lastSide = currentSide;
  } else {
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
    lastSide = currentSide;
  }
}

function playClosingAnimation(reverseAnimation) {
  tlBtn.innerHTML = "About";
  trBtn.innerHTML = "Experience";
  blBtn.innerHTML = "Projects";
  brBtn.innerHTML = "Contact";

  switch (activeCorner) {
    case "top-left":
      tlBtn.style.background = bgColor;
      tlBtn.style.color = textColor;
      tlContent.style.transform = tlHidden;
      tlContent.classList.remove('content-active');
      break;
    case "top-right":
      trBtn.style.background = bgColor;
      trBtn.style.color = textColor;
      trContent.style.transform = trHidden;
      trContent.classList.remove('content-active');
      break;
    case "bottom-left":
      blBtn.style.background = bgColor;
      blBtn.style.color = textColor;
      blContent.style.transform = blHidden;
      blContent.classList.remove('content-active');
      break;
    case "bottom-right":
      brBtn.style.background = bgColor;
      brBtn.style.color = textColor;
      brContent.style.transform = brHidden;
      brContent.classList.remove('content-active');
      break;
    default:
  }

  heroImage.className = "";
  lastReverseAnimation = "";
  lastSide = "";
  activeCorner = "";
  updateHeroText("");
  heroImage.classList.add(reverseAnimation);
  setTimeout(function () {
    heroImage.classList.remove(reverseAnimation);
  }, 200);
}

tlBtn.onclick = function () {
  if (activeCorner === "top-left") {
    playClosingAnimation("reverse-animate-top-left");
  } else {
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";
    activeCorner = "top-left";
    tlBtn.innerHTML = "&uarr;<br/>About";
    handleWindowResize();
    playAnimation("animate-top-left", "reverse-animate-top-left", "left", "top-left");
    updateHeroText("top-left");
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColor;
    blBtn.style.background = bgColor;
    tlBtn.style.background = bgColorAlt;
    trBtn.style.color = textColor;
    brBtn.style.color = textColor;
    blBtn.style.color = textColor;
    tlBtn.style.color = textColorAlt;
    trContent.style.transform = trHidden;
    brContent.style.transform = brHidden;
    blContent.style.transform = blHidden;
    tlContent.style.transform = tlActive;
    trContent.classList.remove('content-active');
    brContent.classList.remove('content-active');
    blContent.classList.remove('content-active');
    tlContent.classList.add('content-active');
  }
};

trBtn.onclick = function () {
  if (activeCorner === "top-right") {
    playClosingAnimation("reverse-animate-top-right");
  } else {
    tlBtn.innerHTML = "About";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";
    activeCorner = "top-right";
    trBtn.innerHTML = "&uarr;<br/>Experience";
    handleWindowResize();
    playAnimation("animate-top-right", "reverse-animate-top-right", "right", "top-right");
    updateHeroText("top-right");
    trBtn.style.background = bgColorAlt;
    brBtn.style.background = bgColor;
    blBtn.style.background = bgColor;
    tlBtn.style.background = bgColor;
    trBtn.style.color = textColorAlt;
    brBtn.style.color = textColor;
    blBtn.style.color = textColor;
    tlBtn.style.color = textColor;
    trContent.style.transform = trActive;
    brContent.style.transform = brHidden;
    blContent.style.transform = blHidden;
    tlContent.style.transform = tlHidden;
    trContent.classList.add('content-active');
    brContent.classList.remove('content-active');
    blContent.classList.remove('content-active');
    tlContent.classList.remove('content-active');
  }
};

blBtn.onclick = function () {
  if (activeCorner === "bottom-left") {
    playClosingAnimation("reverse-animate-bottom-left");
  } else {
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    brBtn.innerHTML = "Contact";
    activeCorner = "bottom-left";
    blBtn.innerHTML = "Projects<br/>&darr;";
    handleWindowResize();
    playAnimation("animate-bottom-left", "reverse-animate-bottom-left", "left", "bottom-left");
    updateHeroText("bottom-left");
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColor;
    blBtn.style.background = bgColorAlt;
    tlBtn.style.background = bgColor;
    trBtn.style.color = textColor;
    brBtn.style.color = textColor;
    blBtn.style.color = textColorAlt;
    tlBtn.style.color = textColor;
    trContent.style.transform = trHidden;
    brContent.style.transform = brHidden;
    blContent.style.transform = blActive;
    tlContent.style.transform = tlHidden;
    trContent.classList.remove('content-active');
    brContent.classList.remove('content-active');
    blContent.classList.add('content-active');
    tlContent.classList.remove('content-active');

    // Initialize scroll animation
    setTimeout(() => {
      initProjectScrollAnimation();
    }, 600);
  }
};

brBtn.onclick = function () {
  if (activeCorner === "bottom-right") {
    playClosingAnimation("reverse-animate-bottom-right");
  } else {
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";
    activeCorner = "bottom-right";
    brBtn.innerHTML = "Contact<br/>&darr;";
    handleWindowResize();
    playAnimation("animate-bottom-right", "reverse-animate-bottom-right", "right", "bottom-right");
    updateHeroText("bottom-right");
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColorAlt;
    blBtn.style.background = bgColor;
    tlBtn.style.background = bgColor;
    trBtn.style.color = textColor;
    brBtn.style.color = textColorAlt;
    blBtn.style.color = textColor;
    tlBtn.style.color = textColor;
    trContent.style.transform = trHidden;
    brContent.style.transform = brActive;
    blContent.style.transform = blHidden;
    tlContent.style.transform = tlHidden;
    trContent.classList.remove('content-active');
    brContent.classList.add('content-active');
    blContent.classList.remove('content-active');
    tlContent.classList.remove('content-active');
  }
};

// ============================================
// SCROLL ANIMATION FOR PROJECTS
// ============================================

function initProjectScrollAnimation() {
  const container = document.querySelector('.projects-scroll-container');
  const projects = document.querySelectorAll('.project');

  if (!container || projects.length === 0) {
    return;
  }

  function updateProjectStates() {
    const containerRect = container.getBoundingClientRect();
    const containerTop = containerRect.top;

    let focusedIndex = 0;
    let minDistance = Infinity;

    projects.forEach((project, index) => {
      const rect = project.getBoundingClientRect();
      const distance = Math.abs(rect.top - containerTop);

      if (distance < minDistance) {
        minDistance = distance;
        focusedIndex = index;
      }
    });

    projects.forEach((project, index) => {
      project.classList.remove('item-hide', 'item-focus', 'item-next');

      if (index < focusedIndex) {
        project.classList.add('item-hide');
      } else if (index === focusedIndex) {
        project.classList.add('item-focus');
      } else if (index === focusedIndex + 1 || index === focusedIndex + 2) {
        project.classList.add('item-next');
      } else {
        project.classList.add('item-hide');
      }
    });
  }

  updateProjectStates();

  let scrollTimeout;
  container.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateProjectStates, 50);
  });
}