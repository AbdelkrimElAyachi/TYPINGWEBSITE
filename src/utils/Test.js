
export default class Test{
    
    constructor(level,duration,element_base,element_info,click_sound,texts){

        this.test_started = false;
        this.test_finished = false;
        this.time_passed = 0;

        this.audio = new Audio(click_sound);
        this.audio.playbackRate = 1.5;

        this.element_base = element_base;
        this.element_info = element_info;
        this.level = level;
        this.duration = duration;

        this.correct_words = 0;
        this.wrong_words = 0;
        this.correct_chars = 0;
        this.wrong_chars = 0;

            
        this.text_lines = texts;
        this.line_index = 0;
        this.setText();
        this.render();
    }
    
    setText(text){
        // the indexes that will grow with us :)
        this.charIndex = 0;
        this.wordIndex = 0;


        this.text = this.text_lines[this.line_index];
        this.text_2d_arr = this.text.split(" ").map(word=>{
            return word.split("").map(char=>{
                return char 
            })
        })
        
        // word classes when we store our word classes to remeber them RIP :(
        this.word_classes = this.text.split(" ").map( word => "word" );
        this.word_classes[0] = "curr-word";
            
        this.classes = this.text.split(" ").map((word,ind)=>{
            return word.split("").map(char=>"char");
        })

    }

    buttonClicked(char){
        this.test_started = true;
        if(this.test_started && !this.test_finished){
            this.handleChar(char);
        }

    }

    nextline(){
        this.line_index++;
        this.setText();
    }

    handleChar(char){
        if(char==" "){
            this.wordIndex++;
            this.charIndex=0;
            this.word_classes[this.wordIndex] = "curr-word";
            if(this.word_classes[this.wordIndex-1]!="wrong-word"){
                this.word_classes[this.wordIndex-1] = "word";
            }
        }
        else{
            if(char == this.text_2d_arr[this.wordIndex][this.charIndex]){
                this.classes[this.wordIndex][this.charIndex] = "char-correct";
            }
            else{
                this.classes[this.wordIndex][this.charIndex] = "char-error";
                this.word_classes[this.wordIndex] = "wrong-word"
            }
            this.charIndex++;
        }
        console.log(`word index : ${this.wordIndex}   length : ${this.text_2d_arr.length-1}'`)            
        if(this.wordIndex > this.text_2d_arr.length-1){
                this.nextline();
        }
        this.render();
    }

    anotherSecond(){
        this.time_passed++;
        if(this.time_passed>=this.duration){
            this.test_finished = true;
        }
    }

    restart(){
        this.test_started = false;
        this.test_finished = false;
        this.time_passed = 0;
        this.setText();
        this.render();
    }

    render(){
        let html = this.text.split(" ").map((word,WI)=>{
            let word_html = word.split("").map((char,CI)=>{
                return `<span class="${this.classes[WI][CI]}">${char}</span>`;
            }).join("");
            return `<span class="${this.word_classes[WI]}">${word_html}</span>`;
        }).join(" ");

        this.element_base.innerHTML = html; 

    }

    // test(char){
    //     this.audio.currentTime = 0;
    //     this.audio.play() 
    //     if(this.test_finished){
    //         return ;
    //     }
    //     if(char===this.text_2d_arr[this.wordIndex][this.charIndex]){
    //         this.correct_chars++;
    //         this.classes[this.wordIndex][this.charIndex] = "char-correct";
    //         this.charIndex++;
    //     }
    //     else if(char===" "){
    //         this.wordIndex++;
    //         if(this.word_classes[this.wordIndex-1]=="curr-word"){
    //             this.word_classes[this.wordIndex-1] = "word";
    //             this.correct_words ++;
    //         }else{
    //             this.wrong_words++;
    //         }
    //         this.word_classes[this.wordIndex]="curr-word";
    //         this.charIndex = 0;
    //     }else{
    //         this.classes[this.wordIndex][this.charIndex] = "char-error";
    //         this.word_classes[this.wordIndex]="wrong-word"
    //         this.charIndex++;
    //         this.wrong_chars++;
    //     }
    //     this.render()
    // }
    
    // startTest(){
    //     this.test_started = true;
    //     this.test_finished = false;
    // }
    
    // endTest(){
        
    // }
    
    // displayResults(){
        
    // }
    
    // anotherSecond(){
    //     if(this.test_started && !this.test_finished){
    //         this.time_passed += 1;
    //     }
    //     if(this.time_passed>this.duration){
    //         this.test_finished = true;
    //         this.test_started = false;
    //         this.endTest();
    //     }
    // }

    // render(){

    //     this.html = this.text.split(" ").map((word,WInd)=>{

    //         let wordHTML = word.split("").map((char,CInd)=>{
    //             return `<span class="${this.classes[WInd][CInd]}">${char}</span>`
    //         }).join("")
    
    //         return `<span class="${this.word_classes[WInd]}">${wordHTML}</span>`;
    
    //     }).join(" ");


    //     this.element_base.innerHTML = this.html;

    //     this.element_info.innerHTML = `
    //     <p>correct chs : <span class="char-correct">${this.correct_chars}</span>  wrong chs : <span class="char-error">${this.wrong_chars}</span></p>
    //     <p>correct words : <span class="char-correct">${this.correct_words}</span> wrong words : <span class="char-error">${this.wrong_words}</span></p>
    //     `
    // }

}