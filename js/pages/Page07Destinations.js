import { PageContainer } from '../components/PageContainer.js';
import { PageHeader } from '../components/PageHeader.js';
import { DestinationCard } from '../components/DestinationCard.js';
import { DESTINATIONS_DATA } from '../config/destinations-data.js';

export function renderPage07Destinations() {
    const headerHTML = PageHeader({
        eyebrow: "LOCAL EXPERIENCES",
        title: "8 Điểm Đến Ấn Tượng Quanh GAJO's HOUSE",
        desc: "Hành trình khám phá Hoài Nhơn, An Lão và các danh thắng lân cận",
        extraClass: "page-header-destinations"
    });

    const bodyHTML = `
    ${headerHTML}
    <div class="page-main-content">
        <div class="exp-grid-flip">
            ${DESTINATIONS_DATA.map(item => DestinationCard(item)).join('')}
        </div>

        <div style="padding-top:6px; border-top:1px solid rgba(184, 139, 74, 0.2); font-size:0.65rem; color:#68645E; text-align:center; margin-top:auto; flex-shrink:0; font-style:italic; font-family:var(--font-serif);">
            <i class="fa-solid fa-compass" style="color:var(--accent-gold); margin-right:4px;"></i> Lễ tân hỗ trợ tư vấn lộ trình &amp; thuê xe máy đời mới khám phá các điểm đến.
        </div>
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '08'
    });
}
