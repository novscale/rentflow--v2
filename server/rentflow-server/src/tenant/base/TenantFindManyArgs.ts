/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TenantWhereInput } from "./TenantWhereInput";
import { Type } from "class-transformer";
import { TenantOrderByInput } from "./TenantOrderByInput";

@ArgsType()
class TenantFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TenantWhereInput,
  })
  @Field(() => TenantWhereInput, { nullable: true })
  @Type(() => TenantWhereInput)
  where?: TenantWhereInput;

  @ApiProperty({
    required: false,
    type: [TenantOrderByInput],
  })
  @Field(() => [TenantOrderByInput], { nullable: true })
  @Type(() => TenantOrderByInput)
  orderBy?: Array<TenantOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TenantFindManyArgs as TenantFindManyArgs };
