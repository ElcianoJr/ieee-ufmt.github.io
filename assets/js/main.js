/* Ramo Estudantil IEEE UFMT — comportamento da página (sem dependências) */
(() => {
    'use strict';

    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
    const toggleIcon = toggle.querySelector('use');

    // Ano no rodapé
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Menu do celular
    const setMenu = (open) => {
        menu.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        toggleIcon.setAttribute('href', open ? '#i-x' : '#i-menu');
    };

    toggle.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('is-open')) {
            setMenu(false);
            toggle.focus();
        }
    });
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
        if (e.matches) setMenu(false);
    });

    // Sombra no cabeçalho ao rolar + limpa o destaque do menu quando volta ao topo
    const links = [...menu.querySelectorAll('a[href^="#"]')];
    const onScroll = () => {
        const scrolled = window.scrollY > 20;
        header.classList.toggle('is-scrolled', scrolled);
        if (window.scrollY < 120) links.forEach((l) => l.removeAttribute('aria-current'));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Destaca no menu a seção que está na tela
    if ('IntersectionObserver' in window) {
        const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const link = byId.get(entry.target.id);
                if (!link || !entry.isIntersecting || window.scrollY < 120) return;
                links.forEach((l) => l.removeAttribute('aria-current'));
                link.setAttribute('aria-current', 'location');
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        byId.forEach((_, id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });
    }
})();
