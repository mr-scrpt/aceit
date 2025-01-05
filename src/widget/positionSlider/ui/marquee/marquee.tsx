import { FC, useMemo } from "react";
import styles from "./marquee.module.scss";
import { POSITION_NAME_LIST } from "@/entity/postition/model/positionName.model";

interface MarqueeProps {
  className?: string;
}

interface MarqueeProps {
  className?: string;
}

// Функция для перемешивания массива (алгоритм Фишера-Йетса)
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const Marquee: FC<MarqueeProps> = ({ className }) => {
  // Создаем два разных перемешанных массива для верхней и нижней строки
  const topRowItems = useMemo(
    () =>
      shuffleArray([
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
      ]),
    [],
  );

  const bottomRowItems = useMemo(
    () =>
      shuffleArray([
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
        ...POSITION_NAME_LIST,
      ]),
    [],
  );

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          <div className={styles.row}>
            {topRowItems.map((item, index) => (
              <span key={`top-${item.id}-${index}`} className={styles.item}>
                {item.position}
              </span>
            ))}
          </div>
          <div className={`${styles.row} ${styles.bottomRow}`}>
            {bottomRowItems.map((item, index) => (
              <span key={`bottom-${item.id}-${index}`} className={styles.item}>
                {item.position}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
