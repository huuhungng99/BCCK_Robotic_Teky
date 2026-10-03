/* ==========================================================================
   ROBOTICS COURSE PRESENTATION SLIDES - 18 SLIDES INTERACTIVE DECK
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Data Definitions ---

    // Lessons Data (12 Buổi học diễn giải đơn giản & Hình ảnh sản phẩm)
    const lessonsData = [
        {
            id: 1,
            title: "GIỚI THIỆU MILO - XE TỰ HÀNH KHÁM PHÁ KHÔNG GIAN",
            category: "milo",
            categoryName: "Binh Đoàn Milo",
            icon: "fa-rocket",
            img: "Sản phẩm từng bài/bai_1_milo.jpg",
            desc: "Khám phá chú xe thám hiểm Milo. Tập lắp bánh xe, gắn cục điều khiển trung tâm WeDo SmartHub và ghép các khối lệnh cơ bản cho xe di chuyển tiến lùi, nhấp nháy đèn báo hiệu.",
            coreKnowledge: {
                assembly: "Lắp ráp khung xe 4 bánh, kết nối động cơ với SmartHub.",
                sensors: "Động cơ WeDo & Đèn LED đổi màu SmartHub.",
                coding: "Ghép lệnh di chuyển tiến/lùi, phát âm thanh không gian.",
                challenge: "Điều khiển xe Milo tự hành khám phá môi trường."
            },
            tags: ["Lắp ráp xe Milo", "Cục điều khiển SmartHub", "Lập trình tiến lùi"]
        },
        {
            id: 2,
            title: "MILO, HÃY CẨN THẬN!",
            category: "milo",
            categoryName: "Binh Đoàn Milo",
            icon: "fa-shield-halved",
            img: "Sản phẩm từng bài/bai_2_milo.webp",
            desc: "Gắn thêm mắt thần cảm biến vật cản (Motion Sensor). Lập trình cho chú xe Milo thông minh biết tự động dừng lại khẩn cấp và phát tín hiệu cảnh báo ngay khi phát hiện chướng ngại vật phía trước.",
            coreKnowledge: {
                assembly: "Gắn cảm biến khoảng cách vào vị trí đầu xe Milo.",
                sensors: "Cảm biến khoảng cách (Motion Sensor) phát hiện vật cản.",
                coding: "Khối lệnh chờ (Wait for), tự dừng khẩn cấp & đổi màu còi cảnh báo.",
                challenge: "Thử thách Milo tự dừng chính xác trước chướng ngại vật ở 5cm."
            },
            tags: ["Mắt thần cảm biến", "Tự dừng trước vật cản", "Phát tín hiệu cảnh báo"]
        },
        {
            id: 3,
            title: "MILO GỌI, TRUNG TÂM TRẢ LỜI",
            category: "milo",
            categoryName: "Binh Đoàn Milo",
            icon: "fa-satellite-dish",
            img: "Sản phẩm từng bài/bai_3_milo.jpg",
            desc: "Trang bị cảm biến độ nghiêng (Tilt Sensor). Lập trình cho Milo phát tiếng kêu thông báo và đổi màu đèn xanh/đỏ mỗi khi xe nghiêng góc leo dốc hoặc xuống dốc.",
            coreKnowledge: {
                assembly: "Tích hợp cảm biến nghiêng và anten phát sóng trên xe Milo.",
                sensors: "Cảm biến độ nghiêng (Tilt Sensor) nhận biết góc nghiêng.",
                coding: "Gửi tín hiệu truyền tin (Send message), phát âm thanh cảnh báo.",
                challenge: "Truyền tín hiệu về trạm trung tâm khi Milo leo dốc hiểm trở."
            },
            tags: ["Cảm biến độ nghiêng", "Âm thanh truyền tin", "Báo hiệu màu đèn"]
        },
        {
            id: 4,
            title: "BINH ĐOÀN ROBOT",
            category: "mechanics",
            categoryName: "Cơ Cấu Truyền Động",
            icon: "fa-robot",
            img: "Sản phẩm từng bài/bai_4_robot.jpg",
            desc: "Tìm hiểu cách nối nhiều chú robot lại với nhau qua liên kết cơ khí và lập trình. Lập trình cho các robot hoạt động nhịp nhàng, cùng di chuyển đồng bộ như một đội binh đoàn.",
            coreKnowledge: {
                assembly: "Mô hình kết nối đa robot, móc nối kéo kéo nhịp nhàng.",
                sensors: "Đồng bộ đa động cơ & tín hiệu giao tiếp không dây.",
                coding: "Lập trình lệnh bắt đầu song song (Parallel execution).",
                challenge: "Phối hợp 2-3 robot di chuyển thẳng hàng không bị chệch hướng."
            },
            tags: ["Nối nhiều robot", "Phối hợp đồng đội", "Ghép lệnh đồng bộ"]
        },
        {
            id: 5,
            title: "ROBOT PULL XUẤT HIỆN",
            category: "mechanics",
            categoryName: "Cơ Cấu Truyền Động",
            icon: "fa-truck-pickup",
            img: "Sản phẩm từng bài/bai_5_robot_pull.jfif",
            desc: "Khám phá nguyên lý bánh răng giảm tốc (Gear Down) để tăng mô-men lực kéo. Thiết kế chú robot kéo xe hàng và thử sức kéo các đồ vật nặng trong lớp học.",
            coreKnowledge: {
                assembly: "Hệ bánh răng giảm tốc (Bánh răng nhỏ kéo bánh răng to).",
                sensors: "Tăng lực momen từ động cơ WeDo.",
                coding: "Lập trình điều khiển công suất động cơ (Motor Power).",
                challenge: "Thi đấu sức kéo: Robot nào kéo được nhiều vật nặng nhất."
            },
            tags: ["Bánh răng kéo khỏe", "Robot kéo hàng", "Thử thách sức kéo"]
        },
        {
            id: 6,
            title: "VƯƠNG QUỐC XE ĐUA",
            category: "mechanics",
            categoryName: "Cơ Cấu Truyền Động",
            icon: "fa-flag-checkered",
            img: "Sản phẩm từng bài/bai_6_race_car.jpg",
            desc: "Tập chọn cặp bánh răng tăng tốc (Gear Up - Bánh răng to kéo bánh răng nhỏ) giúp xe đạt tốc độ tối đa. Thử nghiệm kiểu dáng lướt gió và tổ chức cuộc đua xe robot gay kịch.",
            coreKnowledge: {
                assembly: "Hệ bánh răng tăng tốc (Gear Up), thiết kế thân xe khí động học.",
                sensors: "Tối ưu tốc độ quay từ động cơ.",
                coding: "Lập trình tăng tốc tối đa, lập trình đếm ngược xuất phát.",
                challenge: "Cuộc đua tốc độ xé gió trên đường đua thẳng 3 mét."
            },
            tags: ["Bánh răng tăng tốc", "Xe đua xé gió", "Thi đấu tốc độ"]
        },
        {
            id: 7,
            title: "CÔNG TRÌNH CHỐNG ĐỘNG ĐẤT",
            category: "capstone",
            categoryName: "Thiên Tai & Cuối Khóa",
            icon: "fa-building-shield",
            img: "Sản phẩm từng bài/bai_7_may_tao_dong_dat.jpg",
            desc: "Học cách lắp mô hình tòa nhà chắc chắn với kết cấu đan chéo chịu lực. Lập trình cho chiếc bàn rung lắc mô phỏng động đất với các cấp độ từ nhẹ đến mạnh.",
            coreKnowledge: {
                assembly: "Kết cấu tòa nhà cao tầng chịu lực & cơ cấu bàn rung lệch tâm.",
                sensors: "Động cơ tạo lực rung theo chu kỳ.",
                coding: "Lập trình chuỗi mức độ rung (Rung nhẹ -> Rung mạnh -> Dừng).",
                challenge: "Thử nghiệm tòa nhà đứng vững vàng khi bàn rung cấp độ 5."
            },
            tags: ["Lắp tòa nhà chắc chắn", "Bàn rung động đất", "Thử độ bền công trình"]
        },
        {
            id: 8,
            title: "SỰ TIẾN HÓA CỦA ẾCH",
            category: "nature",
            categoryName: "Mô Phỏng Tự Nhiên",
            icon: "fa-frog",
            img: "Sản phẩm từng bài/bai_8_frog.jpg",
            desc: "Tìm hiểu sự phát triển của chú ếch trong tự nhiên. Lắp ráp mô hình robot ếch có cơ cấu 4 chân đòn đẩy linh hoạt, chuyển đổi chuyển động quay thành chuyển động bật nhảy.",
            coreKnowledge: {
                assembly: "Cơ cấu đòn đẩy & thanh liên kết (Linkage) tạo chân bật nhảy.",
                sensors: "Mô phỏng sinh học chuyển động động vật.",
                coding: "Lập trình nhịp nhảy dừng ngắt quãng tự nhiên.",
                challenge: "Robot ếch nhảy vượt qua vạch đích 1 mét."
            },
            tags: ["Mô phỏng chú ếch", "Cơ cấu chân bật nhảy", "Khám phá thiên nhiên"]
        },
        {
            id: 9,
            title: "ROBOT ONG CHÚA",
            category: "nature",
            categoryName: "Mô Phỏng Tự Nhiên",
            icon: "fa-bugs",
            img: "Sản phẩm từng bài/bai_9_bee.jfif",
            desc: "Khám phá công việc hút mật thụ phấn của chú ong. Lập trình cho robot ong chúa tự động xoay cánh nhẹ nhàng và phát hiệu ứng âm thanh, đổi màu đèn khi có bông hoa/bạn ong lại gần.",
            coreKnowledge: {
                assembly: "Cơ cấu bánh răng góc nón xoay đôi cánh ong.",
                sensors: "Cảm biến khoảng cách phát hiện bông hoa lại gần.",
                coding: "Lập trình vòng lặp (Loop) cánh xoay & sự kiện cảm biến phát nhạc.",
                challenge: "Ong chúa tự xoay cánh và hát mừng khi phát hiện loài hoa đẹp."
            },
            tags: ["Mô phỏng ong chúa", "Cánh xoay tự động", "Tương tác cảm biến"]
        },
        {
            id: 10,
            title: "HỆ THỐNG ĐIỀU KHIỂN CHỐNG LŨ",
            category: "capstone",
            categoryName: "Thiên Tai & Cuối Khóa",
            icon: "fa-house-flood-water",
            img: "Sản phẩm từng bài/bai_10_floodgate.jpg",
            desc: "Lắp mô hình đập nước thông minh bảo vệ khu dân cư. Lập trình cho cửa cống xả lũ tự động mở nâng lên khi mắt thần cảm biến phát hiện mực nước dâng lên cao.",
            coreKnowledge: {
                assembly: "Mô hình cửa đập xả lũ trượt dọc & hệ thống đòn bẩy nâng.",
                sensors: "Cảm biến khoảng cách đo mực nước dâng.",
                coding: "Điều kiện (If/Else): Mực nước cao -> Mở cửa xả lũ & Cảnh báo còi.",
                challenge: "Mô phỏng giải cứu khu dân cư khỏi ngập lụt thiên tai."
            },
            tags: ["Đập nước thông minh", "Mắt thần đo nước", "Mở cửa xả lũ tự động"]
        },
        {
            id: 11,
            title: "TAI HỌA THIÊN NHIÊN VÀ GIẢI CỨU",
            category: "capstone",
            categoryName: "Thiên Tai & Cuối Khóa",
            icon: "fa-truck-medical",
            img: "Hình ảnh lớp học/IMG_20260822_091412.jpg",
            desc: "Lắp chiếc xe robot cứu hộ chuyên dụng có trang bị cánh tay gắp đồ. Lập trình điều khiển robot di chuyển vượt qua vùng thiên tai hiểm trở để giải cứu đồ vật nguy hiểm.",
            coreKnowledge: {
                assembly: "Cơ cấu tay gắp đồ & xe di chuyển bánh xích/bánh lớn.",
                sensors: "Kết hợp cảm biến nghiêng & cảm biến khoảng cách.",
                coding: "Lập trình chuỗi nhiệm vụ: Di chuyển -> Gắp vật -> Quay về.",
                challenge: "Giải cứu thành công nạn nhân mô phỏng trong 60 giây."
            },
            tags: ["Xe robot cứu hộ", "Cánh tay gắp đồ", "Vượt vật cản giải cứu"]
        },
        {
            id: 12,
            title: "DỰ ÁN CUỐI KHÓA",
            category: "capstone",
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

    // Classroom Photos Data (21 photos)
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

    // 13 Student Profiles Data
    const studentsData = [
        {
            id: 1,
            name: "Lê Nhật Minh",
            avatar: "Avatar học sinh/Lê Nhật Minh .jpg",
            badge: "Chuyên Gia Cơ Khí",
            role: "Học Viên Xuất Sắc",
            stars: 5,
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
            stars: 5,
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
            stars: 5,
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
            stars: 5,
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
            stars: 5,
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
            stars: 5,
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
            stars: 5,
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
            stars: 5,
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
            stars: 5,
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
            stars: 5,
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
            stars: 5,
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
            stars: 5,
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
            stars: 5,
            strengths: "Năng lực toàn diện xuất sắc; làm chủ các chuỗi lệnh phức tạp và mô hình robot lớn; thuyết trình dự án tự tin, lôi cuốn.",
            improvements: "Tiếp tục chinh phục các khóa học Robotics nâng cao tiếp theo.",
            videoUrl: "https://www.youtube.com/embed/MkdtpIerUNw",
            eval: "Khánh Nhật Minh thể hiện năng lực xuất sắc trong suốt khóa học. Em luôn xung phong nhận phần ghép khối lệnh và xây dựng mô hình robot phức tạp. Phần giới thiệu Dự Án Cuối Khóa của em rất tự tin và sinh động.",
            skills: { logic: 96, assembly: 95, creativity: 96, teamwork: 97, focus: 96 }
        }
    ];

    function getYouTubeId(url) {
        if (!url) return null;
        const match = url.match(/(?:embed\/|v=|vi\/|youtu\.be\/|\/v\/|\/e\/|watch\?v=)([^#&?]+)/);
        return match ? match[1] : url;
    }

    // --- 2. Inject 13 Individual Student Slides into Presentation Deck ---
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
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <span class="stars-label">Đánh giá 5/5 ⭐</span>
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

    // --- 3. Slide Presentation Deck Controller (19 Slides Total) ---
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

    // Populate Slide Dropdown Menu with all 18 Slides
    function populateSlideDropdown() {
        if (!slideDropdown) return;
        slideDropdown.innerHTML = slideTitles.map((title, idx) => `
            <div class="dropdown-item ${idx === 0 ? 'active' : ''}" data-slide-target="${idx}" onclick="goToSlide(${idx})">
                <i class="fa-solid ${slideIcons[idx]}"></i> ${title}
            </div>
        `).join('');
    }
    populateSlideDropdown();

    // Populate Slide Dots with all 18 Dots
    function populateSlideDots() {
        if (!slideDotsContainer) return;
        slideDotsContainer.innerHTML = slideTitles.map((title, idx) => `
            <span class="dot ${idx === 0 ? 'active' : ''}" onclick="goToSlide(${idx})" title="${title}"></span>
        `).join('');
    }
    populateSlideDots();

    const dots = document.querySelectorAll('.slide-dots .dot');
    const dropdownItems = document.querySelectorAll('#slide-dropdown .dropdown-item');

    window.goToSlide = function(index) {
        if (index < 0 || index >= totalSlides) return;

        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
        if (dropdownItems[currentSlide]) dropdownItems[currentSlide].classList.remove('active');

        currentSlide = index;

        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
            dots[currentSlide].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
        if (dropdownItems[currentSlide]) {
            dropdownItems[currentSlide].classList.add('active');
        }

        // Update Counter & Title
        if (counterBadge) counterBadge.textContent = `${currentSlide + 1} / ${totalSlides}`;
        if (currentSlideTitle) currentSlideTitle.textContent = slideTitles[currentSlide];

        // Close dropdown if open
        if (slideDropdown) slideDropdown.classList.remove('open');
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const nextIdx = (currentSlide - 1 + totalSlides) % totalSlides;
            goToSlide(nextIdx);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const nextIdx = (currentSlide + 1) % totalSlides;
            goToSlide(nextIdx);
        });
    }

    // Keyboard Navigation across all 18 slides
    document.addEventListener('keydown', (e) => {
        const isModalActive = document.querySelector('.modal-overlay.active') || document.querySelector('.lightbox-overlay.active');
        if (isModalActive) return;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
            e.preventDefault();
            goToSlide((currentSlide + 1) % totalSlides);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
        }
    });

    // Touch Swipe Gestures for Mobile
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const slidesContainer = document.getElementById('slides-container');
    if (slidesContainer) {
        slidesContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        slidesContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        const isModalActive = document.querySelector('.modal-overlay.active') || document.querySelector('.lightbox-overlay.active');
        if (isModalActive) return;

        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
            if (diffX < 0) {
                goToSlide((currentSlide + 1) % totalSlides);
            } else {
                goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
            }
        }
    }

    // Slide Dropdown Toggle
    if (slideSelectBtn && slideDropdown) {
        slideSelectBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            slideDropdown.classList.toggle('open');
        });

        document.addEventListener('click', () => {
            slideDropdown.classList.remove('open');
        });
    }

    // Fullscreen Toggle Button
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
                }
                fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
            }
        });
    }

    // --- 4. Render Curriculum Slide Showcase & Grid ---
    let activeLessonIndex = 0;
    let activeCategoryFilter = 'all';

    const lessonShowcaseEl = document.getElementById('lesson-slide-showcase');
    const curriculumGridEl = document.getElementById('curriculum-grid');
    const btnViewSlides = document.getElementById('btn-view-slides');
    const btnViewGrid = document.getElementById('btn-view-grid');

    function getFilteredLessons() {
        if (activeCategoryFilter === 'all') return lessonsData;
        return lessonsData.filter(l => l.category === activeCategoryFilter);
    }

    function renderLessonShowcase() {
        if (!lessonShowcaseEl) return;
        const currentList = getFilteredLessons();
        if (currentList.length === 0) {
            lessonShowcaseEl.innerHTML = `<div class="empty-msg"><i class="fa-solid fa-circle-info"></i> Không tìm thấy bài học phù hợp.</div>`;
            return;
        }

        if (activeLessonIndex >= currentList.length) activeLessonIndex = 0;
        if (activeLessonIndex < 0) activeLessonIndex = currentList.length - 1;

        const lesson = currentList[activeLessonIndex];

        lessonShowcaseEl.innerHTML = `
            <div class="featured-lesson-card">
                <div class="lesson-slide-header">
                    <div class="lesson-slide-meta">
                        <span class="lesson-slide-badge"><i class="fa-solid fa-chalkboard"></i> BUỔI HỌC #${lesson.id} / 12</span>
                        <span class="lesson-cat-badge"><i class="fa-solid ${lesson.icon}"></i> ${lesson.categoryName}</span>
                    </div>
                    <div class="lesson-slide-nav">
                        <button class="lesson-nav-btn prev" id="prev-lesson-btn" title="Bài Trước">
                            <i class="fa-solid fa-chevron-left"></i> Bài Trước
                        </button>
                        <span class="lesson-slide-counter">${activeLessonIndex + 1} / ${currentList.length}</span>
                        <button class="lesson-nav-btn next" id="next-lesson-btn" title="Bài Tiếp theo">
                            Bài Tiếp <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <div class="lesson-slide-body">
                    <div class="lesson-img-container">
                        <div class="lesson-img-wrapper" id="lesson-img-click">
                            <img src="${encodeURI(lesson.img)}" alt="${lesson.title}" class="lesson-product-img">
                            <div class="lesson-img-overlay">
                                <span class="zoom-icon"><i class="fa-solid fa-expand"></i> Phóng to ảnh sản phẩm</span>
                            </div>
                        </div>
                        <div class="lesson-img-caption">
                            <i class="fa-solid fa-camera"></i> Ảnh sản phẩm thực hành: <strong>Bài ${lesson.id}</strong>
                        </div>
                    </div>

                    <div class="lesson-info-container">
                        <h3 class="lesson-showcase-title">${lesson.title}</h3>
                        <p class="lesson-showcase-desc">${lesson.desc}</p>

                        <h4 class="core-knowledge-header"><i class="fa-solid fa-brain"></i> KIẾN THỨC TRỌNG TÂM & MỤC TIÊU BÀI HỌC:</h4>

                        <div class="core-knowledge-grid">
                            <div class="ck-item">
                                <div class="ck-icon"><i class="fa-solid fa-gears"></i></div>
                                <div class="ck-text">
                                    <h5>Cơ Cấu Máy & Lắp Ráp</h5>
                                    <p>${lesson.coreKnowledge.assembly}</p>
                                </div>
                            </div>
                            <div class="ck-item">
                                <div class="ck-icon"><i class="fa-solid fa-microchip"></i></div>
                                <div class="ck-text">
                                    <h5>Cảm Biến & Động Cơ</h5>
                                    <p>${lesson.coreKnowledge.sensors}</p>
                                </div>
                            </div>
                            <div class="ck-item">
                                <div class="ck-icon"><i class="fa-solid fa-code"></i></div>
                                <div class="ck-text">
                                    <h5>Tư Duy Lập Trình</h5>
                                    <p>${lesson.coreKnowledge.coding}</p>
                                </div>
                            </div>
                            <div class="ck-item">
                                <div class="ck-icon"><i class="fa-solid fa-bullseye"></i></div>
                                <div class="ck-text">
                                    <h5>Thử Thách Thực Hành</h5>
                                    <p>${lesson.coreKnowledge.challenge}</p>
                                </div>
                            </div>
                        </div>

                        <div class="lesson-tags-list">
                            ${lesson.tags.map(t => `<span class="lesson-tag-item"><i class="fa-solid fa-circle-check"></i> ${t}</span>`).join('')}
                        </div>
                    </div>
                </div>

                <div class="lesson-thumbs-carousel">
                    ${lessonsData.map((l, idx) => {
                        const isCurrent = l.id === lesson.id;
                        return `
                            <div class="thumb-item ${isCurrent ? 'active' : ''}" data-lesson-idx="${idx}">
                                <div class="thumb-img-box">
                                    <img src="${encodeURI(l.img)}" alt="${l.title}">
                                </div>
                                <span class="thumb-label">Bài ${l.id}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;

        document.getElementById('prev-lesson-btn').addEventListener('click', () => {
            activeLessonIndex--;
            renderLessonShowcase();
        });
        document.getElementById('next-lesson-btn').addEventListener('click', () => {
            activeLessonIndex++;
            renderLessonShowcase();
        });

        document.getElementById('lesson-img-click').addEventListener('click', () => {
            openLightboxForSingleImage(lesson.img, `${lesson.title} - Ảnh Sản Phẩm Bài ${lesson.id}`);
        });

        document.querySelectorAll('.lesson-thumbs-carousel .thumb-item').forEach(thumb => {
            thumb.addEventListener('click', () => {
                const targetIdx = parseInt(thumb.dataset.lessonIdx);
                const targetLesson = lessonsData[targetIdx];
                const currentFiltered = getFilteredLessons();
                const newFilteredIdx = currentFiltered.findIndex(l => l.id === targetLesson.id);
                if (newFilteredIdx !== -1) {
                    activeLessonIndex = newFilteredIdx;
                } else {
                    activeCategoryFilter = 'all';
                    document.querySelectorAll('.curriculum-filter .filter-chip').forEach(c => {
                        c.classList.toggle('active', c.dataset.filter === 'all');
                    });
                    activeLessonIndex = targetIdx;
                }
                renderLessonShowcase();
            });
        });
    }

    function renderCurriculum() {
        if (!curriculumGridEl) return;
        curriculumGridEl.innerHTML = '';
        const filtered = getFilteredLessons();

        filtered.forEach((lesson, index) => {
            const card = document.createElement('div');
            card.className = 'lesson-card';
            card.innerHTML = `
                <div class="lesson-card-img-wrapper" data-lesson-idx="${index}">
                    <img src="${encodeURI(lesson.img)}" alt="${lesson.title}" loading="lazy" class="lesson-card-img">
                    <span class="lesson-badge">Bài ${lesson.id}</span>
                    <div class="lesson-card-overlay">
                        <span class="zoom-btn"><i class="fa-solid fa-expand"></i> Phóng to</span>
                    </div>
                </div>
                <div class="lesson-card-content">
                    <div class="lesson-card-header">
                        <div class="lesson-icon-wrapper">
                            <i class="fa-solid ${lesson.icon}"></i>
                        </div>
                        <span class="lesson-cat-pill">${lesson.categoryName}</span>
                    </div>
                    <h3 class="lesson-title">${lesson.title}</h3>
                    <p class="lesson-desc">${lesson.desc}</p>
                    <div class="lesson-tags">
                        ${lesson.tags.map(t => `<span class="lesson-tag-item"><i class="fa-solid fa-check"></i> ${t}</span>`).join('')}
                    </div>
                    <button class="btn-play-lesson-slide" data-lesson-idx="${index}">
                        <i class="fa-solid fa-desktop"></i> Trình Chiếu Slide Bài Này
                    </button>
                </div>
            `;
            
            card.querySelector('.lesson-card-img-wrapper').addEventListener('click', () => {
                openLightboxForSingleImage(lesson.img, `${lesson.title} - Ảnh Sản Phẩm Bài ${lesson.id}`);
            });

            card.querySelector('.btn-play-lesson-slide').addEventListener('click', () => {
                activeLessonIndex = index;
                switchCurriculumView('slides');
                renderLessonShowcase();
            });

            curriculumGridEl.appendChild(card);
        });
    }

    function switchCurriculumView(mode) {
        if (mode === 'slides') {
            btnViewSlides.classList.add('active');
            btnViewGrid.classList.remove('active');
            lessonShowcaseEl.classList.remove('hidden');
            curriculumGridEl.classList.add('hidden');
        } else {
            btnViewSlides.classList.remove('active');
            btnViewGrid.classList.add('active');
            lessonShowcaseEl.classList.add('hidden');
            curriculumGridEl.classList.remove('hidden');
        }
    }

    if (btnViewSlides && btnViewGrid) {
        btnViewSlides.addEventListener('click', () => switchCurriculumView('slides'));
        btnViewGrid.addEventListener('click', () => switchCurriculumView('grid'));
    }

    // Filter Chips Event Handlers
    const filterChips = document.querySelectorAll('.curriculum-filter .filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeCategoryFilter = chip.dataset.filter;
            activeLessonIndex = 0;
            renderLessonShowcase();
            renderCurriculum();
        });
    });

    renderLessonShowcase();
    renderCurriculum();

    // --- 5. Render Classroom Gallery Grid ---
    const galleryGrid = document.getElementById('gallery-grid');
    let currentGalleryList = [...galleryData];

    function renderGallery(items) {
        if (!galleryGrid) return;
        galleryGrid.innerHTML = '';
        items.forEach((photo, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <img src="${encodeURI(photo.src)}" alt="${photo.title}" loading="lazy">
                <div class="gallery-overlay">
                    <div class="gallery-zoom-icon"><i class="fa-solid fa-expand"></i></div>
                    <div class="gallery-info">
                        <h4>${photo.title}</h4>
                        <p><i class="fa-solid fa-camera"></i> Ảnh Lớp Học #${photo.id}</p>
                    </div>
                </div>
            `;
            item.addEventListener('click', () => openLightbox(index, items));
            galleryGrid.appendChild(item);
        });
    }
    renderGallery(galleryData);

    const gTabs = document.querySelectorAll('.g-tab');
    const gSearch = document.getElementById('gallery-search');

    function filterGallery() {
        const activeTab = document.querySelector('.g-tab.active').dataset.gtab;
        const query = gSearch.value.toLowerCase().trim();

        currentGalleryList = galleryData.filter(item => {
            const matchesTab = activeTab === 'all' || item.cat === activeTab;
            const matchesQuery = item.title.toLowerCase().includes(query);
            return matchesTab && matchesQuery;
        });

        renderGallery(currentGalleryList);
    }

    gTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            gTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterGallery();
        });
    });

    if (gSearch) gSearch.addEventListener('input', filterGallery);

    // --- 6. Lightbox Functionality ---
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close-btn');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    let currentLightboxIdx = 0;
    let activeLightboxArray = [];

    function openLightbox(index, array) {
        currentLightboxIdx = index;
        activeLightboxArray = array;
        updateLightbox();
        lightboxModal.classList.add('active');
    }

    window.openLightboxForSingleImage = function(src, caption) {
        activeLightboxArray = [{ src: src, title: caption }];
        currentLightboxIdx = 0;
        updateLightbox();
        lightboxModal.classList.add('active');
    };

    function updateLightbox() {
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

    // --- 7. Student Detail Modal Function ---
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
                        <i class="fa-solid fa-graduation-cap"></i> ${student.role} - Khóa Học Robotics Sáng Tạo 2026
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

    // --- 8. Theme Toggle ---
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
