# QUY CHUẨN THIẾT KẾ & CODE UI CHO GAJO'S HOUSE (FLIPBOOK STANDARD)

## 1. Mục Tiêu Layout (Lấp đầy không gian tinh tế)
Tuyệt đối không để khoảng trắng thừa thãi ở trên cùng và dưới cùng của trang. Mọi trang Catalogue/Flipbook phải tuân thủ nguyên tắc phân bổ trục dọc (Vertical Distribution) để che phủ diện tích trang một cách cân bằng.

## 2. Công Thức Bố Cục Trang (Page Structure Formula)
Trang thiết kế phải được bọc trong một container có tỷ lệ giấy in chuẩn (Ví dụ: tỷ lệ A4/A5) hoặc `h-screen` (nếu làm web full màn hình), sử dụng Flexbox để đẩy các thành phần ra các mép:

* **Header (Tiêu đề):** Cách lề trên `8% - 10%`. Luôn canh giữa.
* **Body (Nội dung chính):** Nằm ở giữa, chiếm `60% - 70%` không gian dọc. Thường là 2 Thẻ (Card) xếp chồng lên nhau, khoảng cách giữa 2 thẻ (gap) là `2rem` đến `3rem`.
* **Footer (Ghi chú/Mẹo):** Ép sát xuống lề dưới (margin-bottom: `8% - 10%`).

## 3. Cấu Trúc Thẻ Nội Dung (Card UI - Giải pháp chống vỡ ảnh)
Để tránh việc ảnh bị cắt thành một dải hẹp ngang (Panorama cutoff), bắt buộc áp dụng cấu trúc sau cho phần hình ảnh của thẻ:

* **Grid 2 Ảnh (Side-by-side):** Luôn chia khu vực hình ảnh thành 2 cột (`grid grid-cols-2 gap-1` hoặc `gap-2`).
* **Tỷ lệ khung hình (Aspect Ratio):** Cụm 2 ảnh này phải được set chiều cao tối thiểu từ `220px - 280px` (hoặc `aspect-[2/1]`) để đảm bảo ảnh có độ sâu và bao phủ đủ chiều dọc của thẻ.
* **Hình thức:** Dùng `object-fit: cover` cho ảnh. Thêm Tagline (nhãn nổi bật) trôi nổi (absolute) ở góc trên cùng bên trái của ảnh 1.
* **Nội dung chữ (Text Area):** Đặt padding lớn (`p-6` hoặc `p-8`). Giãn dòng `leading-relaxed` (1.5) để khối chữ trông có thể tích, lấp đầy phần nửa dưới của thẻ.

## 4. Tiêu Chuẩn Source Code (Dành cho Lập trình viên / AI)
Khi được yêu cầu tạo code cho một trang mới, hãy sử dụng **HTML & Tailwind CSS**. Code xuất ra phải tuân thủ bộ khung sau để dễ dàng tích hợp vào Flipbook:

```html
<!-- PAGE WRAPPER: Ép tỷ lệ hiển thị chuẩn Flipbook (Vd: Tỷ lệ A4 1:1.414) hoặc Flex column -->
<div class="relative w-full h-full min-h-[900px] flex flex-col justify-between p-10 bg-[#F9F6EE] text-[#222222]">
    
    <!-- HEADER -->
    <header class="text-center mt-6">
        <h3 class="text-[#B88B4A] text-sm uppercase tracking-widest font-semibold mb-2">CATEGORY NAME</h3>
        <h1 class="font-serif text-4xl text-[#222222]">Tiêu Đề Trang</h1>
        <p class="text-gray-500 text-sm mt-2 font-light">Mô tả phụ ngắn gọn bên dưới tiêu đề</p>
    </header>

    <!-- MAIN CARDS CONTAINER -->
    <main class="flex-1 flex flex-col justify-center gap-8 my-8">
        
        <!-- CARD TEMPLATE -->
        <article class="bg-[#222222] rounded-xl overflow-hidden text-white flex flex-col shadow-lg">
            <!-- Image Area: 2 Columns to maintain aspect ratio -->
            <div class="grid grid-cols-2 gap-1 h-56 sm:h-64">
                <div class="relative w-full h-full">
                    <img src="ảnh-1.jpg" alt="Img 1" class="absolute inset-0 w-full h-full object-cover" />
                    <span class="absolute top-3 left-3 bg-[#B88B4A] text-white px-3 py-1 text-xs font-bold rounded-sm uppercase">Tagline Nổi Bật</span>
                </div>
                <div class="relative w-full h-full">
                    <img src="ảnh-2.jpg" alt="Img 2" class="absolute inset-0 w-full h-full object-cover" />
                </div>
            </div>
            
            <!-- Text Area -->
            <div class="p-6 md:p-8">
                <h2 class="text-2xl font-serif text-[#B88B4A] mb-3">Tên Địa Điểm / Dịch Vụ</h2>
                <p class="text-gray-300 text-sm leading-relaxed mb-6">Mô tả chi tiết gọn gàng, giãn dòng thoáng để khối chữ có thể tích.</p>
                <!-- Card Footer (Location & Contact) -->
                <div class="flex justify-between items-center text-xs text-gray-400 border-t border-gray-700 pt-4">
                    <span>📍 Địa chỉ tại đây</span>
                    <span class="text-white font-semibold">📞 Hotline</span>
                </div>
            </div>
        </article>
        <!-- END CARD TEMPLATE -->

    </main>

    <!-- FOOTER NOTE -->
    <footer class="mb-6 border-t border-[#d1cec5] pt-4">
        <p class="text-[#B88B4A] text-sm text-center font-serif italic">
            💡 <strong>Mẹo nhỏ từ GAJO's HOUSE:</strong> Thông điệp hoặc ghi chú cuối trang để lấp đầy không gian lề dưới.
        </p>
    </footer>

</div>
```

## 5. Kiểm tra In Ấn (Print & Flipbook Ready)
Tuyệt đối không dùng các class làm vỡ bố cục khi in như `h-screen` cho các thẻ bên trong. Mọi chiều cao phải tính bằng cơ chế `flex-1` (tự động điền đầy khoảng trống) hoặc `aspect-ratio` để khi cắt trang đưa vào thư viện Flipbook (như Turn.js hoặc 3D Flipbook), giao diện tự động co bóp chính xác vào khung giấy mà không bị cụt chữ.
