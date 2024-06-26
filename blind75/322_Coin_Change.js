// 322. Coin Change
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

// Runtime: 84ms, Memory: 53.54MB

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount == 0) return 0;
    else if (coins.length == 1) {
        if (amount % coins[0] == 0) return amount / coins[0];
        else return -1;
    } else {
        let arr_coinAmount = new Array(amount+1); // save the fewest number of coins of each amount
        let tmp = Infinity; // save the minimal combination to reach the amount
        for (let i = 1; i < amount + 1; i ++) {
            tmp = Infinity;
            for (let j = 0; j < coins.length; j ++) {
                if (coins[j] == i) tmp = 1;
                else if (i - coins[j] > 0 && arr_coinAmount[i-coins[j]] > 0) {
                    if (arr_coinAmount[i-coins[j]] + 1 < tmp) tmp = arr_coinAmount[i-coins[j]] + 1;
                }
            }
            if (tmp === Infinity) arr_coinAmount[i] = -1;
            else {
                arr_coinAmount[i] = tmp;
            }
        }
        return arr_coinAmount.pop();
    }
};
