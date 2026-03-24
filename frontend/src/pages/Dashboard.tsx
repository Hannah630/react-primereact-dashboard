import StatCard from "../components/StatCard";
import personalImage from "../pic/personal.jpg";
import guangcaiImage from "../pic/繡莊logo.svg";
import youyiImage from "../pic/yoyi.png";
import styles from "./Dashboard.module.css";

const portfolioRoute = "/websites";
const personalPortfolioUrl = "https://hannah630.github.io/Personal.resume/";
const guangcaiWebsiteUrl = "https://guangcaiart.com.tw/";
const youyiWebsiteUrl = "https://limdesign-cafe.com/";

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
        value="整合個人簡介ㄍ、技能展示與專案作品的響應式履歷網站。"
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
            <span>Guangcai Embroidery Website</span>
          </>
        }
        value="品牌形象與刺繡作品展示網站，呈現服務內容與聯絡資訊。"
        icon="pi-box"
        href={guangcaiWebsiteUrl}
        ariaLabel="光彩繡莊網頁 Guangcai Embroidery Website details"
        imageSrc={guangcaiImage}
        imageAlt="光彩繡莊網頁作品預覽"
        imageFit="contain"
        imageFrame="logo"
      />
      <StatCard
        title={
          <>
            <span>佑奕設計網頁</span>
            <span>Youyi Design Website</span>
          </>
        }
        value="設計品牌官網，聚焦視覺風格、案例展示與商業資訊整合。"
        icon="pi-check-circle"
        href={youyiWebsiteUrl}
        ariaLabel="佑奕設計網頁 Youyi Design Website details"
        imageSrc={youyiImage}
        imageAlt="佑奕設計網頁作品預覽"
        imageFit="contain"
        imageFrame="navy"
      />
      <StatCard
        title={
          <>
            <span>製作中</span>
            <span>In Progress</span>
          </>
        }
        value="目前正在規劃與製作中的新作品，後續會持續更新上線。"
        icon="pi-hourglass"
        to={portfolioRoute}
        ariaLabel="製作中 In Progress details"
      />
    </div>
  );
}
