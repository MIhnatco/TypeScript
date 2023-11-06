document.addEventListener("DOMContentLoaded", function () {
    /**
     * Limits the length of a text
     * @class
     */
    class LengthLimitedText {
        max_length: number;
        text: string;
    
        /**
         * 
         * Creates a new LengthLimitedText instance
         * @param {number} max_length - The maximum lenght of a text
         * @param {string} [initial_text=""]  - The initial text  (optional)
         * @throws {Error} - If inital text's length exceeds the maximum lenght
         */
        constructor(max_length, initial_text = ""){
            if(initial_text.length > max_length){
                throw new Error("Initial text exceeds the maximum length")
            }
    
            this.max_length = max_length;
            this.text = initial_text;
        }
    
    
        /**
         * Sets the maximum length for new text
         * @param {number} new_max_length 
         * @throws {Error} If the new maximum length is less than the current text length.
         */
        setMaxLength(new_max_length){
            if(this.text.length > new_max_length){
                throw new Error("Cannot set a maximum length lower than the current text length")
            }
    
            this.max_length = new_max_length;
        }
    
        /**
         * Sets the new text
         * @param {string} new_text - The new text to set.
         * @throws {Error} - If the new text exceeds the maximum length.
         */
        setText(new_text){
            if(new_text.length > this.max_length){
                throw new Error("New text exceeds the maximum length")
            }
    
            this.text = new_text;
        }
    
        /**
         * Gets the current text
         * @returns {string} - The current text.
         */
        getText(){
            return this.text
        }
    }
    
    const maxLengthInput = document.querySelector('#maxLength') as HTMLInputElement;
    
    const textInput = document.getElementById("textInput") as HTMLInputElement;
    
    const setTextBtn = document.getElementById("setTextButton");

    const output = document.getElementById("output");
    const error = document.getElementById('error');
    
    let limitedText;

    setTextBtn.addEventListener('click', function(){
        const maxLength:number = parseInt(maxLengthInput.value);
        const inputText: string = textInput.value;
  
            try {
                limitedText = new LengthLimitedText(maxLength, inputText);
                output.textContent = limitedText.getText();

            } catch(e){

                error.textContent = `Error ${e.message}`;
            }
    })
    
  });