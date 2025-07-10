"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const ContinueReading = ({ slug, totalChapters }) => {
    const [lastRead, setLastRead] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem(`last-read-${slug}`);
            if (stored) {
                const chapter = parseInt(stored);
                if (!isNaN(chapter) && chapter >= 1 && chapter <= totalChapters) {
                    setLastRead(chapter);
                }
            }
        }
    }, [slug, totalChapters]);
    if (!lastRead)
        return null;
    return (<div className="mt-4 p-3 rounded bg-pink-50 dark:bg-zinc-800 text-sm text-zinc-700 dark:text-white border border-pink-300 dark:border-zinc-600">
      📌 Bạn đã đọc đến{" "}
      <link_1.default href={`/truyen/${slug}/chapters/${lastRead}`} className="underline text-pink-600 dark:text-pink-400 hover:font-semibold">
        chương {lastRead}
      </link_1.default>
      . Tiếp tục đọc?
    </div>);
};
exports.default = ContinueReading;
