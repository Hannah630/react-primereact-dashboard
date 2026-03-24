import { Card } from "primereact/card";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./StatCard.module.css";

interface StatCardProps {
  title: ReactNode;
  value: ReactNode;
  icon: string;
  to?: string;
  href?: string;
  ariaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageFrame?: "default" | "logo" | "navy";
}

export default function StatCard({
  title,
  value,
  icon,
  to,
  href,
  ariaLabel,
  imageSrc,
  imageAlt,
  imageFit = "cover",
  imageFrame = "default",
}: StatCardProps) {
  const imageAreaClassName = [
    styles.imageArea,
    imageFrame === "logo" ? styles.imageAreaLogo : "",
    imageFrame === "navy" ? styles.imageAreaNavy : "",
  ]
    .filter(Boolean)
    .join(" ");

  const imageClassName = [
    styles.image,
    imageFit === "contain" ? styles.imageContain : styles.imageCover,
    imageFrame === "logo" ? styles.imageInset : "",
  ]
    .filter(Boolean)
    .join(" ");

  const cardContent = (
    <Card className={styles.card}>
      <div className={styles.content}>
        <div className={imageAreaClassName}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt ?? ""}
              className={imageClassName}
            />
          ) : (
            <i
              className={`pi ${icon} ${styles.imageIcon}`}
              aria-hidden="true"
            />
          )}
        </div>

        <div className={styles.textContent}>
          <p className={styles.label}>{title}</p>
          <p className={styles.value}>{value}</p>
        </div>
      </div>
    </Card>
  );

  if (href) {
    return (
      <a
        href={href}
        className={styles.link}
        aria-label={ariaLabel}
        target="_blank"
        rel="noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={styles.link} aria-label={ariaLabel}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
