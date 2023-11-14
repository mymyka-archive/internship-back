import { Logger } from '@nestjs/common';

export function Logging(target: any) {
  const logger = new Logger(target.name);
  for (const propertyName of Object.getOwnPropertyNames(target.prototype)) {
    const descriptor = Object.getOwnPropertyDescriptor(
      target.prototype,
      propertyName,
    );
    const isMethod = descriptor.value instanceof Function;
    if (!isMethod) continue;

    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      logger.log(
        `The method [${originalMethod.name}] called with args: ` +
          JSON.stringify(args),
      );
      const result = originalMethod.apply(this, args);
      logger.log(
        `The method [${originalMethod.name}] return with value: ` +
          JSON.stringify(result),
      );
      return result;
    };

    Object.defineProperty(target.prototype, propertyName, descriptor);
  }
}
