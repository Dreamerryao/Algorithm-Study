## 算法基础  By Dreamerryao

### 数据结构基础

1. 逻辑结构：

   - 线性表

     特点：有唯一“第一元素”，除最后一个元素，每个元素都有唯一“上一个元素”和“下一个元素”

   - 树

     <img src="C:\Users\24479\AppData\Roaming\Typora\typora-user-images\1569770929892.png" alt="1569770929892" style="zoom:50%;" />

     

     ​	node;root;leaf;ancestor(最顶层);father->parent;son->child;subtree;brother

   - 图

     <img src="C:\Users\24479\AppData\Roaming\Typora\typora-user-images\1569771159313.png" alt="1569771159313" style="zoom:50%;" />

     树实际上可以看成图的特殊表示，图包括节点以及其相互关系

     G = （V，E）；G->图；V->结点；E->边；

     有向图；加权图

2. 逻辑结构的实现

   - 线性结构
     - 数组

       绝对定位，物理位置连续

       缺点：删除元素需要整个数组进行大改

     - 链表

       相对定位，物理位置不连续

       缺点：随机访问慢，需要遍历到相应位置

   - 

