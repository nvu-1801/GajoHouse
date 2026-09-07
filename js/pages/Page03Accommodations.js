import { PageContainer } from '../components/PageContainer.js';
import { PageHeader } from '../components/PageHeader.js';
import { ROOMS_DATA } from '../config/rooms-data.js';

export function renderPage03Accommodations() {
    const headerHTML = PageHeader({
        eyebrow: "BOUTIQUE ACCOMMODATIONS",
        title: "Không Gian Lưu Trú",
        desc: "Hình ảnh thực tế 3 hạng phòng sạch tinh tươm"
    });

    const bodyHTML = `
    ${headerHTML}
    <div class="page-main-content">
        <div class="room-editorial-list">
            ${ROOMS_DATA.map(room => `
                <div class="room-editorial-item">
                    <img src="${room.img}" class="room-editorial-img" alt="${room.alt}">
                    <div class="room-editorial-info">
                        <div class="room-editorial-tag">${room.tag}</div>
                        <div class="room-editorial-title">${room.name}</div>
                        <div class="room-editorial-desc">${room.desc}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '04'
    });
}
