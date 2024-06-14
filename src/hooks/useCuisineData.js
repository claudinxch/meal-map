// https://api.spoonacular.com/recipes/complexSearch?sort=random&number=10&addRecipeInformation=true&apiKey=
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../api/config'
import { cuisines } from '../assets/cuisines'

const key = import.meta.env.VITE_API_KEY

const getRandomCuisine = () => {
  const randomIndex = Math.floor(Math.random() * cuisines.length)
  return cuisines[randomIndex]
}

const fetchCuisineData = async () => {
  const response = await axiosInstance.get(`/complexSearch`, {
    params: {
      cuisine: getRandomCuisine(),
      number: 6,
      addRecipeInformation: true,
      apiKey: key,
    },
  })
  return response
}

export const useCuisineData = () => {
  const query = useQuery({
    queryFn: fetchCuisineData,
    queryKey: ['cuisine-data'],
    retry: false,
    retryOnMount: false,
    refetchInterval: 60 * 5 * 1000,
  })
  return {
    ...query,
    data: query.data?.data,
  }
}
