export interface MarqueeProps {
  className?: string;
}

export interface ColoredItem {
  itemId: string;
  color: "red" | "blue" | "pink";
}

export const COLORS = ["red", "blue", "pink"] as const;
