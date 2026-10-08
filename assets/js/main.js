const portfolio = window.portfolio;

if (!portfolio) {
  throw new Error('Os dados do portfólio não foram carregados.');
}

const getValue = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);
const createLink = (label, url, className) => {
  const externalAttributes = url.startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';
  return `<a class="${className}" href="${url}"${externalAttributes}>${label}</a>`;
};

const panels = [...document.querySelectorAll('[data-panel]')];
const panelTriggers = [...document.querySelectorAll('[data-panel-target]')];
const languageToggle = document.querySelector('.language-toggle');
const themeToggle = document.querySelector('.theme-toggle');
let activeLanguage = portfolio.defaultLanguage;
let activePanel = 'inicio';
let isAnimating = false;

const renderLanguage = () => {
  const content = portfolio.languages[activeLanguage];
  document.documentElement.lang = activeLanguage;
  document.title = content.title;
  document.querySelector('meta[name="description"]').content = content.description;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = getValue(content, element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', getValue(content, element.dataset.i18nAria));
  });

  document.querySelector('#home-role').textContent = content.home.role;
  document.querySelector('#profile-art').setAttribute('aria-label', content.accessibility.profileArt);
  languageToggle.textContent = activeLanguage === 'pt-BR' ? 'EN' : 'PT';
  languageToggle.setAttribute('aria-label', content.accessibility.switchLanguage);
  languageToggle.setAttribute('aria-pressed', String(activeLanguage === 'en'));
  themeToggle.setAttribute('aria-label', content.accessibility.themeToggle);
  document.querySelector('#about-copy').textContent = content.about;

  document.querySelector('#education-list').innerHTML = content.education
    .map((education) => `
      <article class="education-card">
        <div><span>${education.period}</span><span>${education.status}</span></div>
        <h3>${education.degree}</h3>
        <p>${education.institution}</p>
      </article>`)
    .join('');

  document.querySelector('#skill-list').innerHTML = content.skills
    .map((skill) => `
      <article class="skill-card tone-${skill.tone}">
        <span>${skill.mark}</span>
        <h3>${skill.label}</h3>
        <p>${skill.type}</p>
      </article>`)
    .join('');

  document.querySelector('#project-list').innerHTML = content.projects
    .map((project, index) => `
      <article class="project-card project-${project.accent}">
        <div class="project-visual" aria-hidden="true"><strong>0${index + 1}</strong><i></i><i></i></div>
        <div class="project-content">
          <p>${content.sections.projects.number} 0${index + 1}</p>
          <h3>${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <span>${project.tags.join(' · ')}</span>
          ${createLink(content.sections.projects.open, project.url, 'project-link')}
        </div>
      </article>`)
    .join('');

  document.querySelector('#experience-list').innerHTML = content.experiences
    .map((experience) => `
      <article class="timeline-item">
        <div><span>${experience.period}</span><small>${experience.location}</small></div>
        <div><h3>${experience.role}</h3><p>${experience.company}</p></div>
        <p>${experience.summary}</p>
      </article>`)
    .join('');

  document.querySelector('#contact-links').innerHTML = [
    createLink(content.contact.email, portfolio.links.email, 'contact-link'),
    createLink(content.contact.linkedin, portfolio.links.linkedin, 'contact-link'),
    createLink(content.contact.github, portfolio.links.github, 'contact-link'),
  ].join('');
};

const updateIndex = () => {
  panelTriggers.forEach((trigger) => {
    const isCurrent = trigger.dataset.panelTarget === activePanel;
    trigger.classList.toggle('is-current', isCurrent);
    if (trigger.closest('.section-index')) trigger.setAttribute('aria-current', isCurrent ? 'page' : 'false');
  });
};

const showPanel = (panelId) => {
  if (isAnimating || panelId === activePanel) return;

  const current = document.querySelector(`[data-panel="${activePanel}"]`);
  const next = document.querySelector(`[data-panel="${panelId}"]`);
  if (!next) return;

  isAnimating = true;
  const isForward = panels.indexOf(next) > panels.indexOf(current);
  const direction = isForward ? 'forward' : 'backward';
  current.classList.add('is-leaving', direction);

  window.setTimeout(() => {
    current.classList.remove('is-active', 'is-leaving', 'forward', 'backward');
    next.classList.add('is-active', `enter-${direction}`);
    activePanel = panelId;
    updateIndex();

    window.setTimeout(() => {
      next.classList.remove(`enter-${direction}`);
      isAnimating = false;
    }, 360);
  }, 260);
};

panelTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    showPanel(trigger.dataset.panelTarget);
  });
});

languageToggle.addEventListener('click', () => {
  activeLanguage = activeLanguage === 'pt-BR' ? 'en' : 'pt-BR';
  renderLanguage();
});

let savedTheme = null;

try {
  savedTheme = window.localStorage.getItem('portfolio-theme');
} catch {
  // O layout continua funcional quando o navegador bloqueia armazenamento local.
}

if (savedTheme === 'light') document.body.classList.add('light-theme');

themeToggle.addEventListener('click', () => {
  const isLightTheme = document.body.classList.toggle('light-theme');
  try {
    window.localStorage.setItem('portfolio-theme', isLightTheme ? 'light' : 'dark');
  } catch {
    // A troca de tema continua ativa somente nesta sessão.
  }
});

renderLanguage();
updateIndex();
