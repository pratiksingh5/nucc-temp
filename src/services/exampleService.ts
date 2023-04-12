import api from "@/helpers/api"

export const FetchExmaple = async () => {
    return await api.get("/exampleApi")
}