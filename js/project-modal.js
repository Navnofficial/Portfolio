// Project data
const projectData = {
  clinic: {
    title: "Clinic App",
    image: "assets/portfolio-projects/clinic.png",
    description: "A comprehensive clinic management application designed to streamline healthcare operations. This application helps manage patient records, appointments, and medical histories efficiently.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
    features: [
      "Patient Management System",
      "Appointment Scheduling",
      "Medical Records Storage",
      "Real-time Notifications",
      "Responsive Design"
    ],
    demoLink: "#",
    githubLink: "#"
  },
  bookshelf: {
    title: "My Bookshelf",
    image: "assets/portfolio-projects/bookshelf.png",
    description: "A personal digital library application that allows users to organize, track, and review their reading collection. Perfect for book enthusiasts who want to maintain their reading journey.",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage API", "Responsive Design"],
    features: [
      "Add & Organize Books",
      "Reading Progress Tracker",
      "Book Reviews & Ratings",
      "Search & Filter Options",
      "Offline Functionality"
    ],
    demoLink: "#",
    githubLink: "#"
  },
  webdoodler: {
    title: "Chrome Extension - Web Doodler",
    image: "assets/portfolio-projects/webdoodler2.png",
    description: "An innovative Chrome extension that enables users to draw, annotate, and make notes directly on any webpage. Great tool for web designers, developers, and students.",
    technologies: ["Chrome Extension API", "JavaScript", "Canvas API", "HTML5", "CSS3"],
    features: [
      "Draw on Any Webpage",
      "Multiple Drawing Tools",
      "Color Customization",
      "Save & Export Annotations",
      "Undo/Redo Functionality"
    ],
    demoLink: "#",
    githubLink: "#"
  },
  trackspend: {
    title: "Money Tracker",
    image: "assets/portfolio-projects/trackspend.png",
    description: "A smart expense tracking application that helps users monitor their spending habits, set budgets, and achieve financial goals. Features intuitive charts and insights for better financial management.",
    technologies: ["React", "Chart.js", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Expense Categorization",
      "Budget Planning",
      "Visual Analytics & Charts",
      "Monthly/Yearly Reports",
      "Multi-currency Support"
    ],
    demoLink: "#",
    githubLink: "#"
  },
  signscraper: {
    title: "Sign Scraper",
    image: "assets/portfolio-projects/sign.png",
    description: "A powerful web scraping tool designed to extract signature data and relevant information from various online sources. Built with efficiency and accuracy in mind.",
    technologies: ["Python", "BeautifulSoup", "Selenium", "Pandas", "Flask"],
    features: [
      "Automated Data Extraction",
      "Multi-source Support",
      "Data Export Options",
      "Scheduled Scraping",
      "Error Handling & Logging"
    ],
    demoLink: "#",
    githubLink: "#"
  }
};

// Open modal function
function openProjectModal(projectKey) {
  const modal = document.getElementById('project-modal');
  const project = projectData[projectKey];
  
  if (!project) {
    console.error('Project not found:', projectKey);
    return;
  }
  
  // Populate modal with project data
  document.getElementById('modal-project-img').src = project.image;
  document.getElementById('modal-project-title').textContent = project.title;
  
  // Update description
  const descriptionDiv = document.getElementById('modal-project-description');
  descriptionDiv.innerHTML = `
    <p>${project.description}</p>
    <h3>Technologies Used:</h3>
    <ul id="modal-tech-list" class="project-modal__tech-list">
      ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
    </ul>
    <h3>Key Features:</h3>
    <ul id="modal-features-list" class="project-modal__features-list">
      ${project.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
  `;
  
  // Update button links
  const demoBtn = document.getElementById('modal-btn-demo');
  const githubBtn = document.getElementById('modal-btn-github');
  
  demoBtn.onclick = () => {
    if (project.demoLink && project.demoLink !== '#') {
      window.open(project.demoLink, '_blank');
    } else {
      alert('Demo link coming soon!');
    }
  };
  
  githubBtn.onclick = () => {
    if (project.githubLink && project.githubLink !== '#') {
      window.open(project.githubLink, '_blank');
    } else {
      alert('GitHub repository link coming soon!');
    }
  };
  
  // Show modal with animation
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

// Close modal function
function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  
  modal.classList.remove('active');
  
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 400);
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// Prevent modal content clicks from closing the modal
document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.querySelector('.project-modal__container');
  if (modalContainer) {
    modalContainer.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
});
