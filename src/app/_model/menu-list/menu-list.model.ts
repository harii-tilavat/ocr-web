import { TeamsOfShapesModel } from "../teams-of-shapes/teams-of-shapes.model";

export class MenuListModel{
  id!:number;
  title!:string;
  icon!:string | null;
  subMenu!:TeamsOfShapesModel[];
  routing!:Array<string | number> | null | string;
}
