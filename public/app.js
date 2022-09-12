const { createApp } = Vue


// 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

createApp({
    data() {
        return {
           
          
            page: 'home',
           
            location: '',
            calendar: '',
            contact: '',
            game_today: '',
            login: '',
            oct_calendar: '',
            sep_calendar: '',
            registration: '',
            rules: '',
            voluntariado: '',
            weekend: '',
        }
    },




    
    created() {
     
    },
    methods: {
    
    },
    computed:{
   
    }

}).mount('#app')
