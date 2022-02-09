import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { api } from '../Services/api';

interface Genre {
  id: number;
  name: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface imagesUrl {
  secure_base_url: string;
  poster_sizes: string[];
}

interface TransactionsContextData {
  selectedGenres: Genre[];
  setSelectedGenres: Dispatch<SetStateAction<Genre[]>>;
  imgUrl?: {
    images: imagesUrl;
    change_keys: string[];
  } | undefined;
}

/*
interface TransactionInput {
  title: string,
  amount: number,
  type: string,
  category: string,
}*/


const MoviesContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function MoviesProvider({ children }: TransactionsProviderProps) {
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([])
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    async function callMovieDetails() {
      if (!localStorage.getItem('imgConfiguration')) {
        const response = await api.get(`configuration`);
        localStorage.setItem('imgConfiguration', JSON.stringify(response.data))
        setImgUrl(response.data)
      } else {
        const imgConfiguration = localStorage.getItem('imgConfiguration')
        if (imgConfiguration) {
          setImgUrl(JSON.parse(imgConfiguration))
        }
      }
    }
    callMovieDetails()
  }, [])

  return (
    <MoviesContext.Provider value={{ selectedGenres, setSelectedGenres, imgUrl }}>
      {children}
    </MoviesContext.Provider>
  );
}


export function useMovies() {
  const context = useContext(MoviesContext)
  return context
}