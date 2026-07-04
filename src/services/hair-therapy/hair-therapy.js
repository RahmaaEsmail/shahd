import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetAllHairTherapyData = async () => {
    const response = await apiInstance.get(userEndPoints.get_hair_therapy_data)
    return response.data
}