export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const shuffleArrayNoAdjacent = <T>(array: T[]): T[] => {
  const result: T[] = [];
  const items = [...array];

  // Функция для получения случайного индекса из доступных элементов
  const getRandomValidIndex = (
    availableItems: T[],
    lastItem: T | null,
  ): number => {
    // Находим все индексы элементов, которые отличаются от последнего
    const validIndices = availableItems.reduce<number[]>((acc, item, index) => {
      if (lastItem === null || item !== lastItem) {
        acc.push(index);
      }
      return acc;
    }, []);

    // Если нет подходящих элементов, возвращаем -1
    if (validIndices.length === 0) return -1;

    // Выбираем случайный индекс из подходящих
    const randomIndex = Math.floor(Math.random() * validIndices.length);
    return validIndices[randomIndex];
  };

  // Первый элемент можно выбрать любой
  let lastItem: T | null = null;

  while (items.length > 0) {
    const index = getRandomValidIndex(items, lastItem);

    // Если не нашли подходящий элемент
    if (index === -1) {
      // Если это последний элемент и он совпадает с предыдущим,
      // меняем его местами с случайным элементом из результата
      if (items.length === 1 && result.length > 1) {
        const swapIndex = Math.floor(Math.random() * (result.length - 1));
        result.push(result[swapIndex]);
        result[swapIndex] = items[0];
        break;
      }
      // Если не можем найти подходящий элемент - начинаем заново
      return shuffleArrayNoAdjacent(array);
    }

    const selectedItem = items[index];
    result.push(selectedItem);
    lastItem = selectedItem;
    items.splice(index, 1);
  }

  return result;
};

export const createMirroredRepeatedArray = <T>(
  sourceArray: T[],
  repeatCount: number,
): T[] => {
  // Функция для перемешивания массива
  const shuffleArray = (array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Функция для создания зеркального массива
  const mirrorArray = (array: T[]): T[] => {
    return [...array].reverse();
  };

  // Перемешиваем исходный массив
  const shuffledSource = shuffleArray(sourceArray);

  // Создаем результирующий массив
  const result: T[] = [];

  // Добавляем необходимое количество копий
  for (let i = 0; i < repeatCount; i++) {
    // Если индекс четный - добавляем массив как есть
    // Если нечетный - добавляем зеркальную версию
    if (i % 2 === 0) {
      result.push(...shuffledSource);
    } else {
      result.push(...mirrorArray(shuffledSource));
    }
  }

  return result;
};

export const createRepeatedShuffledArray = <T>(
  sourceArray: T[],
  repeatCount: number,
): T[] => {
  // Функция для перемешивания массива
  const shuffleArray = (array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Перемешиваем исходный массив один раз
  const shuffledSource = shuffleArray(sourceArray);

  // Создаем результирующий массив, повторяя перемешанный массив нужное количество раз
  const result: T[] = Array(repeatCount)
    .fill(null)
    .flatMap(() => shuffledSource);

  return result;
};
