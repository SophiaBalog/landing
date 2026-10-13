import type { GlobalConfig } from 'payload'

export const Common: GlobalConfig = {
    slug: 'common',
    label: 'Налаштування сайту',
    access: {
        read: () => true,
    },
    fields: [
        {name: 'siteName', type: 'text', label: 'Назва сайту', required: true},
        {name: 'menu', type: 'array', label: 'головне меню', required: true, fields:[
            {name: 'label', type: 'text', label: 'Назва пункту меню', required: true},
            {name: 'link', type: 'text', label: 'URL пункту меню', required: true},
        ]},
        {name: 'footer', type: 'group', label: 'Футер сайту', fields:[
            {name: 'copyright', type: 'text', label: 'Текст копірайту', required: true},
        ]}
    ]
}