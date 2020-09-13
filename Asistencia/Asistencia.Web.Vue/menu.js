const Menu = [
    {
        heading: 'Main Navigation',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Configuracion',
        icon: 'icon-doc',
        translate: 'sidebar.nav.pages.PAGES',
        submenu: [
            {
                name: 'Turnos',
                path: '/Turno',
                // translate: 'sidebar.nav.pages.LOGIN'
            },
            {
                name: 'Empleados',
                path: '/Empleado',
                // translate: 'sidebar.nav.pages.LOGIN'
            },
            {
                name: 'Usuarios',
                path: '/usuario',
                // translate: 'sidebar.nav.pages.LOGIN'
            }
        ],
    },
    {
        name: 'Registro',
        icon: 'icon-note',
        translate: 'sidebar.nav.pages.PAGES',
        submenu: [
            {
                name: 'Marcador',
                path: '/marcadorMant',
                // translate: 'sidebar.nav.pages.LOGIN'
            },
            {
                name: 'Sucursal Configuración',
                path: '/sucursalConfiguracionMant',
                // translate: 'sidebar.nav.pages.LOGIN'
            }
        ]
    }
];

export default Menu;