import { ListingFavoriteCharacters } from 'src/modules/favoriteCharacters/components/components'

import Styles from './favoriteCharacters.module.scss'

export const FavoriteCharactersPage = () => {
  return (
    <div className={Styles.wrapper}>
      <ListingFavoriteCharacters />
    </div>
  )
}
