export interface MarqueeProps {
  className?: string;
}

export interface ColoredItem {
  itemId: string;
  appearance: "first" | "second" | "third";
}

export const APPEARANCE = ["first", "second", "third"] as const;
