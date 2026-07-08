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
    long: 'A full-featured HR platform enabling employees to manage leaves, view payslips, mark attendance, and communicate with HR — with a powerful admin dashboard for approvals and reporting.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    icon: 'fa-solid fa-building-user',
    bg: 'pg-1'
  },
  {
    title: 'BoroBazar MERN Clone',
    desc: 'Full-featured grocery marketplace built with the MERN stack.',
    long: 'End-to-end e-commerce experience with cart, checkout, order tracking, product filtering, admin panel and secure payments.',
    tech: ['React', 'Node', 'MongoDB', 'Express'],
    icon: 'fa-solid fa-cart-shopping',
    bg: 'pg-2'
  },
  {
    title: 'CareerConnect',
    desc: 'Modern job portal connecting candidates with recruiters.',
    long: 'A job board with role-based auth, saved jobs, application tracking, resume uploads and recruiter dashboard.',
    tech: ['React', 'Node', 'MongoDB', 'JWT'],
    icon: 'fa-solid fa-briefcase',
    bg: 'pg-3'
  },
  {
    title: 'Netflix Clone',
    desc: 'Pixel-perfect Netflix UI clone with dynamic movie data.',
    long: 'Streaming interface with hero banner, category rows, trailer previews and responsive design powered by TMDB API.',
    tech: ['React', 'TMDB API', 'CSS'],
    icon: 'fa-solid fa-film',
    bg: 'pg-4'
  },
  {
    title: 'Portfolio Website',
    desc: 'Personal portfolio showcasing my projects and skills.',
    long: 'A premium, responsive portfolio site with smooth animations, dark theme, and modular architecture ready for CMS integration.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: 'fa-solid fa-user-tie',
    bg: 'pg-5'
  },
  {
    title: 'Todo App',
    desc: 'Clean and delightful task manager with local persistence.',
    long: 'Minimalist todo app supporting categories, due dates, filtering, drag-and-drop reordering and dark/light theme.',
    tech: ['React', 'LocalStorage'],
    icon: 'fa-solid fa-list-check',
    bg: 'pg-6'
  }
];
const projectsGrid = document.getElementById('projectsGrid');
projectsGrid.innerHTML = projects.map((p, i) => `
  <article class="project-card reveal" data-idx="${i}">
    <div class="project-image ${p.bg}">
      <i class="${p.icon} glyph"></i>
    </div>
    <div class="project-body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tech-badges">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="project-actions">
        <a href="#" class="btn btn-ghost" onclick="event.stopPropagation()"><i class="fa-brands fa-github"></i> Code</a>
        <a href="#" class="btn btn-primary" onclick="event.stopPropagation()"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
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
      <div class="modal-hero ${p.bg}"><i class="${p.icon}"></i></div>
      <div class="modal-content">
        <h3>${p.title}</h3>
        <p>${p.long}</p>
        <div class="tech-badges">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="project-actions">
          <a href="#" class="btn btn-ghost"><i class="fa-brands fa-github"></i> GitHub</a>
          <a href="#" class="btn btn-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>
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