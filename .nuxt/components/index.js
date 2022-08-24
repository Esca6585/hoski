export { default as Footer } from '../../components/Footer.vue'
export { default as Gallery } from '../../components/Gallery.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Hoskines } from '../../components/Hoskines.vue'
export { default as Main } from '../../components/Main.vue'
export { default as Middle } from '../../components/Middle.vue'
export { default as Panel } from '../../components/Panel.vue'
export { default as Scale } from '../../components/Scale.vue'
export { default as Welcome } from '../../components/Welcome.vue'
export { default as Work } from '../../components/Work.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
