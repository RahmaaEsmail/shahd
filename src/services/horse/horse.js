import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetAllHorseData = async () => {
    const response = await apiInstance.get(userEndPoints.get_horse_data)
    return response.data
}

export const handleGetHorseProductData = async ({id}) => {
    const response = await apiInstance.get(`${userEndPoints.get_horse_product_details}?id=${id}`)
    return response.data
}