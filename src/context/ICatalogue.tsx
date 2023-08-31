export interface ICatalogueItem {
  Id: number;
  Key?: string;
  Description: string;
}

export interface IAppCatalogue {
  FinancingType: ICatalogueItem[];
  FinancingEntity: ICatalogueItem[];
  CardType: ICatalogueItem[];
  CreditCard: ICatalogueItem[];
  CreditCardColors: ICatalogueItem[];
}

export interface IAppContext {
  catalogue: IAppCatalogue;
}
