// ✅ File: lib/mock/mockStories.ts – Danh sách truyện cho Truyendam (chuẩn hóa + views động)

import { generateFakeViews } from "../utils/generateFakeViews";

export const mockStories = [
  
  {
    slug: "doi-sinh-vien",
    title: "Đời Sinh Viên",
    description:
      "Những tháng sinh viên,cuộc sống phòng trọ sinh viên biết bao kỉ niệm với những cuộc tình vụng trộm đầy bản năng và cám dỗ,Những cuộc tình ngây thơ khó quên",
    tags: [
      "truyện dài","truyện ngoại tình dài tập",
      "chị em",
      "chồng yếu sinh lý",
      "lén lút",
      "đời sinh viên",
      "truyện Việt",
      "vụng trộm",
      "xóm trọ",
    ],
    coverImage: "/images/doi-sinh-vien/cover.jpg",
    totalChapters: 5,
    views: generateFakeViews(9000, 15000),
    status: "ongoing",
    updatedAt: "2025-07-03",
  },
  //không thể quên
  {
  slug: "khong-the-quen",
  title: "Không thể quên...",
  description:
    "Truyện cô nàng cô đơn dài tập kể về những đêm lén lút với người yêu cũ, Những cuộc làm tình khó quên khiến cô không thể dứt khỏi ký ức về anh.",
  tags: [
    "truyện dài","truyện ngoại tình dài tập",
    "truyện sex hay",
    "truyện sex dài tập",
    "chị em",
    "vắng chồng",
    "lén lút",
    "truyện Việt",
    "vụng trộm",
  ],
  coverImage: "/images/khong-the-quen/khong-the-quen.jpg",
  totalChapters: 13,
  views: generateFakeViews(9000, 15000),
  status: "ongoing",
  updatedAt: "2025-07-04",
},
//chồng sắp cưới bị cắp sừng
{
  slug: "chong-sap-cuoi-cam-sung",
  title: "Chồng sắp cưới bị cắm sừng",
  description:
    "Trang – cô nàng sale gợi cảm – yêu một anh IT hiền lành, vụng về. Tưởng như chuyện tình đẹp sẽ đi tới hôn nhân, nhưng một buổi massage tại resort đã làm mọi thứ rẽ lối. Cô không ngờ... mình lại run rẩy dưới tay một người đàn ông khác.",
  tags: [
    "truyện sex ngắn","truyện ngoại tình dài tập",
    "cắm sừng",
    "sale quyến rũ",
    "resort",
    "massage",
    "phản bội",
    "vụng trộm",
    "truyện Việt","truyện sex massage","massage sex",
  ],
  coverImage: "/images/chong-sap-cuoi-cam-sung/cover.jpg",
  totalChapters: 3,
  views: generateFakeViews(8000, 13000),
  status: "ongoing",
  updatedAt: "2025-07-07"
},
//chị bí mật nhé
{
  slug: "chi-bi-mat-nhe",
  title: "Chị... Bí mật nhé",
  description:
    "Một đêm Tết lỡ chuyến đò, Dương và chị họ phải ngủ lại cùng phòng. Giường hẹp, áo ướt, hơi thở gần – và một lần vô tình chạm vào cấm kỵ. Câu chuyện gợi cảm, mập mờ giữa hai chị em họ – nơi giới hạn bị thử thách trong đêm mưa phùn...",
  tags: [
    "truyện sex ngắn","truyện ngoại tình dài tập",
    "chị em họ",
    "truyện Tết",
    "truyện 18+",
    "truyện Việt",
    "mưa lạnh",
    "nhà nghỉ",
    "lỡ chuyến xe",
    "truyện gợi cảm",
    "bí mật chị em","truyện sex chị em","tình chị em","truyện sex chị họ Tết",
  ],
  coverImage: "/images/chi-bi-mat-nhe/cover.jpg",
  totalChapters: 3,
  views: generateFakeViews(6000, 10000),
  status: "ongoing",
  updatedAt: "2025-07-08",
},
//lạc lối ở pickleball
{
  slug: "lac-loi-o-pickleball",
  title: "Lạc lối ở Pickleball",
  description:
    "Linh – cô vợ đoan trang – lần đầu theo chồng ra sân Pickleball. Một môn thể thao tưởng chừng vô hại… nhưng nơi ấy, cô đã run rẩy dưới ánh mắt của Vinh – người đàn ông không phải chồng cô. Một truyện sex dài tập, gợi cảm, ngập tràn đấu tranh và bản năng – nơi vợ ngoan bị dẫn dắt đến tận cùng dục vọng.",
  tags: [
    "truyện dài",
    "truyện sex dài tập",
    "truyện ngoại tình",
    "gái ngoan",
    "pickleball",
    "vợ chồng",
    "trượt dần",
    "truyện Việt",
    "truyện thể thao gợi cảm",
    "gái ngoan thành hư",
    "vụng trộm","truyện sex tâm lý",
"vợ bị cám dỗ",
"truyện ngoại tình dài tập",
"gái ngoan bị dụ",
"sex thể thao"
  ],
  coverImage: "/images/lac-loi-pickleball/cover.jpg",
  totalChapters: 5,
  views: generateFakeViews(7000, 13000),
  status: "ongoing",
  updatedAt: "2025-07-09",
},
//công nhân samsung
{
    slug: "cong-nhan-samsung",
    title: "Công Nhân Samsung",
    description:
      "Phương – cô gái trẻ từ Hà Nội về Bắc Ninh làm công nhân – tưởng rằng tình yêu xa sẽ giữ được nguyên vẹn. Nhưng rồi cô bị lôi vào vòng xoáy dục vọng và trả thù, khi người yêu cũ và tổ trưởng cùng bước vào cuộc đời cô. Một truyện sex dài tập, đầy cảm xúc và bất ngờ,cuộc đời bị xé làm đôi giữa tình yêu và xác thịt",
    tags: [
      "truyện dài", "truyện sex dài tập", "công nhân", "trả thù", "vụng trộm",
      "tình công sở", "bắc ninh", "samsung", "truyện Việt", "ngoại tình", "có thai",
      "khu công nghiệp", "truyện sex tâm lý", "chuyện thật", "truyện dài tập",
      "tổ trưởng kho", "cắm sừng", "bị dụ chén",
      "truyện sex công nhân Samsung", "truyện sex Bắc Ninh",
    ],
    coverImage: "/images/cong-nhan-samsung/cover.jpg",
    totalChapters: 4,
    views: generateFakeViews(5000, 20000),
    status: "ongoing",
    updatedAt: "2025-07-11"
  }


];
