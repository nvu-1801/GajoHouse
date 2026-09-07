import { FLIPBOOK_PAGES, renderAllPagesHTML, renderBookletPrintHTML, renderStandardPrintHTML } from './pages-registry.js';
import { renderTopHeader, renderBottomToolbar, renderThumbnailDrawer } from './components/Toolbar.js';
import { renderModals } from './components/Modals.js';
import { initFlipbookEngine, triggerHaptic } from './core/flipbook-engine.js';
import { toggleSoundState, getSoundState } from './core/sound-engine.js';
import { showToast } from './core/toast-manager.js';
import { SITE_CONFIG } from './config/site-config.js';

document.addEventListener('DOMContentLoaded', () => {
    const stageContainer = document.querySelector('.stage-container');
    const flipbookEl = document.getElementById('flipbook');
    const appShell = document.getElementById('app-shell') || document.body;

    if (!flipbookEl || !stageContainer) {
        console.error('Core containers missing in flipbook.html');
        return;
    }

    // 1. Inject Top Header & Action Bar
    const headerWrapper = document.createElement('div');
    headerWrapper.innerHTML = renderTopHeader();
    stageContainer.insertBefore(headerWrapper, stageContainer.firstChild);

    // 2. Render All Pages inside #flipbook
    flipbookEl.innerHTML = renderAllPagesHTML();

    // 3. Inject Bottom Toolbar, Thumbnail Drawer & Modals
    const uiWrapper = document.createElement('div');
    uiWrapper.innerHTML = renderBottomToolbar() + renderThumbnailDrawer(FLIPBOOK_PAGES) + renderModals();
    appShell.appendChild(uiWrapper);

    // 4. Inject Print Containers for Booklet & Standard Printing
    const printWrapper = document.createElement('div');
    printWrapper.innerHTML = renderBookletPrintHTML() + renderStandardPrintHTML();
    appShell.appendChild(printWrapper);

    // 5. Initialize Flipbook Engine
    const pageFlip = initFlipbookEngine('flipbook', (pageIndex, totalPages) => {
        updateUIOnPageFlip(pageIndex, totalPages);
    });

    // Elements
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');
    const thumbDrawer = document.getElementById('thumbDrawer');
    const thumbToggleBtn = document.getElementById('thumbToggleBtn');
    const soundToggleBtn = document.getElementById('soundToggleBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const exportBtn = document.getElementById('exportBtn');
    const bookletQuickBtn = document.getElementById('bookletQuickBtn');
    const topBookletBtn = document.getElementById('topBookletBtn');
    const topShareBtn = document.getElementById('topShareBtn');

    const exportModal = document.getElementById('exportModal');
    const bookletModal = document.getElementById('bookletModal');
    const closeExportModal = document.getElementById('closeExportModal');
    const closeBookletModal = document.getElementById('closeBookletModal');

    function updateUIOnPageFlip(pageIndex, totalPages) {
        if (pageIndicator) {
            const currentFormatted = String(pageIndex + 1).padStart(2, '0');
            const totalFormatted = String(totalPages).padStart(2, '0');
            pageIndicator.innerText = `${currentFormatted} / ${totalFormatted}`;
        }
        if (thumbDrawer) {
            document.querySelectorAll('.thumb-item').forEach((item, idx) => {
                item.classList.toggle('active', idx === pageIndex);
            });
        }
    }

    // WiFi Copy Binding
    const wifiCopyRow = document.getElementById('wifiCopyRow');
    if (wifiCopyRow) {
        wifiCopyRow.addEventListener('click', () => {
            copyText(SITE_CONFIG.wifi.pass, `Đã sao chép mật khẩu WiFi: ${SITE_CONFIG.wifi.pass}`);
        });
    }

    // Event Listeners for Toolbar Controls
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            triggerHaptic(15);
            if (pageFlip) pageFlip.flipPrev();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            triggerHaptic(15);
            if (pageFlip) pageFlip.flipNext();
        });
    }

    if (thumbToggleBtn && thumbDrawer) {
        thumbToggleBtn.addEventListener('click', (e) => {
            triggerHaptic(15);
            e.stopPropagation();
            thumbDrawer.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!thumbDrawer.contains(e.target) && e.target !== thumbToggleBtn) {
                thumbDrawer.classList.remove('active');
            }
        });
    }

    // Thumbnail Click Navigation
    document.addEventListener('click', (e) => {
        const item = e.target.closest('.thumb-item');
        if (item && item.dataset.pageIndex !== undefined) {
            const index = parseInt(item.dataset.pageIndex, 10);
            goToPage(index);
        }
    });

    // Sound Toggle
    if (soundToggleBtn) {
        soundToggleBtn.addEventListener('click', () => {
            const state = toggleSoundState();
            soundToggleBtn.innerHTML = state ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
            showToast(`Âm thanh lật sách: ${state ? 'BẬT' : 'TẮT'}`);
            triggerHaptic(25);
        });
    }

    // Fullscreen Toggle
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            triggerHaptic(20);
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
                fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
            } else {
                if (document.exitFullscreen) document.exitFullscreen();
                fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
            }
        });
    }

    // Modal Triggers
    if (exportBtn) exportBtn.addEventListener('click', openExportModal);
    if (bookletQuickBtn) bookletQuickBtn.addEventListener('click', openBookletModal);
    if (topBookletBtn) topBookletBtn.addEventListener('click', openBookletModal);
    if (topShareBtn) topShareBtn.addEventListener('click', triggerShare);

    if (closeExportModal) closeExportModal.addEventListener('click', closeAllModals);
    if (closeBookletModal) closeBookletModal.addEventListener('click', closeAllModals);

    if (exportModal) {
        exportModal.addEventListener('click', (e) => {
            if (e.target === exportModal) closeAllModals();
        });
    }

    if (bookletModal) {
        bookletModal.addEventListener('click', (e) => {
            if (e.target === bookletModal) closeAllModals();
        });
    }

    // Modal Options Actions
    const modalOptBooklet = document.getElementById('modalOptBooklet');
    const modalOptShare = document.getElementById('modalOptShare');
    const modalOptPrintStandard = document.getElementById('modalOptPrintStandard');
    const confirmPrintBookletBtn = document.getElementById('confirmPrintBookletBtn');

    if (modalOptBooklet) modalOptBooklet.addEventListener('click', openBookletModal);
    if (modalOptShare) modalOptShare.addEventListener('click', triggerShare);
    if (modalOptPrintStandard) modalOptPrintStandard.addEventListener('click', triggerPrintStandardPDF);
    if (confirmPrintBookletBtn) confirmPrintBookletBtn.addEventListener('click', triggerPrintBooklet);

    // Global Functions for inline onclick handlers & modal operations
    window.goToPage = function(index) {
        triggerHaptic(20);
        if (pageFlip) pageFlip.flip(index);
        if (thumbDrawer) thumbDrawer.classList.remove('active');
    };

    window.copyText = function(text, successMsg) {
        triggerHaptic(15);
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMsg || 'Đã sao chép!');
        }).catch(() => {
            showToast(text);
        });
    };

    function openExportModal() {
        triggerHaptic(20);
        closeAllModals();
        if (exportModal) exportModal.classList.add('active');
    }

    function openBookletModal() {
        triggerHaptic(20);
        closeAllModals();
        if (bookletModal) bookletModal.classList.add('active');
    }

    function closeAllModals() {
        if (exportModal) exportModal.classList.remove('active');
        if (bookletModal) bookletModal.classList.remove('active');
    }

    window.openBookletModal = openBookletModal;
    window.closeAllModals = closeAllModals;

    function triggerShare() {
        triggerHaptic(20);
        if (navigator.share) {
            navigator.share({
                title: "GAJO'S HOUSE - 3D Catalogue",
                text: "Khám phá không gian lưu trú Japandi & Cẩm nang Hoài Nhơn Đông, Gia Lai cùng GAJO's HOUSE!",
                url: window.location.href
            }).catch(() => {});
        } else {
            window.copyText(window.location.href, 'Đã sao chép liên kết Catalogue!');
        }
    }
    window.triggerShare = triggerShare;

    function triggerPrintBooklet() {
        closeAllModals();
        document.body.classList.remove('print-mode-standard');
        document.body.classList.add('print-mode-booklet');
        setTimeout(() => {
            window.print();
        }, 150);
    }
    window.triggerPrintBooklet = triggerPrintBooklet;

    function triggerPrintStandardPDF() {
        closeAllModals();
        document.body.classList.remove('print-mode-booklet');
        document.body.classList.add('print-mode-standard');
        setTimeout(() => {
            window.print();
        }, 150);
    }
    window.triggerPrintStandardPDF = triggerPrintStandardPDF;

    // Reset print classes after print dialog closes
    window.addEventListener('afterprint', () => {
        document.body.classList.remove('print-mode-booklet', 'print-mode-standard');
    });
});
