import { PageContainer } from '../components/PageContainer.js';
import { SITE_CONFIG } from '../config/site-config.js';

export function renderPageCoverFront() {
    const bodyHTML = `
    <div class="cover-inner">
        <img src="${SITE_CONFIG.logoGoldImg}" alt="GAJO'S HOUSE Logo" class="cover-main-logo">
        <div class="cover-subtitle">${SITE_CONFIG.subTitle}</div>
        <div class="cover-script">${SITE_CONFIG.tagline}</div>
        <div class="cover-location">
            <i class="fa-solid fa-location-dot" style="color:var(--accent-gold); margin-right:4px;"></i> ${SITE_CONFIG.locationName}
        </div>
        <div class="cover-hint">
            <i class="fa-solid fa-hand-point-right"></i> Nhấn vào mép hoặc vuốt để mở sách
        </div>
    </div>`;

    return PageContainer({
        density: 'hard',
        extraClass: 'page-cover-top',
        bodyHTML: bodyHTML
    });
}
