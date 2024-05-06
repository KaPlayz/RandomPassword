        //GENERATION FUNCTION
        function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
            
            //CHARACTERS
            
            const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
            const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const numberChars = "0123456789";
            const symbolChars = "=/_<>[]@#€%&*()-:;,?!.`~{}$£"
            
            //VARIABLES
            
            let allowedChars = "";
            let password = "";
            
            //ALLOWEDCHARS FUNCTIONS
            
            allowedChars += includeLowercase ? lowercaseChars : "";
            allowedChars += includeUppercase ? uppercaseChars : "";
            allowedChars += includeNumbers ? numberChars : "";
            allowedChars += includeSymbols ? symbolChars : "";
            
            //IFS
            
            if(length <= 0){
                return "(Password length must be at least 1)";
            }
            if(allowedChars.length === 0){
                return "(At least 1 set of characters must be selected)";
            }
            
            //FOR LOOP
            
            for(let i = 0; i < length; i++){
                const randomIndex = Math.floor(Math.random() * allowedChars.length);
                password += allowedChars[randomIndex];
            }
            
            return password;
        }
        
        //GENERATE PASSWORD FUNCTION
        function generatePasswordWithOptions() {
            const passwordLength = parseInt(document.getElementById("passwordLengthInput").value);
            if (isNaN(passwordLength) || passwordLength <= 0) {
                const text = document.getElementById("text");
                text.innerHTML = `Generated password: (Password length must be at least 1)`;
                return;
            }
            const includeLowercase = document.getElementById("lowercaseCheckbox").checked;
            const includeUppercase = document.getElementById("uppercaseCheckbox").checked;
            const includeNumbers = document.getElementById("numbersCheckbox").checked;
            const includeSymbols = document.getElementById("symbolsCheckbox").checked;
            
            const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
            
            const text = document.getElementById("text");
            text.innerHTML = "Generated password: " + password;
        }
        
        generatePasswordWithOptions();
        
        const generateButton = document.getElementById("generateButton");
        generateButton.onclick = function(){
            generatePasswordWithOptions();
        };
        
        const reloadButton = document.getElementById("reloadButton");
        reloadButton.onclick = function(){
            location.reload();
        };
