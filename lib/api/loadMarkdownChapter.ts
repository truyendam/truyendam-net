import fs from "fs";
import path from "path";
import { marked } from "marked";

export async function loadMarkdownChapter(slug: string, id: number): Promise<{ content: string }> {
  const filePath = path.join(process.cwd(), "content", slug, `chapter-${id}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const html = await marked.parse(raw);
  return { content: html as string };
}
