var app = new Vue({
        el: '#root',
        data: {
            array: []
            /* emailRandom: '', */
        },
        methods: {
            genera() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        let emailRandom = response.data.response;
                        console.log(emailRandom);
                        this.array.push(emailRandom);
                    })

            }
        }
    },

);