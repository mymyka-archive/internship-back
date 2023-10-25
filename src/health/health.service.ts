import { Injectable } from '@nestjs/common';
import { Status } from './interfaces/status.interface';

@Injectable()
export class HealthService {
  async healthCheck(): Promise<Status> {
    return {
      statusCode: 200,
      detail: 'ok',
      result: 'working',
    };
  }
}
