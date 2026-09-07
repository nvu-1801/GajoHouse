import { PageContainer } from '../components/PageContainer.js';
import { PageHeader } from '../components/PageHeader.js';
import { SITE_CONFIG } from '../config/site-config.js';

export function renderPage02StayInfo() {
    const headerHTML = PageHeader({
        eyebrow: "STAY INFORMATION",
        title: "Nhận Phòng & WiFi",
        desc: "Thời gian lưu trú & kết nối internet tốc độ cao"
    });

    const bodyHTML = `
    ${headerHTML}
    <div class="page-main-content">
        <div class="schedule-grid">
            <div class="schedule-card">
                <div class="schedule-icon-badge">
                    <i class="fa-solid fa-clock"></i>
                </div>
                <h4>CHECK IN</h4>
                <div class="time">${SITE_CONFIG.schedule.checkIn}</div>
                <span>${SITE_CONFIG.schedule.checkInSub}</span>
            </div>
            <div class="schedule-card">
                <div class="schedule-icon-badge">
                    <i class="fa-solid fa-key"></i>
                </div>
                <h4>CHECK OUT</h4>
                <div class="time">${SITE_CONFIG.schedule.checkOut}</div>
                <span>${SITE_CONFIG.schedule.checkOutSub}</span>
            </div>
        </div>

        <div class="wifi-luxury-card">
            <div class="wifi-icon-badge">
                <i class="fa-solid fa-wifi"></i>
            </div>
            <h4>WiFi Tốc Độ Cao</h4>
            <p>Phủ sóng mạnh mẽ toàn bộ khuôn viên homestay</p>

            <div class="wifi-pill-row">
                <span>Tên Mạng:</span>
                <strong>${SITE_CONFIG.wifi.ssid}</strong>
            </div>

            <div class="wifi-pill-row clickable" id="wifiCopyRow" title="Nhấn để sao chép mật khẩu">
                <span>Mật Khẩu:</span>
                <strong style="display:flex; align-items:center; gap:8px;">
                    <span id="wifiPassVal">${SITE_CONFIG.wifi.pass}</span>
                    <span class="wifi-copy-btn"><i class="fa-regular fa-copy"></i> Sao chép</span>
                </strong>
            </div>

            <div class="wifi-copy-hint">
                <i class="fa-regular fa-hand-pointer"></i> Chạm vào mật khẩu để sao chép nhanh
            </div>
        </div>
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '03'
    });
}
