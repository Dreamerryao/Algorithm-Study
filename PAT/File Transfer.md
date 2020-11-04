### 7-1 File Transfer (8 分)

We have a network of computers and a list of bi-directional connections. Each of these connections allows a file transfer from one computer to another. Is it possible to send a file from any computer on the network to any other?

### Input Specification:

Each input file contains one test case. For each test case, the first line contains *N* (2≤*N*≤104), the total number of computers in a network. Each computer in the network is then represented by a positive integer between 1 and *N*. Then in the following lines, the input is given in the format:

```
I c1 c2  
```

where `I` stands for inputting a connection between `c1` and `c2`; or

```
C c1 c2    
```

where `C` stands for checking if it is possible to transfer files between `c1` and `c2`; or

```
S
```

where `S` stands for stopping this case.

### Output Specification:

For each `C` case, print in one line the word "yes" or "no" if it is possible or impossible to transfer files between `c1` and `c2`, respectively. At the end of each case, print in one line "The network is connected." if there is a path between any pair of computers; or "There are `k` components." where `k` is the number of connected components in this network.

### Sample Input 1:

```in
5
C 3 2
I 3 2
C 1 5
I 4 5
I 2 4
C 3 5
S
```

### Sample Output 1:

```out
no
no
yes
There are 2 components.
```

### Sample Input 2:

```
5
C 3 2
I 3 2
C 1 5
I 4 5
I 2 4
C 3 5
I 1 3
C 1 5
S
```

### Sample Output 2:

```
no
no
yes
yes
The network is connected.
```

### Sample:

```c++

#include <cstdio>

#include <vector>
#include <cstring>
using namespace std;

vector<int> Set;


int find_Set(int a){
  if(Set[a]==-1)
    return a;
  else
    return Set[a]=find_Set(Set[a]);  
}
//int find_Set(int a){
//	
//	int root,trail,lead;
//    for (root = a;Set[root]>0;root = Set[root]);
//    for (trail=a;trail!=root;trail=lead) {
//       lead=Set[trail] ;   
//       Set[trail]=root ;   
//    } 
//    return root;
//}
void union_Set(int a ,int b){
    Set[find_Set(a)] = find_Set(b);
    return;
}
int main(){
    int c;
    char tag = 0;
    int t1,t2;
   	scanf("%d",&c);
    Set.resize(c+1);
    for(int i=0;i<c+1;i++){
    	Set[i] = -1;
	}
    while(tag !='S'){
    	getchar();
    	scanf("%c",&tag);
        if(tag =='C'){
            scanf("%d",&t1);
            scanf("%d",&t2);
            
           if(find_Set(t1)!=find_Set(t2))
               printf("no\n");
            else
                printf("yes\n");
        }
        else if(tag =='I'){
            scanf("%d",&t1);
            scanf("%d",&t2);
            union_Set(t1,t2);
        }
        
    }
    int count =0;
    for(int i=1;i<c+1;i++){
        if(Set[i]==-1)
            count++;
    }
    if(count ==1){
        printf("The network is connected.");
        
    }
    else{
        printf("There are %d components.",count);
    }
    
    return 0;
    
}
```

