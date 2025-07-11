import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import { LOG_PATH_FROM_UTILS_LOGGER, NODE_ENV } from '../config/dotenv.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = {
  log: (message: string) => {
    try {
      if (NODE_ENV === 'development') {
        console.log(LOG_PATH_FROM_UTILS_LOGGER);
        const logPath = path.join(__dirname, LOG_PATH_FROM_UTILS_LOGGER);
        fs.appendFileSync(logPath, `${new Date().toISOString()} ${message}\n`);
      } else {
        console.log(`${new Date().toISOString()} ${message}\n`);
      }
    } catch (err) {
      console.log(err);
    }
  } 
};

export default logger;