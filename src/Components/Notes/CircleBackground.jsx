import style from './colors.module.css';

export const CircleBackground = ({ background }) => {
    return (
        <div className={style.circle} style={{
            backgroundImage: `url(${background})`, backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} />
    )
}
