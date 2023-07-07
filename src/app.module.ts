import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvionModule } from './estudiante/avion.module';

@Module({
  imports: [AvionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
