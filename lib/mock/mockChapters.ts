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
  }
};

export default mockChapters;
