import React from 'react'

// redux 
import { useSelector,useDispatch } from 'react-redux'
import {clearNotification} from '../../features/notificationsSlice'

// css
import './notificationBox.css'

// img 
import settingsImg from '../../assets/icons/settings.png'




export default function NotificationBox() {
    const notifications = useSelector(state => state.notifications.messages);
    const dispatch = useDispatch()
    const clearNotificationHandler = () =>{
        dispatch(clearNotification())
    }
    return (
        <div className='notificationBox'>
            <div className="notificationHeader">
                <div className="notificationTitleAndSettings">
                    <h1 className='notificationTitle'>Notfications</h1>
                    <img className='notificationSettings' src={settingsImg} alt="" />
                </div>
                <p className="notificationSubTitle">you have <span>{notifications.length} Notifications</span></p>
            </div>
            {
                notifications.length > 0 ? 
                <div>
                    <div className='clearAll' ><span onClick={clearNotificationHandler} >clear all</span></div>
                    <div className="notifications">
                        {
                            notifications.map((notification, index) => <SingleNotification key={index} title={notification.title} message={notification.message} time={notification.time} status={notification.status} />)
                        }
                    </div>
                </div>
                : <span className='noNotifications'></span>
            }


        </div>
    )
}


const SingleNotification = ({ title, message, time, status }) => {
    return (
        <div className="singleNotification">
            <img src={status} alt="" />
            <div className="notificationInfo">
                <h1 className='notificationMessageTitle'>{title}</h1>
                <p className='notificationMessage'>{message}</p>
                <span className='notificationTime'>{time}</span>
            </div>
        </div>
    )
}