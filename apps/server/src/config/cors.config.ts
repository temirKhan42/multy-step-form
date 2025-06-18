import { CLIENT_ORIGIN } from "./dotenv.config";

const getCorsConfig = () => {
  const allowedOrigins = [
    CLIENT_ORIGIN
  ];

  return {
    origin: function (
      origin: string|undefined, 
      callback: (a: any, b?: boolean) => void
    ) {
      // Разрешаем запросы без origin (например, из Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Not allowed by CORS: ${origin}`));
      }
    },
    credentials: true
  };
};

export default getCorsConfig;