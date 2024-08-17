export const navItemData: NavItemProps[] = [
    
    {
        title: "Home",
        icon: "ri:home-fill",
        link: "/home",
    },
    {
        title: "About",
        icon: "ri:information-fill",
        link: "/about",
    },
    
    {
        title: "Charts",
        icon: "ri:folder-chart-fill",
        
        dropdown: true,
        subMenu: [{title: "Income", icon: "ri:exchange-dollar-fill", link: "/income"},
        {title: "Frameworks", icon: "ri:code-s-slash-fill", link: "/frameworks"}
        ] 
    },
    {
        title: "Profile",
        icon: "ri:account-circle-fill",
        link: "/profile",
    },
    {
        title: "Logout",
        icon: "ri:logout-box-r-fill",
        link: "/login",
    },
]