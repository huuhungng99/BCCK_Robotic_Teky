/**
 * ==========================================================================
 * ROBOTICS COURSE 1 PRESENTATION - COMPLETE JAVASCRIPT LOGIC
 * Includes:
 * 1. 12 Detailed Lessons Data
 * 2. 21 Classroom Photos Gallery
 * 3. 13 Student Profiles with Varied Ratings (4.6 - 5.0)
 * 4. 19-Slide Deck Controller with Touch Swipe & Keyboard Navigation
 * 5. Interactive Lesson Showcase & Gallery Lightbox
 * 6. Student Certificate Modal & Theme Toggle
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Course 1 Curriculum Data (12 Lessons) ---
    const lessonsData = [
        {
            id: 1,
            title: "Buổi 1: Khám Phá Khoa Học Chuyển Động Cùng Robot Milo",
            category: "c1",
            categoryName: "Khoa Học & Đời Sống",
            icon: "fa-robot",
            img: "Hình ảnh lớp học/IMG_20260815_084353.jpg",
            desc: "Làm quen bộ linh kiện LEGO WeDo 2.0, tìm hiểu cách hoạt động của Động cơ (Motor), Não điều khiển Smarthub và lập trình cho xe thám hiểm Milo di chuyển tiến lên an toàn.",
            coreKnowledge: {
                assembly: "Lắp ráp khung gầm bánh xe cơ bản & gá động cơ truyền động.",
                sensors: "Kết nối Động cơ (Motor) với Não điều khiển Smarthub qua Bluetooth.",
                coding: "Khối lệnh Khởi động, Động cơ quay theo chiều kim đồng hồ, Dừng lại.",
                challenge: "Điều khiển xe di chuyển chính xác đến vị trí mẫu vật."
            },
            tags: ["Lắp ráp xe Milo", "Động cơ Motor", "Khối lệnh di chuyển", "Smarthub"]
        },
        {
            id: 2,
            title: "Buổi 2: Mắt Thần Cảm Biến Khoảng Cách Của Xe Milo",
            category: "c1",
            categoryName: "Khoa Học & Đời Sống",
            icon: "fa-eye",
            img: "Hình ảnh lớp học/IMG_20260815_084408.jpg",
            desc: "Tìm hiểu nguyên lý phát sóng hồng ngoại của Mắt thần (Motion Sensor). Lập trình cho xe Milo tự động phát hiện vật cản phía trước và phanh dừng khẩn cấp.",
            coreKnowledge: {
                assembly: "Gắn cảm biến khoảng cách ở đầu xe với góc quét tối ưu.",
                sensors: "Cảm biến khoảng cách (Motion Sensor) nhận diện vật cản.",
                coding: "Lệnh Đợi sự kiện cảm biến phát hiện vật thể -> Phanh dừng xe.",
                challenge: "Chạy xe tốc độ cao và phanh dừng cách tường đúng 5cm."
            },
            tags: ["Mắt thần cảm biến", "Phanh tự động", "Phát hiện chướng ngại", "Khối lệnh Chờ"]
        },
        {
            id: 3,
            title: "Buổi 3: Cảm Biến Độ Nghiêng & Báo Động Vượt Dốc",
            category: "c1",
            categoryName: "Khoa Học & Đời Sống",
            icon: "fa-compass",
            img: "Hình ảnh lớp học/IMG_20260815_084432.jpg",
            desc: "Khám phá Cảm biến độ nghiêng (Tilt Sensor). Lập trình cho xe Milo nhận biết góc dốc địa hình nguy hiểm, tự động đổi màu đèn LED và phát âm thanh còi cứu hộ.",
            coreKnowledge: {
                assembly: "Cố định cảm biến độ nghiêng song song với mặt đất trên xe.",
                sensors: "Cảm biến Tilt Sensor (Nghiêng lên, xuống, trái, phải, lắc).",
                coding: "Đổi màu đèn LED Não Smarthub kết hợp phát âm thanh còi báo động.",
                challenge: "Vượt dốc nghiêng 30 độ và tự bật còi báo nguy hiểm."
            },
            tags: ["Cảm biến độ nghiêng", "Đổi màu đèn LED", "Còi báo động", "Vượt dốc"]
        },
        {
            id: 4,
            title: "Buổi 4: Đội Cứu Hộ Milo & Hợp Tác Kéo Hàng",
            category: "c1",
            categoryName: "Khoa Học & Đời Sống",
            icon: "fa-people-carry-box",
            img: "Hình ảnh lớp học/IMG_20260815_092054.jpg",
            desc: "Lắp ráp móc kéo chịu tải cho xe Milo. Tìm hiểu ma sát bề mặt, trọng tâm xe và lập trình phối hợp nhiều robot để cùng kéo xe hàng nặng về trạm chỉ huy.",
            coreKnowledge: {
                assembly: "Thiết kế cơ cấu móc kéo, phân bổ trọng tâm tăng lực kéo.",
                sensors: "Cảm biến khoảng cách giữ khoảng cách giữa các xe trong đội.",
                coding: "Lập trình công suất động cơ tối đa và đồng bộ thời gian kéo.",
                challenge: "Kéo xe hàng nặng gấp 3 lần trọng lượng robot."
            },
            tags: ["Cơ cấu móc kéo", "Lực ma sát", "Làm việc nhóm", "Kéo tải nặng"]
        },
        {
            id: 5,
            title: "Buổi 5: Tốc Độ Xe Đua & Bí Mật Cặp Bánh Răng",
            category: "c2",
            categoryName: "Kỹ Thuật & Cơ Khí",
            icon: "fa-gauge-high",
            img: "Hình ảnh lớp học/IMG_20260815_092512.jpg",
            desc: "Khám phá nguyên lý Tỉ số truyền bánh răng: Bánh răng Lớn (24 răng) truyền động cho Bánh răng Nhỏ (8 răng) để Tăng Tốc Độ gấp 3 lần cho siêu xe đua F1.",
            coreKnowledge: {
                assembly: "Ghép cặp bánh răng tăng tốc (Tỉ số truyền 3:1) vào trục bánh xe.",
                sensors: "Lắp cảm biến khoảng cách bấm giờ vạch đích tự động.",
                coding: "Lập trình tăng ga động cơ mức 10 và đếm thời gian hoàn thành.",
                challenge: "Đua xe tốc độ cao trên đường đua thẳng 3 mét."
            },
            tags: ["Tỉ số truyền bánh răng", "Tăng tốc độ 3x", "Bánh răng 24 & 8", "Đua xe F1"]
        },
        {
            id: 6,
            title: "Buổi 6: Xe Tải Hạng Nặng & Bánh Răng Tăng Lực",
            category: "c2",
            categoryName: "Kỹ Thuật & Cơ Khí",
            icon: "fa-truck-monster",
            img: "Hình ảnh lớp học/IMG_20260822_091044.jpg",
            desc: "Nghiên cứu chiều truyền động ngược lại: Bánh răng Nhỏ dẫn động Bánh răng Lớn (Tỉ số truyền 1:3) giúp xe Giảm Tốc Độ nhưng Tăng Sức Kéo cực kỳ mạnh mẽ.",
            coreKnowledge: {
                assembly: "Ghép bánh răng nhỏ dẫn động bánh răng lớn tạo lực mô-men xoắn cao.",
                sensors: "Cảm biến nghiêng kiểm soát xe khi lên dốc chở nặng.",
                coding: "Lập trình lực kéo bền bỉ duy trì vận tốc ổn định.",
                challenge: "Chở khối gạch LEGO leo dốc nghiêng mà không bị tuột."
            },
            tags: ["Tăng mô-men lực", "Bánh răng giảm tốc", "Chở tải siêu nặng", "Leo dốc cao"]
        },
        {
            id: 7,
            title: "Buổi 7: Bàn Rung Thử Nghiệm Tòa Nhà Chống Động Đất",
            category: "c3",
            categoryName: "Thiên Tai & Cuối Khóa",
            icon: "fa-house-crack",
            img: "Hình ảnh lớp học/IMG_20260822_091135.jpg",
            desc: "Nghiên cứu nguyên lý rung chấn của động đất. Thiết kế mô hình bàn rung cơ học dùng trục khuỷu lệch tâm và thử nghiệm độ bền vững của các cấu trúc tòa nhà cao tầng.",
            coreKnowledge: {
                assembly: "Lắp ráp cơ cấu trục khuỷu biến chuyển động quay thành rung lắc.",
                sensors: "Lập trình điều chỉnh 3 cấp độ rung: Rung nhẹ, Trung bình, Động đất mạnh.",
                coding: "Sử dụng biến số công suất động cơ tăng dần theo thời gian.",
                challenge: "Xây tòa nhà tháp LEGO cao 3 tầng đứng vững qua cấp rung 3."
            },
            tags: ["Bàn rung động đất", "Trục khuỷu lệch tâm", "Cấu trúc kiên cố", "Thử tải tòa nhà"]
        },
        {
            id: 8,
            title: "Buổi 8: Đập Nước Thông Minh Chống Lũ & Cứu Hộ",
            category: "c3",
            categoryName: "Thiên Tai & Cuối Khóa",
            icon: "fa-water",
            img: "Hình ảnh lớp học/IMG_20260822_091408.jpg",
            desc: "Tìm hiểu nguyên lý xả lũ và chống ngập. Chế tạo cửa đập nước tự động đóng/mở bằng cơ cấu trục vít - bánh vít và mắt thần cảm biến nhận diện mực nước dâng cao.",
            coreKnowledge: {
                assembly: "Lắp ráp cơ cấu trục vít giữ cố định cánh đập không bị nước đẩy.",
                sensors: "Cảm biến khoảng cách giả lập đo mực nước lũ dâng cao.",
                coding: "Cửa đập tự động mở xả lũ khi nước vượt ngưỡng an toàn.",
                challenge: "Hệ thống phản ứng đóng mở chính xác trong 3 giây."
            },
            tags: ["Đập nước chống lũ", "Cơ cấu trục vít", "Mắt thần đo nước", "Tự động xả lũ"]
        },
        {
            id: 9,
            title: "Buổi 9: Chú Ếch Bật Nhảy & Chu Kỳ Sinh Học",
            category: "c1",
            categoryName: "Khoa Học & Đời Sống",
            icon: "fa-frog",
            img: "Hình ảnh lớp học/IMG_20260822_091212.jpg",
            desc: "Mô phỏng chuyển động sinh học của loài ếch. Thiết kế cơ cấu chân đòn bẩy đàn hồi và lập trình cho chú ếch LEGO bật nhảy về phía trước khi có tiếng vỗ tay.",
            coreKnowledge: {
                assembly: "Cơ cấu chân khớp nối 4 thanh tạo lực đẩy bật nhảy.",
                sensors: "Sử dụng Micro âm thanh trên máy tính bảng kích hoạt bước nhảy.",
                coding: "Vòng lặp (Loop) kết hợp lệnh kích hoạt âm thanh.",
                challenge: "Ếch bật nhảy liên tục 5 bước vượt qua vạch mức."
            },
            tags: ["Cơ chế bật nhảy", "Đòn bẩy chân ếch", "Kích hoạt âm thanh", "Chuyển động sinh học"]
        },
        {
            id: 10,
            title: "Buổi 10: Hoa Và Ong - Khám Phá Thụ Phấn Tự Nhiên",
            category: "c1",
            categoryName: "Khoa Học & Đời Sống",
            icon: "fa-seedling",
            img: "Hình ảnh lớp học/IMG_20260822_091159.jpg",
            desc: "Tìm hiểu mối quan hệ cộng sinh giữa Ong và Hoa. Chế tạo mô hình cánh bướm/ong chao lượn quanh đài hoa nhờ cơ cấu bánh răng nón đổi hướng truyền động 90 độ.",
            coreKnowledge: {
                assembly: "Lắp ráp bánh răng vương miện (Crown Gear) truyền góc 90 độ.",
                sensors: "Mắt thần cảm biến phát hiện ong tiếp cận đài hoa.",
                coding: "Khi ong chạm bông hoa, hoa phát nhạc và đổi màu chúc mừng.",
                challenge: "Đồng bộ chuyển động xoay tròn và âm thanh hút mật."
            },
            tags: ["Bánh răng nón 90°", "Ong hút mật", "Cộng sinh tự nhiên", "Cảm biến tiệm cận"]
        },
        {
            id: 11,
            title: "Buổi 11: Dự Án Robot Cứu Hộ & Dọn Dẹp Môi Trường",
            category: "c3",
            categoryName: "Thiên Tai & Cuối Khóa",
            icon: "fa-recycle",
            img: "Hình ảnh lớp học/IMG_20260822_091428.jpg",
            desc: "Tích hợp tất cả các kỹ năng đã học: Chế tạo robot gom rác tự động trang bị cả Cảm biến khoảng cách tránh chướng ngại và Tay gắp rác cơ khí điều khiển thông minh.",
            coreKnowledge: {
                assembly: "Thiết kế tích hợp khung xe, tay gắp hàng và giá đỡ cảm biến.",
                sensors: "Kết hợp linh hoạt Mắt thần và Cảm biến độ nghiêng trên 1 xe.",
                coding: "Lập trình điều kiện phức tạp: Tự dò tìm đồ vật, gắp rác và quay về trạm.",
                challenge: "Dọn dẹp sạch 3 khối rác trên sa bàn trong 60 giây."
            },
            tags: ["Robot cứu hộ đa năng", "Tay gắp cơ khí", "Lập trình rẽ nhánh", "Dự án tổng hợp"]
        },
        {
            id: 12,
            title: "Buổi 12: Báo Cáo & Thuyết Trình Dự Án Cuối Khóa",
            category: "c3",
            categoryName: "Thiên Tai & Cuối Khóa",
            icon: "fa-trophy",
            img: "Hình ảnh lớp học/IMG_20260822_091430.jpg",
            desc: "Học viên tự tay lên ý tưởng độc đáo, thiết kế mô hình robot hoàn chỉnh, lập trình chuỗi lệnh phức tạp và tự tin thuyết trình giới thiệu sản phẩm trước cả lớp.",
            coreKnowledge: {
                assembly: "Quy trình thiết kế kỹ thuật sáng tạo độc lập.",
                sensors: "Tích hợp đa cảm biến & động cơ điều khiển.",
                coding: "Tự viết kịch bản lập trình robot hoàn chỉnh.",
                challenge: "Thuyết trình & trình diễn mô hình robot sáng tạo."
            },
            tags: ["Sáng tạo ý tưởng riêng", "Tự làm robot độc đáo", "Tự tin thuyết trình"]
        }
    ];

    // --- 2. Classroom Photos Gallery Data (21 Photos) ---
    const galleryData = [
        { id: 1, src: "Hình ảnh lớp học/IMG_20260815_084353.jpg", title: "Tập trung lắp ráp khung xe Robot", cat: "building" },
        { id: 2, src: "Hình ảnh lớp học/IMG_20260815_084408.jpg", title: "Kiểm tra bánh răng truyền động", cat: "building" },
        { id: 3, src: "Hình ảnh lớp học/IMG_20260815_084432.jpg", title: "Thực hành gắn cảm biến vào cục điều khiển", cat: "coding" },
        { id: 4, src: "Hình ảnh lớp học/IMG_20260815_084441.jpg", title: "Thảo luận chia sẻ công việc cùng bạn", cat: "team" },
        { id: 5, src: "Hình ảnh lớp học/IMG_20260815_084540.jpg", title: "Ghép các khối lệnh trên máy tính bảng", cat: "coding" },
        { id: 6, src: "Hình ảnh lớp học/IMG_20260815_092054.jpg", title: "Thử nghiệm mô hình Robot kéo xe hàng", cat: "building" },
        { id: 7, src: "Hình ảnh lớp học/IMG_20260815_092102.jpg", title: "Vui mừng khi Robot chạy thành công", cat: "team" },
        { id: 8, src: "Hình ảnh lớp học/IMG_20260815_092510.jpg", title: "Cùng nhau chỉnh vị trí gắn mắt thần", cat: "team" },
        { id: 9, src: "Hình ảnh lớp học/IMG_20260815_092512.jpg", title: "Đo tốc độ di chuyển của xe đua robot", cat: "building" },
        { id: 10, src: "Hình ảnh lớp học/IMG_20260822_091044.jpg", title: "Học viên say sưa chọn mảnh ghép robot", cat: "building" },
        { id: 11, src: "Hình ảnh lớp học/IMG_20260822_091116.jpg", title: "Gắn cảm biến độ nghiêng cho xe Milo", cat: "coding" },
        { id: 12, src: "Hình ảnh lớp học/IMG_20260822_091135.jpg", title: "Thử nghiệm mô hình bàn rung Động Đất", cat: "building" },
        { id: 13, src: "Hình ảnh lớp học/IMG_20260822_091157.jpg", title: "Chỉnh sửa câu lệnh ghép cho robot", cat: "coding" },
        { id: 14, src: "Hình ảnh lớp học/IMG_20260822_091159.jpg", title: "Góc làm việc nhóm sáng tạo đầy hứng khởi", cat: "team" },
        { id: 15, src: "Hình ảnh lớp học/IMG_20260822_091210.jpg", title: "Giúp đỡ bạn học hoàn thiện mô hình", cat: "team" },
        { id: 16, src: "Hình ảnh lớp học/IMG_20260822_091212.jpg", title: "Lắp ráp robot mô phỏng Ong & Ếch", cat: "building" },
        { id: 17, src: "Hình ảnh lớp học/IMG_20260822_091408.jpg", title: "Chạy thử nghiệm hệ thống chống lũ tự động", cat: "coding" },
        { id: 18, src: "Hình ảnh lớp học/IMG_20260822_091412.jpg", title: "Phối hợp điều khiển binh đoàn Robot cứu hộ", cat: "team" },
        { id: 19, src: "Hình ảnh lớp học/IMG_20260822_091428.jpg", title: "Chuẩn bị cho buổi giới thiệu Dự Án Cuối Khóa", cat: "team" },
        { id: 20, src: "Hình ảnh lớp học/IMG_20260822_091430.jpg", title: "Tự tin giới thiệu sản phẩm Robot của mình", cat: "team" },
        { id: 21, src: "Hình ảnh lớp học/IMG_20260822_092140.jpg", title: "Khoảnh khắc chúc mừng hoàn thành khóa học", cat: "team" }
    ];

    // --- 3. 13 Student Profiles Data (Varied Realistic Ratings: 4.6 - 5.0) ---
    const studentsData = [
        {
            id: 1,
            name: "Lê Nhật Minh",
            avatar: "Avatar học sinh/Lê Nhật Minh .jpg",
            badge: "Chuyên Gia Cơ Khí",
            role: "Học Viên Xuất Sắc",
            stars: 4.9,
            strengths: "Đôi tay lắp ráp cực kỳ khéo léo; chọn và ghép các cặp bánh răng truyền động chuẩn xác giúp xe đua chạy xé gió và robot chở hàng khỏe vượt trội.",
            improvements: "Tiếp tục nâng cao kỹ năng lập trình chuỗi câu lệnh phức tạp kết hợp đa cảm biến.",
            videoUrl: "https://www.youtube.com/embed/DYqpTISKMOs",
            eval: "Nhật Minh có đôi tay rất khéo léo và khả năng chọn mảnh ghép robot rất chuẩn. Em luôn lắp robot chính xác, chắc chắn và biết cách cải tiến cặp bánh răng giúp xe đua chạy nhanh hơn và robot chở hàng khỏe hơn.",
            skills: { logic: 92, assembly: 98, creativity: 90, teamwork: 88, focus: 95 }
        },
        {
            id: 2,
            name: "Nguyễn Bảo Lâm",
            avatar: "Avatar học sinh/Nguyễn Bảo Lâm.jpg",
            badge: "Kỹ Sư Lập Trình Nhí",
            role: "Học Viên Tiên Phong",
            stars: 4.9,
            strengths: "Tư duy lập trình cực kỳ nhanh nhạy; sử dụng thành thạo các khối lệnh mắt thần cảm biến và cảm biến độ nghiêng cho robot tự động cứu hộ.",
            improvements: "Rèn luyện thêm sự cẩn thận khi căn chỉnh khớp nối cơ khí nhỏ.",
            videoUrl: "https://www.youtube.com/embed/_mp8lQIeMHY",
            eval: "Bảo Lâm là một học sinh rất thông minh và tiếp thu các khối lệnh lập trình rất nhanh. Em sử dụng thành thạo mắt thần cảm biến, tự mình ghép thành công các chuỗi lệnh thông minh cho robot cứu hộ tự động.",
            skills: { logic: 98, assembly: 90, creativity: 95, teamwork: 90, focus: 92 }
        },
        {
            id: 3,
            name: "Nguyễn Gia Thịnh",
            avatar: "Avatar học sinh/Nguyễn Gia Thịnh .jpg",
            badge: "Nhà Thiết Kế Sáng Tạo",
            role: "Học Viên Năng Động",
            stars: 4.8,
            strengths: "Trí tưởng tượng phong phú; luôn trang trí và thiết kế kiểu dáng robot sinh động, độc đáo, mang năng lượng tích cực cho cả lớp.",
            improvements: "Chú ý kiểm tra kỹ độ chắc chắn của bánh răng trước khi vận hành chạy thử.",
            videoUrl: "https://www.youtube.com/embed/1Z7SQ6F08sU",
            eval: "Gia Thịnh có trí tưởng tượng phong phú và thích thiết kế hình dáng robot độc đáo. Em hay thêm các chi tiết trang trí sinh động cho robot. Em luôn tràn đầy năng lượng tích cực và sự hăng hái trong lớp.",
            skills: { logic: 88, assembly: 94, creativity: 98, teamwork: 92, focus: 90 }
        },
        {
            id: 4,
            name: "Nguyễn Hoàng Nam Hải",
            avatar: "Avatar học sinh/Nguyễn Hoàng Nam Hải .jpg",
            badge: "Đội Trưởng Tài Năng",
            role: "Học Viên Tiêu Biểu",
            stars: 4.8,
            strengths: "Kỹ năng làm việc nhóm và lãnh đạo xuất sắc; biết phân chia công việc hợp lý và nhiệt tình hỗ trợ các bạn cùng hoàn thành dự án đập chống lũ.",
            improvements: "Phát triển thêm tư duy lập trình vòng lặp và điều kiện nâng cao.",
            videoUrl: "https://www.youtube.com/embed/1kAYJSXiXqw",
            eval: "Nam Hải có tố chất làm đội trưởng rất tốt và giao tiếp hòa đồng. Trong các bài tập nhóm, em luôn biết phân chia việc hợp lý và tận tình giúp đỡ các bạn cùng hoàn thành đập nước chống lũ đúng giờ.",
            skills: { logic: 90, assembly: 92, creativity: 91, teamwork: 98, focus: 94 }
        },
        {
            id: 5,
            name: "Nguyễn Hùng Anh (6 tuổi)",
            avatar: "Avatar học sinh/Nguyễn Hùng Anh 6 tuổi- .jpg",
            badge: "Mầm Non Tài Năng",
            role: "Học Viên Nhỏ Tuổi",
            stars: 4.7,
            strengths: "Tự lập và rất kiên trì dù mới 6 tuổi; chọn mảnh ghép đúng chuẩn nhanh chóng và rất thích thú tự vận hành robot.",
            improvements: "Rèn luyện thêm khả năng duy trì tập trung khi viết các chuỗi lệnh lập trình dài.",
            videoUrl: "https://www.youtube.com/embed/Ruq5nQUjTfo",
            eval: "Dù mới 6 tuổi và là một trong những học viên nhỏ nhất lớp, Hùng Anh rất kiên trì và tự lập. Em chọn đúng mảnh ghép robot rất nhanh và luôn thích thú tự bấm nút điều khiển cho robot chạy.",
            skills: { logic: 86, assembly: 92, creativity: 90, teamwork: 85, focus: 96 }
        },
        {
            id: 6,
            name: "Nguyễn Minh Trí",
            avatar: "Avatar học sinh/Nguyễn Minh Trí .jpg",
            badge: "Kiến Trúc Sư Robot",
            role: "Học Viên Cẩn Thận",
            stars: 4.8,
            strengths: "Cẩn thận, tỉ mỉ và điềm đĩnh; lắp mô hình tòa nhà chống động đất cực kỳ chắc chắn, đứng vững vàng khi bàn rung thử nghiệm.",
            improvements: "Tự tin xung phong phát biểu và thuyết trình ý tưởng nhiều hơn trước tập thể.",
            videoUrl: "https://www.youtube.com/embed/4K-WK0AWW_A",
            eval: "Minh Trí làm việc rất cẩn thận, điềm đĩnh và tỉ mỉ. Em cẩn thận lắp từng chiếc bánh răng và gắn cảm biến đúng vị trí. Mô hình tòa nhà chống động đất của em được lắp rất chắc chắn và đứng vững vàng.",
            skills: { logic: 93, assembly: 96, creativity: 89, teamwork: 90, focus: 97 }
        },
        {
            id: 7,
            name: "Nguyễn Ngọc Quốc Anh (6 tuổi)",
            avatar: "Avatar học sinh/Nguyễn Ngọc Quốc Anh 6 tuổi.jpg",
            badge: "Ngôi Sao Năng Lượng",
            role: "Học Viên Hăng Hái",
            stars: 4.6,
            strengths: "Sôi nổi, tò mò khám phá chuyển động động cơ và cảm biến; tiến bộ vượt bậc qua từng buổi học và tự tay hoàn thiện sản phẩm.",
            improvements: "Rèn thói quen lắng nghe trọn vẹn hướng dẫn trước khi bắt tay vào lắp ráp.",
            videoUrl: "https://www.youtube.com/embed/OA25OLI_uhA",
            eval: "Quốc Anh mang đến không khí lớp học rất sôi nổi. Em rất thích khám phá cách động cơ quay và cách mắt thần cảm biến nhận biết đồ vật. Em tiến bộ rất nhanh và tự tay hoàn thiện robot của mình.",
            skills: { logic: 88, assembly: 90, creativity: 93, teamwork: 89, focus: 94 }
        },
        {
            id: 8,
            name: "Nguyễn Thiện Bách",
            avatar: "Avatar học sinh/Nguyễn Thiện Bách.jpg",
            badge: "Chiến Binh Sáng Tạo",
            role: "Học Viên Kiên Trì",
            stars: 4.9,
            strengths: "Tinh thần không bỏ cuộc; kiên trì thử nghiệm những khối lệnh mới và sẵn sàng kiên nhẫn sửa mã khi robot gặp sự cố.",
            improvements: "Sắp xếp mã lập trình gọn gàng và tối ưu hơn nữa.",
            videoUrl: "https://www.youtube.com/embed/-o5nYTU1Vdo",
            eval: "Thiện Bách rất đam mê học làm robot. Em không ngần ngại thử nghiệm những cách ghép lệnh mới và kiên trì kiểm tra, sửa lại câu lệnh khi robot chưa chạy như ý. Tinh thần không bỏ cuộc của em rất đáng khen!",
            skills: { logic: 95, assembly: 91, creativity: 96, teamwork: 91, focus: 98 }
        },
        {
            id: 9,
            name: "Nguyễn Đăng Bách",
            avatar: "Avatar học sinh/Nguyễn Đăng Bách.jpg",
            badge: "Chuyên Gia Tối Ưu",
            role: "Học Viên Logic",
            stars: 4.8,
            strengths: "Tư duy ghép lệnh mạch lạc, thông minh; chọn cặp bánh răng xe đua rất tối ưu giúp robot đạt vận tốc mượt mà.",
            improvements: "Tích cực chia sẻ bí quyết lắp ráp bánh răng cho các bạn khác trong lớp.",
            videoUrl: "https://www.youtube.com/embed/-4H0O7TH4nk",
            eval: "Đăng Bách có tư duy ghép lệnh rất thông minh. Em luôn tìm cách sắp xếp câu lệnh gọn gàng và chọn đúng cặp bánh răng phù hợp để chú xe đua robot di chuyển nhanh và mượt mà nhất.",
            skills: { logic: 97, assembly: 93, creativity: 92, teamwork: 90, focus: 95 }
        },
        {
            id: 10,
            name: "Phạm Huy Hoàn",
            avatar: "Avatar học sinh/Phạm Huy Hoàn .jpg",
            badge: "Nhà Nghiên Cứu Robot",
            role: "Học Viên Hiếu Học",
            stars: 4.7,
            strengths: "Ham học hỏi, thích khám phá nguyên lý cảm biến; mô phỏng chuyển động sinh học (chân ếch bật nhảy, cánh ong chúa xoay) rất khéo léo.",
            improvements: "Gia cố thêm các khớp nối cơ khí để mô hình chịu lực tốt hơn.",
            videoUrl: "https://www.youtube.com/embed/JNT9MS11P5c",
            eval: "Huy Hoàn rất hay tò mò khám phá xem động cơ và mắt thần hoạt động thế nào. Em hiểu bài rất nhanh và mô phỏng rất khéo léo chuyển động của chú ếch bật nhảy và chú ong chúa xoay cánh.",
            skills: { logic: 94, assembly: 92, creativity: 94, teamwork: 93, focus: 93 }
        },
        {
            id: 11,
            name: "Trần An Nguyên",
            avatar: "Avatar học sinh/Trần An Nguyên.png",
            badge: "Nghệ Sĩ Lắp Ráp",
            role: "Học Viên Tỉ Mỉ",
            stars: 4.8,
            strengths: "Tính thẩm mỹ cao; phối màu sắc và đính kèm chi tiết robot sắc sảo; tinh thần tự giác học tập cao.",
            improvements: "Tự tin rèn luyện kỹ năng thuyết trình báo cáo trước đám đông.",
            videoUrl: null,
            eval: "An Nguyên lắp ráp rất cẩn thận và chú ý đến tính thẩm mỹ. Các mô hình robot em tạo ra không chỉ chạy tốt mà còn được phối màu và gắn chi tiết rất đẹp mắt. Em chăm chỉ và có tinh thần tự giác cao.",
            skills: { logic: 90, assembly: 97, creativity: 95, teamwork: 92, focus: 96 }
        },
        {
            id: 12,
            name: "Đào Quốc Hưng",
            avatar: "Avatar học sinh/Đào Quốc Hưng .jpg",
            badge: "Chiến Lược Gia Tự Động",
            role: "Học Viên Linh Hoạt",
            stars: 4.7,
            strengths: "Nhanh trí, ứng dụng linh hoạt cảm biến độ nghiêng để phát còi cảnh báo khi xe Milo lên dốc; hòa đồng, sẵn sàng chỉ dẫn bạn.",
            improvements: "Gọn gàng dây cáp cảm biến để không ảnh hưởng quay động cơ.",
            videoUrl: "https://www.youtube.com/embed/27v7bI3InyM",
            eval: "Quốc Hưng có tư duy nhanh nhạy và tinh thần cởi mở. Em rất nhanh trí khi dùng cảm biến độ nghiêng để giúp xe Milo phát ra âm thanh báo động khi lên dốc. Em cũng vui vẻ chỉ dẫn kinh nghiệm cho bạn cùng lớp.",
            skills: { logic: 93, assembly: 94, creativity: 91, teamwork: 95, focus: 94 }
        },
        {
            id: 13,
            name: "Đặng Khánh Nhật Minh",
            avatar: "Avatar học sinh/Đặng Khánh Nhật Minh.jpg",
            badge: "Thủ Lĩnh Công Nghệ",
            role: "Học Viên Toàn Diện",
            stars: 5.0,
            strengths: "Năng lực toàn diện xuất sắc; làm chủ các chuỗi lệnh phức tạp và mô hình robot lớn; thuyết trình dự án tự tin, lôi cuốn.",
            improvements: "Tiếp tục chinh phục các khóa học Robotics nâng cao tiếp theo.",
            videoUrl: "https://www.youtube.com/embed/MkdtpIerUNw",
            eval: "Khánh Nhật Minh thể hiện năng lực xuất sắc trong suốt khóa học. Em luôn xung phong nhận phần ghép khối lệnh và xây dựng mô hình robot phức tạp. Phần giới thiệu Dự Án Cuối Khóa của em rất tự tin và sinh động.",
            skills: { logic: 96, assembly: 95, creativity: 96, teamwork: 97, focus: 96 }
        }
    ];

    // Helper to extract YouTube video ID from various formats
    function getYouTubeId(url) {
        if (!url) return null;
        const match = url.match(/(?:embed\/|v=|vi\/|youtu\.be\/|\/v\/|\/e\/|watch\?v=)([^#&?]+)/);
        return match ? match[1] : url;
    }

    // Star rating rendering helper for full and half stars
    function renderStars(rating) {
        let html = '';
        const full = Math.floor(rating);
        const frac = rating - full;
        for (let i = 0; i < full; i++) {
            html += '<i class="fa-solid fa-star"></i> ';
        }
        if (frac >= 0.3 && frac <= 0.7) {
            html += '<i class="fa-solid fa-star-half-stroke"></i> ';
        } else if (frac > 0.7) {
            html += '<i class="fa-solid fa-star"></i> ';
        }
        const count = full + (frac >= 0.3 ? 1 : 0);
        for (let i = count; i < 5; i++) {
            html += '<i class="fa-regular fa-star"></i> ';
        }
        return html;
    }

    // --- 4. Inject 13 Individual Student Slides into Deck ---
    function injectStudentSlides() {
        const anchor = document.getElementById('students-slides-anchor');
        if (!anchor) return;

        let slidesHTML = '';
        studentsData.forEach((s, idx) => {
            const slideIdx = idx + 4; // 0-based index: Student 1 is Slide 5 (index 4)
            const videoId = s.videoUrl ? getYouTubeId(s.videoUrl) : null;
            const embedUrl = videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0` : null;
            const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : null;

            slidesHTML += `
                <section class="slide-section" data-slide="${slideIdx}">
                    <div class="container slide-content student-individual-slide">
                        <div class="student-individual-card">
                            <div class="student-slide-header">
                                <div class="student-slide-meta">
                                    <span class="student-slide-badge"><i class="fa-solid fa-graduation-cap"></i> HỌC VIÊN #${s.id} / 13</span>
                                    <span class="student-title-badge"><i class="fa-solid fa-award"></i> ${s.badge}</span>
                                </div>
                                <div class="student-slide-nav">
                                    <button class="student-nav-btn prev" onclick="goToSlide(${slideIdx - 1})" title="Slide Trước">
                                        <i class="fa-solid fa-chevron-left"></i> Trước
                                    </button>
                                    <span class="student-slide-counter">${s.id} / 13</span>
                                    <button class="student-nav-btn next" onclick="goToSlide(${slideIdx + 1})" title="Slide Tiếp Theo">
                                        Tiếp <i class="fa-solid fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="student-slide-body">
                                <!-- Column 1: Student Profile Photo & Rating -->
                                <div class="student-profile-column">
                                    <div class="student-avatar-frame">
                                        <img src="${encodeURI(s.avatar)}" alt="${s.name}" class="student-profile-img">
                                    </div>
                                    <h3 class="student-profile-name">${s.name}</h3>
                                    <div class="student-stars-box">
                                        <div class="stars-gold">
                                            ${renderStars(s.stars)}
                                        </div>
                                        <span class="stars-label">Đánh giá ${s.stars}/5.0 ⭐</span>
                                    </div>

                                    <div class="student-skills-mini">
                                        <div class="skill-mini-row">
                                            <span>Lắp ráp cơ khí: <strong>${s.skills.assembly}%</strong></span>
                                            <div class="s-bar"><div class="s-fill" style="width:${s.skills.assembly}%"></div></div>
                                        </div>
                                        <div class="skill-mini-row">
                                            <span>Tư duy lập trình: <strong>${s.skills.logic}%</strong></span>
                                            <div class="s-bar"><div class="s-fill" style="width:${s.skills.logic}%"></div></div>
                                        </div>
                                        <div class="skill-mini-row">
                                            <span>Trí sáng tạo: <strong>${s.skills.creativity}%</strong></span>
                                            <div class="s-bar"><div class="s-fill" style="width:${s.skills.creativity}%"></div></div>
                                        </div>
                                        <div class="skill-mini-row">
                                            <span>Làm việc nhóm: <strong>${s.skills.teamwork}%</strong></span>
                                            <div class="s-bar"><div class="s-fill" style="width:${s.skills.teamwork}%"></div></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Column 2: Strengths & Growth Evaluation -->
                                <div class="student-eval-column">
                                    <div class="eval-box strength-box">
                                        <h4><i class="fa-solid fa-thumbs-up"></i> ƯU ĐIỂM NỔI BẬT & THÀNH TÍCH:</h4>
                                        <p>${s.strengths}</p>
                                    </div>

                                    <div class="eval-box improvement-box">
                                        <h4><i class="fa-solid fa-bullseye"></i> ĐIỂM CẦN CẢI THIỆN & ĐỊNH HƯỚNG:</h4>
                                        <p>${s.improvements}</p>
                                    </div>

                                    <div class="eval-box summary-eval-box">
                                        <h4><i class="fa-solid fa-comment-dots"></i> LỜI NHẬN XÉT CỦA GIẢNG VIÊN:</h4>
                                        <p>"${s.eval}"</p>
                                    </div>

                                    <button class="btn-student-report-print" onclick="openStudentModal(${s.id})">
                                        <i class="fa-solid fa-certificate"></i> Xem & In Chứng Nhận Báo Cáo
                                    </button>
                                </div>

                                <!-- Column 3: Presentation Video Player -->
                                <div class="student-video-column">
                                    <div class="video-header">
                                        <i class="fa-solid fa-video"></i> Video Thuyết Trình Dự Án Cuối Khóa
                                    </div>
                                    ${videoId ? `
                                        <div class="video-iframe-wrapper">
                                            <iframe src="${embedUrl}" title="Video thuyết trình của ${s.name}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                        <div class="video-caption">
                                            <i class="fa-brands fa-youtube" style="color:#ff4d4f;"></i> Thuyết trình sản phẩm của <strong>${s.name}</strong>
                                        </div>
                                        <div class="video-actions-bar">
                                            <a href="${watchUrl}" target="_blank" rel="noopener noreferrer" class="btn-watch-youtube" title="Xem video đầy đủ trên YouTube">
                                                <i class="fa-brands fa-youtube"></i> Mở xem trên YouTube <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                            </a>
                                        </div>
                                    ` : `
                                        <div class="no-video-box">
                                            <i class="fa-solid fa-chalkboard-user"></i>
                                            <p>Học sinh thuyết trình trực tiếp tại lớp học</p>
                                            <span class="no-video-sub">Đánh giá và cấp chứng nhận dựa trên phần trình diễn trực tiếp</span>
                                        </div>
                                    `}
                                </div>
                            </div>

                            <!-- Horizontal Student Quick Jump Strip -->
                            <div class="student-jump-strip">
                                ${studentsData.map((st, sidx) => `
                                    <div class="s-jump-item ${sidx === idx ? 'active' : ''}" onclick="goToSlide(${sidx + 4})" title="Chuyển nhanh đến Slide của ${st.name}">
                                        <div class="s-jump-avatar">
                                            <img src="${encodeURI(st.avatar)}" alt="${st.name}">
                                        </div>
                                        <span class="s-jump-name">${st.name.split(' ').pop()}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </section>
            `;
        });

        anchor.outerHTML = slidesHTML;
    }

    // Inject all student slides first
    injectStudentSlides();

    // --- 5. Slide Presentation Deck Controller (19 Slides Total) ---
    const slides = document.querySelectorAll('.slide-section');
    const prevBtn = document.getElementById('prev-slide-btn');
    const nextBtn = document.getElementById('next-slide-btn');
    const counterBadge = document.getElementById('slide-counter-badge');
    const currentSlideTitle = document.getElementById('current-slide-title');
    const slideSelectBtn = document.getElementById('slide-select-btn');
    const slideDropdown = document.getElementById('slide-dropdown');
    const slideDotsContainer = document.getElementById('slide-dots');

    const slideTitles = [
        "Slide 1: Tổng Quan Khóa Học",
        "Slide 2: Giảng Viên Hướng Dẫn",
        "Slide 3: Nội Dung 12 Buổi Học",
        "Slide 4: Ảnh Hoạt Động Lớp Học",
        ...studentsData.map((s, idx) => `Slide ${idx + 5}: Nhận Xét ${s.name}`),
        "Slide 18: Tổng Kết & Chứng Nhận",
        "Slide 19: Lộ Trình Học Phần 2 (LEGO WeDo 2.0)"
    ];

    const slideIcons = [
        "fa-house",
        "fa-user-tie",
        "fa-book-open",
        "fa-images",
        ...studentsData.map(() => "fa-user-graduate"),
        "fa-trophy",
        "fa-rocket"
    ];

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Populate Slide Dropdown Menu with all 19 Slides
    function populateSlideDropdown() {
        if (!slideDropdown) return;
        slideDropdown.innerHTML = slideTitles.map((title, idx) => `
            <div class="dropdown-item ${idx === 0 ? 'active' : ''}" data-slide-target="${idx}" onclick="goToSlide(${idx})">
                <i class="fa-solid ${slideIcons[idx]}"></i> ${title}
            </div>
        `).join('');
    }
    populateSlideDropdown();

    // Populate Slide Dots with all 19 Dots
    function populateSlideDots() {
        if (!slideDotsContainer) return;
        slideDotsContainer.innerHTML = slideTitles.map((title, idx) => `
            <span class="dot ${idx === 0 ? 'active' : ''}" onclick="goToSlide(${idx})" title="${title}"></span>
        `).join('');
    }
    populateSlideDots();

    // Slide Transition Core Function
    window.goToSlide = function(index) {
        if (index < 0 || index >= totalSlides) return;

        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');

        // Reset scroll position on active slide
        slides[currentSlide].scrollTop = 0;

        // Update Counter
        if (counterBadge) counterBadge.textContent = `${currentSlide + 1} / ${totalSlides}`;

        // Update Top Title Dropdown
        if (currentSlideTitle) currentSlideTitle.textContent = slideTitles[currentSlide];

        // Update Dropdown Active States
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach((item, idx) => {
            item.classList.toggle('active', idx === currentSlide);
        });

        // Update Dots Active States & scroll dot into view
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentSlide);
            if (idx === currentSlide && slideDotsContainer) {
                dot.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        });

        // Update Navigation Button States
        if (prevBtn) prevBtn.disabled = currentSlide === 0;
        if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;

        // Close dropdown menu if open
        if (slideDropdown) slideDropdown.classList.remove('active');
    };

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Dropdown Toggle
    if (slideSelectBtn && slideDropdown) {
        slideSelectBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            slideDropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!slideDropdown.contains(e.target) && !slideSelectBtn.contains(e.target)) {
                slideDropdown.classList.remove('active');
            }
        });
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        const modalActive = document.querySelector('.modal-overlay.active') || document.querySelector('.lightbox-overlay.active');
        if (modalActive) return;

        if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
            if (currentSlide < totalSlides - 1) {
                e.preventDefault();
                goToSlide(currentSlide + 1);
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            if (currentSlide > 0) {
                e.preventDefault();
                goToSlide(currentSlide - 1);
            }
        } else if (e.key === 'Home') {
            e.preventDefault();
            goToSlide(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            goToSlide(totalSlides - 1);
        }
    });

    // Touch Swipe Support for Mobile Screens
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    const presentationWrapper = document.querySelector('.presentation-wrapper');

    if (presentationWrapper) {
        presentationWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        presentationWrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleTouchSwipe();
        }, { passive: true });
    }

    function handleTouchSwipe() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        // Check if swipe is primarily horizontal and exceeds threshold
        if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
            const modalActive = document.querySelector('.modal-overlay.active') || document.querySelector('.lightbox-overlay.active');
            if (modalActive) return;

            if (deltaX < 0 && currentSlide < totalSlides - 1) {
                // Swiped Left -> Next Slide
                goToSlide(currentSlide + 1);
            } else if (deltaX > 0 && currentSlide > 0) {
                // Swiped Right -> Prev Slide
                goToSlide(currentSlide - 1);
            }
        }
    }

    // Fullscreen Support
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.log(`Error attempting to enable fullscreen: ${err.message}`);
                });
                fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
                }
            }
        });
    }

    // --- 6. Slide 3: Interactive Lesson Showcase Viewer ---
    let currentLessonIdx = 0;
    const lessonShowcaseCard = document.getElementById('lesson-showcase-card');
    const lessonThumbsContainer = document.getElementById('lesson-thumbs-container');

    function renderFeaturedLesson(idx) {
        if (!lessonShowcaseCard) return;
        currentLessonIdx = idx;
        const l = lessonsData[idx];

        lessonShowcaseCard.innerHTML = `
            <div class="lesson-slide-header">
                <div class="lesson-slide-meta">
                    <span class="lesson-num-badge"><i class="fa-solid fa-circle-play"></i> BUỔI ${l.id} / 12</span>
                    <span class="lesson-cat-badge"><i class="fa-solid ${l.icon}"></i> ${l.categoryName}</span>
                </div>
                <div class="lesson-slide-nav">
                    <button class="lesson-nav-btn prev" onclick="prevLesson()" ${idx === 0 ? 'disabled' : ''} title="Bài Trước">
                        <i class="fa-solid fa-chevron-left"></i> Trước
                    </button>
                    <span class="lesson-slide-counter">${idx + 1} / ${lessonsData.length}</span>
                    <button class="lesson-nav-btn next" onclick="nextLesson()" ${idx === lessonsData.length - 1 ? 'disabled' : ''} title="Bài Tiếp">
                        Tiếp <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <div class="lesson-slide-body">
                <div class="lesson-img-container">
                    <div class="lesson-img-wrapper" onclick="openLightboxForSingleImage('${l.img}', '${l.title}')">
                        <img src="${encodeURI(l.img)}" alt="${l.title}" class="lesson-product-img">
                        <div class="lesson-img-overlay">
                            <span class="zoom-icon"><i class="fa-solid fa-expand"></i> Phóng to ảnh</span>
                        </div>
                    </div>
                    <span class="lesson-img-caption"><i class="fa-solid fa-camera"></i> Hình ảnh thực hành tại lớp học Teky</span>
                </div>

                <div class="lesson-info-container">
                    <h3 class="lesson-showcase-title">${l.title}</h3>
                    <p class="lesson-showcase-desc">${l.desc}</p>

                    <div class="core-knowledge-header">
                        <i class="fa-solid fa-microchip"></i> KIẾN THỨC & KỸ NĂNG TRỌNG TÂM:
                    </div>

                    <div class="core-knowledge-grid">
                        <div class="ck-item">
                            <div class="ck-icon"><i class="fa-solid fa-puzzle-piece"></i></div>
                            <div class="ck-text">
                                <h5>Cơ Khí & Lắp Ráp:</h5>
                                <p>${l.coreKnowledge.assembly}</p>
                            </div>
                        </div>

                        <div class="ck-item">
                            <div class="ck-icon"><i class="fa-solid fa-wave-square"></i></div>
                            <div class="ck-text">
                                <h5>Động Cơ & Cảm Biến:</h5>
                                <p>${l.coreKnowledge.sensors}</p>
                            </div>
                        </div>

                        <div class="ck-item">
                            <div class="ck-icon"><i class="fa-solid fa-code"></i></div>
                            <div class="ck-text">
                                <h5>Tư Duy Lập Trình:</h5>
                                <p>${l.coreKnowledge.coding}</p>
                            </div>
                        </div>

                        <div class="ck-item">
                            <div class="ck-icon"><i class="fa-solid fa-bullseye"></i></div>
                            <div class="ck-text">
                                <h5>Thử Thách Vận Hành:</h5>
                                <p>${l.coreKnowledge.challenge}</p>
                            </div>
                        </div>
                    </div>

                    <div class="lesson-tags-list">
                        ${l.tags.map(t => `<span class="lesson-tag-item"><i class="fa-solid fa-check"></i> ${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;

        // Update Thumbnails Active State
        const thumbs = document.querySelectorAll('.thumb-item');
        thumbs.forEach((thumb, tIdx) => {
            thumb.classList.toggle('active', tIdx === idx);
        });
    }

    function renderLessonThumbs() {
        if (!lessonThumbsContainer) return;
        lessonThumbsContainer.innerHTML = lessonsData.map((l, idx) => `
            <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="selectLesson(${idx})" title="${l.title}">
                <div class="thumb-img-box">
                    <img src="${encodeURI(l.img)}" alt="Buổi ${l.id}">
                    <span class="thumb-badge">B${l.id}</span>
                </div>
                <span class="thumb-title">Buổi ${l.id}</span>
            </div>
        `).join('');
    }

    window.selectLesson = function(idx) {
        renderFeaturedLesson(idx);
    };

    window.prevLesson = function() {
        if (currentLessonIdx > 0) renderFeaturedLesson(currentLessonIdx - 1);
    };

    window.nextLesson = function() {
        if (currentLessonIdx < lessonsData.length - 1) renderFeaturedLesson(currentLessonIdx + 1);
    };

    renderLessonThumbs();
    renderFeaturedLesson(0);

    // Filter Buttons for Lesson Categories
    const lessonFilterBtns = document.querySelectorAll('.filter-btn');
    lessonFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            lessonFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-cat');
            if (cat === 'all') {
                renderFeaturedLesson(0);
            } else {
                const foundIdx = lessonsData.findIndex(l => l.category === cat);
                if (foundIdx !== -1) renderFeaturedLesson(foundIdx);
            }
        });
    });

    // --- 7. Slide 4: Classroom Gallery & Lightbox ---
    const galleryGrid = document.getElementById('gallery-grid');
    const gallerySearch = document.getElementById('gallery-search');
    const galleryTabs = document.querySelectorAll('.g-tab');

    let currentGalleryCat = 'all';
    let gallerySearchQuery = '';

    function renderGallery() {
        if (!galleryGrid) return;

        let filtered = galleryData.filter(item => {
            const matchesCat = currentGalleryCat === 'all' || item.cat === currentGalleryCat;
            const matchesSearch = item.title.toLowerCase().includes(gallerySearchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });

        galleryGrid.innerHTML = filtered.map((item, idx) => `
            <div class="gallery-card" onclick="openLightbox(${idx}, filteredGallery)">
                <div class="gallery-img-wrapper">
                    <img src="${encodeURI(item.src)}" alt="${item.title}" loading="lazy">
                    <div class="gallery-card-overlay">
                        <span class="gallery-zoom-badge"><i class="fa-solid fa-magnifying-glass-plus"></i> Xem lớn</span>
                        <p class="gallery-card-title">${item.title}</p>
                    </div>
                </div>
            </div>
        `).join('');

        window.filteredGallery = filtered;
    }

    galleryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            galleryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentGalleryCat = tab.getAttribute('data-gallery-cat');
            renderGallery();
        });
    });

    if (gallerySearch) {
        gallerySearch.addEventListener('input', (e) => {
            gallerySearchQuery = e.target.value.trim();
            renderGallery();
        });
    }

    renderGallery();

    // Lightbox Functionality
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close-btn');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    let currentLightboxIdx = 0;
    let activeLightboxArray = [];

    window.openLightbox = function(index, array) {
        currentLightboxIdx = index;
        activeLightboxArray = array && array.length ? array : galleryData;
        updateLightbox();
        lightboxModal.classList.add('active');
    };

    window.openLightboxForSingleImage = function(src, caption) {
        activeLightboxArray = [{ src: src, title: caption }];
        currentLightboxIdx = 0;
        updateLightbox();
        lightboxModal.classList.add('active');
    };

    function updateLightbox() {
        if (!activeLightboxArray.length) return;
        const item = activeLightboxArray[currentLightboxIdx];
        lightboxImg.src = encodeURI(item.src);
        lightboxCaption.textContent = `${item.title} (${currentLightboxIdx + 1} / ${activeLightboxArray.length})`;
    }

    if (lightboxClose) lightboxClose.addEventListener('click', () => lightboxModal.classList.remove('active'));
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', () => {
            currentLightboxIdx = (currentLightboxIdx - 1 + activeLightboxArray.length) % activeLightboxArray.length;
            updateLightbox();
        });
    }
    if (lightboxNext) {
        lightboxNext.addEventListener('click', () => {
            currentLightboxIdx = (currentLightboxIdx + 1) % activeLightboxArray.length;
            updateLightbox();
        });
    }
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) lightboxModal.classList.remove('active');
        });
    }

    // --- 8. Student Certificate Modal ---
    const studentModal = document.getElementById('student-modal');
    const modalBodyContent = document.getElementById('modal-body-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    window.openStudentModal = function(id) {
        const student = studentsData.find(s => s.id === id);
        if (!student) return;

        modalBodyContent.innerHTML = `
            <div class="modal-student-header">
                <div class="modal-avatar">
                    <img src="${encodeURI(student.avatar)}" alt="${student.name}">
                </div>
                <div class="modal-student-info">
                    <span class="modal-badge"><i class="fa-solid fa-certificate"></i> ${student.badge}</span>
                    <h3>${student.name}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">
                        <i class="fa-solid fa-graduation-cap"></i> ${student.role} - Đánh giá: ${student.stars}/5.0 ⭐
                    </p>
                </div>
            </div>

            <div class="modal-body-padding">
                <div class="report-section">
                    <h4><i class="fa-solid fa-comment-dots"></i> Nhận Xét Đánh Giá Từ Giảng Viên:</h4>
                    <div class="full-evaluation-box">
                        "${student.eval}"
                    </div>
                </div>

                <div class="report-section">
                    <h4><i class="fa-solid fa-chart-radar"></i> Bảng Đánh Giá Chi Tiết Kỹ Năng:</h4>
                    <div class="detailed-skills-grid">
                        <div class="skill-detail-item">
                            <div class="skill-header">
                                <span>Khéo Léo & Lắp Ráp Robot</span>
                                <strong>${student.skills.assembly}%</strong>
                            </div>
                            <div class="skill-bar-outer">
                                <div class="skill-bar-inner" style="width: ${student.skills.assembly}%"></div>
                            </div>
                        </div>

                        <div class="skill-detail-item">
                            <div class="skill-header">
                                <span>Ghép Lệnh & Tư Duy Logic</span>
                                <strong>${student.skills.logic}%</strong>
                            </div>
                            <div class="skill-bar-outer">
                                <div class="skill-bar-inner" style="width: ${student.skills.logic}%"></div>
                            </div>
                        </div>

                        <div class="skill-detail-item">
                            <div class="skill-header">
                                <span>Trí Tưởng Tượng & Sáng Tạo</span>
                                <strong>${student.skills.creativity}%</strong>
                            </div>
                            <div class="skill-bar-outer">
                                <div class="skill-bar-inner" style="width: ${student.skills.creativity}%"></div>
                            </div>
                        </div>

                        <div class="skill-detail-item">
                            <div class="skill-header">
                                <span>Làm Việc Nhóm & Thuyết Trình</span>
                                <strong>${student.skills.teamwork}%</strong>
                            </div>
                            <div class="skill-bar-outer">
                                <div class="skill-bar-inner" style="width: ${student.skills.teamwork}%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="report-section">
                    <h4><i class="fa-solid fa-circle-check"></i> Các Dự Án Robot Đã Hoàn Thành:</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
                        <span class="lesson-tag-item"><i class="fa-solid fa-check"></i> Xe Thám Hiểm Milo</span>
                        <span class="lesson-tag-item"><i class="fa-solid fa-check"></i> Robot Dừng Tự Động</span>
                        <span class="lesson-tag-item"><i class="fa-solid fa-check"></i> Xe Đua Siêu Tốc</span>
                        <span class="lesson-tag-item"><i class="fa-solid fa-check"></i> Bàn Rung Động Đất</span>
                        <span class="lesson-tag-item"><i class="fa-solid fa-check"></i> Đập Nước Chống Lũ</span>
                        <span class="lesson-tag-item"><i class="fa-solid fa-check"></i> Dự Án Cuối Khóa</span>
                    </div>
                </div>

                <div class="modal-actions">
                    <button class="btn-print" onclick="window.print()">
                        <i class="fa-solid fa-print"></i> In / Tải Báo Cáo
                    </button>
                    <button class="btn-primary-sm" onclick="closeStudentModal()">
                        Hoàn Tất
                    </button>
                </div>
            </div>
        `;

        studentModal.classList.add('active');
    };

    window.closeStudentModal = function() {
        studentModal.classList.remove('active');
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeStudentModal);
    if (studentModal) {
        studentModal.addEventListener('click', (e) => {
            if (e.target === studentModal) closeStudentModal();
        });
    }

    // --- 9. Theme Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', nextTheme);
            themeToggleBtn.innerHTML = nextTheme === 'dark' 
                ? '<i class="fa-solid fa-moon"></i>' 
                : '<i class="fa-solid fa-sun"></i>';
        });
    }
});
