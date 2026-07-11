window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 500);
});
/* -----------------------
   Year
----------------------- */
document.getElementById('year').textContent = new Date().getFullYear();
/* -----------------------
   Typing animation
----------------------- */
const roles = [
  'PHP Developer',
  'MERN Stack Developer',
  'React Developer',
  'Full Stack Engineer'
];
const typingEl = document.getElementById('typing');
let rIdx = 0, cIdx = 0, deleting = false;
function typeLoop() {
  const word = roles[rIdx];
  if (!deleting) {
    typingEl.textContent = word.slice(0, ++cIdx);
    if (cIdx === word.length) { deleting = true; return setTimeout(typeLoop, 1500); }
  } else {
    typingEl.textContent = word.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
  }
  setTimeout(typeLoop, deleting ? 45 : 90);
}
typeLoop();
/* -----------------------
   Navigation
----------------------- */
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
  document.getElementById('toTop').classList.toggle('show', window.scrollY > 500);
});
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});
/* Active section highlight */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach(sec => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${sec.id}"]`);
      if (active) active.classList.add('active');
    }
  });
});
/* -----------------------
   Cursor Glow
----------------------- */
const cursor = document.getElementById('cursorGlow');
window.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
});
/* -----------------------
   Back to top
----------------------- */
document.getElementById('toTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
/* -----------------------
   Reveal on scroll
----------------------- */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('visible');
      revealObs.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
/* -----------------------
   Skills Data + Render
----------------------- */
const skills = [
  { name: 'HTML5', cat: 'frontend', icon: 'devicon-html5-plain colored', desc: 'Semantic markup' },
  { name: 'CSS3', cat: 'frontend', icon: 'devicon-css3-plain colored', desc: 'Modern styling' },
  { name: 'JavaScript', cat: 'frontend', icon: 'devicon-javascript-plain colored', desc: 'ES6+ mastery' },
  { name: 'React', cat: 'frontend', icon: 'devicon-react-original colored', desc: 'Component design' },
  { name: 'Bootstrap', cat: 'frontend', icon: 'devicon-bootstrap-plain colored', desc: 'Rapid UI' },
  { name: 'Tailwind', cat: 'frontend', icon: 'devicon-tailwindcss-plain colored', desc: 'Utility CSS' },
  { name: 'PHP', cat: 'backend', icon: 'devicon-php-plain colored', desc: 'Server logic' },
  { name: 'Laravel', cat: 'backend', icon: 'devicon-laravel-plain colored', desc: 'Elegant framework' },
  { name: 'CodeIgniter 3', cat: 'backend', icon: 'devicon-codeigniter-plain colored', desc: 'Lean MVC' },
  { name: 'CodeIgniter 4', cat: 'backend', icon: 'devicon-codeigniter-plain colored', desc: 'Modern MVC' },
  { name: 'Node.js', cat: 'backend', icon: 'devicon-nodejs-plain colored', desc: 'JS runtime' },
  { name: 'Express', cat: 'backend', icon: 'devicon-express-original', desc: 'Web framework' },
  { name: 'MySQL', cat: 'database', icon: 'devicon-mysql-plain colored', desc: 'Relational DB' },
  { name: 'MongoDB', cat: 'database', icon: 'devicon-mongodb-plain colored', desc: 'NoSQL DB' },
  { name: 'Firebase', cat: 'database', icon: 'devicon-firebase-plain colored', desc: 'BaaS' },
  { name: 'Git', cat: 'tools', icon: 'devicon-git-plain colored', desc: 'Version control' },
  { name: 'GitHub', cat: 'tools', icon: 'devicon-github-original', desc: 'Collaboration' },
  { name: 'Postman', cat: 'tools', icon: 'devicon-postman-plain colored', desc: 'API testing' },
  { name: 'VS Code', cat: 'tools', icon: 'devicon-vscode-plain colored', desc: 'Editor' },
];
const skillsGrid = document.getElementById('skillsGrid');
function renderSkills(filter = 'all') {
  const list = filter === 'all' ? skills : skills.filter(s => s.cat === filter);
  skillsGrid.innerHTML = list.map(s => `
    <div class="glass-card skill-card">
      <div class="skill-icon"><i class="${s.icon}"></i></div>
      <h4>${s.name}</h4>
      <p>${s.desc}</p>
    </div>
  `).join('');
}
renderSkills();
document.querySelectorAll('.skill-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderSkills(tab.dataset.cat);
  });
});
/* -----------------------
   Projects Data + Render
----------------------- */
const projects = [
  {
    title: 'Employee Self Service Portal',
    desc: 'Comprehensive HR portal for leave, attendance, payroll and employee management.',
    long: 'A comprehensive ERP platform developed for a non-profit organization to streamline scholarship applications, employee operations, volunteer management, and internal workflows. The system centralizes program management, user accounts, approvals, and administrative processes while ensuring secure and efficient data handling.',
    tech: ['PHP', 'Codeigniter 4', 'MySQL', 'Bootstrap'],
    icon: 'fa-solid fa-building-user',
    bg: 'pg-1',
    // image: 'projects/property-template/assets/images/apartment.png',
    image: 'assets/project-ss/erp.png',

    github: '#',
    live: '#'
  },
  {
    title: 'Support Management System',
    desc: 'Designed and developed a ticket-based support system with user and admin panels for raising, assigning, and tracking issues.',
    long: 'Designed and developed a ticket-based support system with user and admin panels for raising, assigning, and tracking issues. Implemented role-based access control and automated email notifications to improve response time and issue resolution.',
    tech: ['PHP', 'Codeigniter 3', 'MySQL', 'Bootstrap'],
    icon: 'fa-solid fa-cart-shopping',
    bg: 'pg-2',
    // image: 'projects/BR Architechs/asstes/image1.jpg',
    image: 'assets/project-ss/support-ticket-system.png',

    github: 'https://github.com/rawat9015/support-ticket-system',
    live: '#'
  },

  {
    title: 'URL Shortener',
    desc: 'A secure and efficient URL shortening application built with Node.js.',
    long: 'A full-stack URL Shortener that converts long URLs into short, shareable links. Features unique short code generation, redirection, click tracking, and RESTful APIs, built using Node.js, Express.js, MongoDB, and Mongoose.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API'],
    icon: 'fa-solid fa-link',
    bg: 'pg-3',
    image: 'assets/project-ss/url-shortener.png',
    github: '#',
    live: '#'
  },
  {
    title: 'Nykaa Clone',
    desc: 'A responsive frontend clone of the Nykaa beauty and cosmetics website.',
    long: 'Designed and developed a pixel-perfect frontend clone of the Nykaa website using HTML, CSS, Bootstrap, and JavaScript. The project replicates the modern UI with responsive layouts, interactive navigation, product showcase sections, promotional banners, and a smooth user experience across devices.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    icon: 'fa-solid fa-bag-shopping',
    bg: 'pg-3',
    image: 'projects/nykaa/asstes/beauty-advise1.jpg',
    github: 'https://github.com/rawat9015/rawat9015.github.io/tree/master/projects/nykaa',
    live: 'projects/nykaa/src/index.html'
  },
  {
    title: 'Modern House',
    desc: 'A responsive real estate website template with a modern and elegant UI.',
    long: 'Designed and developed a modern real estate landing page featuring property listings, search filters, agent profiles, featured properties, and responsive layouts. Built with HTML, CSS, Bootstrap, and JavaScript, focusing on clean design, smooth user experience, and mobile responsiveness.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    icon: 'fa-solid fa-house',
    bg: 'pg-4',
    image: 'assets/project-ss/modren-house.png',
    github: 'https://github.com/rawat9015/rawat9015.github.io/tree/master/projects/property-template',
    live: 'projects/property-template/index.html'
  },
  
  {
  title: 'Todo App',
  desc: 'A modern task management application built with Laravel, React, and Inertia.js.',
  long: 'Developed a responsive Todo application using Laravel, React, and Inertia.js, enabling seamless task creation, updating, and deletion without traditional REST APIs or page reloads. Leveraged Inertia.js to deliver a smooth single-page application experience while keeping the backend and frontend tightly integrated.',
  tech: ['Laravel', 'React', 'Inertia.js', 'PHP', 'JavaScript'],
  icon: 'fa-solid fa-list-check',
  bg: 'pg-5',
  image: 'assets/project-ss/TODO.jpg',
  github: 'https://github.com/rawat9015/laravel-react-todo',
  live: '#'
},
  {
  title: 'Age Calculator',
  desc: 'A responsive React application to calculate age accurately from a selected birth date.',
  long: 'Developed a lightweight and interactive Age Calculator using React that instantly calculates a users exact age in years, months, and days. Focused on clean UI, responsive design, efficient state management, and a smooth user experience.',
  tech: ['React', 'JavaScript', 'CSS'],
  icon: 'fa-solid fa-calendar-days',
  bg: 'pg-6',
  image: 'assets/project-ss/age-calculator.jpg',
  github: 'https://github.com/rawat9015/mini-age-calculator',
  live: 'https://mini-age-calculator.vercel.app/'
},

];
const projectsGrid = document.getElementById('projectsGrid');
projectsGrid.innerHTML = projects.map((p, i) => `
  <article class="project-card reveal" data-idx="${i}">
    <div class="project-image ${p.bg} ${p.image ? 'has-image' : ''}">
      ${p.image ? `<img src="${p.image}" alt="${p.title} preview" loading="lazy">` : `<i class="${p.icon} glyph"></i>`}
    </div>
    <div class="project-body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tech-badges">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="project-actions">
        <a href="${p.github}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"><i class="fa-brands fa-github"></i> Code</a>
        <a href="${p.live}" class="btn btn-primary" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
      </div>
    </div>
  </article>
`).join('');
// re-observe new reveal elements
document.querySelectorAll('.project-card.reveal').forEach(el => revealObs.observe(el));
/* Modal */
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const p = projects[card.dataset.idx];
    modalBody.innerHTML = `
      <div class="modal-hero ${p.bg} ${p.image ? 'has-image' : ''}">
        ${p.image ? `<img src="${p.image}" alt="${p.title} preview">` : `<i class="${p.icon}"></i>`}
      </div>
      <div class="modal-content">
        <h3>${p.title}</h3>
        <p>${p.long}</p>
        <div class="tech-badges">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="project-actions">
          <a href="${p.github}" class="btn btn-ghost" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> GitHub</a>
          <a href="${p.live}" class="btn btn-primary" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
        </div>
      </div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});
modal.addEventListener('click', (e) => {
  if (e.target.dataset.close !== undefined) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { modal.classList.remove('open'); document.body.style.overflow = ''; }
});
/* -----------------------
   Contact form
----------------------- */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitButton = document.getElementById('contactSubmit');
const formEndpoint = 'https://formsubmit.co/ajax/nr7584128@gmail.com';

function setFormStatus(message, type = 'info') {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.className = `form-status show ${type}`;
}

function setFormSending(isSending) {
  if (!submitButton) return;
  submitButton.disabled = isSending;
  submitButton.classList.toggle('is-loading', isSending);
}

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const formData = new FormData(contactForm);
    const payload = {
      name: formData.get('name')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      subject: formData.get('subject')?.toString().trim() || 'Portfolio Contact',
      message: formData.get('message')?.toString().trim() || ''
    };

    setFormSending(true);
    setFormStatus('Sending your message...', 'info');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...payload,
          _subject: `Portfolio contact: ${payload.subject}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (!response.ok) {
        throw new Error('Unable to send message right now.');
      }

      contactForm.reset();
      setFormStatus('Thanks! Your message has been sent successfully.', 'success');
    } catch (error) {
      console.error(error);
      setFormStatus('Something went wrong. Please email me directly at nr7584128@gmail.com.', 'error');
    } finally {
      setFormSending(false);
    }
  });
}

/* -----------------------
   Certificates
----------------------- */
const certs = [
  { title: 'MERN Stack Development', institute: 'Coding Institute', year: '2024', icon: 'fa-brands fa-react', bg: 'pg-2' },
  { title: 'PHP & Laravel Mastery', institute: 'Web Academy', year: '2023', icon: 'fa-brands fa-php', bg: 'pg-1' },
  { title: 'MongoDB Essentials', institute: 'MongoDB University', year: '2024', icon: 'fa-solid fa-database', bg: 'pg-3' },
  { title: 'Frontend Engineering', institute: 'Frontend Masters', year: '2023', icon: 'fa-solid fa-code', bg: 'pg-4' },
];
document.getElementById('certGrid').innerHTML = certs.map(c => `
  <div class="cert-card reveal">
    <div class="cert-thumb ${c.bg}"><i class="${c.icon}"></i></div>
    <div class="cert-body">
      <h4>${c.title}</h4>
      <small class="muted">${c.institute}</small>
      <div class="cert-meta">
        <small>${c.year}</small>
        <a href="#">View Certificate <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
`).join('');
document.querySelectorAll('.cert-card.reveal').forEach(el => revealObs.observe(el));
/* -----------------------
   Parallax on hero visual
----------------------- */
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    heroVisual.style.transform = `translate(${x}px, ${y}px)`;
  });
}