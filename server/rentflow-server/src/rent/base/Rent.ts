/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsDate, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Nest } from "../../nest/base/Nest";
import { Tenant } from "../../tenant/base/Tenant";

@ObjectType()
class Rent {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  amount!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  date!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => Nest,
  })
  @ValidateNested()
  @Type(() => Nest)
  nestId?: Nest;

  @ApiProperty({
    required: true,
    type: () => Tenant,
  })
  @ValidateNested()
  @Type(() => Tenant)
  tenantId?: Tenant;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Rent as Rent };
