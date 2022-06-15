import { fetchCharacters } from 'src/common/services/services'
import { isString, mapObject, getSearchParam } from 'src/common/utils/utils'

import { CharacterListing, Pagination } from './components/components'
import Styles from './home.module.scss'

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'

export const HomePage = ({
  characters,
  paginationQueries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={Styles.wrapper}>
      <CharacterListing characters={characters} />
      <Pagination paginationQueries={paginationQueries} />
    </div>
  )
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  try {
    if (isString(query.page)) {
      const { characters, previous, next } = await fetchCharacters(query.page)

      const paginationQueries = mapObject({ previous, next }, (key, value) =>
        value ? [key, getSearchParam(value, 'page')] : [key, value]
      )

      return {
        props: {
          characters,
          paginationQueries,
        },
      }
    } else {
      throw Error('Invalid page')
    }
  } catch {
    return { notFound: true }
  }
}
