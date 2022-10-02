import { useRef, useEffect, useState } from 'react';

export default function Home() {

    // const typedTextRef = useRef();
    // const cursorRef = useRef();

    // const typedTextSpan = typedTextRef.current;
    // const cursorSpan = cursorRef.current;

    typedTextSpan = {
        textArray
    }

    const [ isTyping, setIsTyping ] = useState(false);

    const textArray = ["hard", "fun", "a journey", "LIFE"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!isTyping) setIsTyping(true);
            // if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextRef.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
        else {
            setIsTyping(false);
            // cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!isTyping) setIsTyping(true);
            // if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextRef.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            setIsTyping(false);
            // cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
            if (textArray.length) setTimeout(type, newTextDelay + 250);
        });
    });

    return (
        <div className="container">
            <p>Coding is <span className="typed-text" ref={typedTextRef}>{ typedTextSpan }</span><span className="cursor" ref={cursorRef}>&nbsp;{ cursorSpan}</span></p>
        </div>
    );
};

