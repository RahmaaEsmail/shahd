import { userEndPoints } from "../../api/userEndPoints"
import { apiInstance } from "../../api/apiInstance"

export const handleGetRoutineDetails = async ({id}) => {
    const response = await apiInstance.get(`${userEndPoints.routine_details}?id=${id}`)
    return response.data
}