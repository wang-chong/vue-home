webpackJsonp([4],{176:function(t,n,e){var i=e(0)(e(231),e(223),null,null,null);t.exports=i.exports},216:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return s});var i=function(){function t(t){this.next=null,this.prev=null,this.ele=t}this.first=null,this.last=null,this.size=0,this.addFirst=function(n){var e=new t(n);e.next=this.first,this.size>0&&(this.first.prev=e),this.first=e,0===this.size&&(this.last=this.first),this.size++},this.addLast=function(n){var e=new t(n);e.prev=this.last,this.size>0&&(this.last.next=e),this.last=e,0===this.size&&(this.first=this.last),this.size++},this.removeFirst=function(){if(0===this.size)return null;var t=this.first;return this.first=this.first.next,this.first?this.first.prev=null:this.last=null,this.size--,t},this.removeFirstWithoutBack=function(){this.removeFirst();return null},this.removeLast=function(){if(0===this.size)return null;var t=this.last;return this.last=this.last.prev,this.last?this.last.next=null:this.first=null,this.size--,t},this.removeLastWithoutBack=function(){this.removeLast();return null},this.removeIndex=function(t){if(t>=this.size||t<=0)return null;switch(t){case 1:return this.removeFirst();case this.size-1:return this.removeLast();default:for(var n=1,e=this.first;n!==t;)if(n++,e=e.next,n===t)return e.prev.next=e.next,e.next.prev=e.prev,e}},this.removeIndexWithoutBack=function(t){this.removeIndex(t);return null},this.toString=function(){for(var t=this.first,n=[];t;)n.push(t.ele),t=t.next;return n.join(",")}},s=function(){function t(t){this.ele=t,this.lc=null,this.rc=null,this.father=null}this.first=null,this.last=null,this.floor=0,this.add=function(n){var e=new t(n);if(0===this.floor)this.first=e,this.floor++;else if(1===this.floor)this.last.lc=e,e.father=this.last,this.floor++;else for(var i=this.last;i;){if(i.father.lc===i){if(i.father.rc){for(i=i.father.rc;i.lc;)i=i.lc;i.lc=e,e.father=i;break}i.father.rc=e,e.father=i.father;break}if(i.father===this.first){for(i=this.first;i.lc;)i=i.lc;i.lc=e,e.father=i,this.floor++;break}i=i.father}this.last=e},this.removeLast=function(){var t=this.last,n=this.last;if(0===this.floor)return null;if(1===this.floor)return this.first=null,this.last=null,this.floor=0,t;if(n===n.father.lc){for(;n.father;)if(n!==n.father.lc){if(n===n.father.rc){for(n=n.father.lc;n.rc;)n=n.rc;return this.last=n,t.father.lc=null,t}}else n=n.father;for(;n.rc;)n=n.rc;return t.father.lc=null,this.last=n,this.floor--,t}return n===n.father.rc?(n.father.rc=null,this.last=n.father.lc,t):void 0},this.removeLastWithoutBack=function(){this.removeLast();return null},this.toStringDeepFirst=function(){function t(e){var i=e.ele;if(n.push(i),e.lc)return void t(e.lc);for(;e&&e.father;){if(e.father.rc&&e.father.rc!==e)return void t(e.father.rc);e=e.father}}var n=[];return this.first&&t(this.first),n.join(",")},this.toStringBreadthFirst=function(){var t=[],n=this.first;if(!n)return"";var e=new i;for(e.addLast(n);e.size>0;){var s=e.removeFirst().ele;t.push(s.ele),s.lc&&e.addLast(s.lc),s.rc&&e.addLast(s.rc)}return t.join(",")},this.getFloor=function(){return this.floor}}},223:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;t._self._c;return t._m(1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",[t._v("    // 向链表后端插入一个数据\n    "),e("span",[t._v("addLast(data)")]),t._v(";\n\n    // 向链表前端插入一个数据\n    "),e("span",[t._v("addFirst(data)")]),t._v(";\n\n    // 移除最后一个数据(且返回最后一个数据)\n    "),e("span",[t._v("removeLast()")]),t._v(";\n\n    // 移除最后一个数据("),e("span",[t._v("不返回")]),t._v("最后一个数据)\n    "),e("span",[t._v("removeLastWithoutBack()")]),t._v(";\n\n    // 移除第一个数据(返回第一个数据)\n    "),e("span",[t._v("removeFirst()")]),t._v(";\n\n    // 移除第一个数据("),e("span",[t._v("不返回")]),t._v("第一个数据)\n    "),e("span",[t._v("removeFirstWithoutBack()")]),t._v(";\n\n    // 移除指定索引index的数据，索引从1开始(删除成功返回true,否则返回false)\n    "),e("span",[t._v("removeIndex(index)")]),t._v(";\n\n    // 遍历链表，返回字符串\n    "),e("span",[t._v("toString()")]),t._v(";      \n  ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("js实现链表存储方式")]),t._v(" "),e("h3",[t._v("链表构造函数如下")]),t._v(" "),e("pre",[t._v("  function LinkedList () {\n    this.first = null\n    this.last = null\n    this.size = 0\n\n    function Node (ele) {\n      this.next = null\n      this.prev = null\n      this.ele = ele\n    }\n\n    // 向链表前面添加一个元素\n    this.addFirst = function (ele) {\n      var node = new Node(ele)\n      node.next = this.first\n      if (this.size > 0) {\n        this.first.prev = node\n      }\n      this.first = node\n      if (this.size === 0) {\n        this.last = this.first\n      } else {\n\n      }\n      this.size++\n    }\n\n    // 向链表后面添加一个元素\n    this.addLast = function (ele) {\n      var node = new Node(ele)\n      node.prev = this.last\n      if (this.size > 0) {\n        this.last.next = node\n      }\n      this.last = node\n      if (this.size === 0) {\n        this.first = this.last\n      }\n      this.size++\n    }\n\n    // 删除第一个元素并返回第一个元素\n    this.removeFirst = function () {\n      if (this.size === 0) {\n        return null\n      }\n      const first = this.first\n      this.first = this.first.next\n      if (this.first) {\n        this.first.prev = null\n      } else {\n        this.last = null\n      }\n      this.size--\n      return first\n    }\n    // 删除第一个元素，不返回元素\n    this.removeFirstWithoutBack = function () {\n      let first = this.removeFirst()\n      first = null\n      return first\n    }\n\n    // 删除最后一个元素并且返回最后一个元素\n    this.removeLast = function () {\n      if (this.size === 0) {\n        return null\n      }\n      const last = this.last\n      this.last = this.last.prev\n      if (this.last) {\n        this.last.next = null\n      } else {\n        this.first = null\n      }\n      this.size--\n      return last\n    }\n    // 删除最后一个元素，不返回元素\n    this.removeLastWithoutBack = function () {\n      let last = this.removeLast()\n      last = null\n      return last\n    }\n\n    // 删除指定索引的元素并且返回指定元素\n    this.removeIndex = function (index) {\n      if (index >= this.size || index <= 0) {\n        return null\n      }\n      switch (index) {\n        case 1:\n          return this.removeFirst()\n        case (this.size - 1):\n          return this.removeLast()\n        default:\n          let count = 1\n          let currentNode = this.first\n          while (count !== index) {\n            count++\n            currentNode = currentNode.next\n            if (count === index) {\n              currentNode.prev.next = currentNode.next\n              currentNode.next.prev = currentNode.prev\n              return currentNode\n            }\n          }\n          break\n      }\n    }\n    // 删除指定索引的元素，不返回元素\n    this.removeIndexWithoutBack = function (index) {\n      let indexNode = this.removeIndex(index)\n      indexNode = null\n      return indexNode\n    }\n\n    this.toString = function () {\n      var currentNode = this.first\n      var arr = []\n      while (currentNode) {\n        arr.push(currentNode.ele)\n        currentNode = currentNode.next\n      }\n      return arr.join(',')\n    }\n  }\n  ")]),t._v(" "),e("h3",[t._v("方法如下")]),t._v(" "),t._m(0),t._v(" "),e("h3",[t._v("实例使用如下")]),t._v(" "),e("pre",[t._v("    const list = new LinkedList()\n    list.addLast('A')\n    list.addLast('B')\n    list.addLast('C')\n    list.addFirst('a')\n    list.addFirst('b')\n    list.addFirst('c')\n    console.log(list.toString()) // c,b,a,A,B,C\n    list.removeLast()\n    console.log(list.toString()) // c,b,a,A,B\n    list.removeFirst()\n    console.log(list.toString()) // b,a,A,B\n    list.removeIndex(2)\n    console.log(list.toString()) // b,A,B\n  ")])])}]}},231:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(216);n.default={mounted:function(){var t=new i.b;t.addLast("A"),t.addLast("B"),t.addLast("C"),t.addFirst("a"),t.addFirst("b"),t.addFirst("c"),console.log(t.toString()),t.removeLast(),console.log(t.toString()),t.removeFirst(),console.log(t.toString()),t.removeIndex(2),console.log(t.toString())}}}});
//# sourceMappingURL=4.51607fb9572c5e2ce17f.js.map