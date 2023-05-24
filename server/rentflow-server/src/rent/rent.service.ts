import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RentServiceBase } from "./base/rent.service.base";

@Injectable()
export class RentService extends RentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
