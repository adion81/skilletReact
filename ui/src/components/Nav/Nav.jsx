import css from './navStatic';
import {LightBulbIcon, MenuIcon} from '@heroicons/react/solid';
import {LightBulbIcon as Outline} from '@heroicons/react/outline';

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
            {
                darkMode ?
                <LightBulbIcon
                    className={css.switch}
                    onClick={() => setDarkMode(!darkMode)}
                /> :
                <Outline 
                    className={css.switch}
                    onClick={() => setDarkMode(!darkMode)}
                />
            }



        </div>
    )
}

export default Nav;