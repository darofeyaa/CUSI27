'use strict';

const CATALOG = {
  cities: ['Praha', 'Brno', 'Ostrava', 'Plzeň', 'Olomouc'],
  directions: [
    { slug: 'sport', title: 'Sport', icon: 'sport', description: 'Fotbal, basketbal, plavání, tanec', placeholder: 'Hledat sport…' },
    { slug: 'subjects', title: 'Školní předměty', icon: 'book', description: 'Matematika, fyzika, chemie, biologie a další', placeholder: 'Hledat předmět…' },
    { slug: 'languages', title: 'Cizí jazyky', icon: 'globe', description: 'Školní i méně běžné jazyky', placeholder: 'Hledat jazyk…' },
    { slug: 'music', title: 'Hudba', icon: 'music', description: 'Zpěv, nástroje, hudební nauka', placeholder: 'Hledat lekci…' },
    { slug: 'art', title: 'Tvořivost', icon: 'palette', description: 'Kreslení, modelování, ruční práce', placeholder: 'Hledat lekci…' },
    { slug: 'coding', title: 'Programování', icon: 'code', description: 'Python, Scratch, tvorba her', placeholder: 'Hledat kurz…' },
    { slug: 'other', title: 'Další obory', icon: 'spark', description: 'Šachy, logika, řečnictví a mnoho dalšího', placeholder: 'Hledat lekci…' }
  ],
  lessons: {
    sport: [
      { name: 'Fotbal', age: [6, 14], options: [
        { type: 'group', label: 'Skupina', price: 890, seats: 6 }
      ] },
      { name: 'Basketbal', age: [8, 16], options: [
        { type: 'group', label: 'Skupina', price: 950, seats: 2 }
      ] },
      { name: 'Volejbal', age: [10, 17], options: [
        { type: 'group', label: 'Skupina', price: 890, seats: 9 }
      ] },
      { name: 'Stolní tenis', age: [7, 15], options: [
        { type: 'group', label: 'Skupina', price: 790, seats: 0 },
        { type: 'solo', label: 'Individuální', price: 1290, seats: 3 }
      ] },
      { name: 'Plavání', age: [4, 14], options: [
        { type: 'group', label: 'Skupina', price: 890, seats: 4 },
        { type: 'solo', label: 'Individuální', price: 1490, seats: 2 }
      ] },
      { name: 'Tanec', age: [5, 15], options: [
        { type: 'group', label: 'Skupina', price: 850, seats: 11 },
        { type: 'solo', label: 'Individuální', price: 1390, seats: 4 }
      ] }
    ],
    subjects: [
      { name: 'Matematika', age: [8, 17], options: [
        { type: 'group', label: 'Skupina', price: 790, seats: 5 },
        { type: 'solo', label: 'Doučování 1-na-1', price: 1290, seats: 6 }
      ] },
      { name: 'Fyzika', age: [12, 17], options: [
        { type: 'group', label: 'Skupina', price: 790, seats: 7 },
        { type: 'solo', label: 'Doučování 1-na-1', price: 1290, seats: 3 }
      ] },
      { name: 'Chemie', age: [12, 17], options: [
        { type: 'group', label: 'Skupina', price: 790, seats: 3 },
        { type: 'solo', label: 'Doučování 1-na-1', price: 1290, seats: 2 }
      ] },
      { name: 'Biologie', age: [11, 17], options: [
        { type: 'group', label: 'Skupina', price: 750, seats: 8 },
        { type: 'solo', label: 'Doučování 1-na-1', price: 1250, seats: 4 }
      ] },
      { name: 'Český jazyk', age: [7, 15], options: [
        { type: 'group', label: 'Skupina', price: 690, seats: 10 },
        { type: 'solo', label: 'Doučování 1-na-1', price: 1190, seats: 5 }
      ] },
      { name: 'Literatura', age: [10, 17], options: [
        { type: 'group', label: 'Skupina', price: 690, seats: 6 }
      ] },
      { name: 'Dějepis', age: [10, 17], options: [
        { type: 'group', label: 'Skupina', price: 690, seats: 0 },
        { type: 'solo', label: 'Doučování 1-na-1', price: 1190, seats: 2 }
      ] },
      { name: 'Občanská výchova', age: [12, 17], options: [
        { type: 'group', label: 'Skupina', price: 650, seats: 12 }
      ] },
      { name: 'Zeměpis', age: [9, 15], options: [
        { type: 'group', label: 'Skupina', price: 650, seats: 5 },
        { type: 'solo', label: 'Doučování 1-na-1', price: 1150, seats: 3 }
      ] },
      { name: 'Informatika', age: [9, 17], options: [
        { type: 'group', label: 'Skupina', price: 890, seats: 2 },
        { type: 'solo', label: 'Doučování 1-na-1', price: 1390, seats: 4 }
      ] }
    ],
    languages: [
      { name: 'Angličtina', code: 'EN', age: [5, 17], options: [
        { type: 'group', label: 'Skupina', price: 890, seats: 8 },
        { type: 'solo', label: 'Individuální', price: 1390, seats: 5 }
      ] },
      { name: 'Němčina', code: 'DE', age: [8, 17], options: [
        { type: 'group', label: 'Skupina', price: 890, seats: 5 },
        { type: 'solo', label: 'Individuální', price: 1390, seats: 3 }
      ] },
      { name: 'Francouzština', code: 'FR', age: [10, 17], options: [
        { type: 'group', label: 'Skupina', price: 950, seats: 3 },
        { type: 'solo', label: 'Individuální', price: 1450, seats: 2 }
      ] },
      { name: 'Španělština', code: 'ES', age: [10, 17], options: [
        { type: 'group', label: 'Skupina', price: 950, seats: 7 },
        { type: 'solo', label: 'Individuální', price: 1450, seats: 4 }
      ] },
      { name: 'Italština', code: 'IT', age: [12, 17], options: [
        { type: 'group', label: 'Skupina', price: 950, seats: 0 },
        { type: 'solo', label: 'Individuální', price: 1450, seats: 1 }
      ] },
      { name: 'Čínština', code: 'ZH', age: [9, 17], options: [
        { type: 'group', label: 'Skupina', price: 1050, seats: 4 },
        { type: 'solo', label: 'Individuální', price: 1590, seats: 2 }
      ] },
      { name: 'Japonština', code: 'JA', age: [11, 17], options: [
        { type: 'group', label: 'Skupina', price: 1050, seats: 6 }
      ] },
      { name: 'Korejština', code: 'KO', age: [11, 17], options: [
        { type: 'group', label: 'Skupina', price: 1050, seats: 2 },
        { type: 'solo', label: 'Individuální', price: 1590, seats: 3 }
      ] },
      { name: 'Arabština', code: 'AR', age: [13, 17], options: [
        { type: 'solo', label: 'Individuální', price: 1590, seats: 9 }
      ] }
    ],
    music: [
      { name: 'Zpěv', age: [6, 17], options: [
        { type: 'group', label: 'Skupina', price: 790, seats: 6 },
        { type: 'solo', label: 'Individuální', price: 1290, seats: 3 }
      ] },
      { name: 'Klavír', age: [5, 17], options: [
        { type: 'solo', label: 'Individuální', price: 1390, seats: 2 }
      ] },
      { name: 'Kytara', age: [7, 17], options: [
        { type: 'group', label: 'Skupina', price: 890, seats: 5 },
        { type: 'solo', label: 'Individuální', price: 1290, seats: 4 }
      ] },
      { name: 'Housle', age: [5, 14], options: [
        { type: 'solo', label: 'Individuální', price: 1390, seats: 0 }
      ] },
      { name: 'Bicí', age: [8, 17], options: [
        { type: 'solo', label: 'Individuální', price: 1390, seats: 4 }
      ] },
      { name: 'Hudební nauka', age: [6, 12], options: [
        { type: 'group', label: 'Skupina', price: 590, seats: 14 }
      ] }
    ],
    art: [
      { name: 'Kreslení', age: [5, 14], options: [
        { type: 'group', label: 'Skupina', price: 750, seats: 9 }
      ] },
      { name: 'Modelování', age: [5, 12], options: [
        { type: 'group', label: 'Skupina', price: 790, seats: 3 }
      ] },
      { name: 'Divadlo', age: [7, 16], options: [
        { type: 'group', label: 'Skupina', price: 850, seats: 7 }
      ] },
      { name: 'Ruční práce', age: [6, 14], options: [
        { type: 'group', label: 'Skupina', price: 690, seats: 0 }
      ] },
      { name: 'Fotografování', age: [11, 17], options: [
        { type: 'group', label: 'Skupina', price: 890, seats: 5 },
        { type: 'solo', label: 'Individuální', price: 1390, seats: 2 }
      ] }
    ],
    coding: [
      { name: 'Python', age: [11, 17], options: [
        { type: 'group', label: 'Skupina', price: 990, seats: 4 },
        { type: 'solo', label: 'Individuální', price: 1590, seats: 3 }
      ] },
      { name: 'Scratch', age: [6, 11], options: [
        { type: 'group', label: 'Skupina', price: 890, seats: 8 }
      ] },
      { name: 'Tvorba her', age: [10, 17], options: [
        { type: 'group', label: 'Skupina', price: 990, seats: 2 },
        { type: 'solo', label: 'Individuální', price: 1590, seats: 2 }
      ] },
      { name: 'Webové stránky', age: [12, 17], options: [
        { type: 'group', label: 'Skupina', price: 990, seats: 6 },
        { type: 'solo', label: 'Individuální', price: 1590, seats: 4 }
      ] },
      { name: 'Robotika', age: [8, 14], options: [
        { type: 'group', label: 'Skupina', price: 1190, seats: 0 }
      ] }
    ],
    other: [
      { name: 'Šachy', age: [6, 17], options: [
        { type: 'group', label: 'Skupina', price: 590, seats: 10 },
        { type: 'solo', label: 'Individuální', price: 1190, seats: 3 }
      ] },
      { name: 'Logika', age: [7, 13], options: [
        { type: 'group', label: 'Skupina', price: 690, seats: 5 }
      ] },
      { name: 'Řečnictví', age: [12, 17], options: [
        { type: 'group', label: 'Skupina', price: 790, seats: 3 },
        { type: 'solo', label: 'Individuální', price: 1290, seats: 2 }
      ] }
    ]
  }
};

const api = {
  async getCities() {
    return CATALOG.cities;
  },

  async getDirections() {
    return CATALOG.directions.map((d) => ({ ...d, count: CATALOG.lessons[d.slug].length }));
  },

  async getLessons(slug) {
    const direction = CATALOG.directions.find((d) => d.slug === slug);
    if (!direction) return null;
    return { direction, lessons: CATALOG.lessons[slug] };
  }
};

const store = {
  get(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch { /* storage unavailable */ }
  }
};

const AGE_RANGES = {
  all: [0, 99],
  '4-7': [4, 7],
  '8-12': [8, 12],
  '13+': [13, 99]
};

const DEFAULT_FILTERS = { format: 'all', age: 'all', free: false, term: '' };

const $ = (id) => document.getElementById(id);
const czk = new Intl.NumberFormat('cs-CZ');
const icon = (name) => `<svg class="ico" aria-hidden="true"><use href="#i-${name}"/></svg>`;

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const totalSeats = (options) => options.reduce((sum, o) => sum + o.seats, 0);
const minPrice = (options) => Math.min(...options.map((o) => o.price));
const ageOverlaps = ([from, to], [min, max]) => from <= max && to >= min;

const seatsBadge = (seats) => {
  if (seats === 0) return '<span class="badge full">Obsazeno</span>';
  if (seats <= 3) return '<span class="badge few">Poslední místa</span>';
  return '<span class="badge free">Volná místa</span>';
};

const seatsState = (seats) => (seats === 0 ? 'full' : seats <= 3 ? 'few' : 'free');

const seatsText = (seats) => {
  if (seats === 0) return 'Obsazeno';
  if (seats === 1) return 'Zbývá 1 místo';
  if (seats <= 3) return `Zbývají ${seats} místa`;
  return 'Volná místa';
};

const formatsInfo = (options) => {
  const hasGroup = options.some((o) => o.type === 'group');
  const hasSolo = options.some((o) => o.type === 'solo');
  if (hasGroup && hasSolo) {
    return `<span class="tag-opt">${icon('users')}Dostupné: Skupina i 1-na-1</span>`;
  }
  if (hasSolo) {
    return `<span class="tag-opt muted">${icon('user')}Pouze individuální</span>`;
  }
  return `<span class="tag-opt muted">${icon('users')}Pouze skupinové lekce</span>`;
};

const optionRow = (option, isVisible) => `
  <li class="opt${isVisible ? '' : ' off'}">
    <span class="opt-name">${icon(option.type === 'solo' ? 'user' : 'users')}${escapeHtml(option.label)}</span>
    <span class="opt-price">${czk.format(option.price)} Kč</span>
    <span class="opt-seats ${seatsState(option.seats)}">${seatsText(option.seats)}</span>
  </li>`;

const directionCard = ({ slug, title, icon: name, description, count }) => `
  <a href="#/${slug}" class="card dir">
    <div class="card-head">
      <div class="circle">${icon(name)}</div>
      <span class="count">${count} kurzů</span>
    </div>
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(description)}</p>
  </a>`;

const lessonCard = ({ lesson, visible }, iconName) => {
  const { name, code, age, options } = lesson;
  return `
  <article class="card">
    <div class="card-head">
      <div class="circle${code ? ' code' : ''}">${code ? escapeHtml(code) : icon(iconName)}</div>
      ${seatsBadge(totalSeats(visible))}
    </div>
    <h3>${escapeHtml(name)}</h3>
    <div class="formats-info">${formatsInfo(options)}</div>
    <ul class="opts">${options.map((o) => optionRow(o, visible.includes(o))).join('')}</ul>
    <div class="meta">
      <span class="age">${icon('users')}${age[0]}–${age[1]} let</span>
      <span class="price">od ${czk.format(minPrice(visible))} Kč</span>
    </div>
  </article>`;
};

const skeletons = (n) => Array.from({ length: n }, () => '<div class="skeleton"></div>').join('');

class Catalog {
  constructor() {
    this.home = $('home');
    this.page = $('page');
    this.city = $('city');
    this.query = $('q');
    this.onlyFree = $('only-free');
    this.grid = $('p-grid');
    this.empty = $('p-empty');
    this.emptyText = $('p-empty-text');
    this.reset = $('p-reset');
    this.count = $('p-count');
    this.segments = [...document.querySelectorAll('.seg')];
    this.filters = { ...DEFAULT_FILTERS };
    this.current = null;
    this.bind();
  }

  bind() {
    this.query.addEventListener('input', () => {
      this.filters.term = this.query.value.trim().toLowerCase();
      this.render();
    });
    this.onlyFree.addEventListener('change', () => {
      this.filters.free = this.onlyFree.checked;
      this.render();
    });
    this.segments.forEach((seg) => {
      seg.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-value]');
        if (!button) return;
        this.filters[seg.dataset.filter] = button.dataset.value;
        this.syncControls();
        this.render();
      });
    });
    this.reset.addEventListener('click', () => {
      this.filters = { ...DEFAULT_FILTERS };
      this.syncControls();
      this.render();
    });
    this.city.addEventListener('change', () => {
      store.set('city', this.city.value);
      $('p-where').textContent = `Město: ${this.city.value}`;
    });
    this.grid.addEventListener('click', (e) => {
      if (e.target.closest('a[href="#"]')) e.preventDefault();
    });
    window.addEventListener('hashchange', () => this.route());
  }

  syncControls() {
    this.query.value = this.filters.term;
    this.onlyFree.checked = this.filters.free;
    this.segments.forEach((seg) => {
      seg.querySelectorAll('button[data-value]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.value === this.filters[seg.dataset.filter]));
      });
    });
  }

  async init() {
    const dirGrid = $('dir-grid');
    dirGrid.innerHTML = skeletons(7);
    try {
      const [cities, directions] = await Promise.all([api.getCities(), api.getDirections()]);
      this.city.innerHTML = cities.map((c) => `<option>${escapeHtml(c)}</option>`).join('');
      const saved = store.get('city');
      if (saved && cities.includes(saved)) this.city.value = saved;
      dirGrid.innerHTML = directions.map(directionCard).join('');
    } catch (err) {
      dirGrid.innerHTML = '<p class="empty">Nepodařilo se načíst nabídku. Zkuste to prosím později.</p>';
    } finally {
      dirGrid.removeAttribute('aria-busy');
    }
    await this.route();
  }

  async route() {
    const match = location.hash.match(/^#\/(\w+)/);
    if (!match) return this.showHome();

    this.home.hidden = true;
    this.page.hidden = false;
    this.grid.innerHTML = skeletons(6);
    this.empty.hidden = true;
    this.count.textContent = '';
    window.scrollTo(0, 0);

    const slug = match[1];
    try {
      const result = await api.getLessons(slug);
      if (slug !== (location.hash.match(/^#\/(\w+)/) || [])[1]) return;
      if (!result) return this.showHome();
      this.current = result;
      this.filters = { ...DEFAULT_FILTERS };
      this.syncControls();
      $('p-title').textContent = result.direction.title;
      $('p-where').textContent = `Město: ${this.city.value}`;
      this.query.placeholder = result.direction.placeholder;
      document.title = `${result.direction.title} — SmartSchool`;
      this.render();
    } catch (err) {
      this.grid.innerHTML = '';
      this.emptyText.textContent = 'Nepodařilo se načíst lekce. Zkuste to prosím později.';
      this.reset.hidden = true;
      this.empty.hidden = false;
    }
  }

  showHome() {
    this.current = null;
    this.page.hidden = true;
    this.home.hidden = false;
    document.title = 'SmartSchool — rozvíjející škola';
    const target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }

  match(lesson) {
    const { format, age, free, term } = this.filters;
    if (term && !lesson.name.toLowerCase().includes(term)) return null;
    if (!ageOverlaps(lesson.age, AGE_RANGES[age])) return null;
    const visible = lesson.options.filter(
      (o) => (format === 'all' || o.type === format) && (!free || o.seats > 0)
    );
    return visible.length ? { lesson, visible } : null;
  }

  render() {
    if (!this.current) return;
    const { direction, lessons } = this.current;
    const items = lessons.map((l) => this.match(l)).filter(Boolean);

    this.grid.innerHTML = items.map((item) => lessonCard(item, direction.icon)).join('');
    this.count.textContent = items.length ? `Nalezeno: ${items.length} z ${lessons.length}` : '';
    this.emptyText.textContent = 'Nic nenalezeno. Zkuste jiné slovo nebo upravte filtry.';
    this.reset.hidden = false;
    this.empty.hidden = items.length > 0;
  }
}

class Carousel {
  constructor({ track, prev, next, dots, delay = 5000 }) {
    this.track = track;
    this.slides = [...track.children];
    this.dots = dots;
    this.delay = delay;
    this.index = 0;
    this.timer = null;

    this.slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Fotografie ${i + 1}`);
      dot.addEventListener('click', () => this.go(i, true));
      dots.append(dot);
    });

    prev.addEventListener('click', () => this.go(this.index - 1, true));
    next.addEventListener('click', () => this.go(this.index + 1, true));

    const root = track.closest('.carousel');
    root.addEventListener('mouseenter', () => this.stop());
    root.addEventListener('mouseleave', () => this.start());
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.go(this.index - 1, true);
      if (e.key === 'ArrowRight') this.go(this.index + 1, true);
    });

    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) this.go(this.index + (dx < 0 ? 1 : -1), true);
    });

    this.go(0);
    this.start();
  }

  go(i, manual = false) {
    const n = this.slides.length;
    this.index = (i + n) % n;
    this.track.style.transform = `translateX(-${this.index * 100}%)`;
    [...this.dots.children].forEach((d, k) => d.classList.toggle('on', k === this.index));
    if (manual) this.start();
  }

  start() {
    this.stop();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.timer = setInterval(() => this.go(this.index + 1), this.delay);
  }

  stop() {
    clearInterval(this.timer);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Carousel({
    track: $('track'),
    prev: $('prev'),
    next: $('next'),
    dots: $('dots')
  });
  new Catalog().init();
});