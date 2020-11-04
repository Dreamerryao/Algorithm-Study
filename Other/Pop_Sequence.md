## 7-1 Pop Sequence (10 分)

- 关于堆栈的思考
- 逆向思考如何push进栈，从而解决问题

Given a stack which can keep *M* numbers at most. Push *N* numbers in the order of 1, 2, 3, ..., *N* and pop randomly. You are supposed to tell if a given sequence of numbers is a possible pop sequence of the stack. For example, if *M* is 5 and *N* is 7, we can obtain 1, 2, 3, 4, 5, 6, 7 from the stack, but not 3, 2, 1, 7, 5, 6, 4.

### Input Specification:

Each input file contains one test case. For each case, the first line contains 3 numbers (all no more than 1000): *M* (the maximum capacity of the stack), *N* (the length of push sequence), and *K* (the number of pop sequences to be checked). Then *K* lines follow, each contains a pop sequence of *N* numbers. All the numbers in a line are separated by a space.

### Output Specification:

For each pop sequence, print in one line "YES" if it is indeed a possible pop sequence of the stack, or "NO" if not.

### Sample Input:

```in
5 7 5
1 2 3 4 5 6 7
3 2 1 7 5 6 4
7 6 5 4 3 2 1
5 6 4 3 7 2 1
1 7 6 5 4 3 2
```

### Sample Output:

```out
YES
NO
NO
YES
NO
```

Example:

```c
#include <stdio.h>
#include <stdlib.h>

#define ERROR -2
typedef int ElementType;
typedef struct StackRecord *Stack;
struct StackRecord
{
    int Capacity;
    int Top;
    ElementType *Array;
};

Stack Createstack(int MaxElements);
int IsEmpty(Stack S);
int IsFull(Stack S);
int Push(ElementType X, Stack S);
ElementType Top_Pop(Stack S);
int main()
{

    int m, n, k;
    scanf("%d %d %d", &m, &n, &k);

    int *result = (int *)malloc((k + 1) * sizeof(int));
    int i, j, a;
    for (i = 0; i < k; i++)
    {
        Stack S = Createstack(m);
        int flag = 1;
        int *array = (int *)malloc(n * sizeof(int));
        for (a = 0; a < n; a++)
        {
            scanf("%d", array + a);
        }
        int arrayindex = 0;
        for (j = 1; j <= n; j++)
        {
            if (!Push(j, S))
            {
                flag = 0;
            }
            if (flag == 0)
                break;
            while (array[arrayindex] == S->Array[S->Top] && S->Top != -1)
            {
                if (Top_Pop(S) == ERROR)
                    flag = 0;
                arrayindex++;
            }
        }
        if (flag == 0)
        {
            result[i] = 0;
        }
        else if (IsEmpty(S))
            result[i] = 1;
        else
            result[i] = 0;
    }
    result[i] = -1;
    int Index = 0;
    while (result[Index] != -1)
    {
        if (result[Index] == 0)
        {
            printf("NO\n");
        }
        else if (result[Index] == 1)
        {
            printf("YES\n");
        }
        Index++;
    }

    return 0;
}

Stack Createstack(int MaxElements)
{
    Stack S = (Stack)malloc(sizeof(struct StackRecord));
    S->Capacity = MaxElements;
    S->Array = (int *)malloc(MaxElements * sizeof(int));
    S->Top = -1;
    return S;
}

int IsEmpty(Stack S)
{
    if (S->Top == -1)
        return 1;
    else
        return 0;
}

int IsFull(Stack S)
{
    if (S->Top == S->Capacity - 1)
        return 1;
    else
        return 0;
}

int Push(ElementType X, Stack S)
{
    if (IsFull(S))
    {
        return 0;
    }
    else
    {
        S->Array[++S->Top] = X;
        return 1;
    }
}

ElementType Top_Pop(Stack S)
{
    if (IsEmpty(S))
    {
        return ERROR;
    }
    else
    {
        return S->Array[S->Top--];
    }
}

```

