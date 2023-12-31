import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationMetadata } from 'class-validator/types/metadata/ValidationMetadata';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api/v1");

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );

  await app.listen(3000);
}
bootstrap();
