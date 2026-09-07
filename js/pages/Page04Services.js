import { PageContainer } from '../components/PageContainer.js';
import { PageHeader } from '../components/PageHeader.js';

export function renderPage04Services() {
    const headerHTML = PageHeader({
        eyebrow: "THOUGHTFUL SERVICES",
        title: "Tiện Nghi Chu Đáo",
        desc: "Chăm sóc từng trải nghiệm nghỉ ngơi nhỏ nhất"
    });

    const bodyHTML = `
    ${headerHTML}
    <div class="page-main-content">
        <div class="amenity-editorial-grid">
            <div class="amenity-editorial-item">
                <i class="fa-solid fa-broom amenity-editorial-icon"></i>
                <div>
                    <div class="amenity-editorial-title">Dọn Spotless</div>
                    <div class="amenity-editorial-sub">Sạch chuẩn 5 sao</div>
                </div>
            </div>
            <div class="amenity-editorial-item">
                <i class="fa-regular fa-snowflake amenity-editorial-icon"></i>
                <div>
                    <div class="amenity-editorial-title">Điều Hòa Êm</div>
                    <div class="amenity-editorial-sub">Inverter êm ái</div>
                </div>
            </div>
            <div class="amenity-editorial-item">
                <i class="fa-solid fa-shower amenity-editorial-icon"></i>
                <div>
                    <div class="amenity-editorial-title">Nước Nóng</div>
                    <div class="amenity-editorial-sub">Hệ trung tâm</div>
                </div>
            </div>
            <div class="amenity-editorial-item">
                <i class="fa-solid fa-motorcycle amenity-editorial-icon"></i>
                <div>
                    <div class="amenity-editorial-title">Thuê Xe Máy</div>
                    <div class="amenity-editorial-sub">Xe mới tiết kiệm</div>
                </div>
            </div>
            <div class="amenity-editorial-item">
                <i class="fa-solid fa-shirt amenity-editorial-icon"></i>
                <div>
                    <div class="amenity-editorial-title">Giặt Ủi Nhanh</div>
                    <div class="amenity-editorial-sub">Lấy trong ngày</div>
                </div>
            </div>
            <div class="amenity-editorial-item">
                <i class="fa-solid fa-shield-halved amenity-editorial-icon"></i>
                <div>
                    <div class="amenity-editorial-title">Bãi Xe An Toàn</div>
                    <div class="amenity-editorial-sub">Camera an ninh</div>
                </div>
            </div>
        </div>

        <div class="amenity-editorial-quote">
            <span class="quote-script">"Feel like home"</span>
            <p>Chủ nhà luôn sẵn sàng hỗ trợ bạn 24/7 với tất cả sự tận tâm.</p>
        </div>
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '05'
    });
}
