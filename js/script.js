console.log('Vue ok', Vue)

const { createApp } = Vue;

const app = createApp({
    name: 'VueCarousel',
    data: () => ({
        destinations,
        currentIndex: 0

    })
})

app.mount('#root');