import { PageContainer } from '../components/PageContainer.js';
import { SITE_CONFIG } from '../config/site-config.js';

export function renderPageCoverBack() {
    const bodyHTML = `
    <div class="cover-inner">
        <img src="${SITE_CONFIG.logoGoldImg}" alt="GAJO'S HOUSE Logo" class="cover-main-logo" style="max-width: 180px;">
        <div class="cover-script" style="font-size: 2.1rem; color: var(--accent-gold); margin-top: 12px;">Stay simple.</div>
        <div class="cover-script" style="font-size: 2.1rem; color: #FFF; margin-top:-6px;">live slow, feel home.</div>
        <div class="cover-location" style="margin-top: 30px;">
            HẸN GẶP LẠI BẠN TẠI HOÀI NHƠN • BÌNH ĐỊNH
        </div>
    </div>`;

    return PageContainer({
        density: 'hard',
        extraClass: 'page-cover-bottom',
        bodyHTML: bodyHTML
    });
}
