const mockChapters: Record<
  string,
  Record<number, {
    id: number;
    title: string;
    hasMarkdown: boolean;
    updatedAt?: string; 
  }>
> = {
  "doi-sinh-vien": {
    1: { id: 1, title: "Chương 1", hasMarkdown: true, updatedAt: "2025-07-01T08:00:00+09:00" },
    2: { id: 2, title: "Chương 2", hasMarkdown: true, updatedAt: "2025-07-02T08:00:00+09:00" },
    3: { id: 3, title: "Chương 3", hasMarkdown: true, updatedAt: "2025-07-03T08:00:00+09:00" },
    4: { id: 4, title: "Chương 4", hasMarkdown: true, updatedAt: "2025-07-04T08:00:00+09:00" },
    5: { id: 5, title: "Chương 5", hasMarkdown: true, updatedAt: "2025-07-05T08:00:00+09:00" }
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
    3: { id: 3, title: "Chương 3", hasMarkdown: true, updatedAt: "2025-07-10T08:00:00+09:00" }
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
  }
};

export default mockChapters;
