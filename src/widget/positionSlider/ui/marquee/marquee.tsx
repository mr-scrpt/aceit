"use client";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./marquee.module.scss";
import { POSITION_NAME_LIST } from "@/entity/postition/model/positionName.model";

interface MarqueeProps {
  className?: string;
}

interface ColoredItem {
  itemId: string;
  color: "red" | "blue" | "pink";
}

const COLORS = ["red", "blue", "pink"] as const;

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Функция для получения случайного элемента из массива
const getRandomItem = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const Marquee: FC<MarqueeProps> = ({ className }) => {
  const [topRowItems, setTopRowItems] = useState<typeof POSITION_NAME_LIST>([]);
  const [bottomRowItems, setBottomRowItems] = useState<
    typeof POSITION_NAME_LIST
  >([]);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [coloredItems, setColoredItems] = useState<ColoredItem[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Функция для проверки видимости элементов и обновления цветов
  const checkVisibilityAndUpdateColors = () => {
    if (!wrapperRef.current) return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const items = wrapperRef.current.querySelectorAll(`.${styles.item}`);
    const newVisibleItems = new Set<string>();

    items.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemId = item.getAttribute("data-item-id");

      const isVisible =
        itemRect.left < wrapperRect.right && itemRect.right > wrapperRect.left;

      if (isVisible && itemId) {
        newVisibleItems.add(itemId);
      }
    });

    // Обновляем список видимых элементов
    setVisibleItems(newVisibleItems);

    // Проверяем и обновляем цветные элементы
    const updatedColoredItems = coloredItems.filter((item) =>
      newVisibleItems.has(item.itemId),
    );

    // Если какие-то цветные элементы исчезли, назначаем их цвета новым элементам
    const missingColorsCount = 3 - updatedColoredItems.length;
    if (missingColorsCount > 0) {
      const usedColors = new Set(updatedColoredItems.map((item) => item.color));
      const availableColors = COLORS.filter((color) => !usedColors.has(color));

      const coloredItemIds = new Set(
        updatedColoredItems.map((item) => item.itemId),
      );
      const availableItems = Array.from(newVisibleItems).filter(
        (itemId) => !coloredItemIds.has(itemId),
      );

      for (
        let i = 0;
        i < missingColorsCount && availableItems.length > 0;
        i++
      ) {
        const randomItemIndex = Math.floor(
          Math.random() * availableItems.length,
        );
        const randomItem = availableItems.splice(randomItemIndex, 1)[0];
        const randomColor = availableColors[i % availableColors.length];

        updatedColoredItems.push({
          itemId: randomItem,
          color: randomColor,
        });
      }
    }

    setColoredItems(updatedColoredItems);
    console.log("Visible items:", Array.from(newVisibleItems));
    console.log("Colored items:", updatedColoredItems);
  };

  useEffect(() => {
    const intervalId = setInterval(checkVisibilityAndUpdateColors, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [coloredItems]); // Добавляем coloredItems в зависимости

  useEffect(() => {
    const shuffledTopRowItems = shuffleArray([
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
    ]);

    const shuffledBottomRowItems = shuffleArray([
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
    ]);

    setTopRowItems(shuffledTopRowItems);
    setBottomRowItems(shuffledBottomRowItems);
  }, []);

  // Вспомогательная функция для определения класса цвета элемента
  const getItemColorClass = (itemId: string): string => {
    const coloredItem = coloredItems.find((item) => item.itemId === itemId);
    if (!coloredItem) return "";

    switch (coloredItem.color) {
      case "red":
        return styles.item_bg_red;
      case "blue":
        return styles.item_bg_blue;
      case "pink":
        return styles.item_bg_pink;
      default:
        return "";
    }
  };

  return (
    <div ref={wrapperRef} className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          <div className={styles.row}>
            {topRowItems.map((item, index) => {
              const itemId = `top-${item.id}-${index}`;
              return (
                <span
                  key={itemId}
                  className={`${styles.item} ${getItemColorClass(itemId)}`}
                  data-item-id={itemId}
                >
                  {item.position}
                </span>
              );
            })}
          </div>
          <div className={`${styles.row} ${styles.bottomRow}`}>
            {bottomRowItems.map((item, index) => {
              const itemId = `bottom-${item.id}-${index}`;
              return (
                <span
                  key={itemId}
                  className={`${styles.item} ${getItemColorClass(itemId)}`}
                  data-item-id={itemId}
                >
                  {item.position}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
