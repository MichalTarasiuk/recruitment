import { fetchCharacter } from 'src/common/services/services'
import { isString } from 'src/common/utils/utils'

import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from 'next'

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

export const DetailedCharacterPage = ({}: Props) => {
  return null
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const id = query.id

  try {
    if (id && isString(id)) {
      const character = await fetchCharacter(id)

      return {
        props: {
          character,
        },
      }
    } else {
      throw Error('Invalid character id')
    }
  } catch {
    return { notFound: true }
  }
}
