export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export interface IAppDataState<T> {
  dataState?: DataStateEnum,
  data?: T,
  errorMessage?: string
}

export enum ProductActionTypeEnum {
  GET_ALL_PRODUCTS = "[Product] Get all products",
  GET_SELECTED_PRODUCTS = "[Product] Get selected products",
  GET_AVAILABLE_PRODUCTS = "[Product] Get available products",
  SEARCH_PRODUCTS = "[Product] Search products",
  NEW_PRODUCT = "[Product] New product",
  DELETE_PRODUCT = "[Product] Delete product",
  EDIT_PRODUCT = "[Product] Edit product",
  SELECT_PRODUCT = "[Product] Select product"
}

export interface IActionEvent {
  type: ProductActionTypeEnum,
  payload?: any
}
