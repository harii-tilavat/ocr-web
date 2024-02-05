import { FeaturedModel } from "../featured/featured-list.model";

export class ProductDetailModel{
  id!:number;
  title!:string | null;
  subTitle!:string;
  desc!:string;
  imagePath!:string;
  subMenu!:ProductDetailModel[];
  action!:boolean;
}
export class TeamsResponseModel {
  title!: string;
  subTitle!: string;
  enum!: string;
  keyPoints: ProductDetailModel[] = [];
  helpList: FeaturedModel[] = [];
}
export class OcrServiceModel{
  id!:number;
  title!:string | null;
  subTitle!:string;
  desc!:string;
  imagePath!:string;
  subMenu!:ProductDetailModel[];
}
