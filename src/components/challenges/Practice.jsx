import React, { useState, useEffect } from 'react';
 import Navbar from '../ui/Navbar'
 
 
 function Practice(){
 
   const [digits, setDigits] = useState('');
   const [userAnswer, setUserAnswer] = useState('');
   const [gameStatus, setGameStatus] = useState('playing');
   const [solution, setSolution] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const [timeLeft, setTimeLeft] = useState(60); 
   const [timerActive, setTimerActive] = useState(false);
 
 
   const generateSequence = () => {
     let seq = '';
     for (let i = 0; i < 6; i++) {
         seq += Math.floor(Math.random() * 9) + 1;
     }
 
     return seq;
 
   };
 
   
 
   // Start a new game
 
   const startNewGame = () => {
 
     const newDigits = generateSequence();
     setDigits(newDigits);
     setUserAnswer('');
     setGameStatus('playing');
     setErrorMessage('');
     setTimeLeft(60);
     setTimerActive(true);
     const newSolution = findSolution(newDigits);
     setSolution(newSolution || "No exact solution found");
 
   };
 
   const findSolution = (sequence) => {
 
     const patterns = [
       `(${sequence[0]}${sequence[1]}+${sequence[2]})*${sequence[3]}+${sequence[4]}${sequence[5]}`,
       `${sequence[0]}*${sequence[1]}*${sequence[2]}+${sequence[3]}*${sequence[4]}*${sequence[5]}`,
       `${sequence[0]}${sequence[1]}+${sequence[2]}${sequence[3]}+${sequence[4]}${sequence[5]}`,
       `${sequence[0]}*(${sequence[1]}${sequence[2]}+${sequence[3]}${sequence[4]})+${sequence[5]}`,
       `${sequence[0]}${sequence[1]}*${sequence[2]}+${sequence[3]}${sequence[4]}+${sequence[5]}`,
       `(${sequence[0]}+${sequence[1]})*${sequence[2]}${sequence[3]}-${sequence[4]}${sequence[5]}`
 
     ];
 
     for (const pattern of patterns) {
       try {
         const result = new Function(`return ${pattern}`)();
         if (result === 100) {
           return pattern;
         }
       } catch (e) {
         // Skip invalid expressions
       }
     }
     return `${sequence[0]}+(${sequence[1]}*${sequence[2]}*${sequence[3]})+(${sequence[4]}*${sequence[5]})`;
   };
 
 
   const validateDigitOrder = (expression) => {
     const expressionDigits = expression.replace(/[^0-9]/g, '');
     return expressionDigits === digits;
   };
 
   const checkAnswer = () => {
     if (!userAnswer) {
       setErrorMessage('Please enter an expression');
       return;
     }
     
     if (!validateDigitOrder(userAnswer)) {
       setErrorMessage('You must use all digits in the given order without rearrangement');
       return;
     }
     
     try {
       const result = new Function(`return ${userAnswer}`)();
 
       
 
       if (result === 100) {
         setGameStatus('won');
         setTimerActive(false);
       } else {
         setErrorMessage(`Your expression equals ${result}, not 100`);
       }
     } catch (e) {
       setErrorMessage('Invalid expression. Please check your math operators');
     }
   };
 
 
   const giveUp = () => {
     setGameStatus('gaveUp');
     setTimerActive(false);
   };
 
   useEffect(() => {
     let timer;
     if (timerActive && timeLeft > 0) {
         timer = setInterval(() => {
 
         setTimeLeft(prevTime => prevTime - 1);
 
       }, 1000);
 
     } else if (timeLeft === 0 && timerActive) {
 
       setGameStatus('lost');
 
       setTimerActive(false);
 
     }
 
     
 
     return () => clearInterval(timer);
 
   }, [timerActive, timeLeft]);
 
   useEffect(() => {
     startNewGame();
 }, []);
 
   
 
   const formatTime = (seconds) => {
     const mins = Math.floor(seconds / 60);
     const secs = seconds % 60;
     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
   };
 
   
 
   // Provide tips based on the user's attempt
 
   const getTips = () => {
 
     const tips = [
 
       "Remember to use parentheses to control the order of operations.",
       "Try using two-digit numbers by combining adjacent digits.",
       "Consider using exponentiation for large jumps in value.",
       "Division can help get precise values but be careful with decimal results.",
       "Sometimes the simplest approach works best - try basic addition and multiplication first."
     ];
     return tips;
 
   };
 
 
   const getGaveUpTips = () => {
     const tips = [
       "Math puzzles like this improve your problem-solving skills with practice.",
       "Try working backward from 100 to see what operations might get you there.",
       "Breaking the sequence into pairs or triplets often helps find patterns.",
       "If you're stuck, try different groupings of the digits (like 12+34+56).",
       "Don't get discouraged - even experienced players need to skip some puzzles!"
     ];
     
     return tips;
   };
   
   // Rules content
   const gameRules = {
     title: "Game Rules",
     rules: [
       "You are given a sequence of six digits (1-9)",
       "Insert mathematical operations (+, -, *, /, ^) and parentheses",
       "Create an expression that equals exactly 100",
       "Digits must be used in the given order without rearrangement",
       "Example: For '123456', a solution is: 1 + (2 + 3 + 4) × (5 + 6) = 100"
     ]
   };
   
   // HectoClash-inspired styles as CSS variables
   const styles = {
     container: "flex flex-col items-center justify-center min-h-screen bg-[#05111d] p-4 relative overflow-hidden",
     gameCard: "w-full max-w-md bg-[#081c30] rounded-lg shadow-lg p-6 text-white relative z-10 border border-[rgba(255,255,255,0.05)]",
     title: "text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#F4D35E] to-[#F95738] bg-clip-text text-transparent",
     digitContainer: "flex justify-center mb-4",
     digit: "w-12 h-14 flex items-center justify-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded mx-1 text-2xl font-bold text-[#f8e8ba]",
     instruction: "text-center text-sm mt-2 text-[rgba(255,255,255,0.7)]",
     input: "w-full p-3 border border-[rgba(255,255,255,0.1)] rounded bg-[rgba(255,255,255,0.03)] text-white focus:outline-none focus:ring-2 focus:ring-[#EE964B] mt-2",
     errorMessage: "mb-4 p-3 bg-[rgba(249,87,56,0.2)] text-[#F95738] rounded border border-[#F95738]",
     buttonContainer: "flex justify-between mb-4 gap-4",
     primaryButton: "px-6 py-3 bg-gradient-to-r from-[#EE964B] to-[#F95738] text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] flex-1",
     secondaryButton: "px-6 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] text-white rounded-lg font-bold hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 flex-1",
     timer: "text-center text-lg font-medium text-[#F4D35E]",
     successContainer: "text-center p-6 bg-[rgba(244,211,94,0.1)] rounded-lg border border-[rgba(244,211,94,0.3)]",
     successTitle: "text-2xl font-bold text-[#F4D35E] mb-2",
     successMessage: "text-lg text-[#f8e8ba]",
     solutionContainer: "my-4 p-3 bg-[rgba(255,255,255,0.03)] rounded",
     tipsContainer: "mb-4 text-left",
     tipsList: "list-disc pl-5 text-[rgba(255,255,255,0.7)]",
     tipItem: "text-sm mb-2",
     waveBg: "absolute top-0 left-0 w-full h-full z-0 opacity-10",
     wave: "absolute w-[1100px] h-[1100px] right-[-300px] top-[100px]",
     wave1: "border-2 border-[#F95738] rounded-full origin-center animate-spin-slow",
     wave2: "border-2 border-[#EE964B] rounded-full origin-center animate-spin-slower",
     wave3: "border-2 border-[#f8e8ba] rounded-full origin-center animate-spin-slowest",
     digitLabel: "text-center text-xl mb-2 text-[#f8e8ba]",
     rulesContainer: "bg-[#081c30] rounded-lg shadow-lg p-6 text-white border border-[rgba(255,255,255,0.05)] w-full max-w-xs",
     rulesTitle: "text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#F4D35E] to-[#F95738] bg-clip-text text-transparent",
     rulesList: "list-disc pl-5 text-[rgba(255,255,255,0.8)]",
     ruleItem: "mb-3 text-sm",
     mainContainer: "flex flex-row justify-center items-start gap-6 p-4 w-full max-w-6xl",
     example: "mt-4 p-3 bg-[rgba(255,255,255,0.03)] rounded border border-[rgba(255,255,255,0.1)]",
     exampleText: "text-[#EE964B] font-mono text-sm",
   };
   
   return (
     <>
     <Navbar/>
     <div className="flex flex-col items-center justify-center bg-[#081c30] p-4 relative overflow-hidden min-h-screen w-full lg:max-h-screen">
   
       <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-4 w-full max-w-6xl">
         <div className="w-full md:w-2/3 bg-[#081c30] rounded-lg shadow-lg p-6 text-white relative z-10 border border-[rgba(255,255,255,0.05)] lg:my-auto max-h-screen">
           <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#F4D35E] to-[#F95738] bg-clip-text text-transparent">HectoClash Math Challenge</h1>
           
           {gameStatus === 'playing' && (
             <>
               <div className="mb-6">
                 <p className="text-center text-xl mb-2 text-[#f8e8ba]">Make these digits equal to 100:</p>
                 <div className="flex justify-center mb-4">
                   {digits.split('').map((digit, index) => (
                     <div key={index} className="w-12 h-14 flex items-center justify-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded mx-1 text-2xl font-bold text-[#f8e8ba]">
                       {digit}
                     </div>
                   ))}
                 </div>
                 <p className={styles.instruction}>
                   Insert +, -, *, /, ^ and parentheses between the digits
                 </p>
               </div>
               
               <div className="mb-4">
                 <label className="block text-sm font-medium mb-1 text-[rgba(255,255,255,0.7)]">Your Expression:</label>
                 <input
                   type="text"
                   value={userAnswer}
                   onChange={(e) => {
                     setUserAnswer(e.target.value);
                     setErrorMessage('');
                   }}
                   className={styles.input}
                   placeholder="e.g., 1+2*(3+4)+56"
                 />
               </div>
               
               {errorMessage && (
                 <div className={styles.errorMessage}>
                   {errorMessage}
                 </div>
               )}
               
               <div className="flex justify-between mb-4 gap-4">
                 <button
                   onClick={checkAnswer}
                   className={styles.primaryButton}
                 >
                   Check Answer
                 </button>
                 <button
                   onClick={giveUp}
                   className={styles.secondaryButton}
                 >
                   Give Up
                 </button>
               </div>
               
               <div className="text-center text-lg font-medium text-[#F4D35E]">
                 Time Left: {formatTime(timeLeft)}
               </div>
             </>
           )}
           
           {gameStatus === 'won' && (
             <div className="text-center">
               <div className="text-center p-6 bg-[rgba(244,211,94,0.1)] rounded-lg border border-[rgba(244,211,94,0.3)]">
                 <h2 className={styles.successTitle}>Congratulations!</h2>
                 <p className={styles.successMessage}>You solved the puzzle correctly!</p>
                 <div className={styles.solutionContainer}>
                   <p className="text-[#EE964B]">Your solution:</p>
                   <p className="text-xl mt-2 font-bold text-white">{userAnswer}</p>
                 </div>
               </div>
               <button
                 onClick={startNewGame}
                 className="px-6 py-3 bg-gradient-to-r from-[#EE964B] to-[#F95738] text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] flex-1 w-full mt-4"
               >
                 Play Again
               </button>
             </div>
           )}
           
           {gameStatus === 'lost' && (
             <div className="text-center">
               <div className="text-center p-6 bg-[rgba(244,211,94,0.1)] rounded-lg border border-[rgba(244,211,94,0.3)]">
                 <h2 className={styles.successTitle}>Time's Up!</h2>
                 <p className="mb-4 text-[rgba(255,255,255,0.8)]">Don't worry, this is challenging!</p>
                 
                 <div className="mb-4">
                   <p className="font-semibold text-[#f8e8ba]">One possible solution:</p>
                   <p className="text-lg p-3 bg-[rgba(255,255,255,0.03)] rounded-lg mt-2 text-[#EE964B] font-mono">{solution}</p>
                 </div>
                 
                 <div className={styles.tipsContainer}>
                   <p className="font-semibold mb-2 text-[#f8e8ba]">Tips for next time:</p>
                   <ul className={styles.tipsList}>
                     {getTips().map((tip, index) => (
                       <li key={index} className={styles.tipItem}>{tip}</li>
                     ))}
                   </ul>
                 </div>
               </div>
               <button
                 onClick={startNewGame}
                 className="px-6 py-3 bg-gradient-to-r from-[#EE964B] to-[#F95738] text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] flex-1 w-full mt-4"
               >
                 Play Again
               </button>
             </div>
           )}
           
           {gameStatus === 'gaveUp' && (
             <div className="text-center">
               <div className="text-center p-6 bg-[rgba(244,211,94,0.1)] rounded-lg border border-[rgba(244,211,94,0.3)]">
                 <div className="mb-4">
                   <p className="font-semibold text-[#f8e8ba]">Here's the solution:</p>
                   <p className="text-lg p-3 bg-[rgba(255,255,255,0.03)] rounded-lg mt-2 text-[#EE964B] font-mono">{solution}</p>
                 </div>
                 
                 <div className="mb-4 text-left">
                   <p className="font-semibold mb-2 text-[#f8e8ba]">For your next attempt:</p>
                   <ul className="list-disc pl-5 text-[rgba(255,255,255,0.7)]">
                     {getGaveUpTips().map((tip, index) => (
                       <li key={index} className="text-sm mb-2">{tip}</li>
                     ))}
                   </ul>
                 </div>
               </div>
               <button
                 onClick={startNewGame}
                 className="px-6 py-3 bg-gradient-to-r from-[#EE964B] to-[#F95738] text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] flex-1 w-full mt-4"
               >
                 Try New Puzzle
               </button>
             </div>
           )}
         </div>
         
         {/* Rules Card */}
         <div className="w-full md:w-1/3 bg-[#081c30] rounded-lg shadow-lg p-6 text-white relative z-10 border border-[rgba(255,255,255,0.05)] mt-6 md:mt-0">
           <h2 className={styles.rulesTitle}>{gameRules.title}</h2>
           <ul className={styles.rulesList}>
             {gameRules.rules.map((rule, index) => (
               <li key={index} className={styles.ruleItem}>{rule}</li>
             ))}
           </ul>
           <div className={styles.example}>
             <p className="text-sm text-[rgba(255,255,255,0.7)] mb-2">Example:</p>
             <p className={styles.exampleText}>
               For sequence "123456":<br />
               1 + (2 + 3 + 4) × (5 + 6) = 100
             </p>
             <p className="text-sm italic mt-3 text-[rgba(255,255,255,0.5)]">
               1 + (9) × (11) = 100
             </p>
           </div>
           
           <div className="mt-6 p-3 bg-[rgba(255,255,255,0.03)] rounded border border-[rgba(255,255,255,0.1)]">
             <p className="text-sm font-semibold text-[#F4D35E] mb-2">Allowed Operations:</p>
             <div className="grid grid-cols-3 gap-2">
               <div className="text-center p-2 bg-[rgba(255,255,255,0.05)] rounded">
                 <span className="text-xl font-bold">+</span>
                 <p className="text-xs mt-1">Addition</p>
               </div>
               <div className="text-center p-2 bg-[rgba(255,255,255,0.05)] rounded">
                 <span className="text-xl font-bold">-</span>
                 <p className="text-xs mt-1">Subtraction</p>
               </div>  
               <div className="text-center p-2 bg-[rgba(255,255,255,0.05)] rounded">
                 <span className="text-xl font-bold">*</span>
                 <p className="text-xs mt-1">Multiplication</p>
               </div>
               <div className="text-center p-2 bg-[rgba(255,255,255,0.05)] rounded">
                 <span className="text-xl font-bold">/</span>
                 <p className="text-xs mt-1">Division</p>
               </div>
               <div className="text-center p-2 bg-[rgba(255,255,255,0.05)] rounded">
                 <span className="text-xl font-bold">^</span>
                 <p className="text-xs mt-1">Exponentiation</p>
               </div>
               <div className="text-center p-2 bg-[rgba(255,255,255,0.05)] rounded">
                 <span className="text-xl font-bold">( )</span>
                 <p className="text-xs mt-1">Parentheses</p>
               </div>
             </div>
           </div>
           
           <div className="mt-6">
             <p className="text-sm font-semibold text-[#F4D35E] mb-2">Remember:</p>
             <p className="text-sm text-[rgba(255,255,255,0.7)]">
               You must keep the digits in the original order!
             </p>
           </div>
         </div>
       </div>
     </div>
     </>
   );
 };
 
 export default Practice;


