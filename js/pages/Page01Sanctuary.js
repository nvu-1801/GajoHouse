import { PageContainer } from '../components/PageContainer.js';
import { PageHeader } from '../components/PageHeader.js';

export function renderPage01Sanctuary() {
    const headerHTML = PageHeader({
        eyebrow: "WELCOME TO SANCTUARY",
        title: "Lời Ngỏ",
        desc: "Chào mừng bạn ghé thăm GAJO's HOUSE"
    });

    const bodyHTML = `
    ${headerHTML}
    <div class="page-main-content">
        <div class="welcome-quote-box">
            "Một không gian lưu trú boutique mới xây được chăm chút tỉ mỉ từng chi tiết, tĩnh lặng và sạch không tì vết để bạn tái tạo trọn vẹn nguồn năng lượng."
        </div>

        <p style="font-size:0.86rem; color:#555; line-height:1.65; margin:6px 0 8px;">
            Tọa lạc tại vùng Hoài Nhơn Đông thanh bình, homestay mang phong cách tối giản Japandi giao hòa cùng vẻ đẹp mộc mạc và sự hiếu khách ấm áp.
        </p>

        <img src="assets/gajo-interior.jpg" class="welcome-photo" alt="Nội thất GAJO's HOUSE">
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '02'
    });
}
