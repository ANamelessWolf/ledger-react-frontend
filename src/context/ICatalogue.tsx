export interface ICatalogueItem {
  Id: number;
  Description: string;
}

export interface IAppCatalogue {
  FinancingType: ICatalogueItem[];
}

export interface IAppContext {
  catalogue: IAppCatalogue;
}
