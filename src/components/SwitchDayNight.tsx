import { useEffect, useState } from 'react';

export const SwitchDayNight = () => {
    const [isChecked, setIsChecked] = useState(false);


    useEffect(() => {
        if (isChecked) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }, [isChecked])



    return (
        <div className="container--toggle">
            {
                isChecked === true ?
                    <input type="checkbox" id="toggle" className="toggle--checkbox" onChange={() => setIsChecked(!isChecked)} />
                    :
                    <input type="checkbox" id="toggle" className="toggle--checkbox" onChange={() => setIsChecked(!isChecked)} />
            }
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}