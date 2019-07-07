var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!!',
        list: ['사과','바나나','딸기']
    },
    methods:{
        handleClick:function(event){
            alert(event.target)
            alert(this.list)
        }
    }
})

var inputapp = new Vue({
    el: '#inputapp',
    data: {
        message : '초기 메세지',
        count : 100,
        show: true
    },
    methods:{
        showClick:function(event){
            if(this.show == true){
                this.show = false
            }else{
                this.show = true
            }
        }
    }
})

var tranapp = new Vue({
    el: '#tranapp',
    data:{
        show : true
    }
})