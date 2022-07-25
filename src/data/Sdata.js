import Html from "../images/icons8-html-5.svg"
import CSS from "../images/icons8-css3.svg"
import SaSS from "../images/icons8-sass.svg"
import BootStrap from "../images/icons8-bootstrap.svg"
import Tailwind from "../images/icons8-tailwindcss.svg"
import Java from "../images/icons8-java.svg"
import JavaScript from "../images/icons8-javascript.svg"
import ReactJs from "../images/icons8-react.svg"
import NextJs from "../images/icons8-next.svg"
import NodeJs from "../images/icons8-nodejs.svg"
import MongoDB from "../images/icons8-mongodb.png"
import CoralDraw from "../images/icons8-coreldraw.svg"
import Adobe from "../images/icons8-adobe-photoshop.svg"
import figma from "../images/icons8-figma.svg"
import stock from "../images/r1.svg"
import palindrone from "../images/r2.svg"
import fun from "../images/r3.svg"
import lucky from "../images/r4.svg"
import cash from "../images/r5.svg"
import good from "../images/r6.svg"
import emoji from "../images/r7.svg"
import talk1 from "../images/r8.svg"
import talk2 from "../images/r9.svg"
import quiz from "../images/r10.svg"
import doyou from "../images/r11.svg"

const Sdata = [
    {
        name: "Html",
        img: (Html),
        level:"Level-intermediate"
    },
    {
        name: "CSS",
        img: (CSS),
        level:"Level-intermediate"
    },
    {
        name: "SaSS",
        img: (SaSS),
        level:"Level-intermediate"
    },
    {
        name: "BootStrap",
        img: (BootStrap),
        level:"Level-intermediate"
    },
    {
        name: "Tail-Css",
        img: (Tailwind),
        level:"Level-intermediate"
    },
    {
        name: "Java",
        img: (Java),
        level:"Level-intermediate"
    },
    {
        name: "JavaScript",
        img: (JavaScript),
        level:"Level-intermediate"
    },
    {
        name: "ReactJs",
        img: (ReactJs),
        level:"Level-intermediate"
    },
    {
        name: "NextJs",
        img: (NextJs),
        level:"Level-intermediate"
    },
    {
        name: "NodeJs",
        img: (NodeJs),
        level:"Level-Basic"
    },
    {
        name: "MongoDB",
        img: (MongoDB),
        level:"Level-Basic"
    },
    {
        name: "CoralDraw",
        img: (CoralDraw),
        level:"Level-intermediate"
    },
    {
        name: "Adobe PS",
        img: (Adobe),
        level:"Level-intermediate"
    },
    {
        name: "Figma",
        img: (figma),
        level:"Level-intermediate"
    },
]
const Sdata2 = [
    {
        name: "Stock App",
        img: (stock),
    },
    {
        name: "Palidrome Birthday",
        img: (palindrone),
    },
    {
        name: "funWithTriangles App",
        img: (fun),
    },
    {
        name: "Lucky Birthday App",
        img: (lucky),
    },
    {
        name: "Cash Register App",
        img: (cash),
    },
    {
        name: "GoodBooks",
        img: (good),
        
    },
    {
        name: "Emoji Interpreter",
        img: (emoji),
       
    },
    {
        name: "Talk Like Groot",
        img: (talk1),
        
    },
    {
        name: "Talk Like Banana",
        img: (talk2),
        
    },
    {
        name: "Quiz On Cricket",
        img: (quiz),
        
    },
    {
        name: "Do You Know Me",
        img: (doyou),
    },
]
const Sdata3 = [
    {
        ser:"11-",
        name:"Stock App",
        time:"15-Aug-2022",
        desc:"A stock app which takes initial value of your stock, quantity of stocks which you holds and current price of that stock and shows you whether you are in profit, loss or nothing."
    },
    {
        ser:"10-",
        name:"Palindrome Birthdates",
        time:"14-Aug-2022",
        desc:"A birthday app which takes bithdate as input and shows whether it is palindrome or not. If birthdate is not palindrome then it also show nearest next palindrome date and days from which you missed it."
    },
    {
        ser:"9-",
        name:"funWithTriangles App",
        time:"14-Aug-2022",
        desc:"A fun app based on triangles which contains quizzes and which can be used to find area, sum of triangles and hypotenuse of a triangle when two sides are given."
    },
    {
        ser:"8-",
        name:"Lucky Birthday App",
        time:"9-Aug-2022",
        desc:"A web app which takes input of your birthday and lucky number and tells you whether your birthday is lucky or not."
    },
    {
        ser:"7-",
        name:"Cash Register App",
        time:"5-Aug-2022",
        desc:"An app which helps to calculate how much amount you need to give back to user after deducting bill amount."
    },
    {
        ser:"6-",
        name:"GoodBooks",
        time:"2-Aug-2022",
        desc:"A book recommendation app which recommend you the books according to your interests."
    },
    {
        ser:"5-",
        name:"Emoji Interpreter",
        time:"19-July-2022",
        desc:"An emoji interpreter which tells the meaning of the entered emoji."
    },
    {
        ser:"4-",
        name:"Talk Like Groot?",
        time:"02-July-2022",
        desc:"A stock app which takes initial value of your stock, quantity of stocks which you holds and current price of that stock and shows you whether you are in profit, loss or nothing."
    },
    {
        ser:"3-",
        name:"Talk Like Banana",
        time:"25-June-2022",
        desc:"Are you a fan of minions? Did you know that the gibberish they say is an actual language."
    },
    {
        ser:"2-",
        name:"Quiz On Cricket",
        time:"20-June-2022",
        desc:"A CLI ( command line interface ) app to know your knowledge about Cricket!"
    },
    {
        ser:"1-",
        name:"Do You Know Me?",
        time:"11-June-2022",
        desc:"A CLI ( command line interface ) app to know how better you know me?"
    },
]
export default Sdata;
export {Sdata2,Sdata3};