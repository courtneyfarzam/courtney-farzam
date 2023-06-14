import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'projects', 'skills', 'testimonials', 'contact'].map((item) => (
                <li key={{item}}>
                    <a 
                        href={`#${item}`} 
                        key={item + index}
                        className='app__navigation-dot'
                        style={active === item ? { backgroundColor: '#313BAC' } : { }}
                        onClick={() => setToggle(false)}
                    />
                </li>
            ))}
        </div>
    )
}

export default NavigationDots