import { Module } from '@nestjs/common';
import { AvionService } from './avion.service';
import { AvionController } from './avion.controller';

@Module({
  controllers: [AvionController],
  providers: [AvionService]
})
export class AvionModule {}
