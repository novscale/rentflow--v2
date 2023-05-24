import { Module } from "@nestjs/common";
import { NestModuleBase } from "./base/nest.module.base";
import { NestService } from "./nest.service";
import { NestController } from "./nest.controller";
import { NestResolver } from "./nest.resolver";

@Module({
  imports: [NestModuleBase],
  controllers: [NestController],
  providers: [NestService, NestResolver],
  exports: [NestService],
})
export class NestModule {}
