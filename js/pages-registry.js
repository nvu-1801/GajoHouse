import { renderPageCoverFront } from './pages/PageCoverFront.js';
import { renderPage01Sanctuary } from './pages/Page01Sanctuary.js';
import { renderPage02StayInfo } from './pages/Page02StayInfo.js';
import { renderPage03Accommodations } from './pages/Page03Accommodations.js';
import { renderPage04Services } from './pages/Page04Services.js';
import { renderPage05Dining } from './pages/Page05Dining.js';
import { renderPage06Coffee } from './pages/Page06Coffee.js';
import { renderPage07Destinations } from './pages/Page07Destinations.js';
import { renderPage08HouseRules } from './pages/Page08HouseRules.js';
import { renderPage09Checklist } from './pages/Page09Checklist.js';
import { renderPage10ReviewsContact } from './pages/Page10ReviewsContact.js';
import { renderPageCoverBack } from './pages/PageCoverBack.js';

export const FLIPBOOK_PAGES = [
    { id: 1, title: "Bìa Trước", shortLabel: "Bìa Trước", render: renderPageCoverFront },
    { id: 2, title: "Lời Ngỏ", shortLabel: "Lời Ngỏ", render: renderPage01Sanctuary },
    { id: 3, title: "WiFi & Nhận Phòng", shortLabel: "WiFi", render: renderPage02StayInfo },
    { id: 4, title: "Không Gian Lưu Trú", shortLabel: "Phòng Nghỉ", render: renderPage03Accommodations },
    { id: 5, title: "Tiện Nghi Chu Đáo", shortLabel: "Tiện Nghi", render: renderPage04Services },
    { id: 6, title: "Hệ Sinh Thái Ẩm Thực", shortLabel: "Ẩm Thực", render: renderPage05Dining },
    { id: 7, title: "Góc Cà Phê & Chill", shortLabel: "Cà Phê & Chill", render: renderPage06Coffee },
    { id: 8, title: "8 Điểm Đến Ấn Tượng", shortLabel: "8 Điểm Đến", render: renderPage07Destinations },
    { id: 9, title: "Mẹo Nhỏ Cho Kỳ Nghỉ", shortLabel: "Mẹo Hay", render: renderPage08HouseRules },
    { id: 10, title: "Trước Khi Rời Đi", shortLabel: "Checklist", render: renderPage09Checklist },
    { id: 11, title: "Cảm Ơn & QR Code", shortLabel: "Cảm Ơn", render: renderPage10ReviewsContact },
    { id: 12, title: "Bìa Sau", shortLabel: "Bìa Sau", render: renderPageCoverBack }
];

export function renderAllPagesHTML() {
    return FLIPBOOK_PAGES.map(page => page.render()).join('\n');
}

export function renderBookletPrintHTML() {
    const rendered = FLIPBOOK_PAGES.map(p => p.render());
    // 3 Sheets x 2 Sides imposition (1-12, 2-11...)
    // Sheet 1 Front: [12, 1], Sheet 1 Back: [2, 11]
    // Sheet 2 Front: [10, 3], Sheet 2 Back: [4, 9]
    // Sheet 3 Front: [8, 5], Sheet 3 Back: [6, 7]
    return `
    <div class="booklet-print-container">
        <!-- SHEET 1 FRONT: Page 12 | Page 1 -->
        <div class="booklet-sheet">
            <div class="booklet-half">${rendered[11]}</div>
            <div class="booklet-fold-line"></div>
            <div class="booklet-half">${rendered[0]}</div>
        </div>
        <!-- SHEET 1 BACK: Page 2 | Page 11 -->
        <div class="booklet-sheet">
            <div class="booklet-half">${rendered[1]}</div>
            <div class="booklet-fold-line"></div>
            <div class="booklet-half">${rendered[10]}</div>
        </div>
        <!-- SHEET 2 FRONT: Page 10 | Page 3 -->
        <div class="booklet-sheet">
            <div class="booklet-half">${rendered[9]}</div>
            <div class="booklet-fold-line"></div>
            <div class="booklet-half">${rendered[2]}</div>
        </div>
        <!-- SHEET 2 BACK: Page 4 | Page 9 -->
        <div class="booklet-sheet">
            <div class="booklet-half">${rendered[3]}</div>
            <div class="booklet-fold-line"></div>
            <div class="booklet-half">${rendered[8]}</div>
        </div>
        <!-- SHEET 3 FRONT: Page 8 | Page 5 -->
        <div class="booklet-sheet">
            <div class="booklet-half">${rendered[7]}</div>
            <div class="booklet-fold-line"></div>
            <div class="booklet-half">${rendered[4]}</div>
        </div>
        <!-- SHEET 3 BACK: Page 6 | Page 7 -->
        <div class="booklet-sheet">
            <div class="booklet-half">${rendered[5]}</div>
            <div class="booklet-fold-line"></div>
            <div class="booklet-half">${rendered[6]}</div>
        </div>
    </div>`;
}

export function renderStandardPrintHTML() {
    const rendered = FLIPBOOK_PAGES.map(p => p.render());
    return `
    <div class="standard-print-container">
        ${rendered.map(pageHTML => `
            <div class="standard-print-sheet">
                ${pageHTML}
            </div>
        `).join('')}
    </div>`;
}
