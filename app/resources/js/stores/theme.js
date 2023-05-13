import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const color = ref('light')
  const getColor = computed(() => color.value )
  function toggle() {
    color.value = color.value == 'light' ? 'dark' : 'light'
    update()
  }
  function update() {
    document.querySelector('body').setAttribute('color-scheme', color.value)
  }

  return { color, getColor, toggle, update }
})
