# GAJO'S HOUSE - Cinematic Scrollytelling & 3D Interactive Catalogue

Trang web trải nghiệm số cao cấp giới thiệu không gian lưu trú boutique homestay phong cách Japandi **GAJO's HOUSE** và cẩm nang du lịch trải nghiệm tại Hoài Nhơn Đông, Gia Lai.

---

## 🌟 Cấu Trúc Trải Nghiệm (Dual Experience)

1. **`index.html` — Cinematic Scrollytelling Landing Page (GSAP + ScrollTrigger + Lenis)**
   - 🎬 **Hero Pinned Zoom & Reveal**: Trải nghiệm cuộn thị giác điện ảnh với hình ảnh nội thất homestay độ phân giải cao.
   - 🏛️ **Chapter The Sanctuary**: Hiệu ứng chuyển cảnh 3D Depth Cross-fade và ghim màn hình (pinned storytelling).
   - 🛏️ **Chapter Suite Collection**: Khám phá 3 hạng phòng chính (*Grand Family Suite, Deluxe Double Room, Cozy Single Studio*) bằng thanh trượt ngang tương tác (Horizontal Pinned Scroll).
   - 🌊 **Chapter Hoài Nhơn Journey**: Parallax cẩm nang du lịch (Đèo Lộ Diêu, Mũi Vi Rồng, Rừng dừa Tam Quan, Cao nguyên La Vuông,...).
   - 📶 **1-Tap WiFi Quick Copy**: Tiện ích sao chép mật khẩu WiFi 1-chạm kèm hiệu ứng Toast phản hồi.
   - 📖 **Nút kết nối trực tiếp đến Catalogue 3D Flipbook**.

2. **`flipbook.html` — 3D Interactive Flipbook Catalogue (`StPageFlip`)**
   - 📖 **Hiệu ứng lật sách 3D chân thực**: Mô phỏng sách bìa cứng và trang giấy tự nhiên.
   - 🔊 **Âm thanh sột soạt lật trang**: Web Audio API tích hợp sẵn.
   - 🖨️ **In ấn Booklet 2 mặt & Xuất bản chuẩn A4**.

---

## 🚀 Công Nghệ Sử Dụng

- **GSAP 3.12.5 & ScrollTrigger**: Hoạt ảnh cuộn mượt mà chuẩn 60fps trên GPU.
- **Lenis 1.1.9**: Smooth scrolling quán tính tự nhiên.
- **StPageFlip 3D**: Thư viện lật sách 3D tương tác.
- **Vanilla HTML5 / CSS3 / JavaScript Modern**: Tải trang tức thì, không cần build tool.

---

## 🌐 Hướng Dẫn Deploy Lên Vercel

1. Đẩy code lên repository GitHub.
2. Import repo vào [Vercel](https://vercel.com) & bấm **Deploy**.
3. Trang web sẽ trực tiếp chạy `index.html` làm trang chủ, và `flipbook.html` cho chế độ lật sách.

---

© 2026 GAJO's HOUSE &bull; Hoài Nhơn Đông, Gia Lai
