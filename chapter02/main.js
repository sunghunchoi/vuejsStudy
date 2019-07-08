
var app = new Vue({
    el : '#app',
    data :{
        // Object Data
        message :{
            value :'Hello Vue js!'
        },
        // Array Data
        list :['사과','바나나','딸기'],
        // 다른 데이터를 사용해서 list에서 값을 추출하기 위한 요소
        num : 1,
        scroll : 0
    },
    mounted: function(){
        this.scroll = 10
    }
})

var clickApp = new Vue({
    el : '#clickApp',
    data : {
        classObject: {
            child:true,
            'is-active':false
        },
        styleObject: {
            color : 'red',
            backgroundColor: 'lightgray'
        },
        count : 0,
        isChild : true,
        isActive : true,
        textColor : 'red',
        bgColor : 'lightgray'
    },
    methods: {
        // 버튼을 클릭할 때의 핸들러
        increment : function(){
            this.count += 1
        },
        reset : function(){
            this.count = 0
        }
    }

})

var svgApp = new Vue({
    el : '#svgApp',
    data : {
        radius : 50
    }
})