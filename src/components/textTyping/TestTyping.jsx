import { useEffect } from "react"
import "./testTyping.css";
import { useState } from "react";




export default function TextTyping(){
    let charInd = 0
    const[classes,setClasses] = useState([]);

    const text = "different way of words writing girl eating , dog bite a  bird way more strong than his owner lol others sitting maybe thing genuis cats singing halalouya things like wanting achieving success impossible thing for you things like"
    useEffect(() => {
        const updatedClasses = Array.from({ length: text.length }, () => "char");
        setClasses(updatedClasses);
    }, [text]);

    const display_text = text.split("").map((char,ind)=>{
        return <span key={ind} className={classes[ind]}>{char}</span>
    })

    useEffect(() => {
        const handleKeyPress = (event) => {
            console.log('Key pressed:', event.key);

            setClasses((prevClasses) => {
              const newClasses = [...prevClasses];
              if (event.key === text[charInd]) {
                newClasses[charInd] = 'char-correct';
              } else {
                if(text[charInd] == " "){
                    display_text[charInd] = "_"
                }
                newClasses[charInd] = 'char-error';
              }
              return newClasses;
            });
            setTimeout(() => {
                charInd += 1;
                console.log(charInd)
            }, 10);
        };
    
        // Add event listener for keydown event
        window.addEventListener('keydown', handleKeyPress);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []); // Empty dependency array to run the effect only once    

    return(
        <div className="textTyping">
            <p id="text">
                {display_text}
            </p>
        </div>
    )
}