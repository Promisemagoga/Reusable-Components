import React from "react";
import styles from "./Text.module.css";

type Props = {
  variant?: string;
  children: React.ReactNode;
  // style?: React.CSSProperties;
};

export const Text = ({ variant, children }: Props) => {
  if (variant === "h1") return <h1 className={styles.heading}>{children}</h1>;
  if (variant === "h2")
    return <h2 className={styles.subHeading}>{children}</h2>;
  if (variant === "p") return <p className={styles.paragraph}>{children}</p>;
  if (variant === "span") return <li className={styles.links}>{children}</li>;

  return <div style={styles}>{children}</div>;
};
