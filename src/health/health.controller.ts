import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { Status } from './interfaces/status.interface';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  async healthCheck(): Promise<Status> {
    return this.healthService.healthCheck();
  }
}
