import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NestService } from "./nest.service";
import { NestControllerBase } from "./base/nest.controller.base";

@swagger.ApiTags("nests")
@common.Controller("nests")
export class NestController extends NestControllerBase {
  constructor(
    protected readonly service: NestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
