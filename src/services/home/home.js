import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetAllHomeData = async () => {
    const response = await apiInstance.get(userEndPoints.get_home_data)
    return response.data
}