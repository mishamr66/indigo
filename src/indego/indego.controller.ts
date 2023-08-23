// import { Controller } from '@nestjs/common';

// @Controller('indego')
// export class IndegoController {}

import { Controller, Get } from '@nestjs/common';
import { IndegoService } from './indego.service';

@Controller('api/v1/indego')
export class IndegoController {
  constructor(private readonly indegoService: IndegoService) {}

  @Get('data')
  async getIndegoData() {
    return this.indegoService.getIndegoData();
  }
}
