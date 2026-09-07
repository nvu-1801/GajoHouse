import { PageContainer } from '../components/PageContainer.js';
import { SITE_CONFIG } from '../config/site-config.js';

export function renderPage10ReviewsContact() {
    const bodyHTML = `
    <div class="page-header">
        <div style="font-family:var(--font-script); font-size:2.8rem; color:var(--accent-gold); line-height:1; margin-bottom:2px;">Thank you</div>
        <h2 class="page-title">CẢM ƠN BẠN ĐÃ GHÉ THĂM!</h2>
        <p class="page-desc">Quét mã QR để chia sẻ đánh giá 5 sao cho GAJO's HOUSE trên Google Maps nhé!</p>
    </div>

    <div class="page-main-content" style="align-items:center; text-align:center; justify-content:space-evenly;">
        <div class="star-rating-row" style="color: #FFD700; font-size: 1.2rem; letter-spacing: 4px; margin-bottom: -4px;">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        </div>

        <a href="${SITE_CONFIG.googleMapsUrl}" target="_blank" class="qr-frame" title="Mở vị trí trên Google Maps">
            <img src="${SITE_CONFIG.qrMapsImg}" alt="QR Code 5 Star Review GAJO's HOUSE">
            <span class="qr-tap-hint"><i class="fa-solid fa-up-right-from-square"></i> Mở Google Maps</span>
        </a>

        <div class="contact-info-block thankyou-contact-card">
            <strong>GAJO'S HOUSE • BOUTIQUE HOMESTAY</strong><br>
            <i class="fa-solid fa-location-dot" style="color:var(--accent-gold);"></i> ${SITE_CONFIG.address}<br>
            <i class="fa-solid fa-phone" style="color:var(--accent-gold);"></i> <a href="tel:${SITE_CONFIG.hotline}"><strong>${SITE_CONFIG.hotlineFormatted}</strong></a> &bull; <a href="${SITE_CONFIG.zaloUrl}" target="_blank" style="color:var(--accent-gold); font-weight:700;">Zalo</a>
        </div>
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '11'
    });
}
