
// const {createApp} = Vue
Vue.createApp({
    data() {
        return {
            tv_on: false,
            slides: [
                'https://www.youtube.com/embed/t0Q2otsqC4I', 
                'https://www.youtube.com/embed/JnAG50Fe7Hs',
                'https://www.youtube.com/embed/mShlLa5TuAQ'  
            ],
            visible: 0
        }
    },
    methods: {
        toggleOnOff() {
            this.tv_on = !this.tv_on
        },
        next() {
            if(this.visible >= this.slides.length - 1) {
                this.visible = 0;
            } else {
                this.visible++;
            }
        },
        prev() {
            if(this.visible <= 0) {
                this.visible = this.slides.length -1 ;
            } else {
                this.visible--;
            }
        }
    }
}).mount('#application')

