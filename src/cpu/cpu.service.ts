import { Injectable } from '@nestjs/common';

@Injectable()
export class CpuService {
  supplyPower(watts: number) {
    console.log(`Supplying ${watts} worth of power`);
  }
}
