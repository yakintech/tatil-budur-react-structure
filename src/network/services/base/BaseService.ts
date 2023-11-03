import { ResponseModel } from "../../models/core/ResponseModel";
import { apiRequest } from "../core/apiInstance";


export class BaseService<T>{


    private endpointUrl: string = ""

    constructor(url: string) {
        this.endpointUrl = url;
    }


    async getAll(url: string = this.endpointUrl): Promise<ResponseModel> {

        console.log('GET ALL');

        try {

            let apiResponse = await apiRequest.get(url)

            let response: ResponseModel = {
                data: apiResponse.data,
                status: true,
                statusCode: apiResponse.status,
                errorMessage: ""
            }

            return response

        } catch (error: any) {

            let response: ResponseModel = {
                data: [],
                status: true,
                statusCode: error.response?.status,
                errorMessage: error.message
            }

            throw response;
        }

    }

    async add(data: any, url: string = this.endpointUrl): Promise<ResponseModel> {

        try {
            let apiResponse = await apiRequest.post(url, data);

            let response: ResponseModel = {
                data: apiResponse.data,
                status: true,
                statusCode: apiResponse.status,
                errorMessage: ""
            }

            return response


        } catch (error:any) {

            let response: ResponseModel = {
                data: [],
                status: true,
                statusCode: error.response?.status,
                errorMessage: error.message
            }

            throw response;
        }

    }

}