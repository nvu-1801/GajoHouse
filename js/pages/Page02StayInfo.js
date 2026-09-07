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
        <div class="stay-editorial-schedule">
            <div class="stay-sched-col">
                <div class="stay-sched-badge">CHECK IN</div>
                <div class="stay-sched-time">${SITE_CONFIG.schedule.checkIn}</div>
                <div class="stay-sched-sub">${SITE_CONFIG.schedule.checkInSub}</div>
            </div>
            <div class="stay-sched-col">
                <div class="stay-sched-badge">CHECK OUT</div>
                <div class="stay-sched-time">${SITE_CONFIG.schedule.checkOut}</div>
                <div class="stay-sched-sub">${SITE_CONFIG.schedule.checkOutSub}</div>
            </div>
        </div>

        <div class="wifi-editorial-section">
            <div class="wifi-editorial-header">
                <i class="fa-solid fa-wifi wifi-editorial-icon"></i>
                <div class="wifi-editorial-title">WiFi Tốc Độ Cao</div>
                <div class="wifi-editorial-sub">Phủ sóng mạnh mẽ toàn bộ khuôn viên homestay</div>
            </div>

            <div class="wifi-editorial-rows">
                <div class="wifi-editorial-row">
                    <span>Tên Mạng:</span>
                    <strong>${SITE_CONFIG.wifi.ssid}</strong>
                </div>
                <div class="wifi-editorial-row clickable" id="wifiCopyRow" title="Nhấn để sao chép mật khẩu">
                    <span>Mật Khẩu:</span>
                    <strong style="display:flex; align-items:center; gap:8px;">
                        <span id="wifiPassVal">${SITE_CONFIG.wifi.pass}</span>
                        <span class="wifi-copy-btn"><i class="fa-regular fa-copy"></i> Sao chép</span>
                    </strong>
                </div>
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
