<template>
    <div class="bg-yellow-100 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
            <div class="flex space-x-4 mb-4">
                <a href="#"><img src="/path/to/instagram-icon.png" alt="Instagram"></a>
                <a href="#"><img src="/path/to/twitter-icon.png" alt="Twitter"></a>
                <a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook"></a>
                <a href="#"><img src="/path/to/vk-icon.png" alt="VK"></a>
            </div>
            <p class="text-sm">Електронна пошта: email@gmail.com</p>
            <p class="text-sm">Телефон: 123-45-67</p>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
                <input v-model="name" type="text" placeholder="Ваше ім'я" class="p-2 rounded-md border" />
                <input v-model="phone" type="text" placeholder="Ваш телефон" class="p-2 rounded-md border" />
                <button type="submit" class="bg-red-500 text-white py-2 px-4 rounded-md">Записатися</button>
            </div>
            <p class="text-sm mt-2">Наш менеджер зв'яжеться з вами впродовж дня</p>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFormStore } from '@/stores/formStore'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

// Pinia store для збереження стану
const store = useFormStore()

// Поля форми з реактивними змінними
const name = ref('')
const phone = ref('')

// Налаштування vee-validate з використанням yup
const { handleSubmit } = useForm({
    validationSchema: yup.object({
        name: yup.string().required("Ім'я обов'язкове"),
        phone: yup
            .string()
            .required('Телефон обов\'язковий')
            .matches(/^\d{3}-\d{2}-\d{2}$/, 'Невірний формат телефону'),
    }),
    onSubmit: (values) => {
        store.updateFormData(values.name, values.phone)
        store.submitForm()
    },
})
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
