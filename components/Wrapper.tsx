import Link from "next/link";
import { FC } from "react";

import styles from './Wrapper.module.css';
import Footer from "./Footer";

export type WrapperProps = {
  variant: "default" | "farm";
}

const Wrapper : FC<WrapperProps> = ({
  children,
  variant = "default"
}) => (
  // Side image variant
  variant === "farm" ? (
    <div className="flex flex-row">
      <div className={styles.TextContainer}>
        <div className="max-w-[720px] space-y-24 lg:pb-12">
          {/* Header */}
          {/* Content */}
          {children}
          {/* Footer */}
          <Footer />
        </div>
      </div>
      <div className={styles.FarmImage}></div>
    </div>
  )
  // Default variant
  : (
    <div className="flex flex-row">
      <div className={styles.TextContainer}>
        <div className="max-w-[720px] w-full space-y-6 lg:pb-12">
          {/* Header */}
          {/* Content */}
          {children}
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
)

export default Wrapper;
