import css from './navStatic';
import {LightBulbIcon, MenuIcon} from '@heroicons/react/solid';

const Nav = ({setDarkMode, darkMode}) => {
    return(
        <div className={css.wrapper}>
            <MenuIcon 
                className={css.menuIcon}
            />
            <h1 className={css.h1}>
                S
                <span className={css.spanK}>K</span>
                ILLET
            </h1>
            <LightBulbIcon 
                className={css.switch}
                onClick={() => setDarkMode(!darkMode)}
            />



        </div>
    )
}

export default Nav;