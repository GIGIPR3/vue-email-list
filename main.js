var app = new Vue({
        el: '#root',
        data: {
            array: [],
            emailRandom: '',
        },
        methods: {
            genera() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response=>{
                        for(let i = 0; i < 10; i++){
                            let emailRandom = response.data.response
                            console.log(emailRandom)
                        }
                    }))
            }
        }
    },

);