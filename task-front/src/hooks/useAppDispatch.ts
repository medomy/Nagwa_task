import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store/store'

// Use throughout your app instead of plain `useDispatch` and not using `AppDispatch` every time we call it
const useAppDispatch: () => AppDispatch = useDispatch
export default useAppDispatch;