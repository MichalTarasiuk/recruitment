import { fetchCharacter } from 'src/common/services/services'
import { isString } from 'src/common/utils/utils'

import Styles from './detailedCharacter.module.scss'

import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from 'next'

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

export const DetailedCharacterPage = (character: Props) => {
  return (
    <div className={Styles.wrapper}>
      <button>add to favorite</button>
    </div>
  )
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  try {
    if (query.id && isString(query.id)) {
      const character = await fetchCharacter(query.id)

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
