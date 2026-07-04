import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetAllAestheticGynecologyData = async () => {
    const response = await apiInstance.get(userEndPoints.get_aesthetic_gynecology_data)
    return response.data
}