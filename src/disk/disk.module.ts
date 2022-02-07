import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule],
  providers: [DiskService],
  // Must define exports the service to be accessible.
  // Unless exports is not defined, the service is not accessible in other module.
  exports: [DiskService],
})
export class DiskModule {}
