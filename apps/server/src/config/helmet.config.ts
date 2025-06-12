import { HelmetOptions } from 'helmet';

const helmetConfig: Readonly<HelmetOptions> = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"]
    }
  }
}

export default helmetConfig;