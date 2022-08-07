import css from './profileMenuStatic';
import {LightBulbIcon} from '@heroicons/react/solid';
import {LightBulbIcon as Outline} from '@heroicons/react/outline';
import {useState} from 'react';

const ProfileMenu = ({setDarkMode, darkMode}) => {
    const [userList] = useState(["Profile","User Settings"])
    return (
        <div className={css.wrapper}>
            <h3 className={css.h3}>My Profile</h3>
            <ul className={css.ul}>
                {userList.map((item) => <li className={css.li}>{item}</li>)}

            </ul>
            <h3 className={css.h3}>Visual Settings</h3>
            <ul className={css.ul}>
                <li className={css.li}>
                    Dark Mode
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
                </li>
                
            </ul>
        </div>
    )
}

export default ProfileMenu;