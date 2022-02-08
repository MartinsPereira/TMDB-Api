import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

interface Genre {
  id: number;
  name: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  selectedGenres: Genre[];
  setSelectedGenres: Dispatch<SetStateAction<Genre[]>>;
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

  return (
    <MoviesContext.Provider value={{ selectedGenres, setSelectedGenres }}>
      {children}
    </MoviesContext.Provider>
  );
}


export function useMovies() {
  const context = useContext(MoviesContext)
  return context
}