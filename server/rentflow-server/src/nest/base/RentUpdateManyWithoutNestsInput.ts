/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RentWhereUniqueInput } from "../../rent/base/RentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RentUpdateManyWithoutNestsInput {
  @Field(() => [RentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RentWhereUniqueInput],
  })
  connect?: Array<RentWhereUniqueInput>;

  @Field(() => [RentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RentWhereUniqueInput],
  })
  disconnect?: Array<RentWhereUniqueInput>;

  @Field(() => [RentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RentWhereUniqueInput],
  })
  set?: Array<RentWhereUniqueInput>;
}

export { RentUpdateManyWithoutNestsInput as RentUpdateManyWithoutNestsInput };
