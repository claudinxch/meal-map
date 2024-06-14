// https://api.spoonacular.com/recipes/complexSearch?sort=random&number=10&addRecipeInformation=true&apiKey=
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../api/config'
import { diets } from '../assets/diets'

const key = import.meta.env.VITE_API_KEY

const getRandomDiet = () => {
  const randomIndex = Math.floor(Math.random() * diets.length)
  return diets[randomIndex]
}

const fetchDietData = async () => {
  const response = await axiosInstance.get(`/complexSearch`, {
    params: {
      diet: getRandomDiet(),
      number: 6,
      addRecipeInformation: true,
      apiKey: key,
    },
  })
  return response
}

export const useDietData = () => {
  const query = useQuery({
    queryFn: fetchDietData,
    queryKey: ['diet-data'],
    retry: false,
    retryOnMount: false,
    refetchInterval: 60 * 5 * 1000,
  })
  return {
    ...query,
    data: query.data?.data,
  }
}
