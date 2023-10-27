import React from 'react';
import cl from "./SwitchBtn.module.scss"
const SwitchBtn = () => {
    return (
        <label className={cl.switch}>
            <input type="checkbox" className={cl.checkbox}/>
                <div className={cl.slider}></div>
        </label>
    );
};

export default SwitchBtn;