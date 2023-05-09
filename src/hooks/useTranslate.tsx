import { useContext } from 'react';
import { TranslateContext } from '../contexts/useTranslate'

export const useTranslate = () => useContext(TranslateContext);