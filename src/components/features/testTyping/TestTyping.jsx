import styles from "./testTyping.module.css"
import { useEffect,useState } from "react";

export default function TextTyping(){
    const textStart = `different ways of words writing girl eating , dog bite a  bird way more strong than his owner lol others sitting maybe thing genuis cats singing halalouya things like wanting achieving success impossible thing for you things like other things that i don’ty understand is why i get angry so fast these days different way of words writing girl eating , dog bite a  bird way more strong than his owner lol others sitting maybe thing genuis cats singing halalouya things like wanting achieving success impossible thing for you things like other things that i don’ty understand is why i get angry so fast these days `;
    let wordInd = 0;
    let letterInd = 0;
    const [classes,setClasses] = useState(textStart.split("").map((e) => "char" ));


    function modifyClass(ind, newClass) {
        setClasses(prevClasses => {
          const copy = [...prevClasses];
          copy[ind] = newClass;
          return copy;
        });
      }

    function handleKey(event){
        const audio = new Audio("./assets/clickSound.wav");
        audio.play()
        if(event.key === textStart[letterInd]){
            modifyClass(letterInd,"char-correct")
        }
        else{
            modifyClass(letterInd,"char-error")
        }
        letterInd++;
    }

    useEffect(()=>{
        window.addEventListener("keyup",handleKey);
        // console.log(classes)

    },[]);

    return(
        <div className={styles.container}>
            <p>
                {textStart.split("").map((char,ind)=>{
                    return <span key={ind} className={classes[ind]}>{char}</span>
                })}
            </p>
        </div>
    )
}