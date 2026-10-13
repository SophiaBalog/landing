import type { CollectionConfig } from 'payload';

import { Hero } from '../blocks/Hero';
import { Features } from '../blocks/Features';


export const Pages: CollectionConfig = {
    slug: 'pages',
    labels:{singular: 'Сторінка', plural: 'Сторінки'},
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields:[
        {name:'path', type:'text', label: ' адреса сторінки', required: true,unique: true, defaultValue: '/'},
        {name:'title', type:'text', label: 'Заголовок сторінки', required: true},
        {name:'blocks', type:'blocks', label: 'Блоки сторінки', blocks:[Hero, Features]}
    ]
}