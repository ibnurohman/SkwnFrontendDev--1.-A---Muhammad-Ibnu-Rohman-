import AxiosConfig from "../../AxiosConfig"

export const ConfigHome = {

    getHomePhotoId: async (id) => {
        try {
            const response = await AxiosConfig.get(`/photos/${id}`)
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    getHomeByCategory: async () => {
        try {
            const response = await AxiosConfig.get(`/photos`)
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    getHomePhoto: async () => {
        try {
            const response = await AxiosConfig.get(`/photos`)
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
}