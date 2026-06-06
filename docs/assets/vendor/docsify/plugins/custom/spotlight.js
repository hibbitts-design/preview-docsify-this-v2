// docsify-spotlight.js
// Docsify plugin: Section Spotlight Mode
// Activate by adding &spotlight=true to any Docsify-This URL.

(function() {
    'use strict';

    // Only run if the URL explicitly requests spotlight mode
    if (!location.search.includes('spotlight=true')) return;

    let spotlightOn = true;
    const PADDING = 10;

    // --- STYLES ---
    const css = `
        .section-dim {
            opacity: 0.25;
            filter: grayscale(0.4);
            transition: opacity 0.35s ease, filter 0.35s ease;
        }
        .section-focus {
            opacity: 1;
            filter: grayscale(0);
            transition: opacity 0.35s ease, filter 0.35s ease;
        }
        .section-dim h1, .section-dim h2, .section-dim h3,
        .section-dim h4, .section-dim h5, .section-dim h6 {
            opacity: 0.55;
        }
        .section-dim h2 { opacity: 0.45; }
        .section-dim h3 { opacity: 0.40; }

        #spotlight-toggle {
            position: fixed;
            top: 12px;
            right: 12px;
            z-index: 9999;
            padding: 4px 10px;
            font-size: 11px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.4;
            letter-spacing: 0.02em;
            border: none;
            border-radius: 4px;
            background: rgba(200, 200, 200, 0.4);
            color: #666;
            cursor: pointer;
            transition: all 0.25s ease;
        }
        #spotlight-toggle:hover {
            background: rgba(180, 180, 180, 0.6);
            color: #444;
        }
        #spotlight-toggle.active {
            background: rgba(100, 100, 100, 0.25);
            color: #333;
        }
        #spotlight-toggle.dark-mode {
            background: rgba(80, 80, 80, 0.5);
            color: #bbb;
        }
        #spotlight-toggle.dark-mode:hover {
            background: rgba(120, 120, 120, 0.6);
            color: #eee;
        }
        #spotlight-toggle.dark-mode.active {
            background: rgba(200, 200, 200, 0.15);
            color: #fff;
        }
        @media (prefers-color-scheme: dark) {
            #spotlight-toggle {
                background: rgba(80, 80, 80, 0.5);
                color: #bbb;
            }
            #spotlight-toggle:hover {
                background: rgba(120, 120, 120, 0.6);
                color: #eee;
            }
            #spotlight-toggle.active {
                background: rgba(200, 200, 200, 0.15);
                color: #fff;
            }
        }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // --- TOGGLE BUTTON ---
    const btn = document.createElement('button');
    btn.id = 'spotlight-toggle';
    btn.textContent = 'Spotlight: On';
    btn.className = 'active';
    btn.setAttribute('aria-label', 'Toggle section spotlight mode');
    btn.setAttribute('aria-pressed', 'true');

    btn.addEventListener('click', () => {
        spotlightOn = !spotlightOn;
        btn.textContent = spotlightOn ? 'Spotlight: On' : 'Spotlight: Off';
        btn.classList.toggle('active', spotlightOn);
        btn.setAttribute('aria-pressed', spotlightOn);
        spotlightOn ? applySpotlight() : clearSpotlight();
    });

    // --- INSTANT NAVIGATION ---
    // Intercept in-page heading links for immediate spotlight update
    window.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href) return;

        let hash = href.replace(/^#/, '');
        const match = hash.match(/[?&]id=([^&]+)/);
        const id = match ? decodeURIComponent(match[1]) : hash.replace(/^\//, '').split(/[?&]/)[0];
        if (!id) return;

        const target = document.getElementById(id);
        if (!target || (target.tagName !== 'H2' && target.tagName !== 'H3')) return;

        e.preventDefault();
        e.stopPropagation();

        window.scrollTo(0, target.offsetTop - PADDING);
        history.replaceState(null, null, href);
        applySpotlight();
    }, true);

    // --- SPOTLIGHT LOGIC ---

    function clearSpotlight() {
        document.querySelectorAll('.section-focus, .section-dim').forEach(el => {
            el.classList.remove('section-focus', 'section-dim');
        });
    }

    function collectUntil(start, end) {
        const list = [start];
        let next = start.nextElementSibling;
        while (next && next !== end) {
            list.push(next);
            next = next.nextElementSibling;
        }
        return list;
    }

    function findActive(headings, scrollPos) {
        for (let i = headings.length - 1; i >= 0; i--) {
            if (headings[i].offsetTop <= scrollPos) return headings[i];
        }
        return null;
    }

    function getHashHeading() {
        let hash = location.hash.replace(/^#/, '');
        if (!hash) return null;

        const match = hash.match(/[?&]id=([^&]+)/);
        let id = match ? decodeURIComponent(match[1]) : hash.replace(/^\//, '').split(/[?&]/)[0];

        const el = id && document.getElementById(id);
        if (el && (el.tagName === 'H2' || el.tagName === 'H3')) return el;
        return null;
    }

    function getParentH2(h3) {
        let prev = h3.previousElementSibling;
        while (prev) {
            if (prev.tagName === 'H2') return prev;
            prev = prev.previousElementSibling;
        }
        return null;
    }

    function getFirstH3(h2) {
        let next = h2.nextElementSibling;
        let paragraphs = 0;
        while (next && next.tagName !== 'H2') {
            if (next.tagName === 'H3') return paragraphs <= 1 ? next : null;
            if (next.tagName === 'P') paragraphs++;
            next = next.nextElementSibling;
        }
        return null;
    }

    function applySpotlight() {
        if (!spotlightOn) return;

        const headings = document.querySelectorAll('h2, h3');
        const scrollPos = window.scrollY + window.innerHeight * 0.25;

        // Start with the hash heading, but verify it still matches the scroll position
        let active = getHashHeading();
        const scrollActive = findActive(headings, scrollPos);

        // If the hash heading and scroll detection disagree, the user has scrolled
        // away from the clicked section — trust the scroll position instead
        if (active && scrollActive && active !== scrollActive) {
            active = null;
        }

        if (!active) {
            active = scrollActive;
        }

        if (!active) return;

        clearSpotlight();

        const sections = [];
        for (let i = 0; i < headings.length; i++) {
            sections.push({
                heading: headings[i],
                elements: collectUntil(headings[i], headings[i + 1] || null)
            });
        }

        let parentH2 = null;
        if (active.tagName === 'H3') parentH2 = getParentH2(active);

        let firstH3 = null;
        if (active.tagName === 'H2') firstH3 = getFirstH3(active);

        sections.forEach(section => {
            const isActive = section.heading === active ||
                             section.heading === parentH2 ||
                             section.heading === firstH3;

            section.elements.forEach(el => {
                el.classList.add(isActive ? 'section-focus' : 'section-dim');
            });
        });
    }

    // --- SCROLL HANDLER ---
    let waiting = false;
    window.addEventListener('scroll', () => {
        if (!waiting) {
            window.requestAnimationFrame(() => {
                applySpotlight();
                waiting = false;
            });
            waiting = true;
        }
    }, { passive: true });

    // --- HASHCHANGE HANDLER ---
    window.addEventListener('hashchange', () => {
        setTimeout(applySpotlight, 50);
    });

    // --- DARK MODE ---
    function isDark() {
        const url = location.href.toLowerCase();
        if (url.includes('dark-mode=on') || url.includes('dark-mode=true')) return true;

        const body = document.body.classList;
        const html = document.documentElement.classList;
        if (body.contains('dark') || body.contains('theme-dark') || body.contains('docsify-dark') ||
            html.contains('dark') || html.contains('theme-dark')) return true;

        if (document.body.getAttribute('data-theme') === 'dark' ||
            document.documentElement.getAttribute('data-theme') === 'dark') return true;

        const bg = window.getComputedStyle(document.body).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
            const rgb = bg.match(/\d+/g);
            if (rgb) {
                const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
                if (brightness < 80) return true;
            }
        }

        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function updateTheme() {
        btn.classList.toggle('dark-mode', isDark());
    }

    // --- DOCSIFY PLUGIN HOOK ---
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = (window.$docsify.plugins || []).concat(function(hook, vm) {
        hook.doneEach(() => {
            // Ensure button exists after each route change
            if (!document.getElementById('spotlight-toggle')) {
                document.body.appendChild(btn);
            }
            applySpotlight();
            updateTheme();
        });
    });
})();