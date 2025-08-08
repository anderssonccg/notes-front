import { CircleBackground } from './CircleBackground';
import { CircleColor } from './CircleColor';
import style from './colors.module.css';

const listOfColors = [
    {
        id: 1,
        color: '#B3D161',
        background: 'https://i.imgur.com/n0iLi56.png'
    },
    {
        id: 2,
        color: '#C9BBF4',
        background: 'https://i.imgur.com/Ih7OqeH.png'
    },
    {
        id: 3,
        color: '#DE7774',
        background: 'https://i.imgur.com/t6sMvFz.png'
    },
    {
        id: 4,
        color: '#FFDE94',
        background: 'https://i.imgur.com/ewy3Ghg.jpeg'
    },
    {
        id: 5,
        color: '#B3CFEC',
        background: 'https://i.imgur.com/41oTthk.jpeg'
    },
    {
        id: 6,
        color: '#F4A159',
        background: 'https://i.imgur.com/26x1rZ1.jpeg'
    },
]

export const Colors = () => {
    return (
        <div className={style.container}>
            <div className={style.circle_container}>
                <h5>Color</h5>
                <section className={style.colors}>
                    {listOfColors.map((color, i) => {
                        return (
                            <CircleColor
                                key={i}
                                color={color.color}
                            />
                        );
                    })}
                </section>
            </div>
            <div className={style.circle_container}>
                <h5>Fondo</h5>
                <section className={style.colors}>
                    {listOfColors.map((list, i) => {
                        return (
                            <CircleBackground
                                key={i}
                                background={list.background}
                            />
                        );
                    })}
                </section>
            </div>
        </div>
    )
}
