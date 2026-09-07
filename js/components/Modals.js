/**
 * Component Modals - Renders Export Dialog & Booklet Preview Dialog
 */
export function renderModals() {
    return `
    <!-- EXPORT & DOWNLOAD MAIN MODAL DIALOG -->
    <div class="export-modal-overlay" id="exportModal">
        <div class="export-modal-box">
            <button class="modal-close-btn" id="closeExportModal">&times;</button>
            <i class="fa-solid fa-book-bookmark" style="font-size:2rem; color:var(--accent-gold); margin-bottom:6px; display:inline-block;"></i>
            <h3>TẢI VỀ &amp; IN ẤN CATALOGUE</h3>
            <p>Chọn phương thức xuất bản phù hợp:</p>

            <div class="export-options-grid">
                <!-- Option 1: In Booklet Gấp Đôi 2 Mặt -->
                <div class="export-opt-btn highlight-opt" id="modalOptBooklet">
                    <i class="fa-solid fa-book-open"></i>
                    <div>
                        <strong>In / Xuất Bản Booklet A4 2 Mặt (1-12, 2-11...)</strong>
                        <span>3 tờ A4 in 2 mặt &bull; Gấp đôi ở giữa thành cuốn catalogue A5</span>
                    </div>
                </div>

                <!-- Option 2: Chia Sẻ Nhanh -->
                <div class="export-opt-btn" id="modalOptShare">
                    <i class="fa-solid fa-share-nodes"></i>
                    <div>
                        <strong>Chia Sẻ 3D Flipbook Gửi Khách Hàng</strong>
                        <span>Gửi qua Zalo, Messenger, Facebook, tin nhắn SMS</span>
                    </div>
                </div>

                <!-- Option 3: In Trang Đơn Liên Tục -->
                <div class="export-opt-btn" id="modalOptPrintStandard">
                    <i class="fa-solid fa-file-pdf"></i>
                    <div>
                        <strong>In / Xuất PDF 12 Trang Đơn Liên Tục</strong>
                        <span>Căn chỉnh từng trang đơn riêng biệt</span>
                    </div>
                </div>

                <!-- Option 4: Đặt phòng Zalo -->
                <a href="https://zalo.me/0902286300" target="_blank" class="export-opt-btn">
                    <i class="fa-solid fa-comments"></i>
                    <div>
                        <strong>Liên Hệ Zalo Đặt Phòng Nhanh (0902 286 300)</strong>
                        <span>Tư vấn đặt phòng 24/7 &amp; hỗ trợ lưu trú chu đáo</span>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <!-- BOOKLET PREVIEW & PRINT MODAL DIALOG -->
    <div class="export-modal-overlay" id="bookletModal">
        <div class="export-modal-box booklet-preview-modal-box">
            <button class="modal-close-btn" id="closeBookletModal">&times;</button>
            <i class="fa-solid fa-print" style="font-size:2rem; color:var(--accent-gold); margin-bottom:4px; display:inline-block;"></i>
            <h3>BẢN IN BOOKLET GẤP ĐÔI (3 TỜ A4 - 2 MẶT)</h3>
            <p style="margin-bottom:8px;">
                Mỗi tờ A4 in 2 mặt (4 trang). Khi in chọn <strong>"In 2 mặt / Lật cạnh ngắn (Flip on short edge)"</strong> rồi xếp chồng và gấp đôi ở giữa để tạo thành cuốn catalogue A5:
            </p>

            <div class="booklet-sheets-grid">
                <!-- SHEET 1 -->
                <div class="booklet-sheet-card">
                    <div class="booklet-sheet-header">
                        <span><i class="fa-regular fa-file"></i> TỜ 1 (Bìa ngoài &amp; Lời ngỏ)</span>
                        <span style="color:var(--accent-gold); font-size:0.68rem;">Mặt 1: [12 | 1] &bull; Mặt 2: [2 | 11]</span>
                    </div>
                    <div class="booklet-sides-row">
                        <div class="booklet-side-box">
                            <div class="booklet-side-title">MẶT TRƯỚC (Mặt ngoài)</div>
                            <div class="booklet-page-pair">
                                <div class="booklet-mini-page cover-mini">12<span>Bìa Sau</span></div>
                                <div class="booklet-mini-page cover-mini">01<span>Bìa Trước</span></div>
                            </div>
                        </div>
                        <div class="booklet-side-box">
                            <div class="booklet-side-title">MẶT SAU (Mặt trong)</div>
                            <div class="booklet-page-pair">
                                <div class="booklet-mini-page">02<span>Lời Ngỏ</span></div>
                                <div class="booklet-mini-page">11<span>Cảm Ơn &amp; QR</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SHEET 2 -->
                <div class="booklet-sheet-card">
                    <div class="booklet-sheet-header">
                        <span><i class="fa-regular fa-file"></i> TỜ 2 (Thông tin phòng &amp; Mẹo hay)</span>
                        <span style="color:var(--accent-gold); font-size:0.68rem;">Mặt 1: [10 | 3] &bull; Mặt 2: [4 | 9]</span>
                    </div>
                    <div class="booklet-sides-row">
                        <div class="booklet-side-box">
                            <div class="booklet-side-title">MẶT TRƯỚC</div>
                            <div class="booklet-page-pair">
                                <div class="booklet-mini-page">10<span>Checklist</span></div>
                                <div class="booklet-mini-page">03<span>Nhận Phòng</span></div>
                            </div>
                        </div>
                        <div class="booklet-side-box">
                            <div class="booklet-side-title">MẶT SAU</div>
                            <div class="booklet-page-pair">
                                <div class="booklet-mini-page">04<span>Phòng Nghỉ</span></div>
                                <div class="booklet-mini-page">09<span>Mẹo Hay</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SHEET 3 -->
                <div class="booklet-sheet-card">
                    <div class="booklet-sheet-header">
                        <span><i class="fa-regular fa-file"></i> TỜ 3 (Tiện nghi, Ẩm thực &amp; 8 Điểm đến)</span>
                        <span style="color:var(--accent-gold-light); font-size:0.68rem;">Mặt 1: [8 | 5] &bull; Mặt 2: [6 | 7]</span>
                    </div>
                    <div class="booklet-sides-row">
                        <div class="booklet-side-box">
                            <div class="booklet-side-title">MẶT TRƯỚC (Ruột giữa)</div>
                            <div class="booklet-page-pair">
                                <div class="booklet-mini-page">08<span>8 Điểm Đến</span></div>
                                <div class="booklet-mini-page">05<span>Tiện Nghi</span></div>
                            </div>
                        </div>
                        <div class="booklet-side-box">
                            <div class="booklet-side-title">MẶT SAU (Ruột giữa)</div>
                            <div class="booklet-page-pair">
                                <div class="booklet-mini-page">06<span>Ẩm Thực</span></div>
                                <div class="booklet-mini-page">07<span>Cà Phê &amp; Chill</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="display:flex; gap:10px; justify-content:center; margin-top:14px; flex-wrap:wrap;">
                <button class="top-btn-pill" id="confirmPrintBookletBtn" style="background:var(--accent-gold); color:#1E1B18; font-weight:700; padding:8px 20px;">
                    <i class="fa-solid fa-print"></i> Tiến Hành In / Lưu PDF Booklet
                </button>
            </div>
        </div>
    </div>`;
}
