# Khoy-Tee App

Ứng dụng quản lý ca làm việc và tài sản cho nhân viên.

## Yêu cầu hệ thống

- Node.js (phiên bản 14.0.0 trở lên)
- npm hoặc yarn
- Expo CLI

## Cài đặt

1. Clone repository về máy:

```bash
git clone https://github.com/kurumi-2004/khoy-tee-app.git
cd khoy-tee-app
```

2. Cài đặt các dependencies:

```bash
npm install
# hoặc
yarn install
```

3. Khởi động ứng dụng:

```bash
npm start
# hoặc
yarn start
```

4. Sử dụng Expo Go trên điện thoại để quét mã QR hoặc chạy trên máy ảo:
   - iOS: Nhấn `i` để mở máy ảo iOS (yêu cầu macOS và Xcode)
   - Android: Nhấn `a` để mở máy ảo Android (yêu cầu Android Studio)

## Tính năng chính

- Quản lý ca làm việc
- Theo dõi tâm trạng và nhiệm vụ hàng ngày
- Quản lý tài sản và hàng hóa
- Thống kê lương và hiệu suất

## Cấu trúc thư mục

```
khoy-tee-app/
├── assets/          # Hình ảnh, font chữ và tài nguyên khác
├── src/             # Mã nguồn chính
│   ├── components/  # Các component tái sử dụng
│   ├── navigation/  # Cấu hình điều hướng
│   ├── screens/     # Các màn hình của ứng dụng
│   ├── services/    # Các dịch vụ API, xác thực, v.v.
│   └── utils/       # Các hàm tiện ích
├── App.js           # Điểm vào của ứng dụng
└── package.json     # Cấu hình dependencies
```

## Đóng góp

Nếu bạn muốn đóng góp cho dự án, vui lòng tạo pull request hoặc báo cáo lỗi qua mục Issues trên GitHub.

## Giấy phép

[MIT License](LICENSE)