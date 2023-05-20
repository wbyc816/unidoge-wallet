/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { md2 } from 'vuetify/blueprints'
import { VBtn } from 'vuetify/components/VBtn'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md2,
  display: {
    mobileBreakpoint: 'xs' // 不做手机的适配
  },
  aliases: {
    LinearBtn: VBtn
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#181729',
          primary: '#493D60',
          secondary: '#9A98B9',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      variants: 'elevated'
    },
    LinearBtn: {
      style: { background: 'radial-gradient(104.17% 5337.03% at 100% 100%, #D85D4C 0%, #602C7B 100%)' }
    },
    VSheet: {
      color: 'transparent'
    },
    VTextField: {
      variant: 'solo-inverted',
      'bg-color': 'blue-grey-darken-3'
    }
  }
})
