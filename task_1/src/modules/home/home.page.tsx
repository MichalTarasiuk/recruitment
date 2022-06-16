import { fetchCharacters } from 'src/common/services/services'
import { isString, mapObject, getSearchParam } from 'src/common/utils/utils'

import { CharacterListing, Pagination } from './components/components'
import Styles from './home.module.scss'

import type { GetServerSidePropsContext } from 'next'

type Props = InferServerPropsType<typeof getServerSideProps>

export const HomePage = ({ characters, paginationQueries }: Props) => {
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
    const pageId = isString(query.page) ? query.page : '1'
    const { characters, previous, next } = await fetchCharacters(pageId)

    const paginationQueries = mapObject({ previous, next }, (key, value) =>
      value ? [key, getSearchParam(value, 'page')] : [key, value]
    )

    return {
      props: {
        characters,
        paginationQueries,
      },
    }
  } catch (error) {
    console.log(error)

    return { notFound: true }
  }
}
