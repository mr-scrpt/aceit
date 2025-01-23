import { configPublic } from "../config/config.public";

export const getApiUrl = (endpoint: string): string => {
  const baseUrl = configPublic.isDev
    ? configPublic.API_URL_DEV
    : configPublic.API_URL_PROD;

  if (configPublic.isDev) {
    // Соединяем baseUrl и endpoint
    const url = `${baseUrl}${endpoint}`;

    // Заменяем множественные слеши на одинарные, но не в протоколе
    return url.replace(/([^:]\/)\/+/g, "$1");
  }

  return `${baseUrl}${endpoint}`.replace(/\/+/g, "/");
};
