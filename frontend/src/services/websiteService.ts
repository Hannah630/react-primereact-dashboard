import { Website } from "../types/website";

const STORAGE_KEY = "websites";

//  預設資料（只定義一次）
const defaultData: Website[] = [
    {
        id: 1,
        name: "個人網頁履歷",
        url: "https://hannah630.github.io/Personal.resume/",
        type: "Portfolio",
        status: "Online",
        description: `
核心定位：前端基礎 + UI/UX + 動畫整合

技術技能：
- HTML5 語意化結構
- CSS3（Flexbox / Grid）
- RWD 響應式設計
- Bootstrap 5

互動 & 動畫：
- JavaScript DOM 操作
- AOS 滾動動畫
- Parallax 視差效果
`,
    },

    {
        id: 2,
        name: "光彩繡莊網頁",
        url: "https://guangcaiart.com.tw/",
        type: "Brand",
        status: "Online",
        description: `
品牌網站 + 客戶導向展示

- HTML / CSS 架構
- RWD 設計
- 品牌視覺轉換
- CTA 設計
`,
    },

    {
        id: 3,
        name: "佑奕設計網頁",
        url: "https://limdesign-cafe.com/",
        type: "Design",
        status: "Online",
        description: `
商業網站 + 前後端整合

- Bootstrap UI
- jQuery 互動
- 購物車（localStorage）
- Node.js + Express
- NewebPay 金流
`,
    },

    {
        id: 4,
        name: "Angular Demo",
        url: "https://hannah630.github.io/angular-admin-demo/",
        type: "Demo",
        status: "Online",
        description: `
企業級前端架構

- Angular
- Reactive Forms
- RxJS
- PrimeNG
`,
    },
    {
        id: 5,
        name: "DentraLab（Vue 電商 Demo）",
        url: "https://hannah630.github.io/DentraLab/",
        type: "E-commerce",
        status: "Online",
        description: `
電商展示頁 + 前端互動設計

核心定位：
- 模擬品牌型電商網站
- 強調 UI/UX + 商品展示體驗

技術技能：
- Vue 2（Component-based 架構）
- HTML5 + CSS3
- RWD 響應式設計

功能實作：
- 商品列表渲染
- 購物車互動（加減數量）
- 畫面狀態同步更新
- 元件拆分與資料傳遞

設計亮點：
- 視覺風格統一（Dental / Medical 品牌感）
- Banner + 商品區塊結構清晰
- 行動裝置操作流暢

開發重點：
- Vue 資料驅動畫面（data binding）
- 元件化設計提升可維護性
- 前端狀態管理邏輯練習
`,
    },
];
// 取得資料（模擬 API）
export const getWebsites = (): Promise<Website[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = localStorage.getItem(STORAGE_KEY);

            //  第一次進來
            if (!data) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
                resolve(defaultData);
            } else {
                //  這裡開始放的地方
                const parsed: Website[] = JSON.parse(data);

                const merged = [
                    ...parsed.map((p) => {
                        //  找 defaultData 對應的資料
                        const found = defaultData.find((d) => d.name === p.name);

                        return {
                            ...p,
                            //  補 description（舊資料沒有的）
                            description: p.description || found?.description || "",
                        };
                    }),

                    // 補新資料（舊的沒有的）
                    ...defaultData.filter(
                        (d) => !parsed.some((p) => p.name === d.name)
                    ),
                ];

                // 更新 localStorage
                localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));

                resolve(merged);
            }
        }, 500);
    });
};

// 寫入 localStorage
const save = (data: Website[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// 新增
export const createWebsite = (newItem: Website): Promise<Website[]> => {
    return new Promise((resolve) => {
        const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

        const nextId = current.length
            ? Math.max(...current.map((w: Website) => w.id)) + 1
            : 1;

        const updated = [...current, { ...newItem, id: nextId }];

        save(updated);
        resolve(updated);
    });
};

// 更新
export const updateWebsite = (updatedItem: Website): Promise<Website[]> => {
    return new Promise((resolve) => {
        const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

        const updated = current.map((w: Website) =>
            w.id === updatedItem.id ? updatedItem : w
        );

        save(updated);
        resolve(updated);
    });
};

// 刪除
export const deleteWebsite = (id: number): Promise<Website[]> => {
    return new Promise((resolve) => {
        const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

        const updated = current.filter((w: Website) => w.id !== id);

        save(updated);
        resolve(updated);
    });
};