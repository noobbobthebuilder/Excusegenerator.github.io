    var WhyLeave = new Array
       (
        "MY CAT IS MORE LOYAL THEN YOU ARE",
        "FOUND COOLER PEOPLE TO HANG OUT WITH ",
 	"YOU ARE ANNOYING",
 	"REMEMBER THAT GIRL YOU INTRODUCED ME TOO?   YEAH....",
 	"I HAD OTHER EXISTENTIAL CRISIS TO PAY ATTENTION",
 	"I HAD TO GO ON AN IMPORTANT DATE"
 	 );

      
          var WhyLate = new Array
       (
        
 	"I DRESSED FOR RAIN BUT IT WAS 90 DEGREE OUTSIDE",
 	"GOOGLE SAID TO WAIT, THEN I REALIZED I RAN OUT OF DATA",
 	"I FORGOT THAT I GIVE A SHIT",
 	"I WAITED FOR THE CHICKEN TO CROSS THE ROAD",
 	
 	 );
      
             var Whypoorly = new Array
       (
        
 	"I PROBABLY WROTE WITH INVISIBLE INK",
 	"I WAS SOLVING IMMORTALITY ",
 	"GOOGLE CRASHED",
 	"THATS A TRICK QUESTION",
 	
 	 );
      
      
      
      function getLeave() {
        document.getElementById('leave').innerHTML = 
          WhyLeave[Math.floor(Math.random() * WhyLeave.length)];
      }
      
      
            function getLate() {
        document.getElementById('Late').innerHTML = 
          WhyLate[Math.floor(Math.random() * WhyLate.length)];
      }
      
               function getpoorly() {
        document.getElementById('poorly').innerHTML = 
          Whypoorly[Math.floor(Math.random() * Whypoorly.length)];
      }
      
      
      
      
      
      
