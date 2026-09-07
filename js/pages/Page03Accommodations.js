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
        <div class="room-mini-list">
            ${ROOMS_DATA.map(room => `
                <div class="room-mini-item">
                    <img src="${room.img}" class="room-mini-img" alt="${room.alt}">
                    <div class="room-mini-info">
                        <span class="room-mini-tag">${room.tag}</span>
                        <h4>${room.name}</h4>
                        <p>${room.desc}</p>
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
