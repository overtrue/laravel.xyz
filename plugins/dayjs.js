import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import 'dayjs/locale/zh-cn'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    dayjs.extend(relativeTime)
    dayjs.locale('zh-cn')
    nuxtApp.provide('dayjs', dayjs)
})