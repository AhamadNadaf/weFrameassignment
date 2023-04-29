import React, { useState } from 'react';
import './sidebar.css';
import vectorlog from '../../assets/Vector.png'
import logo from '../../assets/Logo.png'
import homeLogo from '../../assets/Home-Icons.png'
import Vector2 from '../../assets/Vector(2).png'
import Vector3 from '../../assets/Vector(3).png'
import Vector4 from '../../assets/Vector(4).png'
import Vector5 from '../../assets/Vector(5).png'
import Vector6 from '../../assets/Vector(6).png'

const Sidebar = () => {

    const [selected, setSelected] = useState('Recurring')
    const [dashbord, setDashbord] = useState(true)

    const dashbordSet = () => {
        if(dashbord === true){
            setDashbord(false)
        }else{
            setDashbord(true)
        }
    }

    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src={vectorlog} alt='vectorlog' className={dashbord === true ? 'vectorlog' : 'vectorlogFalse' } onClick={() => dashbordSet()} />
                <img src={logo} alt='logoo' className='logoo' />
            </div>

            {/* Menu*/}
            <div className='menu'>
                <div className={dashbord === true ? 'menuItem' : 'meanuItemFalse'}>
                    <div className= 'sidemenu'>
                            <img src={homeLogo} alt='homeLogo' className='logos' /> <sapn className='homeText'>Home</sapn>
                    </div>

                    <div className='sidemenu'>
                        <img src={Vector2} alt='homeLogo' className='logos' /> <sapn className='homeText'>Invoices</sapn>
                    </div>

                    <div className='sidemenu'>
                        <img src={Vector3} alt='homeLogo' className='logos' /> <sapn className='homeText'>Customers</sapn>
                    </div>

                    <div className='sidemenu'>
                        <img src={Vector4} alt='homeLogo' className='logos' /> <sapn className='homeText'>Products</sapn>
                    </div>

                    <div className={selected === "Recurring" ? 'selectedsidemenu' : 'sidemenu'} onClick={() => setSelected('Recurring')}>
                        <img src={Vector5} alt='homeLogo' className='logos' /> <sapn className='homeText'>Recurring</sapn>
                    </div>

                    <div className='sidemenu'>
                        <img src={Vector6} alt='homeLogo' className='logos' /> <sapn className='homeText'>Discount</sapn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;