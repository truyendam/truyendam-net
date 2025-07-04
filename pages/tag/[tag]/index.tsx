// ✅ File: pages/tag/[tag]/index.tsx
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function TagIndexRedirect() {
  const router = useRouter();
  const { tag } = router.query;

  useEffect(() => {
    if (tag) {
      router.replace(`/tag/${tag}/page/1`);
    }
  }, [tag]);

  return null;
}
