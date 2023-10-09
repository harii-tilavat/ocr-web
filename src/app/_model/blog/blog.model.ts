export class BlogDescriptionModel {
  id!: number;
  title!: string;
  desc!: string;
  images: Array<BlogImageModel> = [];
}

export class BlogImageModel {
  imagePath!: string;
  imageDesc!: string;
}
export class BlogHeadingModel {
  id!: number;
  title!: string | null;
  image!: string | null;
  metadata: Array<MetadataModel> = [];
}

export class MetadataModel {
  key!: string;
  value!: string;
}
export class BlogResponseModel {
  blogDetails: BlogDetailResponseModel = new BlogDetailResponseModel();
  resourceList: Array<BlogDetailResponseModel> = [];
  relatedArtical: Array<BlogDetailResponseModel> = [];
}

export class ResourceResponseModel {
  resourceDetails: BlogDetailResponseModel = new BlogDetailResponseModel();
  blogList: Array<BlogDetailResponseModel> = [];
  relatedArtical:Array<BlogDetailResponseModel> = [];
}

export class BlogDetailResponseModel {
  id!: string;
  title!: string;
  sub_title!: string;
  poster_image!: string;
  html_content!: HTMLElement;
  is_deleted!: boolean;
  is_archived!: boolean;
  updated_at!: string;
  created_at!: string;
  metadata: Array<MetadataModel> = [];
}
export class MoreStoryModel {
  title!: string;
  action!: boolean;
  storyModelList: Array<BlogDetailResponseModel> = [];
  class!: string;
}


export class BlogListResponseModel {
  blogList: BlogDetailResponseModel[] = [];
  count = 0;
  pageSize = 10;
  page = 1;
  resourceList: BlogDetailResponseModel[] = [];
}

export class BlogTitleModel {
  title!: string;
  desc!: string;
  isSearchable!: boolean;
}
export class ResourceDataModel {
  blogHeader!: BlogTitleModel;
  blogList!: Array<BlogDetailResponseModel>;
  moreStories!: MoreStoryModel;
}
