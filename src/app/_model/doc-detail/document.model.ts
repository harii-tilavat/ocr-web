export class DocumentModel {
  doc_id!: string;
  image_url!: string;
  vendor_name!: any;
  total!: any;
  category!: string;
  created_at!: string;
  updated_at!: string;
  document_type!: string;
  invoice_number!: any;
  ocr_text!: string;
}
export class DocumentResponseModel {
  data!: DocumentModel;
  message!: string;
}
