import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import { LOG_PATH_FROM_UTILS_LOGGER } from '../config/dotenv.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = {
  log: (message: string) => {
    const logPath = path.join(__dirname, LOG_PATH_FROM_UTILS_LOGGER);
    fs.appendFileSync(logPath, `${new Date().toISOString()} ${message}\n`);
  } 
};

export default logger;