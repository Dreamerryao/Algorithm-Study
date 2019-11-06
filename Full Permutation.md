### Full Permutation

- 递归学习
- 任务：按字典顺序进行全排列
- 将输出1~n整数的全排列变为输出以x开头的全排列，应用循环解决问题

**Example Code:(CPP)**

n=4:

```c++
#include <cstdio>
#define MAXN 11
//P为当前排列，hashTable记录整数x是否已经在P中，
int n,P[MAXN],hashTable[MAXN] = {false};
//当前处理排列的第index号位置
void generateP(int index){
    if(index == n+1){
        for(int i =1;i<=n;i++){
            printf("%d",P[i]); //输出当前排列
        }
        printf("\n");
        return;
    }
    for(int x=1;x<=n;x++){
        if(hashTable[x] == false){
            P[index] = x;
            hashTable[x] = true;
            generateP(index+1);//此处先处理P[index]=x的子问题，处理完后还原状态
            hashTable[x] = false;
        }
    }
}
int main(){
    n=4;
    generateP(1);
    return 0;
}

```

