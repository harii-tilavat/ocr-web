export class DocumentModel {
  id!: string;
  image_url!: string;
  file_size!: number;
  file_type!: string;
  file_name!: string;
  created_at!: string;
  updated_at!: string;
  ocr_text!: string;
  // vendor_name!: string;
  // total!: number;
  // category!: string;
  // document_type!: string;
  // invoice_number!: string;
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
export class OcrServiceModel {
  id!: number;
  title!: string | null;
  subTitle!: string;
  desc!: string;
  imagePath!: string;
  subMenu!: ProductDetailModel[];
}
export class ProductDetailModel {
  id!: number;
  title!: string | null;
  subTitle!: string;
  desc!: string;
  imagePath!: string;
  subMenu!: ProductDetailModel[];
  action!: boolean;
}
export class UserProfileModel {
  exp!: number;
  id!: string;
  created_at!: string;
  name!: string;
  lastname!: string;
  number!: number;
  country!: string;
  ref_code!: string;
  email!: string;
  type!: 'USER' | 'ADMIN';
  username!: string;
  iat!: number;
}
export const pdfPlaceholder = '/assets/ocr-images/placeholder-pdf.png';
