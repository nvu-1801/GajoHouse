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
        <div class="dining-editorial-stack">
            <!-- Card 1: Tiệm Nướng Nhà Gạo -->
            <div class="dining-editorial-card">
                <span class="dining-badge-gold">TIỂU ĐÀ LẠT GIỮA HOÀI NHƠN</span>
                <div class="dining-grid-2">
                    <div class="dining-grid-item">
                        <img src="assets/nhagao-1.jpg" alt="Tiệm Nướng Nhà Gạo View Hoàng Hôn" style="object-position: center 40%;">
                    </div>
                    <div class="dining-grid-item">
                        <img src="assets/nhagao-2.jpg" alt="Bò Tảng Sốt Phô Mai & BBQ" style="object-position: center 50%;">
                    </div>
                </div>
                <div class="dining-card-title">Tiệm Nướng Nhà Gạo</div>
                <div class="dining-card-desc">
                    Không gian sân vườn Vintage ấm cúng với ánh đèn vàng lãng mạn. Thưởng thức tiệc nướng BBQ đậm vị và các đêm nhạc acoustic nhẹ nhàng.
                </div>
                <div class="dining-footer">
                    <a href="https://maps.app.goo.gl/jAWENgZvarDbmG7f6" target="_blank"><i class="fa-solid fa-location-dot"></i> Đ. Trường Sa (~2.6km)</a>
                    <a href="tel:0902286300"><strong><i class="fa-solid fa-phone"></i> 0902 286 300</strong></a>
                </div>
            </div>

            <!-- Card 2: GAJO Thái -->
            <div class="dining-editorial-card">
                <span class="dining-badge-cyan">VIEW HOÀNG HÔN CỰC CHILL</span>
                <div class="dining-grid-2">
                    <div class="dining-grid-item">
                        <img src="assets/dining-nhagao.jpg" alt="GAJO Thái Không Gian Bể Cá" style="object-position: center 35%;">
                    </div>
                    <div class="dining-grid-item">
                        <img src="assets/gajothai-food.jpg" alt="Bàn Tiệc Món Thái Chuẩn Vị" style="object-position: center 50%;">
                    </div>
                </div>
                <div class="dining-card-title">GAJO Thái (Ẩm Thực Chùa Vàng)</div>
                <div class="dining-card-desc">
                    Không gian mở thoáng đãng ôm trọn vẻ đẹp sông nước lúc chạng vạng. Trải nghiệm tinh hoa ẩm thực Thái Lan chuẩn vị tươi ngon.
                </div>
                <div class="dining-footer">
                    <a href="https://maps.google.com" target="_blank"><i class="fa-solid fa-location-dot"></i> 125 Nguyễn Chí Thanh</a>
                    <a href="tel:0902286300"><strong><i class="fa-solid fa-phone"></i> 0902 286 300</strong></a>
                </div>
            </div>
        </div>

        <div class="dining-editorial-perk">
            <strong style="color: var(--accent-gold);"><i class="fa-solid fa-star"></i> Đặc quyền GAJO's HOUSE:</strong> Báo với nhân viên bạn là khách lưu trú homestay để được ưu tiên sắp xếp vị trí bàn đẹp nhất!
        </div>
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '06'
    });
}
