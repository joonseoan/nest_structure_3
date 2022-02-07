import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  // In order to use "PowerModule" and its service including PowerService in CPUModule
  imports: [PowerModule],
  providers: [CpuService],
  // Once again, unless exports CPUService, all of the methods and class are private.
  // So in other classes, CPUService is not accessible.
  exports: [CpuService],
})
export class CpuModule {}
