import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

type SliderConfig = {
    selector: string;
    options: SwiperOptions;
};

const initSlider = ({ selector, options }: SliderConfig) => {
    if (!document.querySelector(selector)) return;
    return new Swiper(selector, options);
};

const sliders: SliderConfig[] = [
    {
        selector: '.ipl__swiper',
        options: {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            navigation: {
                nextEl: '.ipl__swiper-controls .swiper-button-next',
                prevEl: '.ipl__swiper-controls .swiper-button-prev',
            },
            pagination: {
                el: '.ipl__swiper-controls .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        },
    },
    {
        selector: '.live__swiper',
        options: {
            modules: [Navigation],
            slidesPerView: 1.2,
            spaceBetween: 20,
            loop: false,
            navigation: {
                nextEl: '.live__nav-btn--next',
                prevEl: '.live__nav-btn--prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 2.85,
                },
            },
        },
    },
    {
        selector: '.reviews__swiper',
        options: {
            modules: [Navigation],
            slidesPerView: 1.25,
            spaceBetween: 25,
            loop: false,
            navigation: {
                nextEl: '.reviews__nav-btn--next',
                prevEl: '.reviews__nav-btn--prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 1.5,
                },
            },
        },
    },
    {
        selector: '.toc__swiper',
        options: {
            modules: [],
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: false,
        },
    },
    {
        selector: '.app-download__swiper',
        options: {
            modules: [Grid],
            slidesPerView: 1.3,
            spaceBetween: 10,
            loop: false,
            grid: {
                rows: 2,
                fill: 'row',
            },
        },
    },
];

const initMobileMenu = () => {
    const header = document.querySelector<HTMLElement>('.header');
    const burger = document.querySelector<HTMLButtonElement>('.header__burger');
    const menu = document.querySelector<HTMLElement>('.header-menu');

    if (!header || !burger || !menu) return;

    const openMenu = () => {
        header.classList.add('header--menu-open');
        burger.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        header.classList.remove('header--menu-open');
        burger.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    burger.addEventListener('click', () => {
        const isOpen = header.classList.contains('header--menu-open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    const closeButton = document.querySelector<HTMLButtonElement>('.header-menu__close');
    if (closeButton) {
        closeButton.addEventListener('click', closeMenu);
    }

    menu.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.closest('a')) {
            closeMenu();
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    sliders.forEach(initSlider);
    initMobileMenu();
});
