import ColorLibrary from "views/ColorLibrary/ColorLibrary.jsx";
import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import Upgrade from "views/Upgrade/Upgrade.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

var sidebarRoute = [
  {
    isOpen: true,
    id: 1,
    panel: "About",
    items: [
      {
        path: "/colorlibrary",
        name: "Color Library",
        component: ColorLibrary
      }
    ]
  },
  {
    isOpen: false,
    id: 2,
    panel: "Styles",
    items: [
      {
        path: "/colorlibrary",
        name: "Color Library",
        component: ColorLibrary
      }
    ]
  },
  {
    isOpen: false,
    id: 3,
    panel: "Theme Default Views",
    items: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      { path: "/icons", name: "Icons", icon: "design_image", component: Icons },
      {
        path: "/maps",
        name: "Maps",
        component: Maps
      },
      {
        path: "/notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "/user-page",
        name: "User Profile",
        component: UserPage
      },
      {
        path: "/extended-tables",
        name: "Table List",
        component: TableList
      },
      {
        path: "/typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "/upgrade",
        name: "Upgrade to PRO",
        component: Upgrade
      },
      {
        redirect: true,
        path: "/",
        pathTo: "/colorlibrary",
        name: "Color Library"
      }
    ]
  },
  {
    isOpen: false,
    id: 4,
    panel: "Getting Started",
    items: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
      }
    ]
  }
];
export default sidebarRoute;
