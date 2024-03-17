
export default class Test{
    
    // get the path of the sound using its name
    getSoundPath(sound){
        const sounds = {
            "keyboard":"./public/assets/sounds/keyboard.wav",
            "click":"./public/assets/sounds/click.wav",
            "cherryBlue":"./public/assets/sounds/cherryBlue.wav",
            "typeSoft":"./public/assets/sounds/typeSoft.wav",
        }
        return sounds[sound];
    }
    
    constructor(level,duration,sound,texts,element_base,element_info,element_timer){

        this.test_finished = false;
        this.test_started = false;
        this.time_passed = 0;

        let sound_path = this.getSoundPath(sound);

        this.audio = new Audio(sound_path);
        this.audio.playbackRate = 1.5;

        this.element_base = element_base;
        this.element_info = element_info;
        this.element_timer = element_timer;

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
    

    startTest(sound,duration,level){
        this.test_started = true;
        this.test_finished = false;
        this.sound_path = this.getSoundPath(sound) || this.audio;
        this.sound = new Audio(this.sound_path)
        this.duration = duration || this.duration;
        this.level = level || this.level;
    }
    
    restart(sound,duration,level,texts){
        this.time_passed = 0;
        this.test_finished = false;
        this.test_started = false;

        this.sound_path = this.getSoundPath(sound) || this.audio;
        this.sound = new Audio(this.sound_path)
        this.duration = duration || this.duration;
        this.level = level || this.level;

        this.correct_words = 0;
        this.wrong_words = 0;
        this.correct_chars = 0;
        this.wrong_chars = 0;
            
        this.text_lines = texts;
        this.line_index = 0;
        this.setText();
        this.render();
        this.element_timer.innerHTML = `${(this.duration-this.time_passed-1)}s`;
    }
    
    setText(){
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
        if(!this.test_started && !this.test_finished) return false;
        this.audio.currentTime = 0;
        if(!this.test_finished){
            this.audio.play();
            this.handleChar(char);
        }
        
    }
    
    nextline(){
        this.line_index++;
        this.setText();
    }

    handleChar(char){
        // if space then go to next word check if the word we were in is not wrong if it's not change its class back
        // to normal word .word and highlight the new word by underline using .curr-word
        if(char==" "){
            this.wordIndex++;
            this.charIndex=0;
            this.word_classes[this.wordIndex] = "curr-word";
            if(this.word_classes[this.wordIndex-1]!="wrong-word"){
                this.word_classes[this.wordIndex-1] = "word";
                this.correct_words++;
            }
        }
        // if char correct higlight the char using .char-correct else use .char-error and higlight the word also using .wrong-word
        else{
            if(char == this.text_2d_arr[this.wordIndex][this.charIndex]){
                this.classes[this.wordIndex][this.charIndex] = "char-correct";
                this.correct_chars++;
            }
            else{
                this.classes[this.wordIndex][this.charIndex] = "char-error";
                this.wrong_chars++;
                if(this.word_classes[this.wordIndex]!= "wrong-word"){
                    this.word_classes[this.wordIndex] = "wrong-word";
                    this.wrong_words++;
                }
            }
            this.charIndex++;
        }
        // if we get to the end of line generate new line
        if(this.wordIndex > this.text_2d_arr.length-1){
            this.nextline();
        }
        this.render();
    }
    
    anotherSecond(){
        this.element_timer.innerHTML = `${(this.duration-this.time_passed-1)}s`;
        this.time_passed++;
        if(this.time_passed>=this.duration){
            this.test_finished = true;
        }
    }


    render(){
        // generate html to base elemnt 
        let html = this.text.split(" ").map((word,WI)=>{
            let word_html = word.split("").map((char,CI)=>{
                return `<span class="${this.classes[WI][CI]}">${char}</span>`;
            }).join("");
            return `<span class="${this.word_classes[WI]}">${word_html}</span>`;
        }).join(" ");
        // add in it to the element 
        this.element_base.innerHTML = html; 
        console.log(`correct chars:${this.correct_chars}  correct words:${this.correct_words}`);
    }



}