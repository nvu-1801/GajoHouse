import { PageContainer } from '../components/PageContainer.js';
import { PageHeader } from '../components/PageHeader.js';

export function renderPage06Coffee() {
    const headerHTML = PageHeader({
        eyebrow: "COFFEE & CHILL",
        title: "Góc Cà Phê & Thư Giãn",
        desc: "Những điểm đến bình yên không thể bỏ lỡ tại Hoài Nhơn"
    });

    const bodyHTML = `
    ${headerHTML}
    <div class="page-main-content">
        <div class="dining-stack">
            <!-- Card 1: Gạo Coffee -->
            <div class="dining-card">
                <span class="dining-badge-navy">CHILL GIÓ BIỂN - NHẠC ACOUSTIC</span>
                <div class="dining-grid-2">
                    <div class="dining-grid-item">
                        <img src="assets/cafe-gaocoffee.jpg" alt="Gạo Coffee Seaside Acoustic" style="object-position: center 55%;">
                    </div>
                    <div class="dining-grid-item">
                        <img src="assets/gaocoffee-matcha.jpg" alt="Uji Matcha Latte & Chổi Chasen" style="object-position: center 50%;">
                    </div>
                </div>
                <h3 class="dining-card-title">Gạo Coffee (Seaside Acoustic)</h3>
                <p class="dining-card-desc">
                    Không gian mở sát biển lãng mạn, đón hoàng hôn buông và gió mát. Thưởng thức những đêm nhạc acoustic mộc mạc trên bãi cát.
                </p>
                <div class="dining-footer">
                    <a href="https://maps.google.com" target="_blank"><i class="fa-solid fa-location-dot"></i> Đ. Trường Sa, Thạnh Xuân Đông</a>
                    <a href="tel:0902286300"><strong><i class="fa-solid fa-phone"></i> 0902 286 300</strong></a>
                </div>
            </div>

            <!-- Card 2: Bonjour Café -->
            <div class="dining-card">
                <span class="dining-badge-wood">GÓC NHỎ VINTAGE 1996</span>
                <div class="dining-grid-2">
                    <div class="dining-grid-item">
                        <img src="assets/cafe-bonjour.jpg" alt="Bonjour Café Reply 1996" style="object-position: center top;">
                    </div>
                    <div class="dining-grid-item">
                        <img src="assets/bonjour-donuts.jpg" alt="Matcha Oreo & Caramel Brûlée" style="object-position: center bottom;">
                    </div>
                </div>
                <h3 class="dining-card-title">Bonjour Café (Vintage 1996)</h3>
                <p class="dining-card-desc">
                    Mang đậm âm hưởng hoài cổ với thiết kế gỗ mộc mạc. Chốn dừng chân yên tĩnh lý tưởng để nhâm nhi ly cà phê sáng gần homestay.
                </p>
                <div class="dining-footer">
                    <a href="https://maps.google.com" target="_blank"><i class="fa-solid fa-location-dot"></i> 54-56 Phan Trọng Tuệ, Hoài Nhơn Đông</a>
                    <a href="tel:0965470833"><strong><i class="fa-solid fa-phone"></i> 0965 470 833</strong></a>
                </div>
            </div>
        </div>

        <div class="dining-perk-box">
            <strong style="color: var(--accent-gold);"><i class="fa-solid fa-lightbulb"></i> Mẹo nhỏ từ GAJO's HOUSE:</strong> Bonjour Café nằm ngay trên đường Phan Trọng Tuệ, rất thuận tiện để đi bộ từ homestay ra thưởng thức cà phê sáng!
            <div style="margin-top: 2px; color: #777;">
                <strong>Gợi ý:</strong> Thử món trà Matcha Uji tại Gạo Coffee vào buổi chiều hoàng hôn.
            </div>
        </div>
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '07'
    });
}
