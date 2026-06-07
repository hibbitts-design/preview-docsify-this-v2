// docsify-spotlight.js
// Docsify plugin: Section Spotlight Mode
// Assisted by Kimi (Moonshot AI)
// Activate by adding &spotlight=true to any Docsify-This URL.
// Configure which headings are spotlight-aware with &spotlight-headings=h2,h3

(function() {
    'use strict';

    if (location.search.indexOf('spotlight=true') === -1) return;

    // --- INSTANT SCROLL OVERRIDES ---
    // Force all programmatic scrolling to be instant. We clone option objects
    // so we never mutate arguments that callers might reuse.
    try {
        var origScrollIntoView = Element.prototype.scrollIntoView;
        Element.prototype.scrollIntoView = function() {
            var args = Array.prototype.slice.call(arguments);
            if (args.length > 0 && typeof args[0] === 'object' && args[0] !== null) {
                var opts = {};
                for (var key in args[0]) {
                    if (args[0].hasOwnProperty(key)) opts[key] = args[0][key];
                }
                opts.behavior = 'auto';
                args[0] = opts;
            }
            return origScrollIntoView.apply(this, args);
        };
    } catch (e) {
        if (typeof console !== 'undefined' && console.warn) console.warn('Spotlight: scrollIntoView patch failed', e);
    }

    try {
        var origScrollTo = window.scrollTo;
        window.scrollTo = function(x, y) {
            if (typeof x === 'object' && x !== null) {
                var opts = {};
                for (var key in x) {
                    if (x.hasOwnProperty(key)) opts[key] = x[key];
                }
                opts.behavior = 'auto';
                return origScrollTo.call(window, opts);
            }
            return origScrollTo.call(window, x, y);
        };
    } catch (e) {
        if (typeof console !== 'undefined' && console.warn) console.warn('Spotlight: scrollTo patch failed', e);
    }

    try {
        var origScrollBy = window.scrollBy;
        window.scrollBy = function(x, y) {
            if (typeof x === 'object' && x !== null) {
                var opts = {};
                for (var key in x) {
                    if (x.hasOwnProperty(key)) opts[key] = x[key];
                }
                opts.behavior = 'auto';
                return origScrollBy.call(window, opts);
            }
            return origScrollBy.call(window, x, y);
        };
    } catch (e) {
        if (typeof console !== 'undefined' && console.warn) console.warn('Spotlight: scrollBy patch failed', e);
    }

    // --- HEADING CONFIG ---
    function getSpotlightHeadings() {
        var match = location.search.match(/[?&]spotlight-headings=([^&]+)/);
        if (match) {
            var parsed = decodeURIComponent(match[1]).split(',').map(function(h) { return h.trim().toLowerCase(); }).filter(function(h) { return h.length > 0; });
            if (parsed.length > 0) return parsed;
        }
        return ['h2', 'h3'];
    }

    var HEADING_TAGS = getSpotlightHeadings();
    var HEADING_SELECTOR = HEADING_TAGS.join(',');

    var spotlightOn = true;

    // --- STYLES ---
    var css = [
        'html, body { scroll-behavior: auto !important; }',
        '.section-dim {',
        '    opacity: 0.25;',
        '    filter: grayscale(0.4);',
        '    transition: opacity 0.35s ease, filter 0.35s ease;',
        '}',
        '.section-focus {',
        '    opacity: 1;',
        '    filter: grayscale(0);',
        '    transition: opacity 0.35s ease, filter 0.35s ease;',
        '}',
        '.section-dim h1, .section-dim h2, .section-dim h3,',
        '.section-dim h4, .section-dim h5, .section-dim h6 {',
        '    opacity: 0.55;',
        '}',
        '.section-dim h2 { opacity: 0.45; }',
        '.section-dim h3 { opacity: 0.40; }',
        '#spotlight-toggle {',
        '    position: fixed;',
        '    top: 12px;',
        '    right: 12px;',
        '    z-index: 9999;',
        '    padding: 4px 10px;',
        '    font-size: 11px;',
        "    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;",
        '    line-height: 1.4;',
        '    letter-spacing: 0.02em;',
        '    border: none;',
        '    border-radius: 4px;',
        '    background: rgba(200, 200, 200, 0.4);',
        '    color: #666;',
        '    cursor: pointer;',
        '    transition: all 0.25s ease;',
        '}',
        '#spotlight-toggle:hover {',
        '    background: rgba(180, 180, 180, 0.6);',
        '    color: #444;',
        '}',
        '#spotlight-toggle.active {',
        '    background: rgba(100, 100, 100, 0.25);',
        '    color: #333;',
        '}',
        '#spotlight-toggle.dark-mode {',
        '    background: rgba(80, 80, 80, 0.5);',
        '    color: #bbb;',
        '}',
        '#spotlight-toggle.dark-mode:hover {',
        '    background: rgba(120, 120, 120, 0.6);',
        '    color: #eee;',
        '}',
        '#spotlight-toggle.dark-mode.active {',
        '    background: rgba(200, 200, 200, 0.15);',
        '    color: #fff;',
        '}',
        '@media (prefers-color-scheme: dark) {',
        '    #spotlight-toggle {',
        '        background: rgba(80, 80, 80, 0.5);',
        '        color: #bbb;',
        '    }',
        '    #spotlight-toggle:hover {',
        '        background: rgba(120, 120, 120, 0.6);',
        '        color: #eee;',
        '    }',
        '    #spotlight-toggle.active {',
        '        background: rgba(200, 200, 200, 0.15);',
        '        color: #fff;',
        '    }',
        '}'
    ].join('\n');

    try {
        var style = document.createElement('style');
        style.textContent = css;
        if (document.head) {
            document.head.appendChild(style);
        }
    } catch (e) {
        if (typeof console !== 'undefined' && console.warn) console.warn('Spotlight: style injection failed', e);
    }

    // --- TOGGLE BUTTON ---
    var btn = document.createElement('button');
    btn.id = 'spotlight-toggle';
    btn.textContent = 'Spotlight: On';
    btn.className = 'active';
    btn.setAttribute('aria-label', 'Toggle section spotlight mode');
    btn.setAttribute('aria-pressed', 'true');

    btn.addEventListener('click', function() {
        spotlightOn = !spotlightOn;
        btn.textContent = spotlightOn ? 'Spotlight: On' : 'Spotlight: Off';
        if (spotlightOn) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        btn.setAttribute('aria-pressed', spotlightOn);
        spotlightOn ? applySpotlight() : clearSpotlight();
    });

    // --- ANCHOR LINK DETECTION ---
    function hasAnchorLink(heading) {
        if (!heading || !heading.id) return false;
        if (heading.querySelector('a[href^="#"]')) return true;

        var prev = heading.previousElementSibling;
        if (prev && prev.tagName === 'A' && prev.getAttribute('href') && prev.getAttribute('href').indexOf(heading.id) !== -1) {
            return true;
        }
        return false;
    }

    // --- SPOTLIGHT LOGIC ---

    function clearSpotlight() {
        var nodes = document.querySelectorAll('.section-focus, .section-dim');
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].classList.remove('section-focus', 'section-dim');
        }
    }

    function collectUntil(start, end) {
        var list = [];
        if (!start) return list;
        list.push(start);
        var next = start.nextElementSibling;
        while (next && next !== end) {
            list.push(next);
            next = next.nextElementSibling;
        }
        return list;
    }

    function findActive(headings) {
        if (!headings || headings.length === 0) return null;
        var viewportTop = window.scrollY + 2;
        var viewportCenter = window.scrollY + (window.innerHeight * 0.25);

        for (var i = 0; i < headings.length; i++) {
            var h = headings[i];
            if (!h) continue;
            var hBottom = h.offsetTop + h.offsetHeight;
            if (h.offsetTop <= viewportTop + 50 && hBottom > viewportTop) {
                return h;
            }
        }

        for (var i = headings.length - 1; i >= 0; i--) {
            if (headings[i] && headings[i].offsetTop <= viewportCenter) {
                return headings[i];
            }
        }

        return null;
    }

    function getHashHeading() {
        var hash = location.hash.replace(/^#/, '');
        if (!hash) return null;

        var match = hash.match(/[?&]id=([^&]+)/);
        var id = match ? decodeURIComponent(match[1]) : hash.replace(/^\//, '').split(/[?&]/)[0];

        if (!id) return null;
        try {
            var el = document.getElementById(id);
            if (el && HEADING_TAGS.indexOf(el.tagName.toLowerCase()) !== -1 && hasAnchorLink(el)) return el;
        } catch (e) {
            // Invalid id for getElementById (defensive)
        }
        return null;
    }

    function getParentHeading(heading) {
        if (!heading) return null;
        var myLevel = parseInt(heading.tagName[1], 10);
        if (isNaN(myLevel)) return null;
        var prev = heading.previousElementSibling;
        while (prev) {
            var prevLevel = parseInt(prev.tagName[1], 10);
            if (!isNaN(prevLevel) && HEADING_TAGS.indexOf(prev.tagName.toLowerCase()) !== -1 && prevLevel < myLevel && hasAnchorLink(prev)) {
                return prev;
            }
            prev = prev.previousElementSibling;
        }
        return null;
    }

    function getFirstChildHeading(heading) {
        if (!heading) return null;
        var myLevel = parseInt(heading.tagName[1], 10);
        if (isNaN(myLevel)) return null;
        var next = heading.nextElementSibling;
        var paragraphs = 0;
        while (next && HEADING_TAGS.indexOf(next.tagName.toLowerCase()) === -1) {
            if (next.tagName === 'P') paragraphs++;
            next = next.nextElementSibling;
        }
        if (next && HEADING_TAGS.indexOf(next.tagName.toLowerCase()) !== -1) {
            var childLevel = parseInt(next.tagName[1], 10);
            if (!isNaN(childLevel) && childLevel > myLevel && paragraphs <= 1 && hasAnchorLink(next)) {
                return next;
            }
        }
        return null;
    }

    function applySpotlight() {
        if (!spotlightOn) return;

        var allHeadings = Array.prototype.slice.call(document.querySelectorAll(HEADING_SELECTOR)).filter(hasAnchorLink);
        if (allHeadings.length === 0) return;

        var active = findActive(allHeadings);

        if (!active) {
            active = getHashHeading();
        }

        if (!active) return;

        clearSpotlight();

        var sections = [];
        for (var i = 0; i < allHeadings.length; i++) {
            sections.push({
                heading: allHeadings[i],
                elements: collectUntil(allHeadings[i], allHeadings[i + 1] || null)
            });
        }

        var parentHeading = null;
        var activeLevel = parseInt(active.tagName[1], 10);
        if (!isNaN(activeLevel) && activeLevel > 2) {
            parentHeading = getParentHeading(active);
        }

        var firstChild = getFirstChildHeading(active);

        sections.forEach(function(section) {
            var isActive = section.heading === active ||
                           section.heading === parentHeading ||
                           section.heading === firstChild;

            section.elements.forEach(function(el) {
                if (el) el.classList.add(isActive ? 'section-focus' : 'section-dim');
            });
        });
    }

    // --- SCROLL HANDLER ---
    var waiting = false;
    window.addEventListener('scroll', function() {
        if (!waiting) {
            window.requestAnimationFrame(function() {
                applySpotlight();
                waiting = false;
            });
            waiting = true;
        }
    }, { passive: true });

    // --- HASHCHANGE HANDLER ---
    // Docsify/browser handles scrolling instantly via our monkey-patches.
    // We just re-apply spotlight after the jump settles.
    window.addEventListener('hashchange', function() {
        setTimeout(applySpotlight, 50);
    });

    // --- DARK MODE ---
    function isDark() {
        try {
            var url = location.href.toLowerCase();
            if (url.indexOf('dark-mode=on') !== -1 || url.indexOf('dark-mode=true') !== -1) return true;

            var body = document.body.classList;
            var html = document.documentElement.classList;
            if (body.contains('dark') || body.contains('theme-dark') || body.contains('docsify-dark') ||
                html.contains('dark') || html.contains('theme-dark')) return true;

            if (document.body.getAttribute('data-theme') === 'dark' ||
                document.documentElement.getAttribute('data-theme') === 'dark') return true;

            var bg = window.getComputedStyle(document.body).backgroundColor;
            if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
                var rgb = bg.match(/\d+/g);
                if (rgb) {
                    var brightness = (parseInt(rgb[0], 10) * 299 + parseInt(rgb[1], 10) * 587 + parseInt(rgb[2], 10) * 114) / 1000;
                    if (brightness < 80) return true;
                }
            }

            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch (e) {
            return false;
        }
    }

    function updateTheme() {
        try {
            if (isDark()) {
                btn.classList.add('dark-mode');
            } else {
                btn.classList.remove('dark-mode');
            }
        } catch (e) {
            // ignore
        }
    }

    function initSpotlight() {
        try {
            if (!document.getElementById('spotlight-toggle')) {
                document.body.appendChild(btn);
            }
            updateTheme();
            applySpotlight();
        } catch (e) {
            if (typeof console !== 'undefined' && console.warn) console.warn('Spotlight: init failed', e);
        }
    }

    // --- DOCSIFY PLUGIN HOOK ---
    window.$docsify = window.$docsify || {};
    window.$docsify.plugins = (window.$docsify.plugins || []).concat(function(hook, vm) {
        hook.ready(function() {
            initSpotlight();
            // Retry a few times in case Docsify is still settling content
            setTimeout(initSpotlight, 100);
            setTimeout(initSpotlight, 300);
        });

        hook.doneEach(function() {
            initSpotlight();
        });
    });
})();