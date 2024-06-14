import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../api/config'

const key = import.meta.env.VITE_API_KEY

const fetchRecipeInformation = async (id) => {
  const response = await axiosInstance.get(`/${id}/information`, {
    params: {
      apiKey: key,
    },
  })
  return response
}

export const useRecipeInformation = (recipeId) => {
  const query = useQuery({
    queryFn: () => fetchRecipeInformation(recipeId),
    queryKey: ['recipe-information', recipeId],
  })
  console.log(query.data?.data)
  return {
    ...query,
    data: query.data?.data,
  }
}
