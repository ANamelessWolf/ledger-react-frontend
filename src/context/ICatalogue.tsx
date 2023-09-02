export interface ICatalogueItem {
  Id: number|string;
  Key?: string;
  Description: string;
}

export interface IAppCatalogue {
  FinancingType: ICatalogueItem[];
  FinancingEntity: ICatalogueItem[];
  CardType: ICatalogueItem[];
  CreditCard: ICatalogueItem[];
  CreditCardColors: ICatalogueItem[];
  FinancingDays: ICatalogueItem[];
  Vendor: ICatalogueItem[];
  Category: ICatalogueItem[];
  SubCategory: ICatalogueItem[];
}

export interface IUserData{
  FullName: string,
}

export interface IAppContext {
  user:IUserData;
  catalogue: IAppCatalogue;
}
