/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TenantWhereInput } from "./TenantWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TenantListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TenantWhereInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereInput)
  @IsOptional()
  @Field(() => TenantWhereInput, {
    nullable: true,
  })
  every?: TenantWhereInput;

  @ApiProperty({
    required: false,
    type: () => TenantWhereInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereInput)
  @IsOptional()
  @Field(() => TenantWhereInput, {
    nullable: true,
  })
  some?: TenantWhereInput;

  @ApiProperty({
    required: false,
    type: () => TenantWhereInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereInput)
  @IsOptional()
  @Field(() => TenantWhereInput, {
    nullable: true,
  })
  none?: TenantWhereInput;
}
export { TenantListRelationFilter as TenantListRelationFilter };
