import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GeneralResponseInterseptor } from './custom-response/interceptor/general-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
  });
  app.useGlobalInterceptors(new GeneralResponseInterseptor());
  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();
