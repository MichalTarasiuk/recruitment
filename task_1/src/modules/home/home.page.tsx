import { fetchCharacters } from 'src/common/services/services'
import { isString, mapObject, getSearchParam } from 'src/common/utils/utils'

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'

export const HomePage = ({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) => {
  return null
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const pageNumber = isString(query.page) ? query.page : '1'
  const { characters, previous, next } = await fetchCharacters(pageNumber)

  const paginationQueries = mapObject({ previous, next }, (key, value) =>
    value ? [key, getSearchParam(value, 'page')] : [key, value]
  )

  console.log('call')

  return {
    props: {
      characters,
      paginationQueries,
    },
  }
}
