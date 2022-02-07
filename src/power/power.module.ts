import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

// decorator to use PowerService

@Module({
  // providers is to use the PowerService in PowerModule
  providers: [PowerService],
  // now we can share PowerService to be used in other modules like CPUModule.
  exports: [PowerService],
})
export class PowerModule {}
