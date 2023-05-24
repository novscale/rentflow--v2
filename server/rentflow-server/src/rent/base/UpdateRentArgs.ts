/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { RentWhereUniqueInput } from "./RentWhereUniqueInput";
import { RentUpdateInput } from "./RentUpdateInput";

@ArgsType()
class UpdateRentArgs {
  @Field(() => RentWhereUniqueInput, { nullable: false })
  where!: RentWhereUniqueInput;
  @Field(() => RentUpdateInput, { nullable: false })
  data!: RentUpdateInput;
}

export { UpdateRentArgs as UpdateRentArgs };