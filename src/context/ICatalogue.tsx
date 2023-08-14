export interface ICatalogueItem {
  Id: number;
  Description: string;
}

export interface IAppCatalogue {
  FinancingType: ICatalogueItem[];
  FinancingEntity:ICatalogueItem[],
  CardType:ICatalogueItem[],
  CreditCard:ICatalogueItem[]
}

export interface IAppContext {
  catalogue: IAppCatalogue;
}
