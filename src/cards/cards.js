'use strict';

/**
 * Validate the card number using the Luhn algorithm:
 *
 * Multiply each digit of the card number in the odd position (counting from the right) by 2.
 * Decrease the result of multiplication by 9, if it greater than or equal to 10.
 * If the sum of all digits is multiple of 10, then the card number is valid.
 *
 *
 * @param cardNumber
 *
 * @returns {Boolean} 'true' if the card number is valid and 'false' otherwise.
 *
 * @throws Error if the card number is empty
 */

function validate(cardNumber) {
  throw new Error();
}

module.exports = validate;
