// stores/formStore.ts
import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', {
  state: () => ({
    formData: {
      name: '',
      phone: ''
    }
  }),
  actions: {
    updateFormData(name: string, phone: string) {
      this.formData = { name, phone }
    },
    async submitForm() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        })
        const result = await response.json()
        alert(`Запит успішно виконано: ${JSON.stringify(result)}`)
      } catch (error) {
        alert('Сталася помилка під час виконання запиту')
      }
    }
  }
})
