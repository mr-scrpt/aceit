import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true,
  },
  // Добавляем конфигурацию для SASS
  sassOptions: {
    includePaths: ["./src/shared/style"],
  },
  // Отключаем генерацию source maps в production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
