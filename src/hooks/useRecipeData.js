// https://api.spoonacular.com/recipes/complexSearch?sort=random&number=10&addRecipeInformation=true&apiKey=
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../api/config'

const key = import.meta.env.VITE_API_KEY

const fetchData = async () => {
  const response = await axiosInstance.get(`/complexSearch`, {
    params: {
      sort: 'random',
      number: 6,
      addRecipeInformation: true,
      apiKey: key,
    },
  })
  return response
}

export const useRecipeData = () => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['recipe-data'],
    retry: false,
    /* refetchInterval: 60 * 5 * 1000 */
  })
  return {
    ...query,
    data: query.data?.data,
  }
}
