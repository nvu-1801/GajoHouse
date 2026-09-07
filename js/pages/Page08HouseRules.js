import { PageContainer } from '../components/PageContainer.js';
import { PageHeader } from '../components/PageHeader.js';
import { InfoCardList } from '../components/InfoCard.js';

export function renderPage08HouseRules() {
    const headerHTML = PageHeader({
        eyebrow: "HOUSE RULES",
        title: "Mẹo Nhỏ Cho Kỳ Nghỉ",
        desc: "Gìn giữ không gian tĩnh lặng và an yên"
    });

    const rules = [
        { num: 1, title: "Giữ yên tĩnh sau 22:00", desc: "Xin vui lòng giảm âm lượng để tất cả khách đều ngủ ngon và tận hưởng không gian an tĩnh." },
        { num: 2, title: "Tiết kiệm điện & máy lạnh", desc: "Tắt điều hòa và các thiết bị điện khi ra khỏi phòng để giữ an toàn và bảo vệ môi trường." },
        { num: 3, title: "Không hút thuốc trong phòng", desc: "Khu vực hút thuốc riêng biệt được bố trí tại sân vườn thoáng mát ngoài trời." },
        { num: 4, title: "Liên hệ lễ tân khi cần hỗ trợ", desc: "Hotline / Zalo: <strong>0902 286 300</strong> — Luôn sẵn sàng phục vụ bạn 24/7." }
    ];

    const bodyHTML = `
    ${headerHTML}
    <div class="page-main-content">
        ${InfoCardList({ items: rules })}
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '09'
    });
}
