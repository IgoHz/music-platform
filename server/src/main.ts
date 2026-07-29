import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT || 4000;

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000'
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  );

  await app.listen(port, () => console.log(`Server started on port ${port}`));
}

bootstrap();
