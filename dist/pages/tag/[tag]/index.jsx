"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TagIndexRedirect;
// ✅ File: pages/tag/[tag]/index.tsx
const router_1 = require("next/router");
const react_1 = require("react");
function TagIndexRedirect() {
    const router = (0, router_1.useRouter)();
    const { tag } = router.query;
    (0, react_1.useEffect)(() => {
        if (tag) {
            router.replace(`/tag/${tag}/page/1`);
        }
    }, [tag]);
    return null;
}
