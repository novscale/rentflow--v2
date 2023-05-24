import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RentService } from "./rent.service";
import { RentControllerBase } from "./base/rent.controller.base";

@swagger.ApiTags("rents")
@common.Controller("rents")
export class RentController extends RentControllerBase {
  constructor(
    protected readonly service: RentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
