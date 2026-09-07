import { SITE_CONFIG } from '../config/site-config.js';

/**
 * Component Toolbar - Renders Top Header & Bottom Control Bar
 */
export function renderTopHeader() {
    return `
    <div class="brand-header">
        <img src="${SITE_CONFIG.logoGoldImg}" alt="GAJO'S HOUSE Logo" class="brand-logo-img">
        <p>3D Interactive Catalogue &bull; Hoài Nhơn Đông, Gia Lai</p>
    </div>
    <div class="top-action-bar">
        <a href="index.html" class="top-btn-pill" style="border-color: var(--accent-gold); color: #fff; background: rgba(197, 160, 89, 0.25);"><i class="fa-solid fa-arrow-left"></i> Về Trang Chủ</a>
        <button class="top-btn-pill" id="topBookletBtn"><i class="fa-solid fa-book-open"></i> In Booklet 2 Mặt (1-12, 2-11...)</button>
        <button class="top-btn-pill" id="topShareBtn"><i class="fa-solid fa-share-nodes"></i> Chia Sẻ</button>
        <a href="https://zalo.me/0902286300" target="_blank" class="top-btn-pill"><i class="fa-solid fa-comments"></i> Đặt Phòng Zalo</a>
        <a href="tel:0902286300" class="top-btn-pill"><i class="fa-solid fa-phone"></i> 0902 286 300</a>
    </div>`;
}

export function renderBottomToolbar() {
    return `
    <div class="bottom-nav-bar">
        <button class="nav-btn" id="prevBtn" title="Trang trước (Phím Mũi tên Trái)"><i class="fa-solid fa-chevron-left"></i></button>
        <div class="nav-page-indicator" id="pageIndicator">01 / 12</div>
        <button class="nav-btn" id="nextBtn" title="Trang sau (Phím Mũi tên Phải)"><i class="fa-solid fa-chevron-right"></i></button>
        <div class="divider-vert"></div>
        <button class="nav-btn btn-booklet" id="bookletQuickBtn" title="In / Tải Booklet A4 2 Mặt"><i class="fa-solid fa-book-open"></i> Booklet</button>
        <button class="nav-btn" id="thumbToggleBtn" title="Xem tất cả trang"><i class="fa-solid fa-table-cells-large"></i></button>
        <button class="nav-btn" id="soundToggleBtn" title="Bật/Tắt âm thanh lật sách"><i class="fa-solid fa-volume-high"></i></button>
        <button class="nav-btn" id="fullscreenBtn" title="Toàn màn hình"><i class="fa-solid fa-expand"></i></button>
        <div class="divider-vert"></div>
        <button class="nav-btn btn-highlight" id="exportBtn" title="Tải về &amp; Menu Chia sẻ"><i class="fa-solid fa-cloud-arrow-down"></i></button>
    </div>`;
}

export function renderThumbnailDrawer(pages = []) {
    return `
    <div class="thumbnail-drawer" id="thumbDrawer">
        ${pages.map((p, idx) => `
            <div class="thumb-item ${idx === 0 ? 'active' : ''}" data-page-index="${idx}">
                <div class="thumb-box" ${idx === 0 || idx === pages.length - 1 ? 'style="background:#1E1B18; color:var(--accent-gold);"' : ''}>
                    ${String(idx + 1).padStart(2, '0')}
                </div>
                <div class="thumb-label">${p.shortLabel}</div>
            </div>
        `).join('')}
    </div>`;
}
