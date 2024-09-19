import React from 'react'
import priority0 from '../assets/icons_FEtask/No-priority.svg'
import priority1 from '../assets/icons_FEtask/Img - Low Priority.svg'
import priority2 from '../assets/icons_FEtask/Img - Medium Priority.svg'
import priority3 from '../assets/icons_FEtask/Img - High Priority.svg'
import priority4 from '../assets/icons_FEtask/SVG - Urgent Priority grey.svg'
import profile from '../assets/icons_FEtask/profile.jpg'

const priorityIcons = {
    0: priority0,
    1: priority1,
    2: priority2,
    3: priority3,
    4: priority4,
};

const Card1 = ({ id, title, tag, priority }) => {

    const priorityIcon = priorityIcons[priority];

    return (
        <div className='card'>
            <div className='card-top'>
                <p>{id}</p>
                <img src={profile} alt='profile' className="profile" />                
            </div>
            <p>{title}</p>
            <div className='card-bottom'>
                <div className='priority-container'>
                    <img src={priorityIcon} alt={`Priority ${priority}`} className="priority-logo" />
                </div>
                <div>
                    <div className='circle'></div>
                    <p>{tag}</p>
                </div>
            </div>
        </div>
    )
}

export default Card1
