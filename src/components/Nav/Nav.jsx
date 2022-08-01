import {Switch} from '@material-ui/core';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import css from './navStatic';

const Nav = ({setDarkMode, darkMode, isDark}) => {
    return(
        <div className={css.wrapper}>
            <MenuTwoToneIcon fontSize="large" />
            <h1 className={css.h1}>
                S
                <span className={css.spanK}>K</span>
                ILLET
            </h1>
            {
                isDark ?
                <Switch 
                    className={css.switch}
                    color="primary"
                    onChange={() => setDarkMode(!darkMode)}
                    defaultChecked
                /> :
                <Switch 
                    className={css.switch}
                    color="primary"
                    onChange={() => setDarkMode(!darkMode)}
                />

            }


        </div>
    )
}

export default Nav;