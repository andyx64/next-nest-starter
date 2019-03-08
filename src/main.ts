import { FastifyAdapter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useStaticAssets(join(__dirname , 'next/static'), {
    index: false,
    redirect: false,
    prefix: '/_next/static',
  });
  await app.listen(3000);
}
bootstrap();
