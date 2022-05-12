import {ICategory} from "../categoryTypes";


export enum CategoryActionTypes {
    FETCH_CATEGORY = "FETCH_CATEGORY",
    FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS",
    FETCH_CATEGORY_ERROR = "FETCH_CATEGORY_ERROR",
}

export interface CategoryState {
     categories:ICategory[]  ,
     loading: boolean,
     error: null | string | object,
}

interface FetchCategorySuccessAction {
    type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS;
    payload: any[];
}

interface FetchCategoryErrorAction {
    type: CategoryActionTypes.FETCH_CATEGORY_ERROR;
    payload: string;
}
interface FetchCategoryAction {
    type: CategoryActionTypes.FETCH_CATEGORY;
}
export type CategoryActions =
    | FetchCategoryAction
    | FetchCategorySuccessAction
    | FetchCategoryErrorAction;