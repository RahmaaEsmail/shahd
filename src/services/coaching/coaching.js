import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetAllCoachingData = async () => {
    const response = await apiInstance.get(userEndPoints.get_coaching_data)
    return response.data
}