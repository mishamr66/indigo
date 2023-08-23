import { Module } from '@nestjs/common';
import { IndegoController } from './indego.controller';
import { IndegoService } from './indego.service';

@Module({
  controllers: [IndegoController],
  providers: [IndegoService],
  exports:[IndegoModule]
})
export class IndegoModule {}
