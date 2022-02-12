import axios from "axios"

export const getUsers = async () => {
    try {
        const response = await axios.get("https://sheetlabs.com/GETB/apidesafio")
        return response.data
    } catch (error) {
        return error.message
    }
}