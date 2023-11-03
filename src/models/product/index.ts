import { BaseVM } from "../core"

export interface ProductVM extends BaseVM{
    name: string
    unitPrice: number
    unitsInStock: number
    taxPrice: number
}