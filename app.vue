<script setup>
// Імпорт компоненту форми
import FooterForm from './components/FooterForm.vue'
</script>

<template>
  <div>
    <!-- Заголовок сторінки -->
    <header class="p-4 bg-gray-800 text-white text-center">
      <h1 class="text-3xl font-bold">Тестова форма для реєстрації</h1>
    </header>

    <!-- Основний вміст сторінки з компонентом форми -->
    <main class="p-6">
      <FooterForm />
    </main>

    <!-- Footer сторінки -->
    <footer class="bg-gray-800 text-white text-center p-4 mt-10">
      <p>Реалізовано у рамках тестового завдання, 2024</p>
    </footer>
  </div>
</template>