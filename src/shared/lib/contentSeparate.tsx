export const contentSeparator = (content: Array<string>, separator: string) =>
  content
    .map((c, i) => (i === content.length - 1 ? c : `${c}${separator}`))
    .join("");
