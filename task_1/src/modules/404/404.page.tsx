import Styles from './404.module.scss'

const NOT_FOUND_CODE = 404

export const NotFoundPage = () => {
  return (
    <div className={Styles.wrapper}>
      <h1>NOT FOUND - {NOT_FOUND_CODE}</h1>
    </div>
  )
}
