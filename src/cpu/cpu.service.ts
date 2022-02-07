import { Injectable } from '@nestjs/common';
// import PowerService
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  // Declare service in the constructor
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from Power Service.');

    this.powerService.supplyPower(10);

    return a + b;
  }
}
