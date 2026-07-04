import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetAllShopData = async () => {
    const response = await apiInstance.get(userEndPoints.get_shop_data)
    return response.data
}