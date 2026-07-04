import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetAllWeightManagementData = async () => {
    const response = await apiInstance.get(userEndPoints.get_weight_management_data)
    return response.data
}