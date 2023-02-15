import { OfferType } from '../../../types/offer-type.enum.js';
import { City } from '../../../types/city.type.js';
import { Location } from '../../../types/location.type.js';
import { IsOptional, IsArray, IsDateString, IsBoolean, IsEnum, IsInt, Max, MaxLength, Min, MinLength, IsString, ArrayMinSize, ArrayMaxSize, ValidateNested } from 'class-validator';

export default class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, {message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 100'})
  public title?: string;

  @IsOptional()
  @MinLength(20, {message: 'Minimum description length must be 20'})
  @MaxLength(1024, {message: 'Maximum description length must be 1024'})
  public description?: string;

  @IsOptional()
  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public createdAt?: Date;

  // ВОПРОС: Как задавать валидацию Union Type
  public city?: City;

  @IsOptional()
  @IsString({message: 'Preview image is required'})
  public thumbnail?: string;

  @IsOptional()
  @IsArray({message: 'Field pictures must be an array'})
  @ArrayMinSize(6, { message: 'Minimum must be 6 picture' })
  @ArrayMaxSize(6, { message: 'Maximum must be 6 picture' })
  public pictures?: string[];

  @IsOptional()
  @IsBoolean({message: 'Field premium must be boolean'})
  public premium?: boolean;

  @IsOptional()
  @Min(1, {message: 'Minimum rating is 1'})
  @Max(5, {message: 'Maximum rating is 5'})
  public rating?: number;

  @IsOptional()
  @IsEnum(OfferType, {message: 'type must be only Apartment, House, Room or Hotel'})
  public type?: OfferType;

  @IsOptional()
  @IsInt({message: 'Rooms number must be an integer'})
  @Min(1, {message: 'Minimum rating is 1'})
  @Max(8, {message: 'Maximum price is 8'})
  public rooms?: number;

  @IsOptional()
  @IsInt({message: 'Rooms number must be an integer'})
  @Min(1, {message: 'Minimum rating is 1'})
  @Max(10, {message: 'Maximum price is 10'})
  public guests?: number;

  @IsOptional()
  @IsInt({message: 'Price must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(100000, {message: 'Maximum price is 100000'})
  public price?: number;

  @IsOptional()
  @IsArray({message: 'Field сonveniences must be an array'})
  public conveniences?: string[];

  @IsOptional()
  @ValidateNested({ message: 'Coordinate must be specific format' })
  public location?: Location;
}