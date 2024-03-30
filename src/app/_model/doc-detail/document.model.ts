export class PricingModel {
  id!: number;
  planName!: string;
  fileStorage!: boolean;
  downloadText!: boolean;
  downloadWord!: boolean;
  exportExcel!: boolean;
  csvToJson!: boolean;
  viewPdf!: boolean;
  getJson!: boolean;
  maxCredits!: number;
  price!: number;
}
export class PricingCheckoutModel {
  items!: Array<PricingCheckoutDataModel>;
}
export class PricingCheckoutDataModel {
  name!: string;
  price!: number;
  quantity!: number;
}

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
export class UserResponseModel {
  data!: Array<UserProfileModel>;
  message!: string;
}
export class CreditResponseModel {
  data!: CreditInfoModel;
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
  name!: string;
  lastname!: string;
  number!: number;
  country!: string;
  ref_code!: string;
  email!: string;
  type!: 'USER' | 'ADMIN';
  username!: string;
  iat!: number;
  created_at!: string;
  updated_at!: string;
  last_login!: number;
}

export class CreditInfoModel {
  avail_credit!: number;
  max_credit!: number;
}
export class CreditListModel {
  user_id!: string;
  max_credit!: number;
  avail_credit!: number;
  created_at!: string;
  updated_at!: string;
  username?: string;
}
export class FeedbackListModel {
  id!: number;
  user_id!: number;
  rating!: number;
  comment!: string;
  created_at!: string;
  username?: string;
}
export class ContactListModel {
  id!: number;
  name!: string;
  surname!: string;
  email!: string;
  subject!: string;
  message!: string;
  created_at!: string;
  updated_at!: string;
}

export const pdfPlaceholder = '/assets/ocr-images/placeholder-pdf.png';
