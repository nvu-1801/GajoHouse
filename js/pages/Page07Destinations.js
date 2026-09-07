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

        <div style="background:var(--bg-white); padding:5px 8px; border-radius:6px; border:1px solid rgba(197, 160, 89, 0.2); font-size:0.6rem; color:#555; text-align:center; margin-top:4px; flex-shrink:0;">
            <i class="fa-solid fa-compass" style="color:var(--accent-gold); margin-right:3px;"></i> <em>Lễ tân hỗ trợ tư vấn lộ trình &amp; thuê xe máy đời mới khám phá các điểm đến.</em>
        </div>
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '08'
    });
}
