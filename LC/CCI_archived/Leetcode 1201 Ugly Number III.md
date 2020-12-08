# Leetcode 1201: Ugly Number III

## 1. description

Write a program to find the $n_{th}$ ugly number. Ugly numbers are **positive integers** which are divisible by `a` **or** `b` **or** `c`.

**Example:**

```
Input: n = 3, a = 2, b = 3, c = 5
Output: 4
Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.
```

**Constrains:**

- `1 <= n, a, b, c <= 10^9`
- `1 <= a * b * c <= 10^18`
- It's guaranteed that the result will be in range `[1, 2 * 10^9]`

## 2. Solution

### 2.1 Constrains analysis:

- All input can be stored in an `int` variable.
- Result can be founded with in range of an `int`.

### 2.2 Algorithm -- binary search

2.2.1 What to search

- Given a number n, determine how many ugly numbers smaller than k, then perform to find the target.
- Determine  how many ugly numbers smaller than k, denoted as function `f(k)`
  - $f(k) = k / a + k / b + k / c - k / LCM(a, b) - k / LCM(a, c) - k / LCM(b, c) + k / LCM(a,LCM(b, c) ) $
  - LCM(a, b): find least common multiple of a and b
    -  $LCM(a, b)  = a \times b \div GCD(a, b)$
    - Avoid overflow: if $a \div 10000.0$ times $b \div GCD(a, b) \div 10000.0$ is greater than $20$, then return $2.1 \times 10^9$, since maximum of k is $2 \times 10^9$.
  - GCD(a, b): find greatest common divisor of a and b
    - a / b  = q ...... r
    - a = b
    - b = r
    - break when $b|a$, then GCD is b.
    - Time complexity: $O(log a)$

2.2.2 Determine search boundary

- Left boundary is 1, right boundary is $2 \times 10^9$.
- Alternative, right boundary can be determined dynamically
  - starting with 1, then multiply with 2, until f(right) is greater than target.

2.2.3 Perform binary search

- Note that is a binary search needs to find the first occurrence of the target, since multiple number may have the same f(k).
  - `left = middle + 1 when f(middle) < n`
  - `right = middle when f(middle) >= n`
- To avoid overflow when calculating middle:
  - `middle = left + (right - left) / 2;`

## 3. Code

```c++
class Solution {
public:
    int nthUglyNumber(int n, int a, int b, int c) {
        //Ugly numbers are positive integers
        
        // step1: find search range
        int left = 1;
        int right = 1;
        while(1)
        {
            if (UglyNumberNum(right, a, b, c) < n)
                right = right * 2 + 1;
            else
                break;
            
            if(right > 2000000000)
            {
                right = 2000000000;
                break;
            }
        }

        //step 2, search
        //note that we can definitly find the solution
        int middle = -1;
        while(left != right)
        {
            middle = left + (right - left) / 2;
            if(UglyNumberNum(middle, a, b, c) >= n)
                right = middle;
            else if(UglyNumberNum(middle, a, b, c) < n)
                left = middle + 1;
        }
        return right;
    }
    
    
    int UglyNumberNum(int n, int a, int b, int c)
    {
        //Ugly numbers are positive integers
        if (a > n and b > n and c > n)
            return 0;
        int total = n/a + n/b + n/c;
        int gcdnum = n/LCM(a, b) + n/LCM(a, c) + n/LCM(b, c);
        int comnum = n/LCM(a, LCM(b, c));
        
        return total - gcdnum + comnum;
        
    }
    
    int LCM(int a, int b)
    {
        int b_unique = b / GCD(a, b);
        if ((a / 10000.0) * (b_unique / 10000.0) > 19) 
            return 2000000000;
        else
            return a * b_unique;
    }
    
    int GCD(int a, int b)
    {
        if (b > a)
        {
            int temp = a;
            a = b;
            b = temp;
        }
        int r = -1;
        while(r != 0)
        {
            r = a % b;
            a = b;
            b = r;
        }
        return a;
    }
};
```



