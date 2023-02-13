import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FolderIcon from '@mui/icons-material/Folder';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../Components/Image/logo.svg';


export const SidebarData = [
    {
        title: "",
        icon: <div id='mainLogo'><img src={logo} alt="Logo" className='logo'/></div>,
        link: ""
    },
    {
        title: "NEW",
        icon: <AddIcon />,
        link: "/add"
    },
    {
        title: "PATIENT",
        icon: <PersonOutlineIcon />,
        link: "/personutline"
    },
    {
        title: "FOLDER",
        icon: <FolderIcon />,
        link: "/folder"
    },
    {
        title: "UPLOAD",
        icon: <CloudUploadIcon />,
        link: "/cloudupload"
    },
    {
        title: "REPORT",
        icon: <TextSnippetOutlinedIcon />,
        link: "/textsnippetoutlined"
    },
    {
        title: "SETTING",
        icon: <SettingsIcon />,
        link: "/settings"
    },
    {
        title: "LOGOUT",
        icon: <LogoutIcon />,
        link: "/logout"
    },
] 



