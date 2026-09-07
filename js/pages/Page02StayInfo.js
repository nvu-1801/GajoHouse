import { PageContainer } from '../components/PageContainer.js';
import { PageHeader } from '../components/PageHeader.js';
import { SITE_CONFIG } from '../config/site-config.js';

export function renderPage02StayInfo() {
    const headerHTML = PageHeader({
        eyebrow: "Stay Information",
        title: "Nhận Phòng & WiFi",
        desc: "Thời gian lưu trú & kết nối internet tốc độ cao"
    });

    const bodyHTML = `
    ${headerHTML}
    <div class="page-main-content">
        <div class="schedule-grid">
            <div class="schedule-card">
                <h4>CHECK IN</h4>
                <div class="time">${SITE_CONFIG.schedule.checkIn}</div>
                <span style="font-size:0.72rem; color:#777;">${SITE_CONFIG.schedule.checkInSub}</span>
            </div>
            <div class="schedule-card">
                <h4>CHECK OUT</h4>
                <div class="time">${SITE_CONFIG.schedule.checkOut}</div>
                <span style="font-size:0.72rem; color:#777;">${SITE_CONFIG.schedule.checkOutSub}</span>
            </div>
        </div>

        <div class="wifi-luxury-box">
            <i class="fa-solid fa-wifi wifi-icon-main"></i>
            <h4 style="font-family:var(--font-serif); font-size:1.15rem; color:#FFF; margin-bottom:3px;">WiFi Tốc Độ Cao</h4>
            <p style="font-size:0.72rem; color:#BBB; margin-bottom:8px;">Phủ sóng mạnh mẽ toàn bộ khuôn viên</p>

            <div class="wifi-row">
                <span>Tên Mạng:</span>
                <strong>${SITE_CONFIG.wifi.ssid}</strong>
            </div>
            <div class="wifi-row clickable" id="wifiCopyRow" title="Nhấn để sao chép mật khẩu">
                <span>Mật Khẩu:</span>
                <strong style="display:flex; align-items:center; gap:6px;">
                    <span id="wifiPassVal">${SITE_CONFIG.wifi.pass}</span>
                    <i class="fa-regular fa-copy" style="font-size:0.85rem; color:var(--accent-gold);"></i>
                </strong>
            </div>
            <div style="font-size:0.66rem; color:var(--accent-gold-light); margin-top:6px; opacity:0.85;">
                <i class="fa-regular fa-hand-pointer"></i> Chạm vào mật khẩu để sao chép
            </div>
        </div>
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '03'
    });
}
