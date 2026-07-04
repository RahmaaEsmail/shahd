import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetAllAcademyData = async () => {
    const response = await apiInstance.get(userEndPoints.get_academy_data)
    return response.data
}