var calculations = new Vue({
    el:'#calculations',
    data:{
        num1:'',
        num2:'',
        total1:'',
        total2:'',
        total3:'',
        total4:'',
    },
    methods: {
        calculate:function() {
            this.total1 = parseInt(this.num1) + parseInt(this.num2);
            this.total2 = this.num1 - this.num2;
            this.total3 = this.num1 / this.num2;
            this.total4 = this.num1 * this.num2;
            
        }
    },
})
