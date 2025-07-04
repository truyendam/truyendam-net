// ✅ File: lib/mock/mockStories.ts – Danh sách truyện cho Truyendam (chuẩn hóa + views động)

import { generateFakeViews } from "@/lib/utils/generateFakeViews";

export const mockStories = [
  {
    slug: "chi-ho-dam-dang",
    title: "Chị Họ Dâm Đãng",
    description:
      "Một người chị họ vừa ly dị, sống một mình với khao khát đàn ông bùng cháy... Và em trai họ tình cờ ghé qua.",
    tags: [
      "truyện sex ngắn",
      "chị họ",
      "truyện sex Việt",
      "phòng tắm",
      "đụ chị họ",
      "gợi cảm",
      "cô giáo",
    ],
    coverImage: "/images/chi-ho-dam-dang.jpg",
    totalChapters: 2,
    views: generateFakeViews(6000, 10000),
    status: "ongoing",
    updatedAt: "2025-07-01",
  },
  {
    slug: "co-giao-kich-thich",
    title: "Cô Giáo Kích Thích",
    description:
      "Cô giáo Văn xinh đẹp, dáng người bốc lửa. Một buổi chiều trú mưa, chỉ có cô và cậu học sinh đang dậy thì...",
    tags: [
      "truyện sex ngắn",
      "cô giáo",
      "truyện học trò",
      "áo dài mỏng",
      "dâm tình",
      "truyện sex mới",
    ],
    coverImage: "/images/co-giao-kich-thich.jpg",
    totalChapters: 2,
    views: generateFakeViews(7000, 11000),
    status: "ongoing",
    updatedAt: "2025-07-02",
  },
  {
    slug: "doi-sinh-vien",
    title: "Đời Sinh Viên",
    description:
      "Những tháng sinh viên,cuộc sống phòng trọ sinh viên biết bao kỉ niệm với những cuộc tình vụng trộm đầy bản năng và cám dỗ,Những cuộc tình ngây thơ khó quên",
    tags: [
      "truyện dài",
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
];
