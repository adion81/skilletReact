import css from './navStatic';
import {MenuIcon} from '@heroicons/react/solid';


const Nav = ({toggleMenu}) => {
    return(
        <div className={css.wrapper}>
            <h1 className={css.h1}>
                S
                <span className={css.spanK}>K</span>
                ILLET
            </h1>
            <MenuIcon 
                className={css.menuIcon}
                onClick={() => toggleMenu.handle(!toggleMenu.toggle)}
            />
        </div>
    )
}

export default Nav;