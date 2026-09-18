const { portfolio } = window;

if (!portfolio) {
  throw new Error('Os dados do portfólio não foram carregados.');
}

const createLink = (label, url, className = 'button') => {
  const externalAttributes = url.startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';
  return `<a class="${className}" href="${url}"${externalAttributes}>${label}</a>`;
};

document.querySelector('#about-copy').textContent = portfolio.about;

document.querySelector('#profile-links').innerHTML = [
  createLink('Ver GitHub', portfolio.links.github, 'button button-primary'),
  createLink('Entrar em contato', portfolio.links.email, 'button button-outline'),
].join('');

document.querySelector('#education-list').innerHTML = portfolio.education
  .map((education) => `
    <article class="education-card">
      <div class="education-meta"><span>${education.period}</span><span>${education.status}</span></div>
      <h3>${education.degree}</h3><p>${education.institution}</p>
    </article>`)
  .join('');

document.querySelector('#project-list').innerHTML = portfolio.projects
  .map(
    (project, index) => `
      <article class="project-card project-${project.accent}">
        <div class="project-visual" aria-hidden="true"><span>0${index + 1}</span><i></i><i></i><i></i></div>
        <div class="project-content">
          <p class="project-index">PROJETO 0${index + 1}</p><h3>${project.title}</h3><p>${project.description}</p>
          <ul class="tag-list">${project.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>
          ${createLink('Abrir no GitHub ↗', project.url, 'project-link')}
        </div>
      </article>
    `,
  )
  .join('');

document.querySelector('#experience-list').innerHTML = portfolio.experiences
  .map(
    (experience) => `
      <article class="timeline-item">
        <div class="timeline-meta"><p>${experience.period}</p><span>${experience.location}</span></div>
        <div>
          <h3>${experience.role} <span>· ${experience.company}</span></h3>
          <p>${experience.summary}</p>
        </div>
      </article>
    `,
  )
  .join('');

document.querySelector('#skill-list').innerHTML = portfolio.skills
  .map(
    (group) => `
      <article class="skill-group tone-${group.tone}">
        <span class="skill-mark">${group.mark}</span>
        <div><h3>${group.label}</h3><p>${group.type}</p></div>
      </article>
    `,
  )
  .join('');

document.querySelector('#contact-links').innerHTML = [
  createLink('E-mail', portfolio.links.email, 'contact-card'),
  createLink('LinkedIn', portfolio.links.linkedin, 'contact-card'),
  createLink('GitHub', portfolio.links.github, 'contact-card'),
].join('');
document.querySelector('#current-year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const themeToggle = document.querySelector('.theme-toggle');
let savedTheme = null;

try {
  savedTheme = window.localStorage.getItem('portfolio-theme');
} catch {
  // O site continua funcional quando o navegador bloqueia armazenamento local.
}

if (savedTheme === 'light') document.body.classList.add('light-theme');

themeToggle.addEventListener('click', () => {
  const isLightTheme = document.body.classList.toggle('light-theme');
  try {
    window.localStorage.setItem('portfolio-theme', isLightTheme ? 'light' : 'dark');
  } catch {
    // A troca de tema funciona nesta sessão mesmo sem armazenamento persistente.
  }
});
