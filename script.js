/* ---------------- icon library ---------------- */
(function () {
    const S = 'stroke="currentColor" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"';
    const ICONS = {
        linkedin: `<svg viewBox="0 0 24 24" ${S}><path d="M5 8.5V19M5 5.2v.1M9 19v-6a4 4 0 0 1 8 0v6M9 13V8.5M17 19v-6"/></svg>`,
        github: `<svg viewBox="0 0 24 24" ${S}><path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5z"/></svg>`,
        spark: `<svg viewBox="0 0 24 24" ${S}><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4"/></svg>`,
        mail: `<svg viewBox="0 0 24 24" ${S}><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3,7 12,13 21,7"/></svg>`,
        phone: `<svg viewBox="0 0 24 24" ${S}><path d="M6.6 3h3l1.8 4.5-2.3 1.6a12.3 12.3 0 0 0 5.8 5.8l1.6-2.3L21 14.4v3a2 2 0 0 1-2.2 2C10.6 18.6 5.4 13.4 4.6 6.2A2 2 0 0 1 6.6 3z"/></svg>`,
        pin: `<svg viewBox="0 0 24 24" ${S}><path d="M12 21s7-6.3 7-11.4A7 7 0 1 0 5 9.6C5 14.7 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>`,
        globe: `<svg viewBox="0 0 24 24" ${S}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.8 3.2 2.8 14.8 0 18"/><path d="M12 3c-2.8 3.2-2.8 14.8 0 18"/></svg>`,
        repo: `<svg viewBox="0 0 24 24" ${S}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 3v18M8.5 7.5h7M8.5 11.5h7M8.5 15.5h4.5"/></svg>`,
        link: `<svg viewBox="0 0 24 24" ${S}><circle cx="6" cy="12" r="2.3"/><circle cx="18" cy="6" r="2.3"/><circle cx="18" cy="18" r="2.3"/><path d="M8.1 10.8l7.7-3.4M8.1 13.2l7.7 3.4"/></svg>`,
        monitor: `<svg viewBox="0 0 24 24" ${S}><rect x="3" y="4" width="18" height="12.5" rx="2"/><polyline points="8,9 11,12 8,15"/><line x1="13" y1="15" x2="16.5" y2="15"/><line x1="9" y1="20.5" x2="15" y2="20.5"/><line x1="12" y1="16.5" x2="12" y2="20.5"/></svg>`,
        cart: `<svg viewBox="0 0 24 24" ${S}><circle cx="9.5" cy="20" r="1.3"/><circle cx="17.5" cy="20" r="1.3"/><path d="M3 4h2.2l2.3 11.4a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 2-1.6L20.8 7.5H6"/></svg>`,
        cloud: `<svg viewBox="0 0 24 24" ${S}><path d="M7.5 18a4.3 4.3 0 0 1-.9-8.5A5.6 5.6 0 0 1 17 8.3a4 4 0 0 1 .3 7.7H7.5z"/></svg>`,
        cap: `<svg viewBox="0 0 24 24" ${S}><path d="M2 9.2 12 5l10 4.2-10 4.2-10-4.2z"/><path d="M6.4 11.2v4c0 1.6 2.7 3 5.6 3s5.6-1.4 5.6-3v-4"/><path d="M22 9.2v6.3"/></svg>`,
        code: `<svg viewBox="0 0 24 24" ${S}><polyline points="8.5,6.5 3.2,12 8.5,17.5"/><polyline points="15.5,6.5 20.8,12 15.5,17.5"/></svg>`,
        gamepad: `<svg viewBox="0 0 24 24" ${S}><rect x="2.5" y="7.5" width="19" height="10" rx="4.5"/><path d="M6.6 10v3.4M4.9 11.7h3.4"/><circle cx="15.2" cy="10.6" r=".9" fill="currentColor"/><circle cx="17.8" cy="13.2" r=".9" fill="currentColor"/></svg>`,
        book: `<svg viewBox="0 0 24 24" ${S}><path d="M4 4.8A2.6 2.6 0 0 1 6.6 2.2H20v15.7H6.6A2.6 2.6 0 0 0 4 20.5V4.8z"/><path d="M4 20.2a2.6 2.6 0 0 1 2.6-2.3H20"/></svg>`,
        music: `<svg viewBox="0 0 24 24" ${S}><circle cx="6.3" cy="18" r="2.3"/><circle cx="16.8" cy="16" r="2.3"/><path d="M8.6 18V5.8L19.1 3.4v12.6"/></svg>`
    };
    document.querySelectorAll('[data-icon]').forEach(el => {
        const key = el.getAttribute('data-icon');
        if (ICONS[key]) el.innerHTML = ICONS[key];
    });
})();

/* ---------------- pixel avatar (rendered twice: header + profile) ---------------- */
(function () {
    const rows = [
        '.HHH..HHH.',
        '.HHHHHHHH.',
        'HHSSSSSSHH',
        'HSSSSSSSSH',
        'HSSGSSGSSH',
        'HSSSSSSSSH',
        '.SSSSSSSS.',
        '..PPPPPP..',
        '.PPPPPPPP.',
        '.PPCPPCPP.'
    ];
    const colors = {H: '#20201a', S: '#eab88a', G: '#0c0c09', P: '#e8562c', C: '#2f9e63'};

    function build(target) {
        rows.forEach(row => {
            [...row].forEach(ch => {
                const d = document.createElement('div');
                d.style.background = colors[ch] || 'transparent';
                target.appendChild(d);
            });
        });
    }

    build(document.getElementById('pixel-avatar'));
    const igWrap = document.getElementById('igAvatarWrap');
    const igGrid = document.createElement('div');
    igGrid.id = 'pixel-avatar';
    igWrap.appendChild(igGrid);
    build(igGrid);
})();

/* ---------------- token-meter skill bars ---------------- */
(function () {
    document.querySelectorAll('.skill-row').forEach(row => {
        const level = parseInt(row.getAttribute('data-level'), 10) || 0;
        const wrap = row.querySelector('.tokens');
        for (let i = 0; i < 8; i++) {
            const t = document.createElement('div');
            t.className = 'tick' + (i >= level ? ' dash' : '');
            t.dataset.filled = i < level ? '1' : '0';
            wrap.appendChild(t);
        }
    });
})();

/* ---------------- reveal panels + pop in tokens ---------------- */
(function () {
    const panels = document.querySelectorAll('.panel');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                entry.target.querySelectorAll('.tick[data-filled="1"]').forEach((tick, i) => {
                    setTimeout(() => tick.classList.add('filled'), 120 + i * 70);
                });
                obs.unobserve(entry.target);
            }
        });
    }, {threshold: 0.12});
    panels.forEach(p => obs.observe(p));
})();

/* ---------------- hamburger menu ---------------- */
(function () {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('open');
    });
    document.addEventListener('click', () => menu.classList.remove('open'));
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menu.classList.remove('open');
        });
    });
})();