// ✅ File: lib/mock/mockChapters.ts

const mockChapters: Record<
  string,
  Record<number, { id: number; title: string; hasMarkdown: boolean }>
> = {
  "chi-ho-dam-dang": {
    1: {
      id: 1,
      title: "Chương 1",
      hasMarkdown: false
    },
    2: {
      id: 2,
      title: "Chương 2",
      hasMarkdown: false
    }
  },
  "co-giao-kich-thich": {
    1: {
      id: 1,
      title: "Chương 1",
      hasMarkdown: false
    },
    2: {
      id: 2,
      title: "Chương 2",
      hasMarkdown: false
    }
  },
  "doi-sinh-vien": {
    1: {
      id: 1,
      title: "Chương 1",
      hasMarkdown: true
    },
    2: {
      id: 2,
      title: "Chương 2",
      hasMarkdown: true
    },
    3: {
      id: 3,
      title: "Chương 3",
      hasMarkdown: true
    },
    4: {
      id: 4,
      title: "Chương 4",
      hasMarkdown: true
    },
    5: {
      id: 5,
      title: "Chương 5",
      hasMarkdown: true
    }
  },
  //không thể quên
    "khong-the-quen": {
    1: {
      id: 1,
      title: "Chương 1",
      hasMarkdown: true
    },
    2: {
      id: 2,
      title: "Chương 2",
      hasMarkdown: true
    },
    3: {
      id: 3,
      title: "Chương 3",
      hasMarkdown: true
    },
    4: {
      id: 4,
      title: "Chương 4",
      hasMarkdown: true
    },
    5: {
      id: 5,
      title: "Chương 5",
      hasMarkdown: true
    },
     6: {
      id: 6,
      title: "Chương 6",
      hasMarkdown: true
    },
     7: {
      id: 7,
      title: "Chương 7",
      hasMarkdown: true
    },
     8: {
      id: 8,
      title: "Chương 8",
      hasMarkdown: true
    },
     9: {
      id: 9,
      title: "Chương 9",
      hasMarkdown: true
    },
     10: {
      id: 10,
      title: "Chương 10",
      hasMarkdown: true
    },
     11: {
      id: 11,
      title: "Chương 11",
      hasMarkdown: true
    },
     12: {
      id: 12,
      title: "Chương 12",
      hasMarkdown: true
    },
     13: {
      id: 13,
      title: "Chương 13",
      hasMarkdown: true
    }
  }
};

export default mockChapters;
