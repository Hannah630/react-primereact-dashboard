import StatCard from "../components/StatCard";
import personalImage from "../pic/personal.jpg";
import guangcaiImage from "../pic/繡莊logo.svg";
import youyiImage from "../pic/yoyi.png";
import angularImage from "../pic/angular.jpg";
import styles from "./Dashboard.module.css";

export const portfolioRoute = "/websites";
export const personalPortfolioUrl =
  "https://hannah630.github.io/Personal.resume/";
export const guangcaiWebsiteUrl = "https://guangcaiart.com.tw/";
export const youyiWebsiteUrl = "https://limdesign-cafe.com/";

export default function Dashboard() {
  return (
    <div className={styles.grid}>
      <StatCard
        title={
          <>
            <span>個人網頁履歷</span>
            <span>Personal Portfolio</span>
          </>
        }
        value={
          <div>
            <p>
              <strong>核心定位：</strong>前端基礎 + UI/UX + 動畫整合
            </p>
            <br />
            <strong>技術技能</strong>
            <ul>
              <li>HTML5 語意化結構（SEO / 可維護性）</li>
              <li>CSS3（Flexbox / Grid 排版）</li>
              <li>RWD 響應式設計（Mobile First）</li>
              <li>Bootstrap 5 版型系統</li>
            </ul>

            <strong>互動 & 動畫</strong>
            <ul>
              <li>JavaScript DOM 操作</li>
              <li>AOS（Animate on Scroll）</li>
              <li>滾動觸發動畫設計（Scroll-based UX）</li>
              <li>Parallax 視差效果</li>
            </ul>

            <strong>UI / UX 能力</strong>
            <ul>
              <li>視覺層級設計（Typography / Spacing）</li>
              <li>使用者導向版面配置</li>
              <li>個人品牌風格建立</li>
            </ul>
          </div>
        }
        icon="pi-briefcase"
        href={personalPortfolioUrl}
        ariaLabel="個人網頁履歷 Personal Portfolio details"
        imageSrc={personalImage}
        imageAlt="個人網頁履歷作品預覽"
      />
      <StatCard
        title={
          <>
            <span>光彩繡莊網頁</span>
            <span>Guangcai Art</span>
          </>
        }
        value={
          <div>
            <p>
              <strong>核心定位：</strong>品牌網站 + 客戶導向展示
            </p>
            <br />
            <strong>前端技術</strong>
            <ul>
              <li>HTML / CSS 網站架構</li>
              <li>RWD（手機 + 平板適配）</li>
              <li>圖片展示與版面配置</li>
            </ul>

            <strong>商業應用能力</strong>
            <ul>
              <li>品牌視覺轉換（將實體品牌轉成網站）</li>
              <li>服務內容結構化呈現</li>
              <li>聯絡資訊 / CTA 設計</li>
            </ul>

            <strong>UI 設計</strong>
            <ul>
              <li>品牌風格一致性（色系 / 元素）</li>
              <li>圖文排版（Content Layout）</li>
            </ul>

            <ul>
              <li>客戶需求轉換為網站功能</li>
              <li>非技術使用者導向設計</li>
            </ul>
          </div>
        }
        icon="pi-box"
        href={guangcaiWebsiteUrl}
        ariaLabel="光彩繡莊網頁 Guangcai Art details"
        imageSrc={guangcaiImage}
        imageAlt="光彩繡莊網頁作品預覽"
        imageFit="contain"
        imageFrame="logo"
      />
      <StatCard
        title={
          <>
            <span>佑奕設計網頁</span>
            <span>Limdesign Cafe</span>
          </>
        }
        value={
          <div>
            <p>
              <strong>核心定位：</strong>商業網站 + 前後端整合 + 金流
            </p>
            <br />
            <strong>前端技術</strong>
            <ul>
              <li>Bootstrap 版型設計</li>
              <li>jQuery 互動操作</li>
              <li>商品列表 UI 設計</li>
              <li>Modal / Lightbox 圖片燈箱</li>
            </ul>

            <strong>購物車系統</strong>
            <ul>
              <li>商品加入購物車（LocalStorage）</li>
              <li>數量增減控制</li>
              <li>即時計算總金額</li>
              <li>購物車資料同步</li>
            </ul>

            <strong>後端技術</strong>
            <ul>
              <li>Node.js + Express</li>
              <li>RESTful API 設計</li>
              <li>訂單資料處理</li>
            </ul>

            <strong>第三方整合</strong>
            <ul>
              <li>藍新金流（NewebPay）</li>
              <li>EmailJS 訂單通知</li>
              <li>環境變數管理（dotenv）</li>
            </ul>

            <strong>資安 / 技術點</strong>
            <ul>
              <li>AES 加密（TradeInfo）</li>
              <li>SHA256 Hash（CheckValue）</li>
            </ul>

            <strong>部署</strong>
            <ul>
              <li>Render / Railway 部署</li>
              <li>前後端分離架構</li>
            </ul>
          </div>
        }
        icon="pi-check-circle"
        href={youyiWebsiteUrl}
        ariaLabel="佑奕設計網頁 Limdesign Cafe details"
        imageSrc={youyiImage}
        imageAlt="佑奕設計網頁作品預覽"
        imageFit="contain"
        imageFrame="navy"
      />
      <StatCard
        title={
          <>
            <span>Angular Demo</span>
            <span>In Progress</span>
          </>
        }
        value={
          <div>
            <p>
              <strong>核心定位：</strong>企業級前端架構
            </p>
            <br />
            <strong>框架能力</strong>
            <ul>
              <li>Angular Component 架構</li>
              <li>TypeScript 強型別開發</li>
              <li>模組化設計（Module / Service）</li>
            </ul>

            <strong>表單</strong>
            <ul>
              <li>Reactive Forms</li>
              <li>表單驗證（Validation）</li>
              <li>動態表單控制</li>
            </ul>

            <strong>資料處理</strong>
            <ul>
              <li>RxJS（Observable / subscribe）</li>
              <li>API 串接（HttpClient）</li>
            </ul>

            <strong>UI / 元件</strong>
            <ul>
              <li>PrimeNG UI Library</li>
              <li>Table（資料表格）</li>
              <li>Dropdown / Multi-select</li>
              <li>Dialog / CRUD 操作</li>
            </ul>

            <strong>系統能力</strong>
            <ul>
              <li>後台系統開發經驗</li>
              <li>報表頁面設計</li>
              <li>權限 / 管理功能（Admin）</li>
            </ul>
          </div>
        }
        icon="pi-hourglass"
        imageSrc={angularImage}
        imageAlt="Angular Demo 預覽"
        href="https://hannah630.github.io/angular-admin-demo/"
        to={portfolioRoute}
        ariaLabel="製作中 In Progress details"
      />
    </div>
  );
}
