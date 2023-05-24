import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NestServiceBase } from "./base/nest.service.base";

@Injectable()
export class NestService extends NestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
