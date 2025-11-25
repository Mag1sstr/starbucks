import styles from "./BlurCircle.module.css";

interface IProps {
  width: number | string;
  height: number | string;
  background?: string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
}

function BlurCircle({
  width,
  height,
  background,
  top,
  left,
  right,
  bottom,
}: IProps) {
  return (
    <div
      className={styles.circle}
      style={{ width, height, background, top, left, right, bottom }}
    ></div>
  );
}

export default BlurCircle;
