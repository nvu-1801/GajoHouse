import { playPaperFlipSound } from './sound-engine.js';

let pageFlip = null;

export function triggerHaptic(durationMs = 15) {
    if (window.navigator && window.navigator.vibrate) {
        try {
            window.navigator.vibrate(durationMs);
        } catch (e) {
            // Silence unsupported vibrate
        }
    }
}

export function getOptimalBookDimensions() {
    const vw = Math.min(window.innerWidth || 360, 1200);
    const vh = Math.min(window.innerHeight || 640, 900);
    const isMobile = vw <= 768;

    let width, height;

    if (isMobile) {
        width = Math.floor(vw * 0.94);
        height = Math.floor(width * 1.42);
        const maxHeight = Math.floor(vh * 0.76);
        if (height > maxHeight) {
            height = maxHeight;
            width = Math.floor(height / 1.42);
        }
    } else {
        width = Math.floor(vw * 0.44);
        if (width > 540) width = 540;
        height = Math.floor(width * 1.414);
        const maxHeight = Math.floor(vh * 0.82);
        if (height > maxHeight) {
            height = maxHeight;
            width = Math.floor(height / 1.414);
        }
    }

    return {
        width: Math.max(width, 280),
        height: Math.max(height, 400),
        isMobile: isMobile
    };
}

export function initFlipbookEngine(containerId, onPageChange) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    const dims = getOptimalBookDimensions();

    const PageFlipLib = window.St ? window.St.PageFlip : (window.PageFlip ? window.PageFlip : null);
    if (!PageFlipLib) {
        console.error('StPageFlip library (page-flip.browser.js) not loaded on window.');
        return null;
    }

    pageFlip = new PageFlipLib(container, {
        width: dims.width,
        height: dims.height,
        size: "fixed",
        minWidth: 280,
        maxWidth: 580,
        minHeight: 400,
        maxHeight: 840,
        drawShadow: true,
        flippingTime: 650,
        usePortrait: dims.isMobile,
        startPage: 0,
        useMouseEvents: true,
        showCover: true,
        mobileScrollSupport: true,
        clickEventForward: true
    });

    // Scoped only to pages inside flipbook container to prevent duplicate print pages loading
    pageFlip.loadFromHTML(container.querySelectorAll('.page'));

    pageFlip.on('flip', (e) => {
        playPaperFlipSound();
        triggerHaptic(15);
        if (onPageChange) {
            onPageChange(e.data, pageFlip.getPageCount());
        }
    });

    pageFlip.on('changeState', (e) => {
        if (e.data === 'flipping') {
            playPaperFlipSound();
        }
    });

    // Resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newDims = getOptimalBookDimensions();
            if (pageFlip && pageFlip.getSettings) {
                pageFlip.update({
                    width: newDims.width,
                    height: newDims.height
                });
            }
        }, 250);
    });

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
            e.preventDefault();
            pageFlip.flipNext();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            e.preventDefault();
            pageFlip.flipPrev();
        } else if (e.key === 'Home') {
            e.preventDefault();
            pageFlip.flip(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            pageFlip.flip(pageFlip.getPageCount() - 1);
        }
    });

    return pageFlip;
}

export function getPageFlipInstance() {
    return pageFlip;
}
