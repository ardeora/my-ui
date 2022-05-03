import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'

// Helper hook to get the theme from the store
export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme)
  return theme;
}