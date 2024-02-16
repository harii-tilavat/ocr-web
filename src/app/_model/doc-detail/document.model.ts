export class DocumentModel {
  doc_id!: string;
  image_url!: string;
  vendor_name!: string;
  total!: number;
  category!: string;
  created_at!: string;
  updated_at!: string;
  document_type!: string;
  invoice_number!: string;
  ocr_text!: string;
}
export class DocumentResponseModel {
  data!: DocumentModel;
  message!: string;
}
export class DocumentProccessDetail {
  id!: number;
  title!: string;
  desc!: string;
}
export class OcrServiceModel{
  id!:number;
  title!:string | null;
  subTitle!:string;
  desc!:string;
  imagePath!:string;
  subMenu!:ProductDetailModel[];
}
export class ProductDetailModel{
  id!:number;
  title!:string | null;
  subTitle!:string;
  desc!:string;
  imagePath!:string;
  subMenu!:ProductDetailModel[];
  action!:boolean;
}
