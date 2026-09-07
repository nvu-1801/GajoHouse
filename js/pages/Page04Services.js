import { PageContainer } from '../components/PageContainer.js';
import { PageHeader } from '../components/PageHeader.js';

export function renderPage04Services() {
    const headerHTML = PageHeader({
        eyebrow: "Thoughtful Services",
        title: "Tiện Nghi Chu Đáo",
        desc: "Chăm sóc từng trải nghiệm nghỉ ngơi nhỏ nhất"
    });

    const bodyHTML = `
    ${headerHTML}
    <div class="page-main-content">
        <div class="amenity-grid-luxury">
            <div class="amenity-item-box">
                <i class="fa-solid fa-broom"></i>
                <div>
                    <h5>Dọn Spotless</h5>
                    <span>Sạch chuẩn 5 sao</span>
                </div>
            </div>
            <div class="amenity-item-box">
                <i class="fa-regular fa-snowflake"></i>
                <div>
                    <h5>Điều Hòa Êm</h5>
                    <span>Inverter êm ái</span>
                </div>
            </div>
            <div class="amenity-item-box">
                <i class="fa-solid fa-shower"></i>
                <div>
                    <h5>Nước Nóng</h5>
                    <span>Hệ trung tâm</span>
                </div>
            </div>
            <div class="amenity-item-box">
                <i class="fa-solid fa-motorcycle"></i>
                <div>
                    <h5>Thuê Xe Máy</h5>
                    <span>Xe mới tiết kiệm</span>
                </div>
            </div>
            <div class="amenity-item-box">
                <i class="fa-solid fa-shirt"></i>
                <div>
                    <h5>Giặt Ủi Nhanh</h5>
                    <span>Lấy trong ngày</span>
                </div>
            </div>
            <div class="amenity-item-box">
                <i class="fa-solid fa-shield-halved"></i>
                <div>
                    <h5>Bãi Xe An Toàn</h5>
                    <span>Camera an ninh</span>
                </div>
            </div>
        </div>

        <div class="amenity-quote-bottom">
            <span style="font-family:var(--font-script); font-size:1.4rem; color:var(--accent-gold); display:block;">"Feel like home"</span>
            <p style="font-size:0.72rem; color:#666; margin:0;">Chủ nhà luôn sẵn sàng hỗ trợ bạn 24/7 với tất cả sự tận tâm.</p>
        </div>
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '05'
    });
}
