import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import RoomIcon from '@material-ui/icons/Room';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SettingsIcon from '@material-ui/icons/Settings';

export const SidebarContents = [
    {
        title:"DashBoard",
        icon:<DashboardIcon/>,
        path:"#"
    },
    {
        title:"Statistics",
        icon:<BarChartIcon/>,
        path:"#"
    },
    {
        title:"Map",
        icon:<RoomIcon/>,
        path:"#"
    },
    {
        title:"Calendar",
        icon:<CalendarTodayIcon/>,
        path:"#"
    },
    {
        title:"Setting",
        icon:<SettingsIcon/>,
        path:"#"
    }

]

