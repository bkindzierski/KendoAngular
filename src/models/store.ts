export interface Store{
    storeId: string;
    storeName:string;
    address: object;
    contact: object;  
    products: object[];
    isActive:boolean;
}