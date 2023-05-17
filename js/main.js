const { createApp } = Vue

createApp({
    data() {
        return{
            emails:[],
            randomEmailsApi: 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    },

    methods: {

    },


    mounted() {
        for (let index = 0; index < 9; index++) {
            axios.get( this.randomEmailsApi ).then((emails) => {
                let newemail = emails.data.response;
                console.log(newemail)
                this.emails.push(newemail)
            });
            
        }
       
    },
}).mount('#app')