import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';

@Module({
  imports: [CpuModule, DiskModule],
  controllers: [ComputerController],
  // we do not need to register Controller for DI as mentioned in part2.
})
export class ComputerModule {}
