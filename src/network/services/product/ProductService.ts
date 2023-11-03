import { ResponseModel } from "../../models/core/ResponseModel";
import { BaseService } from "../base/BaseService";

 export class ProductService extends BaseService<Product> {
    

    constructor() {
        super("products");
    }

 }








interface Product{
    name: string
    unitPrice: number
}