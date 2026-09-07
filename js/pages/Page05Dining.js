import { PageContainer } from '../components/PageContainer.js';
import { PageHeader } from '../components/PageHeader.js';

export function renderPage05Dining() {
    const headerHTML = PageHeader({
        eyebrow: "MUST-TRY DINING",
        title: "Hệ Sinh Thái Ẩm Thực GAJO",
        desc: "Gợi ý ẩm thực đặc quyền dành riêng cho khách lưu trú"
    });

    const bodyHTML = `
    ${headerHTML}
    <div class="page-main-content">
        <div class="dining-stack">
            <!-- Card 1: Tiệm Nướng Nhà Gạo -->
            <div class="dining-card">
                <span class="dining-badge-gold">TIỂU ĐÀ LẠT GIỮA HOÀI NHƠN</span>
                <div class="dining-grid-2">
                    <div class="dining-grid-item">
                        <img src="assets/nhagao-1.jpg" alt="Tiệm Nướng Nhà Gạo View Hoàng Hôn" style="object-position: center 40%;">
                    </div>
                    <div class="dining-grid-item">
                        <img src="assets/nhagao-2.jpg" alt="Bò Tảng Sốt Phô Mai & BBQ" style="object-position: center 50%;">
                    </div>
                </div>
                <h3 class="dining-card-title">Tiệm Nướng Nhà Gạo</h3>
                <p class="dining-card-desc">
                    Không gian sân vườn Vintage ấm cúng với ánh đèn vàng lãng mạn. Nơi thưởng thức tiệc nướng BBQ đậm vị và các đêm nhạc acoustic nhẹ nhàng.
                </p>
                <div class="dining-footer">
                    <a href="https://maps.app.goo.gl/jAWENgZvarDbmG7f6" target="_blank"><i class="fa-solid fa-location-dot"></i> Đ. Trường Sa, Thạnh Xuân Đông (~2.6km)</a>
                    <a href="tel:0902286300"><strong><i class="fa-solid fa-phone"></i> 0902 286 300</strong></a>
                </div>
            </div>

            <!-- Card 2: GAJO Thái -->
            <div class="dining-card">
                <span class="dining-badge-cyan">VIEW HOÀNG HÔN CỰC CHILL</span>
                <div class="dining-grid-2">
                    <div class="dining-grid-item">
                        <img src="assets/dining-nhagao.jpg" alt="GAJO Thái Không Gian Bể Cá" style="object-position: center 35%;">
                    </div>
                    <div class="dining-grid-item">
                        <img src="assets/gajothai-food.jpg" alt="Bàn Tiệc Món Thái Chuẩn Vị" style="object-position: center 50%;">
                    </div>
                </div>
                <h3 class="dining-card-title">GAJO Thái</h3>
                <p class="dining-card-desc">
                    Không gian mở thoáng đãng ôm trọn vẻ đẹp sông nước lúc chạng vạng. Trải nghiệm tinh hoa ẩm thực Thái Lan chuẩn vị giữa cảnh sắc thiên nhiên tuyệt đẹp.
                </p>
                <div class="dining-footer">
                    <a href="https://maps.google.com" target="_blank"><i class="fa-solid fa-location-dot"></i> 125 Nguyễn Chí Thanh, Hoài Nhơn Bắc</a>
                    <a href="tel:0902286300"><strong><i class="fa-solid fa-phone"></i> 0902 286 300</strong></a>
                </div>
            </div>
        </div>

        <div class="dining-perk-box">
            <strong style="color: var(--accent-gold);"><i class="fa-solid fa-star"></i> Đặc quyền GAJO's HOUSE:</strong> Vui lòng báo lễ tân/nhân viên quán bạn là khách lưu trú tại homestay để được hỗ trợ đặt bàn vị trí đẹp nhất!
            <div style="margin-top: 3px; color: #777;">
                <strong>Quán lân cận:</strong> Coffee Gạo, Bonjour Cafe, Quán A Mãi.
            </div>
        </div>
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '06'
    });
}
