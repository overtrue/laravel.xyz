import EmojiConvertor from 'emoji-js'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('emoji', new EmojiConvertor())
})
