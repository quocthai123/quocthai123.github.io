// ==========================================================
// CẤU HÌNH ĐỒNG BỘ REALTIME GIỮA CÁC MÁY (FIREBASE REALTIME DATABASE)
// Dành cho trường hợp: Máy Kiosk lấy số và Máy Tiếp nhận là 2 máy khác nhau
// ==========================================================

// BƯỚC 1: Vào https://console.firebase.google.com (Đăng nhập bằng Gmail miễn phí)
// BƯỚC 2: Bấm "Add project" -> Đặt tên dự án (ví dụ: BV-PHCN-DONG-THAP)
// BƯỚC 3: Vào mục "Build" -> "Realtime Database" -> Bấm "Create Database" (chọn chế độ "Start in test mode")
// BƯỚC 4: Vào "Project Settings" (biểu tượng bánh răng) -> Kéo xuống dưới phần "Web apps" copy các thông số dán vào bên dưới:

const firebaseConfig = {
    apiKey: "AIzaSyBDseUl47pZ0p8BV2FvNcFTTtQx2Wuy01A",
  authDomain: "bv-phcn-dong-thap.firebaseapp.com",
  databaseURL: "https://bv-phcn-dong-thap-default-rtdb.firebaseio.com",
  projectId: "bv-phcn-dong-thap",
  storageBucket: "bv-phcn-dong-thap.firebasestorage.app",
  messagingSenderId: "539785274623",
  appId: "1:539785274623:web:3295d589b99639ca9218ca",
  measurementId: "G-6REZLTEHFT"
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
