
export default class Test{
    
    constructor(level,duration,element){

        this.element = element;
        this.level = level;
        this.duration = duration;

        // lol   
        this.text = "hello this is nice day to be outside ,flower are blooming , flies are flying in days like these kids like you should be burning in hell you can not give hooooho ohooho i'm stronger than you ";
        this.text2 = this.text.split(" ").map(word=>{
            return word.split("").map(char=>{
                return char
            })
        })

        // word classes when we store our word classes to remeber them RIP :(
        this.WORDClasses = this.text.split(" ").map( word => "word" );
        this.WORDClasses[0] = "curr-word"

        this.classes = this.text.split(" ").map((word,ind)=>{
            return word.split("").map(char=>"char");
        })

        // the indexes that will grow with us :)
        this.charIndex = 0;
        this.wordIndex = 0;

        
    }

    test(char){
        if(char===this.text2[this.wordIndex][this.charIndex]){

            this.classes[this.wordIndex][this.charIndex] = "char-correct";
            this.charIndex++;
        }
        else if(char===" "){
            this.wordIndex++;
            this.WORDClasses[this.wordIndex]="curr-word";
            this.charIndex = 0;
        }else{
            this.classes[this.wordIndex][this.charIndex] = "char-error";
            this.WORDClasses[this.wordIndex]="wrong-word"
            this.charIndex++;
        }
        this.render()
    }
    
    startTest(){
        
    }
    
    endTest(){
        
    }
    
    displayResults(){
        
    }
    
    render(){

        this.html = this.text.split(" ").map((word,WInd)=>{

            let wordHTML = word.split("").map((char,CInd)=>{
                return `<span class="${this.classes[WInd][CInd]}">${char}</span>`
            }).join("")

            return `<span class="${this.WORDClasses[WInd]}">${wordHTML}</span>`;

        }).join(" ")

        this.element.innerHTML = this.html;
    }
}