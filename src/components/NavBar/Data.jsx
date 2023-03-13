import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
export const Data = [
    {
      title: "Aprobar reservas",
      path: "/admin/home",
      cName: "nav-text",
      icon: <AiIcons.AiFillHome />,    
    },
  
    {
      title: "Reportes",      
      icon: <IoIcons.IoIosPaper />,
      cName: "nav-text",
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subindice:[
        {
          title: "Reporte1",
          path: "/admin/reportes/R1",
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: "Reporte2",
          path: "/admin/reportes/R2",
          icon: <IoIcons.IoIosPaper />,
        },
      ]
    },
    {
      title: "Productos",
      path: "/admin/productos",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav-text",
    },
    {
      title: "Base de datos",
      path: "/admin/base",
      icon: <AiIcons.AiTwotoneDatabase />,
      cName: "nav-text",
    },
    {
      title: "Salir",
      path: "/",
      icon: <IoIcons.IoIosExit />,
      cName: "nav-text",
    },
   
  ];