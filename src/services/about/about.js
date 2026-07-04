import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetAllAboutData = async () => {
    const response = await apiInstance.get(userEndPoints.get_about_data)
    return response.data
}