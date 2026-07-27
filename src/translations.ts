export const translations = {
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      name: "Nguyễn Đỗ Xuân Trường",
      role: "Fullstack Developer Intern",
      subtitle: "Passionate about building scalable backends and engaging cross-platform interfaces.",
      resumeBtn: "View Resume",
      githubBtn: "GitHub"
    },
    about: {
      title: "About Me",
      description: "Software Engineering student at IUH (GPA: 3.19/4.0) with hands-on Fullstack experience (Spring Boot, React, React Native). I'm seeking an Intern role at an outsourcing company. I'm comfortable reading English technical documentation and adapting quickly across tech stacks and client requirements."
    },
    skills: {
      title: "Technical Skills",
      backend: "Backend",
      frontend: "Frontend",
      database: "Database",
      tools: "Tools"
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View Project",
      sebook: {
        title: "SEBook - E-Commerce Platform",
        role: "Full-Stack Contributor (1 of 5 members)",
        desc: "A modular monolith e-commerce platform with Hexagonal Architecture. Features include stateless JWT (RS256), Refresh Token Rotation + Reuse Detection, and custom TanStack Query hooks adopted project-wide."
      },
      minizalo: {
        title: "MiniZalo - Real-time Chat App",
        role: "Mobile Frontend Contributor (1 of 5 members)",
        desc: "Cross-platform messaging app with Expo Router View Splitter. Features real-time WebSocket STOMP for message recall, swipe-to-reply, reaction bottom sheets, and an offline cache."
      },
      haitebooks: {
        title: "HaiTeBooks - Bookstore REST API",
        role: "Backend Developer (Solo Project)",
        desc: "Complete REST API backend for a mobile app. Features VNPay integration (HMAC-SHA512), EAN-13 barcode generation, and a lightweight AI module with semantic search (Cohere Embed) and RAG chatbot."
      }
    },
    contact: {
      title: "Get In Touch",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub"
    }
  },
  vi: {
    nav: { about: "Giới thiệu", skills: "Kỹ năng", projects: "Dự án", contact: "Liên hệ" },
    hero: {
      greeting: "Xin chào, tôi là",
      name: "Nguyễn Đỗ Xuân Trường",
      role: "Fullstack Developer Intern",
      subtitle: "Đam mê xây dựng các hệ thống backend mở rộng và giao diện đa nền tảng ấn tượng.",
      resumeBtn: "Xem CV",
      githubBtn: "GitHub"
    },
    about: {
      title: "Về Bản Thân",
      description: "Sinh viên Kỹ thuật Phần mềm tại trường Đại học Công nghiệp TP.HCM (IUH) với điểm GPA: 3.2/4.0. Có kinh nghiệm thực tế về Fullstack (Spring Boot, React, React Native). Đang tìm kiếm vị trí Thực tập sinh tại các công ty Outsource. Tự tin đọc hiểu tài liệu kỹ thuật tiếng Anh và thích nghi nhanh với các công nghệ và yêu cầu dự án khác nhau."
    },
    skills: {
      title: "Kỹ năng Kỹ thuật",
      backend: "Backend",
      frontend: "Frontend",
      database: "Cơ sở dữ liệu",
      tools: "Công cụ"
    },
    projects: {
      title: "Dự án Nổi bật",
      viewProject: "Xem Dự án",
      sebook: {
        title: "SEBook - Nền tảng Thương mại Điện tử",
        role: "Full-Stack Contributor (1/5 thành viên)",
        desc: "Nền tảng thương mại điện tử Modular Monolith với Kiến trúc Hexagonal. Các tính năng bao gồm JWT không trạng thái (RS256), Xoay vòng Refresh Token + Phát hiện tái sử dụng, và các custom hooks TanStack Query được sử dụng toàn dự án."
      },
      minizalo: {
        title: "MiniZalo - Ứng dụng Chat Real-time",
        role: "Mobile Frontend Contributor (1/4 thành viên)",
        desc: "Ứng dụng nhắn tin đa nền tảng với Expo Router View Splitter. Tích hợp WebSocket STOMP real-time cho thu hồi tin nhắn, vuốt để trả lời, bảng thả cảm xúc, và bộ nhớ cache ngoại tuyến."
      },
      haitebooks: {
        title: "HaiTeBooks - Bookstore REST API",
        role: "Backend Developer (Dự án Cá nhân)",
        desc: "Hệ thống REST API backend hoàn chỉnh cho ứng dụng di động. Tích hợp thanh toán VNPay (HMAC-SHA512), tạo mã vạch EAN-13, và module AI gọn nhẹ với tìm kiếm ngữ nghĩa (Cohere Embed) & chatbot RAG."
      }
    },
    contact: {
      title: "Liên Hệ",
      email: "Email",
      phone: "Điện thoại",
      linkedin: "LinkedIn",
      github: "GitHub"
    }
  }
};

export type Language = 'en' | 'vi';
