# QUY CHUẨN THIẾT KẾ & CODE UI (TỐI ƯU KHÔNG GIAN FLIPBOOK)

## 1. NGUYÊN LÝ LẤP ĐẦY KHÔNG GIAN (VERTICAL RHYTHM & DISTRIBUTION)
Tuyệt đối không để nội dung co cụm ở giữa trang (lỗi khoảng trắng thừa trên/dưới). Mọi trang phải tuân thủ cấu trúc phân bổ trục dọc bằng Flexbox:

* **Page Container:** Luôn sử dụng thẻ bọc ngoài cùng với class `flex flex-col justify-between h-full min-h-[900px] py-12 px-10`. Cấu trúc `justify-between` ép Tiêu đề lên trên và Footer xuống dưới.
* **Main Content Area:** Khu vực chứa các thẻ (Cards/Lists) phải có class `flex-1 flex flex-col justify-center gap-8` (hoặc `justify-evenly` nếu có nhiều thẻ).
* **Thẻ Danh sách (House Rules, Amenities, Checklist):** Thay vì để thẻ mỏng dính, hãy ép chiều cao tối thiểu (`min-h-[120px]`), tăng padding (`p-6` hoặc `p-8`) để thẻ trông "có thể tích". Nếu là dạng lưới (Grid), dùng `gap-6` hoặc `gap-8` để các khối giãn đều ra che phủ mặt giấy.

## 2. HỆ THỐNG TỶ LỆ CHỮ (TYPOGRAPHY HIERARCHY)
Kích thước chữ hiện tại đang quá nhỏ so với khổ giấy. Bắt buộc áp dụng hệ số nhân sau (Tailwind CSS / Custom CSS tương đương):

* **Tagline/Subtitle trên cùng:** `text-sm uppercase tracking-[0.2em] font-semibold text-[#B88B4A]`.
* **Tiêu đề chính (H1/H2):** Phải tạo sức nặng. Dùng `text-4xl` đến `text-5xl font-serif text-[#222222]`. Thêm `mb-4` hoặc `mb-6`.
* **Tiêu đề con trong Thẻ (Card Title):** Dùng `text-xl` hoặc `text-2xl font-bold` (nếu dùng Sans-serif) hoặc `font-serif`.
* **Nội dung chi tiết (Body Text):** Tuyệt đối không dùng chữ quá nhỏ. Cỡ chữ chuẩn là `text-base` hoặc `text-lg`. Bắt buộc thêm giãn dòng `leading-relaxed` (1.5) hoặc `leading-loose` (2.0) để khối chữ chiếm diện tích tốt hơn và dễ đọc.

## 3. QUY ĐỊNH KÍCH THƯỚC HÌNH ẢNH CỤ THỂ

* **Với trang Lưới (Ví dụ: 8 Điểm đến):** KHÔNG crop ảnh thành dải ngang hẹp. Dùng tỷ lệ vuông `aspect-square` hoặc chữ nhật đứng `aspect-[4/5]` kết hợp `object-cover`. Việc ảnh cao lên sẽ tự động đẩy bố cục giãn đều lấp đầy trang.
* **Với trang 1 Ảnh Lớn (Ví dụ: Giới thiệu phòng):** Ảnh bọc trong thẻ phải chiếm ít nhất `50%` chiều cao trang (`h-[450px]` hoặc `aspect-video`).

## 4. MẪU SOURCE CODE CHUẨN (BASE UI SKELETON)
Khi được yêu cầu viết code HTML/Tailwind cho bất kỳ trang nào, Agent PHẢI dùng bộ khung sau để đảm bảo UI phủ kín trang:

```html
<!-- WRAPPER TRANG: Phủ kín chiều cao, ép lề trên/dưới -->
<div class="relative w-full h-full min-h-[900px] flex flex-col justify-between bg-[#F9F6EE] text-[#222222] p-12">
    
    <!-- 1. HEADER AREA (Đẩy sát lên trên) -->
    <header class="text-center shrink-0">
        <h3 class="text-[#B88B4A] text-sm uppercase tracking-[0.2em] font-semibold mb-3">Tên Phân Mục (Subheading)</h3>
        <h1 class="font-serif text-5xl text-[#222222] mb-4">Tiêu Đề Trang Chính</h1>
        <p class="text-gray-500 text-base md:text-lg font-light max-w-2xl mx-auto">
            Mô tả phụ ngắn gọn, dùng font size lớn hơn để lấp đầy không gian.
        </p>
    </header>

    <!-- 2. MAIN CONTENT AREA (Khu vực co giãn tự động) -->
    <!-- Dùng justify-evenly hoặc gap-y lớn để phân bổ đều không gian dọc -->
    <main class="flex-1 flex flex-col justify-evenly my-10 w-full">
        
        <!-- Ví dụ Thẻ List (Nội quy, Tiện ích...) -> Cần cao, padding lớn -->
        <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex items-center gap-6 min-h-[130px]">
            <div class="w-12 h-12 flex-shrink-0 bg-[#F9F6EE] rounded-full flex items-center justify-center text-[#B88B4A] font-bold text-xl">1</div>
            <div>
                <h2 class="text-2xl font-bold text-[#222222] mb-2">Tiêu Đề Mục</h2>
                <p class="text-gray-600 text-lg leading-relaxed">Nội dung chi tiết được giãn dòng rộng, cỡ chữ lớn giúp dễ đọc và cân đối với trang giấy lớn.</p>
            </div>
        </div>
        
        <!-- Các khối thẻ khác nối tiếp... -->

    </main>

    <!-- 3. FOOTER AREA (Đẩy sát xuống dưới cùng) -->
    <footer class="shrink-0 border-t border-[#d1cec5] pt-6 mt-auto">
        <p class="text-[#B88B4A] text-base text-center font-serif italic">
            💡 <strong>Mẹo nhỏ từ GAJO's HOUSE:</strong> Thông điệp cuối trang.
        </p>
    </footer>

</div>
```

## 5. LƯU Ý KHI RENDER FLIPBOOK
Tuyệt đối tránh fix cứng `height: 100vh` trong các thẻ con, chỉ dùng `flex-1` và tỷ lệ `%` hoặc `aspect-ratio`. Điều này giúp khung nội dung tự động nở ra hoặc bóp lại vừa vặn khi nạp vào các thư viện như Turn.js hoặc in ra khổ giấy A4/A5 mà không bị lẹm viền.
