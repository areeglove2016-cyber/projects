const app={
    data : function(){
        return{
            products :products,
            path: "productes",
            cart:[],
        }
    },
    methods :{
        addToCart : function(productes){
            let check = this.cart.some(function(ele){
                return ele.item.id == productes.id
            })
            if(check == false){
                this.cart.push({ item :productes , count : 1 })
        
               }else {
        
                let added_pro = this.cart.find(function(ele){
                    return ele.item.id == productes.id
                })
        
                added_pro.count++;
        
               }
        
               productes.count --;
           
            },
            deletitem:function(cart){
               let delet =this.cart.pop()
                  
               }

            

        },
    }

Vue.createApp(app).mount("#app")