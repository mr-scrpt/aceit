"use client";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./marquee.module.scss";
import { shuffleArray } from "../../helper/shuffleArray.helper";
import {
  MarqueeProps,
  APPEARANCE,
  ColoredItem,
} from "../../domain/postionMarquee.type";
import { usePositionNameListModel } from "@/entity/postition";

export const Marquee: FC<MarqueeProps> = ({ className }) => {
  const { positionNameList } = usePositionNameListModel();
  const [topRowItems, setTopRowItems] = useState<typeof positionNameList>([]);
  const [bottomRowItems, setBottomRowItems] = useState<typeof positionNameList>(
    [],
  );
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [coloredItems, setColoredItems] = useState<ColoredItem[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInitializedRef = useRef(false);

  // Функция для инициализации цветных элементов
  const initializeColoredItems = () => {
    if (!wrapperRef.current || isInitializedRef.current) return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const items = wrapperRef.current.querySelectorAll(`.${styles.item}`);
    const visibleItemIds: string[] = [];

    items.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemId = item.getAttribute("data-item-id");

      const isVisible =
        itemRect.left < wrapperRect.right && itemRect.right > wrapperRect.left;

      if (isVisible && itemId) {
        visibleItemIds.push(itemId);
      }
    });

    // Выбираем случайные 3 элемента из видимых и назначаем им цвета
    const initialColoredItems: ColoredItem[] = [];
    const shuffledColors = shuffleArray([...APPEARANCE]);

    for (let i = 0; i < 3 && i < visibleItemIds.length; i++) {
      const randomIndex = Math.floor(Math.random() * visibleItemIds.length);
      const selectedItemId = visibleItemIds.splice(randomIndex, 1)[0];

      initialColoredItems.push({
        itemId: selectedItemId,
        appearance: shuffledColors[i],
      });
    }

    setColoredItems(initialColoredItems);
    setVisibleItems(
      new Set(
        visibleItemIds.concat(initialColoredItems.map((item) => item.itemId)),
      ),
    );
    isInitializedRef.current = true;
  };

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
      const usedColors = new Set(
        updatedColoredItems.map((item) => item.appearance),
      );
      const availableColors = APPEARANCE.filter(
        (color) => !usedColors.has(color),
      );

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
          appearance: randomColor,
        });
      }
    }

    setColoredItems(updatedColoredItems);
  };

  // Эффект для инициализации цветных элементов
  useEffect(() => {
    // Даем время на первичный рендеринг
    const initTimeout = setTimeout(() => {
      initializeColoredItems();
    }, 100);

    return () => clearTimeout(initTimeout);
  }, [topRowItems, bottomRowItems]);

  // Эффект для запуска интервала проверки
  useEffect(() => {
    if (!isInitializedRef.current) return;

    const intervalId = setInterval(checkVisibilityAndUpdateColors, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [coloredItems, isInitializedRef.current]);

  useEffect(() => {
    const shuffledTopRowItems = shuffleArray([
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
    ]);

    const shuffledBottomRowItems = shuffleArray([
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
      ...positionNameList,
    ]);

    setTopRowItems(shuffledTopRowItems);
    setBottomRowItems(shuffledBottomRowItems);
  }, []);

  const getItemColorClass = (itemId: string): string => {
    const coloredItem = coloredItems.find((item) => item.itemId === itemId);
    if (!coloredItem) return "";

    switch (coloredItem.appearance) {
      case "first":
        return styles.item_attention_first;
      case "second":
        return styles.item_attention_second;
      case "third":
        return styles.item_attention_third;
      default:
        return "";
    }
  };

  return (
    <div ref={wrapperRef} className={styles.marquee}>
      <div className={styles.inner}>
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
