/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreatePropertyArgs } from "./CreatePropertyArgs";
import { UpdatePropertyArgs } from "./UpdatePropertyArgs";
import { DeletePropertyArgs } from "./DeletePropertyArgs";
import { PropertyFindManyArgs } from "./PropertyFindManyArgs";
import { PropertyFindUniqueArgs } from "./PropertyFindUniqueArgs";
import { Property } from "./Property";
import { NestFindManyArgs } from "../../nest/base/NestFindManyArgs";
import { Nest } from "../../nest/base/Nest";
import { PropertyService } from "../property.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Property)
export class PropertyResolverBase {
  constructor(
    protected readonly service: PropertyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  async _propertiesMeta(
    @graphql.Args() args: PropertyFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Property])
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  async properties(
    @graphql.Args() args: PropertyFindManyArgs
  ): Promise<Property[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Property, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "own",
  })
  async property(
    @graphql.Args() args: PropertyFindUniqueArgs
  ): Promise<Property | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Property)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "create",
    possession: "any",
  })
  async createProperty(
    @graphql.Args() args: CreatePropertyArgs
  ): Promise<Property> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Property)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "update",
    possession: "any",
  })
  async updateProperty(
    @graphql.Args() args: UpdatePropertyArgs
  ): Promise<Property | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Property)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "delete",
    possession: "any",
  })
  async deleteProperty(
    @graphql.Args() args: DeletePropertyArgs
  ): Promise<Property | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Nest], { name: "nests" })
  @nestAccessControl.UseRoles({
    resource: "Nest",
    action: "read",
    possession: "any",
  })
  async resolveFieldNests(
    @graphql.Parent() parent: Property,
    @graphql.Args() args: NestFindManyArgs
  ): Promise<Nest[]> {
    const results = await this.service.findNests(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}