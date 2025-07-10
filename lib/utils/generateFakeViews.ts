// ✅ Tạo số lượt xem giả lập trong khoảng min–max (mỗi lần build sẽ random lại)
/**
 * @param min - số views nhỏ nhất
 * @param max - số views lớn nhất
 * @returns số nguyên ngẫu nhiên trong khoảng [min, max]
 */
export function generateFakeViews(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
