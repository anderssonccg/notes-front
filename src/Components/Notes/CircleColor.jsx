import style from './colors.module.css';

export const CircleColor = ({color}) => {
  return (
    <div className={style.circle} style={{background: color}} />
  )
}
