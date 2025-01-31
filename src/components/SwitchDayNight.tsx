import { useEffect, useState } from 'react';

export const SwitchDayNight = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);



    useEffect(() => {

        const switchState = JSON.parse(localStorage.getItem("theme") || "false");
        if (switchState) {
            setIsChecked(switchState);
        }

        if (isChecked) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }, [isChecked])

    const handleSwitchDayNight = () => {
        setIsChecked(!isChecked);
        localStorage.setItem("theme", JSON.stringify(!isChecked));
    }

    return (
        <div className="container--toggle">
            <input type="checkbox" id="toggle" className="toggle--checkbox" onChange={() => handleSwitchDayNight()} checked={isChecked} />
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}