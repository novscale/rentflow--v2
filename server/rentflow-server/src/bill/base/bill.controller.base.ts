/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BillService } from "../bill.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BillCreateInput } from "./BillCreateInput";
import { BillWhereInput } from "./BillWhereInput";
import { BillWhereUniqueInput } from "./BillWhereUniqueInput";
import { BillFindManyArgs } from "./BillFindManyArgs";
import { BillUpdateInput } from "./BillUpdateInput";
import { Bill } from "./Bill";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BillControllerBase {
  constructor(
    protected readonly service: BillService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bill })
  @nestAccessControl.UseRoles({
    resource: "Bill",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: BillCreateInput): Promise<Bill> {
    return await this.service.create({
      data: {
        ...data,

        nestId: {
          connect: data.nestId,
        },
      },
      select: {
        amount: true,
        category: true,
        date: true,
        description: true,
        id: true,
        name: true,

        nestId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Bill] })
  @ApiNestedQuery(BillFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Bill",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Bill[]> {
    const args = plainToClass(BillFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        amount: true,
        category: true,
        date: true,
        description: true,
        id: true,
        name: true,

        nestId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bill",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: BillWhereUniqueInput
  ): Promise<Bill | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        amount: true,
        category: true,
        date: true,
        description: true,
        id: true,
        name: true,

        nestId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bill",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: BillWhereUniqueInput,
    @common.Body() data: BillUpdateInput
  ): Promise<Bill | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          nestId: {
            connect: data.nestId,
          },
        },
        select: {
          amount: true,
          category: true,
          date: true,
          description: true,
          id: true,
          name: true,

          nestId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bill })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bill",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: BillWhereUniqueInput
  ): Promise<Bill | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          amount: true,
          category: true,
          date: true,
          description: true,
          id: true,
          name: true,

          nestId: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
