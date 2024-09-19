import React from 'react'
import backlog from '../assets/icons_FEtask/Backlog.svg';
import todo from '../assets/icons_FEtask/To-do.svg';
import inProgress from '../assets/icons_FEtask/in-progress.svg';
import done from '../assets/icons_FEtask/Done.svg';
import cancelled from '../assets/icons_FEtask/Cancelled.svg';
import profile from '../assets/icons_FEtask/profile.jpg'

const statusIcons = {
    Backlog: backlog,
    Todo: todo,
    'In progress': inProgress,
    Done: done,
    Cancelled: cancelled,
};

const Card2 = ({ id, title, tag, status }) => {

    const statusIcon = statusIcons[status];

    return (
        <div className='card'>
            <div className='card-top'>
                <p>{id}</p>
                <img src={profile} alt='profile' className="profile" />                
            </div>
            <div className='card-middle'>
                <img src={statusIcon} alt={`Status ${status}`} className="status-logo" />
                <p>{title}</p>
            </div>
            <div className='card-bottom'>
                <div>
                    <div className='circle'></div>
                    <p>{tag}</p>
                </div>
            </div>
        </div>
    )
}

export default Card2
