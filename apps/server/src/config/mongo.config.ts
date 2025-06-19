import mongoose from 'mongoose';
import '../utils/mongoosePlugins.js';
import logger from '../utils/logger.js';
import { MONGO_URI, NODE_ENV } from './dotenv.config.js';

// Тип для конфигурации подключения
type MongoDBConfig = {
  uri: string;
  options: mongoose.ConnectOptions;
};

const devConfig: MongoDBConfig = {
  uri: MONGO_URI,
  options: {
    autoIndex: true, // В разработке включаем индексы
  },
};

const prodConfig: MongoDBConfig = {
  uri: MONGO_URI,
  options: {
    autoIndex: false, // В продакшене выключаем для производительности
  },
};

const config = NODE_ENV === 'production' ? prodConfig : devConfig;

export const connectDB = async (): Promise<void> => {
  try {
    // Подключение с обработкой событий
    mongoose.connection.on('connecting', () => {
      logger.log('MongoDB: Connecting...');
    });

    mongoose.connection.on('connected', () => {
      logger.log('MongoDB: Connected');
    });

    mongoose.connection.on('error', (err) => {
      logger.log(`MongoDB error: ${err}`);
      process.exit(1);
    });

    await mongoose.connect(config.uri, {
      ...config.options,
      maxPoolSize: 10, // Максимальное количество соединений в пуле
      socketTimeoutMS: 45000, // Таймаут сокета
      serverSelectionTimeoutMS: 5000, // Таймаут выбора сервера
      dbName: "myapp-dev"
    });

    logger.log(`MongoDB connected to: ${mongoose.connection.host}`);
  } catch (err) {
    logger.log(`MongoDB connection error: ${err}`);
    process.exit(1);
  }
};

export const disconnectDB = async (): Promise<void> => {
  await mongoose.disconnect();
  logger.log('MongoDB disconnected');
};