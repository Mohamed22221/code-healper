
## 5. Longest Palindromic Substring

### description

Given a string s, return the longest palindromic

Example 1:

Input: s = ["babad"]
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

[enter link description here](https://leetcode.com/problems/longest-palindromic-substring/)

#### solve 

```javascript
var longestPalindrome = function (s) {
  let longest = "";
  let CalcLongest = (s, left, right) => {
    while (s[left] === s[right] && left > 0 && right < s.length) {
      left--;
      right++;
    }
    return s.slice(left, right);
  };

  s.map((item) => {
    for (let i = 0; i < item.length; i++) {
      let oddLongest = CalcLongest(item, i - 1, i + 1);
      let evenLongest = CalcLongest(item, i, i + 1);
      let maxSLongest = oddLongest > evenLongest ? oddLongest : evenLongest;

      if (maxSLongest.length > longest.length) {
        longest = maxSLongest;
      }
    }
  });
  return longest;
};
```

#### output 
 **bab** 