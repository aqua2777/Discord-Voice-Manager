import { GatewayIntentBits, Collection, ButtonStyle } from 'discord.js';

export const internal = {
    token: '', // Токен бота (https://discord.com/developers/applications)
}

export const intents: GatewayIntentBits[] | number = 131071 // Все интенты

export const cooldownVoiceJoin: number = 1000 // Задержка на вход в голосовой канал (в миллисекундах)

export const settings = {
    webhook : {
        name: 'Voice Manager' // Имя вебхука
    },
    defaultName: '⭐ {username}',
    color: 0x2f3136,
    style: ButtonStyle.Secondary,
    buttons: { // Эмодзи и их описание :)
        'rename': {
            title: 'Изменить название'
        },
        'limit': {
            title: 'Изменить лимит'
        },
        'close': {
            title: 'Закрыть/открыть'
        },
        'hide': {
            title: 'Скрыть/показать'
        },
        'user': {
            title: 'Бан/разбан'
        },
        'speak': {
            title: 'Мут/размут'
        },
        'kick': {
            title: 'Выгнать пользователя'
        },
        // 'reset': {
        //     title: 'Сбросить права пользователю'
        // },
        'owner': {
            title: 'Передать права'
        },
        // 'info': {
        //     title: 'Информация о комнате'
        // }
    },
    placeholder: { // Заголовки у меню при выборе пользователя или канала
        user: '🔷 Выберите пользователя',
        channel: '🔷 Выберите приватную комнату'
    },
    line: true, // Линия в панели управления (сейчас она не стоит, чтобы её поставить впишите "true" вместо "false")
    dot: false, // Эмодзи перед эмодзи в панели комнаты (сейчас эмодзи не стоит, чтобы поставить впишите "true" вместо "false")
    debug: false // Отладка (сейчас она не стоит, чтобы её поставить впишите "true" вместо "false")
}