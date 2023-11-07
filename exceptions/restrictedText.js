document.addEventListener("DOMContentLoaded", function () {
    /**
     * Limits the length of a text
     * @class
     */
    var LengthLimitedText = /** @class */ (function () {
        /**
         *
         * Creates a new LengthLimitedText instance
         * @param {number} max_length - The maximum lenght of a text
         * @param {string} [initial_text=""]  - The initial text  (optional)
         * @throws {Error} - If inital text's length exceeds the maximum lenght
         */
        function LengthLimitedText(max_length, initial_text) {
            if (initial_text === void 0) { initial_text = ""; }
            if (initial_text.length > max_length) {
                throw new Error("Initial text exceeds the maximum length");
            }
            this.max_length = max_length;
            this.text = initial_text;
        }
        /**
         * Sets the maximum length for new text
         * @param {number} new_max_length
         * @throws {Error} If the new maximum length is less than the current text length.
         */
        LengthLimitedText.prototype.setMaxLength = function (new_max_length) {
            if (this.text.length > new_max_length) {
                throw new Error("Cannot set a maximum length lower than the current text length");
            }
            this.max_length = new_max_length;
        };
        /**
         * Sets the new text
         * @param {string} new_text - The new text to set.
         * @throws {Error} - If the new text exceeds the maximum length.
         */
        LengthLimitedText.prototype.setText = function (new_text) {
            if (new_text.length > this.max_length) {
                throw new Error("New text exceeds the maximum length");
            }
            this.text = new_text;
        };
        /**
         * Gets the current text
         * @returns {string} - The current text.
         */
        LengthLimitedText.prototype.getText = function () {
            return this.text;
        };
        return LengthLimitedText;
    }());
    var maxLengthInput = document.querySelector('#maxLength');
    var textInput = document.getElementById("textInput");
    var setTextBtn = document.getElementById("setTextButton");
    var output = document.getElementById("output");
    var error = document.getElementById('err');
    var limitedText;
    setTextBtn.addEventListener('click', function () {
        var maxLength = parseInt(maxLengthInput.value);
        var inputText = textInput.value;
        try {
            limitedText = new LengthLimitedText(maxLength, inputText);
            output.textContent = limitedText.getText();
        }
        catch (e) {
            error.textContent = "Error: ".concat(e.message);
        }
    });
});
