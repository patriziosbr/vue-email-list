var app = new Vue({
        el: '#root',
        data: {
            title: "lista mail",
            mails  : []
        },
        mounted: function () {
            
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (result) => {
                        element = result.data.response;
                        this.mails.push(element);
                        console.log(element); 
                    }
                )        
            }
        }    
        
    });