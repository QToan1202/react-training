import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from 'react-icons/fi'
import { IconType } from 'react-icons'

export interface SidebarItemProps {
  name: string
  icon: IconType
  to: string
}
export const ITEMS: Readonly<Array<SidebarItemProps>> = [
  { name: 'Home', icon: FiHome, to: '#' },
  { name: 'Trending', icon: FiTrendingUp, to: '#' },
  { name: 'Explore', icon: FiCompass, to: '#' },
  { name: 'Favorites', icon: FiStar, to: '#' },
  { name: 'Settings', icon: FiSettings, to: '#' },
]
