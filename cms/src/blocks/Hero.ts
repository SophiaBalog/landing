import {Block} from "payload";

export const Hero: Block = {
    slug: 'Hero',
    labels:{singular: 'Hero', plural: 'Hero'},
    fields: [
        {name: 'anchor', type: 'text', label: 'ID секції', required: true},
        {name: 'badge', type: 'text', label: 'Бейдж на головній'},
        {name: 'title', type: 'text', label: 'Заголовок',required: true},
        {name: 'subtitle', type: 'text', label: 'Підзаголовок'},
        {name: 'image', type: 'upload', relationTo:"media",label: 'Зображення'},
        {name: 'buttons', type: 'array', label: 'Кнопки', maxRows: 2, fields: [
            {name: 'text', type: 'text', label: 'Текст кнопки', required: true},
            {name: 'link', type: 'text', label: 'URL кнопки', required: true},
            {name:'variant', type: 'select', label: 'Варіант кнопки',defaultValue: 'primary', options: [
                {label: 'Основна', value: 'primary'},
                {label: 'Додаткова', value: 'secondary'},
            ]}
        ]},

    ]
}