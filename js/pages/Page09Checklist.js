import { PageContainer } from '../components/PageContainer.js';
import { PageHeader } from '../components/PageHeader.js';
import { InfoCardList } from '../components/InfoCard.js';

export function renderPage09Checklist() {
    const headerHTML = PageHeader({
        eyebrow: "Departure Checklist",
        title: "Trước Khi Rời Đi",
        desc: "Kiểm tra tư trang & thủ tục trả phòng"
    });

    const checklistItems = [
        { icon: "fa-regular fa-circle-check", title: "Kiểm tra hành lý & củ sạc", desc: "Đảm bảo không bỏ quên điện thoại, phụ kiện, ví tiền và tư trang cá nhân." },
        { icon: "fa-regular fa-circle-check", title: "Gửi lại chìa khóa phòng", desc: "Vui lòng bàn giao lại chìa khóa tại quầy lễ tân hoặc thông báo cho chủ nhà." },
        { icon: "fa-regular fa-circle-check", title: "Kiểm tra cửa & vòi nước", desc: "Đóng kín các cửa sổ, kiểm tra vòi nước và tắt các công tắc điện trước khi rời đi." },
        { icon: "fa-regular fa-circle-check", title: "Hỗ trợ đặt xe / Hóa đơn", desc: "Báo trước 30 phút nếu bạn cần hỗ trợ gọi taxi, xe máy ra bến xe/ga tàu hoặc xuất hóa đơn." }
    ];

    const bodyHTML = `
    ${headerHTML}
    <div class="page-main-content">
        ${InfoCardList({ items: checklistItems })}
    </div>`;

    return PageContainer({
        density: 'soft',
        bodyHTML: bodyHTML,
        pageNum: '10'
    });
}
