import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({skipMissingProperties: true}));
  await app.listen(3000);
}
bootstrap().then(() => console.log('NestJS server is running on port 3000'));
