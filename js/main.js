var app = new Vue({
        el: '#root',
        data: {
            title: "lista mail",
            mails  : ["", "", ""]
        },
        mounted: function () {
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (result) => {
                
                
                this.mails.forEach(element => {
                    element = result.data.response;
                    this.mails.push(element);
                    console.log(element);

                });
                console.log(this.mails);

                    
                }
            )        
            
        }    
        
    });