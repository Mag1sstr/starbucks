import styles from "./BlurCircle.module.css";

interface IProps {
  width: number | string;
  height: number | string;
  background?: string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  className?: string;
}

function BlurCircle({
  width,
  height,
  background,
  top,
  left,
  right,
  bottom,
  className,
}: IProps) {
  return (
    <div
      className={`${styles.circle} ${className}`}
      style={{ width, height, background, top, left, right, bottom }}
    ></div>
  );
}

export default BlurCircle;
