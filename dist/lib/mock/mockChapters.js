"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockChapters = {
    "doi-sinh-vien": {
        1: { id: 1, title: "Chương 1", hasMarkdown: true, updatedAt: "2025-07-01T08:00:00+09:00" },
        2: { id: 2, title: "Chương 2", hasMarkdown: true, updatedAt: "2025-07-02T08:00:00+09:00" },
        3: { id: 3, title: "Chương 3", hasMarkdown: true, updatedAt: "2025-07-03T08:00:00+09:00" },
        4: { id: 4, title: "Chương 4", hasMarkdown: true, updatedAt: "2025-07-04T08:00:00+09:00" },
        5: { id: 5, title: "Chương 5", hasMarkdown: true, updatedAt: "2025-07-05T08:00:00+09:00" },
        6: { id: 6, title: "Chương 6", hasMarkdown: true, updatedAt: "2025-07-25T08:00:00+09:00" },
        7: { id: 7, title: "Chương 7", hasMarkdown: true, updatedAt: "2025-07-25T08:00:00+09:00" },
        8: { id: 8, title: "Chương 8", hasMarkdown: true, updatedAt: "2025-07-25T08:00:00+09:00" },
    },
    "khong-the-quen": {
        1: { id: 1, title: "Chương 1", hasMarkdown: true, updatedAt: "2025-07-01T09:00:00+09:00" },
        2: { id: 2, title: "Chương 2", hasMarkdown: true, updatedAt: "2025-07-01T10:00:00+09:00" },
        3: { id: 3, title: "Chương 3", hasMarkdown: true, updatedAt: "2025-07-01T11:00:00+09:00" },
        4: { id: 4, title: "Chương 4", hasMarkdown: true, updatedAt: "2025-07-01T12:00:00+09:00" },
        5: { id: 5, title: "Chương 5", hasMarkdown: true, updatedAt: "2025-07-01T13:00:00+09:00" },
        6: { id: 6, title: "Chương 6", hasMarkdown: true, updatedAt: "2025-07-02T09:00:00+09:00" },
        7: { id: 7, title: "Chương 7", hasMarkdown: true, updatedAt: "2025-07-02T10:00:00+09:00" },
        8: { id: 8, title: "Chương 8", hasMarkdown: true, updatedAt: "2025-07-02T11:00:00+09:00" },
        9: { id: 9, title: "Chương 9", hasMarkdown: true, updatedAt: "2025-07-02T12:00:00+09:00" },
        10: { id: 10, title: "Chương 10", hasMarkdown: true, updatedAt: "2025-07-02T13:00:00+09:00" },
        11: { id: 11, title: "Chương 11", hasMarkdown: true, updatedAt: "2025-07-03T09:00:00+09:00" },
        12: { id: 12, title: "Chương 12", hasMarkdown: true, updatedAt: "2025-07-03T10:00:00+09:00" },
        13: { id: 13, title: "Chương 13", hasMarkdown: true, updatedAt: "2025-07-03T11:00:00+09:00" }
    },
    "chong-sap-cuoi-cam-sung": {
        1: { id: 1, title: "Chương 1", hasMarkdown: true, updatedAt: "2025-07-07T08:00:00+09:00" },
        2: { id: 2, title: "Chương 2", hasMarkdown: true, updatedAt: "2025-07-07T10:00:00+09:00" },
        3: { id: 3, title: "Chương 3", hasMarkdown: true, updatedAt: "2025-07-08T08:00:00+09:00" }
    },
    "chi-bi-mat-nhe": {
        1: { id: 1, title: "Chương 1", hasMarkdown: true, updatedAt: "2025-07-08T15:00:00+09:00" },
        2: { id: 2, title: "Chương 2", hasMarkdown: true, updatedAt: "2025-07-09T08:00:00+09:00" },
        3: { id: 3, title: "Chương 3", hasMarkdown: true, updatedAt: "2025-07-10T08:00:00+09:00" },
        4: { id: 4, title: "Chương 4", hasMarkdown: true, updatedAt: "2025-07-14T08:00:00+09:00" }
    },
    "lac-loi-o-pickleball": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-08T10:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-07-09T09:30:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-07-10T08:45:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-07-10T08:45:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-07-10T08:45:00+09:00"
        }
    },
    //công nhân samsung
    "cong-nhan-samsung": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-11T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-07-11T11:30:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-07-11T08:45:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-07-12T08:45:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-07-13T08:45:00+09:00"
        },
        6: {
            id: 6,
            title: "Chương 6",
            hasMarkdown: true,
            updatedAt: "2025-07-14T08:45:00+09:00"
        },
        7: {
            id: 7,
            title: "Chương 7",
            hasMarkdown: true,
            updatedAt: "2025-07-14T08:45:00+09:00"
        },
        8: {
            id: 8,
            title: "Chương 8",
            hasMarkdown: true,
            updatedAt: "2025-07-21T08:45:00+09:00"
        },
        9: {
            id: 9,
            title: "Chương 9",
            hasMarkdown: true,
            updatedAt: "2025-07-21T08:45:00+09:00"
        },
    },
    //người yêu thằng bạn
    "nguoi-yeu-thang-ban": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-15T15:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-07-15T15:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-07-15T15:00:00+09:00"
        },
    },
    //bạn tôi xin lỗi
    "ban-toi-xin-loi": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-16T15:00:00+09:00"
        },
    },
    //cô giáo tiếng nhật
    "giao-vien-tieng-nhat": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-16T15:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-07-16T15:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-07-16T15:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-07-16T15:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-07-16T15:00:00+09:00"
        },
        6: {
            id: 6,
            title: "Chương 6",
            hasMarkdown: true,
            updatedAt: "2025-07-16T15:00:00+09:00"
        },
    },
    //cô giáo tiếng nhật
    "gap-lai-nguoi-yeu-cu": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-17T15:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-07-17T15:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-07-17T15:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-07-17T15:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-07-17T15:00:00+09:00"
        },
    },
    //vợ làm sales bds
    "vo-lam-sales-bds": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-22T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-07-22T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-07-22T11:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-07-22T11:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-07-22T11:00:00+09:00"
        },
    },
    //trai miền núi
    "trai-mien-nui": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-23T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-07-23T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-07-23T11:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-07-23T11:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-07-23T11:00:00+09:00"
        },
    },
    //sếp của chồng
    "sep-cua-chong": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-24T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-08-20T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-08-20T11:00:00+09:00"
        },
    },
    //chuyến công tác bất ổn
    "chuyen-cong-tac-bat-on": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-25T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-07-25T11:00:00+09:00"
        },
    },
    //vợ chủ quán karaoke
    "vo-chu-quan-karaoke": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-29T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-07-29T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-07-29T11:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-07-29T11:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-07-29T11:00:00+09:00"
        },
        6: {
            id: 6,
            title: "Chương 6",
            hasMarkdown: true,
            updatedAt: "2025-07-29T11:00:00+09:00"
        },
    },
    // vụng trộm xóm trọ
    "vung-trom-xom-tro": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-30T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-07-30T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-07-30T11:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-07-30T11:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-07-30T11:00:00+09:00"
        },
        6: {
            id: 6,
            title: "Chương 6",
            hasMarkdown: true,
            updatedAt: "2025-07-30T11:00:00+09:00"
        },
        7: {
            id: 7,
            title: "Chương 7",
            hasMarkdown: true,
            updatedAt: "2025-07-31T11:00:00+09:00"
        },
    },
    //vợ và hai người bạn thân
    "vo-va-hai-nguoi-ban-than": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-07-31T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-07-31T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-07-31T11:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-07-31T11:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-07-31T11:00:00+09:00"
        },
        6: {
            id: 6,
            title: "Chương 6",
            hasMarkdown: true,
            updatedAt: "2025-08-01T11:00:00+09:00"
        },
        7: {
            id: 7,
            title: "Chương 7",
            hasMarkdown: true,
            updatedAt: "2025-08-01T11:00:00+09:00"
        },
        8: {
            id: 8,
            title: "Chương 8",
            hasMarkdown: true,
            updatedAt: "2025-08-01T11:00:00+09:00"
        },
    },
    //trả nợ cho chồng
    "tra-no-cho-chong": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-08-04T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-08-04T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-08-04T11:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-08-04T11:00:00+09:00"
        },
    },
    //trả nợ cho chồng
    "bi-mat-sau-ban-cong": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-08-05T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-08-05T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-08-05T11:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-08-05T11:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-08-05T11:00:00+09:00"
        },
        6: {
            id: 6,
            title: "Chương 6",
            hasMarkdown: true,
            updatedAt: "2025-08-05T11:00:00+09:00"
        },
    },
    //
    //Anh trai vắng nhà
    "anh-trai-vang-nha": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-08-06T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-08-06T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-08-06T11:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-08-06T11:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-08-06T11:00:00+09:00"
        },
        6: {
            id: 6,
            title: "Chương 6",
            hasMarkdown: true,
            updatedAt: "2025-08-06T11:00:00+09:00"
        },
        7: {
            id: 7,
            title: "Chương 7",
            hasMarkdown: true,
            updatedAt: "2025-08-06T11:00:00+09:00"
        },
        8: {
            id: 8,
            title: "Chương 8",
            hasMarkdown: true,
            updatedAt: "2025-08-06T11:00:00+09:00"
        },
        // 9: {
        //   id: 9,
        //   title: "Chương 9",
        //   hasMarkdown: true,
        //    updatedAt: "2025-08-06T11:00:00+09:00"
        // },
    },
    //Vo-vao-khach-san-voi-nam-sinh-vien-sau-khi-choi-Pickleball
    "Vo-vao-khach-san-voi-nam-sinh-vien-sau-khi-choi-Pickleball": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-08-07T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-08-07T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-08-07T11:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-08-07T11:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-08-07T11:00:00+09:00"
        },
        6: {
            id: 6,
            title: "Chương 6",
            hasMarkdown: true,
            updatedAt: "2025-08-07T11:00:00+09:00"
        },
    },
    // Bố chồng nàng dâu
    "bo-chong-nang-dau": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-08-18T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-08-18T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-08-18T11:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-08-18T11:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-08-18T11:00:00+09:00"
        },
    },
    // Bí mật của vợ
    "bi-mat-cua-vo": {
        1: {
            id: 1,
            title: "Chương 1",
            hasMarkdown: true,
            updatedAt: "2025-08-20T11:00:00+09:00"
        },
        2: {
            id: 2,
            title: "Chương 2",
            hasMarkdown: true,
            updatedAt: "2025-08-20T11:00:00+09:00"
        },
        3: {
            id: 3,
            title: "Chương 3",
            hasMarkdown: true,
            updatedAt: "2025-08-20T11:00:00+09:00"
        },
        4: {
            id: 4,
            title: "Chương 4",
            hasMarkdown: true,
            updatedAt: "2025-08-20T11:00:00+09:00"
        },
        5: {
            id: 5,
            title: "Chương 5",
            hasMarkdown: true,
            updatedAt: "2025-08-20T11:00:00+09:00"
        },
        6: {
            id: 6,
            title: "Chương 6",
            hasMarkdown: true,
            updatedAt: "2025-08-20T11:00:00+09:00"
        },
        7: {
            id: 7,
            title: "Chương 7",
            hasMarkdown: true,
            updatedAt: "2025-08-20T11:00:00+09:00"
        },
        8: {
            id: 8,
            title: "Chương 8",
            hasMarkdown: true,
            updatedAt: "2025-08-20T11:00:00+09:00"
        },
        9: {
            id: 9,
            title: "Chương 9",
            hasMarkdown: true,
            updatedAt: "2025-08-20T11:00:00+09:00"
        },
    },
};
exports.default = mockChapters;
