// ==========================================================
// CẤU HÌNH ĐỒNG BỘ REALTIME GIỮA CÁC MÁY (FIREBASE REALTIME DATABASE)
// Dành cho trường hợp: Máy Kiosk lấy số và Máy Tiếp nhận là 2 máy khác nhau
// ==========================================================

// BƯỚC 1: Vào https://console.firebase.google.com (Đăng nhập bằng Gmail miễn phí)
// BƯỚC 2: Bấm "Add project" -> Đặt tên dự án (ví dụ: BV-PHCN-DONG-THAP)
// BƯỚC 3: Vào mục "Build" -> "Realtime Database" -> Bấm "Create Database" (chọn chế độ "Start in test mode")
// BƯỚC 4: Vào "Project Settings" (biểu tượng bánh răng) -> Kéo xuống dưới phần "Web apps" copy các thông số dán vào bên dưới:

const firebaseConfig = {
    apiKey: "",             // Dán apiKey của bạn vào đây
    authDomain: "",         // Dán authDomain vào đây (ví dụ: bv-phcn.firebaseapp.com)
    databaseURL: "",        // Dán databaseURL vào đây (ví dụ: https://bv-phcn-default-rtdb.firebaseio.com)
    projectId: "",          // Dán projectId vào đây
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Tự động khởi tạo kết nối Firebase nếu đã điền databaseURL
let firebaseDB = null;
try {
    if (typeof firebase !== 'undefined' && firebaseConfig && firebaseConfig.databaseURL && firebaseConfig.databaseURL.trim() !== '') {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        firebaseDB = firebase.database();
        console.log("🟢 Đã kết nối Firebase Realtime Database thành công!");
    } else {
        console.log("ℹ️ Chưa cấu hình Firebase - Hệ thống đang chạy chế độ Offline (LocalStorage)");
    }
} catch (e) {
    console.warn("⚠️ Không thể khởi tạo Firebase:", e);
}
