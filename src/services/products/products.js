import { apiInstance } from "../../api/apiInstance"
import { userEndPoints } from "../../api/userEndPoints"

export const handleGetAllProduct = async(params) => {
    const response = await apiInstance.get(userEndPoints.get_products, {params});
    return response.data;
}

export const handleGetAllProductFilter = async() =>{ 
    const response = await apiInstance.get(userEndPoints.get_products_filteration);
    return response.data;
}