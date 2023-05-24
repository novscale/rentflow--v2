import { Module } from "@nestjs/common";
import { RentModuleBase } from "./base/rent.module.base";
import { RentService } from "./rent.service";
import { RentController } from "./rent.controller";
import { RentResolver } from "./rent.resolver";

@Module({
  imports: [RentModuleBase],
  controllers: [RentController],
  providers: [RentService, RentResolver],
  exports: [RentService],
})
export class RentModule {}
