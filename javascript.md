# JavaScript
## 概述
 * JS的基本概念
    + 一个面向对象的跨平台脚本语言
        - 跨平台 windows,linux,unix,android,ios
        - 脚本:凡是不能独立执行需要依赖其他程序的，通常都叫做脚本。如JS文件必须嵌入到HTML文件里才能执行。
 * JS的引入方式
    + 内部引入 <script>XXXXXX</script>
    + 外部引入 <script src="相对路径"></script>
    + 行内引入 行内引入javascript的方式必须结合事件来使用<开始标签 on+事件类型=“js代码”></结束标签> //基本不用
 * JS的组成
    + ECMAScript:是一种由Ecma国际(前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association)通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展
    + DOM:  Document Object Model，提供访问和操作网页内容的方法和接口
    + BOM:  Browse Object Model，提供与浏览器交互的方法和接口
 * 变量 VS 常量/字面量/直接量
    + 常量/直接量/字面量:程序中直接显示出来的数据 如:数字字面量;字符串字面量;布尔字面量
    + 变量:存储数据的容器
    + 标识符是指JS中定义的符号(用户自定义的名字叫做标识符)，例如：变量名、函数名等。以数字，英文字母，_和$组成，其中数字不能作为开头,不能是js中的保留字、关键字。
    + 数据类型
        - 基本类型（数字【NaN,Infinity,-Infinity】，字符串，布尔）
        - 引用数据类型/复合数据类型（对象,数组,函数）
            - 特殊数据类型（undefined，null）
    + 运算符
        【注】typeof运算符用于判断对象的类型
        - 算术运算符（+，-, *,/,%(取余数)）
        - 字符串和变量的拼接(+)
        - 关系运算符(<、>、<=、>=、==、===、!= !==)
        - 逻辑运算符(&&与(且)、||或、!非)
        - 赋值运算符(=、+=、-=、*=、/=、%=)
        - 自增、自减(++a, a++;--a,a--)
 * 数据类型转换
    + 自动数据类型转换
        - 任何类型的数据和字符串类型的数据做相加+操作时，其他数据类型会自动的转换为字符串类型。
        【当+号作为一元操作符操作单操作数的时候,他就会将这个操作数转换为数字类型】
            如:var result = “1” + 1;     //结果   11 类型是string
        - 任何其他数据与数字类型做算术运算时，其他数据会自动的转换为数字
            null会自动的转换为0,undefined会自动的转为NaN
            true会自动的转换为1,false会自动的转换为0
            如:var result = 1 + null ;     //结果是1       类型是number
               var result = 1 + undefined //结果是NaN        类型是number
        - 与数字类型做算术运算时 字符串是数值会自动的转换为数字，否则会转换为NaN
            如:var result = 1 - “2”;     //结果   1    类型是 number
               var result = 1 - “我”;    //结果   NaN  类型是 number  
    + 强制数据类型转换
        - Number(exp) 将表达式的返回值强制转换为数字类型。//只能转纯数字字符
          parseInt()  把其它类型转换为整型；         //可以去掉非数字字符,然后转换为数字类型
          parseFloat() 把其它类型转换为浮点型（小数） //可以去掉非数字字符,然后转换为数字类型
          在目标类型前加一个正号("+") 隐式转换把其它类型转换为数字类型；
        - String(exp) 将表达式的返回值强制转换为字符串类型。
        - Boolean(exp)将表达式的返回值强制转换为布尔值类型。
    + 转换规则
        - 转Number
            String:纯数字转换结果是字面量的形式转换，其他所有情况均为NaN。
            Boolean: true为1，false为0。
        - 转String:所有类型转换为字符串类型就以字面量的形式进行转换。
        - !转Boolean
            Number:除了0和NaN以外全部返回true。
            String:除了空字符串以外其他情况全为true。【空格也返回true;""是空字符串," "是空格】
            undefined:undefined是false。
            null：null是false。
    + 判断相等的总结：
        1. 数字和Boolean进行比较1==true为true，2==true为false.
        2. NaN == NaN  返回false (NaN不和任何相等包括本身)
        3. undefined == null 返回true
        如何判断一个值是否为NaN: isNaN(exp) 如果exp的返回值是NaN则返回true。
        ==判断具体的流程（了解）
        - 有NAN，一律返回false
        - 有布尔类型，布尔类型转换成数字比较
        - 有string类型，两种情况： 
        1. 对象，对象用toString方法转换成string相比。
        2. 数字，string类型转换成数字进行比较
        - null和undefined不会相互转换，相等
        - 有数字类型，和对象相比，对象用valueof转换成原始值进行比较
        - 其他情况，一律返回false
 * 程序的三大流程语句
   + 顺序：从上朝下执行的代码就是顺序
   + 选择：根据不同的情况,执行对应代码
      - if单分支：if(exp){语句块}
      - if双分支：if(exp){分支1}else{分支2}
      - if多分支语句：if(exp1){分支1}else if(exp2){分支2}.......else{分支n}
      - switch语句:
         switch(表达式){
            case 常量1:语句;
            break;
            case 常量2:语句;
            break;
            .....
            case 常量n:语句;
            break;
            default:语句;
            break;
         }
         1. 表达式的结果等于哪个case的常量，则执行其后的语句，执行完break就跳出switch结构，都不满足则执行default的语句。
         2. break的作用：是跳出switch结构，如果没有break，则继续执行下面分支的的语句（而不进行判断）
         3. case穿透:省略break一直执行
            如var month = +prompt("请输入月份");
                  switch (month) {
                  case 1:
                  case 3:
                  case 5:
                  case 7:
                  case 8:
                  case 10:
                  case 12:
                  alert("31天");
                  break;
                  case 4:
                  case 6:
                  case 9:
                  case 11:
                  alert("30天");
                  break;
                  case 2:
                  alert("28天");
                  break;
                  default: 
                  alert("错误的月份");
                  break;
                  }
      - 三目运算符:表达式1?表达式2:表达式3
         1. 先求解表达式1，若为真则求解表达式2，若表达式1的值假，则求解表达式3。
   + 循环：重复做一件事情
      - while循环(先判断)
         1.  while(表达式){语句;}
               如:var i = 1;
                  var sum = 0;
                  while(i<=100>){
                     sum = sum + i;
                     i++;
                  }
      - do…while循环(先执行循环体的代码,再判断)
         1. do{循环语句;}while( 表达式);
      - for循环
         1. for(①表达式1; ②表达式2; ④表达式3){③语句;} 如:for(var i = 0;i<100;i++){console.log(i)};
         2. 执行过程：
            ①先求解表达式1（只求一次）
            ②求解表达式2,若其值为真则
            ③执行for语句中指定的内嵌语句,
            ④然后求解表达式3。
            再求解表达式2,若为假,则结束循环,执行for循环外的语句。
            如:for(var i = 1;i < 2;i++){
               console.log(i); //i的值会为1
               }
               console.log(i); //i的值会为2
      -  选择for还是选择while:已知循环次数时，用for，否则用while。
      - 如何造死循环：
         1. while（true）{……};   常用
         2. do{…}while(true);
         3. for(;;)
   + break关键字:
      - 在switch语句中使流程跳出switch结构。
      - 在循环语句中使流程跳出当前循环。
   + continue关键字
      - 只能在循环语句中使用，使本次循环结束，即跳过循环体中下面尚未执行的语句，接着进行下次是否执行循环的判断。
## 语言核心
  #### 函数
  * 函数的概念：一段可以被高度复用的代码段。
    + 声明函数
    function 函数名(形参1,形参2,形参3...){
        //函数体
    }
    + 调用函数:函数名(实参1,实参2,实参3...)
    + 匿名函数:一个没有名字的函数。(通常赋给其他变量或事件源)
      function(){}
  * 函数的参数
    + 形参：在函数体内声明的变量,只声明不赋值。
    + 实参：在调用函数时传入的参数，这里相当于是为形参赋值。
  * 函数的返回值(return)
    + return的作用:
      - 控制调用函数表达式的返回值。
        - 如果调用的那个函数体内部没有return语句，则一律返回undefined。
        - 如果调用的函数体内有return语句，则返回值是return语句后面的表达式的返回值。
      - 做流程控制，如果调用函数时执行到return语句了，那么程序会认为此次执行函数的任务就已经执行完了，就会忽略掉return语句以下的代码。
  * arguments(参数对象):参数对象的使用场景只是在调用函数时传入实参的数量不确定的情况下，那么我们就会把形参去掉用参数对象arguments来代替。
    + 参数对象的本质是一个类数组,拥有数组下标的特性和.length特性。
  * IIFE自调用函数
    + 自调用函数的使用需要用大括号包起来。【由于小括号优先级很高 所以自调用函数得在前面也加一个小括号让其能自左往右运算】
      - (function(){
        alert(1);
      })();
      - var a = (function(n,m){
        return (n+m)
      })(10,5)
      console.log(a)
  * 变量作用域
	+ 全局变量:在全局作用域下声明的变量就是全局变量，这种变量在任何地方都能被访问到.
	+ 局部变量:在函数体内部声明的变量，这种变量只能在该函数体内部使用，在函数体外无法被访问或操作。
	在js中没有块级作用域的概念，只有函数作用域的概念，只有函数才是一个封闭的作用域，在函数体内部声明的变量在函数体外部无法访问。
	+ 局部变量和全局变量冲突：以局部变量为准。
		- 如果想在函数体内部声明一个全局变量，那么只要去掉声明变量的var关键字即可。
		- 在局部作用域发生嵌套的时候，内层函数是可以访问到外层函数的局部变量的，反之则不行。
	+ 变量提升:JS解释器的一种机制，当我们执行某一个函数的时候，JS解释器会从上到下把函数中的局部变量提取出来放到函数体的顶端先声明但不赋值，此时该变量里面存储的值就为undefined.
## 对象
#### Object对象
  * 概念: 值的无序集合,一个key:value这种键值对的数据结构，对象也可以被看做成是若干个属性的无序集合。
	+ 声明一个空对象var o = {}
	+ 声明一个不空的对象
		var o = {
			name:"王大伟",
			age:18,
			sex:"male",
			married:false,
			// 方法：如果对象中哪一条属性的属性值是一个函数，那么我们就不太愿意把它叫成属性，而愿意叫做方法。
			sayHello:function(){
				alert("我叫王大伟~O(∩_∩)O")
				return 1;
			}
		}
	+ 对象的查询的两种写法：
		- Object.属性名  在Object对象中直接查找某个属性名的所对应的属性值
		- Object["属性名"] 与上面等价
		- Object[属性名]  把属性名看做成一个变量，首先从js执行环境上下文中获取该变量存放的值（如："a")，然后再从Object对象中查找变量中存放的值所对应的属性的属性值（a属性的属性值）
	+ 对象的修改/添加
		- Object.属性名 = 新值    //属性名常量形式
        - Object[属性名] = 新值   //属性名变量形式
		- Object["属性名"] = 新值 //属性名常量形式
	+ 删除掉对象中的某一条属性 delete Object.属性名
	+ 检测一个属性在另外一个对象中是否存在 "属性名" in Object
	+ 枚举对象
		for(var key in Object){
			// 循环体执行次数取决于Object属性的个数
			// 每一次进入循环体的时候i依次代表了对象的属性名

			// 对象的属性名
			// console.log(key)
			// 对象的属性值
			// console.log(Object[key])
		}
 * 基本类型和引用类型:除了Object以外所有的数据类型都是基本类型，Object自身是引用类型。
在将引用类型的变量(a)赋值给另外的一个变量(b)时，b本身存储的只是一个对a的引用，也可以理解为是一个快捷方式，所以无论修改的是a还是b都会对另外的一个变量产生影响。而基本类型，在将一个变量赋值给另外的一个变量时，执行的是值的拷贝，此时有两个相同的值，所以无论修改了哪一个都不会对另外的一个变量产生影响。

 * JSON:由若干组键值对构成 key=value key用双引号引起来
	{
			"name":"王大伟",
			"age":18,
			"sex":"male",
			"students":[
				{
					"name":"马燕",
					"age":16,
					"sex":"famale"
				},
				{
					"name":"陈震震",
					"age":17,
					"sex":"male"
				},
				{
					"name":"赵鑫",
					"age":19,
					"sex":"male",
					"gr":{
						"name":"小仙女",
						"age":18,
						"sex":"famale",
					}
				}
			]
		}
    * JSON对象
    + json对象定义:由若干组键值对构成 key=value 如果有一组以上的键值对 请用逗号隔开  //请将key用双引号引起来，虽然不引也行
     例如:
    ~~~script
    var obj = {
        "name":"二狗",
        "sex":"male",
        "age":18,
        "bestworld":function(){
            document.write("attitude is everything")
        }
    }
    ~~~
    + json对象引用:两种方式
        - obj.name;
        - obj["name"];
#### Array对象
  * 数组:若干个值的有序集合。
	+ 数组的声明方法
		- var arr = new Array(10, 20, true, "hello");
		- var arr = Array( 10, 20, true, "hello");
		- var arr = [10, 20, true, "hello”];
	+ 拥有下标的特性,可以使用数组[下标]的形式从一个数组集合中提取出来某一个元素；
	+ 数组的长度（length属性）：可以使用数组.length返回数组中成员的数量（数组的长度）
	+ 如何枚举（遍历,循环）一个数组
		var 数组;
		for(var i = 0; i < 数组.length;i++){
			数组[i]
		}
  + Array对象的方法
	+ arr.push(元素1,元素2,....,元素X) 向数组的末尾添加一个或多个元素,返回值是数组新的长度                  
	+ arr.pop()    删除最后一个,返回值是删除的最后一个元素
	+ arr.unshift(元素1,元素2,....,元素X) 向数组的开头添加一个或更多元素,返回值是数组新的长度。
	+ arr.shift()   删除第一个,返回值是删除的第一个元素
	+ arr.splice(index,howmany,repalcement) 从数组中添加/删除/修改值,返回值被改动的值。
		- 添加:splice(要添加元素位置的下标,0,item1,.....,itemX) 往数组中某一个位置塞一个元素进去 
		- 删除:splice(要删除元素的下标,1) 从数组中删除掉某一个元素
		- 修改:splice(要修改元素的下标,1,item1,.....,itemX) 从数组中修改某一个元素
	+ arr.reverse() 颠倒数组中元素的顺序,返回值是颠倒后的数组
	------------------------以上方法都有副作用会改变原数组------------------------------------
	+ arr.concat(array1,array2,......,arrayN)  连接两个或更多的数组，返回连接后的新数组
	+ arr.join(separator)  把数组的所有元素放入一个字符串，方法内的参数作为分隔符,省略该参数，则使用逗号作为分隔符
	+ arr.slice(start,end【可省略】)  返回一个新的数组,包含从start到end(不包括该元素)的arr中的元素(参数可为负数-1指最后一个元素)
	+ arr.sort() 对数组的元素进行排序
		- sort方法在不传入参数的情况下，默认以字符编码顺序进行排序，而非数学大小关系进行排序。
		- 使用sort进行按照数学大小关系进行排序。 //不需要知道原理,就这么用
			arr.sort(function(num1,num2){
				return num1-num2;
			})
	+ forEach(遍历)遍历数组的属性或属性值,无返回值,如果要想修改值则需要修改原数组,(通过ES5的方法可以遍历对象)
        - 语法:forEach(function(item,index,array){})
		- 示例:
            var arr = [1,5,6,4];
            arr.forEach(function(item,index,array){
                // item本次循环出来的成员
                // index本次循环的下标
                // array被循环数组本身
            })
        - Object.keys()是ES5新增的一个对象方法,该方法返回对象自身属性名组成的数组,它会自动过滤掉原型链上的属性,然后可以通过数组的 forEach()方法来遍历 Object.keys(目标对象).forEach((key) => {目标对象[key]="";});
    
	+ map(映射)修改数组中的值 返回值是一个新数组(可以不在修改原数组的基础上返回一个修改好的新数组)
        - 语法:map(function(item,index,array){})
		- 示例: 
            var arr = [1,5,6,4];
            var newArr = arr.map(function(item,index,array){
                //修改原成员
                return item+1;
            })
	+ filter(过滤)返回一个新数组,新数组中的元素是通过检查指定数组中符合条件的所有元素(可不修改原数组)
        - 语法:filter(function(item.index,array){})
        - 示例:
        var arr = [-1,-2,-3,3,2,1];
        console.log(
            arr.filter((item)=>{
                //滤掉某些元素
                return item<0
            })
        )
	+ reduce(function(temp,temp2){})
		// reduce返回一个结果（不一定是数组）,循环次数是整个数组长度-1，第一个参数第一次循环时代表数组的第0位，以后每一次都代表的是上一次循环的return语句的返回值；第二个参数第一次循环代表的是下标为1的那位元素，以后为下标为2，下标为3....。如果我们希望将某一个数组中的所有成员进行累计计算的话，此时是最适合reduce方法的使用的。
		var arr = [1,5,6,3,4,1,2,5];
		console.log(arr.reduce(function(temp,temp2){
			console.log(temp)
			return temp + temp2;
		}))
	+ indexof(value,start) 从数组中检测某一个元素出现的位置，如果没找到将返回-1。
#### String对象
  * 字符串.length属性和下标的特性
    + 返回字符串的长度:一共有多少个字符str.length
    + 字符串的下标特性(字符串的下标特性只能获取 不能修改) 如:str[2] = "m";	// 此操作无效
    ```js
      var str = "aabbccddee"; 
    ```
  * String对象方法
    + str.charAt(index)	返回在指定位置的字符。
    + str.concat(stringA,stringB,...,stringZ) 连接两个或多个字符串,返回连接后的字符串。
    (使用" + "运算符进行字符串的连接通常更简单.)
    + str.indexOf(检索的字符串,开始检索的位置【可省略】) 检索字符串返回某个指定的字符串值在字符串中首次出现的位置,如果没有返回-1
    + str.lastIndexOf(检索的字符串,开始检索的位置【可省略】) 从后向前搜索字符串,返回一个指定的字符串值最后出现的位置,如果没有返回-1
    (如果找到一个检索的字符串,则返回检索的字符串的第一个字符在str中的位置。)
    + str.replace(正则表达式/检索的字符串,替换成的字符串)在字符串中用一些字符替换另一些字符,或替换一个与正则表达式匹配的子串。
      - 默认的是惰性匹配,只替换第一个匹配到字符 //str.replace("d","m")
      - 全局匹配:必须使用正则表达式的修饰符g来表述 //str.replace(/d/g,"m")
    + str.slice(起始下标【slice独有:可为负数-1指字符串的最后一个字符】,结尾的下标【可省略,如果省略则代表一直到字符串结尾】) 提取字符串的片断,返回被提取的部分.从start开始到end结束(不包括结尾的下标所代表的值)
    + str.substring(起始下标,结尾的下标【可选】) 返回提取字符串中两个指定的索引号之间的字符。
    + str.substr(起始下标,长度【可选】) 返回从起始索引号提取字符串中指定数目的字符。
    + str.split(字符串或正则表达式,从该参数指定的地方分割,多少个【可选】) 把字符串分割为字符串数组。
#### Math对象
	+ Math.abs() 返回数的绝对值。
	+ Math.ceil() 对数进行上舍入。//如Math.ceil(5.1)返回值6,Math.floor(-5.1)返回值是5
	+ Math.floor() 对数进行下舍入。//如Math.floor(-5.1)返回值-6,Math.floor(5.1)返回值是5
	+ Math.round(x) 把数四舍五入为最接近的整数。
	+ Math.max(x,y) 返回 x 和 y 中的最高值。
	+ Math.min(x,y) 返回 x 和 y 中的最低值。
	+ Math.random() 返回0-1之间的伪随机数（取值是[0,1)无限接近1但是取不到1)
#### Date对象
	+ 创建 Date 对象的语法：var myDate=new Date()
	  - 如果想要使用Date对象首先先得实例化 var myDate = new Date() //和电脑当前时间一致
	  - 获取日期对象 var myDate = new Date("YYYY-MM-DD HH:MM:SS") //自定义时间对象
	+ getFullYear() 从Date对象以四位数字返回年份。
	+ getMonth() 从 Date 对象返回月份,从0开始代表1月(0 ~ 11)。
	+ getDate() 从 Date 对象返回一个月中的某一天 (1 ~ 31)。
	+ getDay()  从 Date 对象返回一周中的某一天,从周天开始到周六,0代表周天 (0 ~ 6)。
	+ getHours() 返回 Date 对象的小时 (0 ~ 23)。
	+ getMinutes() 返回 Date 对象的分钟 (0 ~ 59)。
	+ getSeconds() 返回 Date 对象的秒数 (0 ~ 59)
	+ getTime() 获取时间戳(返回值: 指定的日期时间距1970年1月1日00:00:00的毫秒数。)

#### 构成函数的原型,构造器,实例化和继承
	+ 构造函数：如果函数中的逻辑是生成一个对象的并将其返回，我们就将其称之为构造函数。(构造函数的函数名最好大写方便辨认)
    	- 如:function Person(name,age,sex){this.name = name;}  let per = new Person("王大伟")
	+ 原型对象prototype
    	- 原型的理解：每一个构造函数都有一个prototype属性，该属性指向了一个对象，这个对象我们叫原型对象。通过构造函数生成的实例化对象，如果在调用属性或方法时从自身找不到该属性或方法，此时不会直接报错或返回undefined，而是去找它的构造函数的原型对象，看它里面有没有该属性或方法，如果有则直接借用，如果没有则看看该原型对象还有没有prototype属性，如果有则重复上面的操作，如果没有则返回undefined或报错。
		- 官方解释:js创建的每个函数都有一个prototype属性,这个属性指向一个对象.这个对象用来存储通过这个函数所创建的所有实例共有的属性和方法,这个对象称为所有实例的原型对象.每个原型对象都包含一个constructor属性，它指向prototype属性所在的函数。
		- 用途
			- 为本地对象扩展原型方法
			- 将构造函数中重复的属性或方法从私有属性与私有方法中提取出来，放到构造函数的原型对象中，从而减少内存的开销
	+ 构造器constructor(构造者)
		- 实例化对象.constructor = 创建此对象的构造函数的引用(指向prototype属性所在的函数。)
		- 官方解释:属性返回对创建此对象的数组函数的引用。
	
	+ call和apply区别:call和apply都是函数的方法，该方法可以帮助函数调用一次自己，但是和普通调用不同，call和apply的调用可以调整本次执行函数中this的指向，这个指向会被第一个参数代替。如果这个函数在调用数需要传递实参，那么call方法会把实参依次排列在第一的参数之后，而apply则是将实参放到一个数组中，并把数组作为apply方法的第二个参数。call和apply常常被用在构造函数实现继承功能的场景下。
		- fn.call("改变的指向",接收的参数1,接收的参数2,......)
		- fn.apply("改变的指向",[接收的参数1,接收的参数2,......])
		- 以下的几种写法是完全等价的。
			fn()
			fn.call()
			fn.apply()
	+ 原型链:
        官方解释:每个构造函数都有一个原型对象,原型对象都包含一个指向构造函数的指针,而其实例化对象都包含一个指向原型对象的内部指针。如果让原型对象等于另一个类型的实例,此时的原型对象将包含一个指向另一个原型对象的指针,相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，如此层层递进，就构成了实例与原型的链条。

        个人理解:每个构造函数都有一个原型对象,而其实例化的对象有一个指向其原型对象的的指针,如果让一个构造函数的原型对象等于另一个实例化对象,此时的其原型对象里就包含了一个指向另一个原型对象的指针,而另一个原型对象的里可能又包含了一个指向再一个原型对象的指针,如此层层嵌套,就构成了一条原型链
* JS如何实现继承
	+ 继承是面向对象编程中的一个重要概念，通过继承可以使子类的实例使用在父类中定义的属性和方法。
	+ 搜索对象属性的过程:每当代码读取某个对象的某个属性时，都会执行一次搜索，目标是具有给定名字的属性。搜索首先从对象实例本身开始。如果在实例中找到了具有给定名字的属性，则返回该属性的值；如果没有找到，则继续搜索_proto_指针指向的原型对象，在原型对象中查找具有给定名字的属性。如果在原型对象中找到了这个属性，则返回该属性的值。
		- 通过实例只能访问原型对象的值，不能修改原型对象的值。如果我们在实例中添加了一个属性，而该属性与实例原型中的一个属性同名，那么就会在实例中创建该属性，该属性将屏蔽掉原型中的那个属性。
	+ 具体实行方法:
		1. 继承父类的私有属性:通过使用apply或call改变需要继承目标的父类的构造函数的指向,从而继承父类的私有属性(call(this,xxx,xxx,....)),
		2. 继承父类的原型对象:通过将父类的实例化后的构造函数赋给自己的原型对象,然后自己的原型对象就会有父类的私有属性(不需要的垃圾)和原型对象(需要的)形成了一条原型链,从而继承父类的原型对象
		3. 实现继承:新实例化的构造对象的属性首先会寻找实例对象本身。如果没有再寻找继承的父类的私有属性,如果再没有搜索_proto_指针指向的原型对象,如果还是没有会去实例化的父类构造函数的原型去找,直到找到

	+ JS的继承实例
		1. es5继承
		```javascript
			function Person(name,sex,age){
				this.name = name;
				this.age = age;
				this.sex = sex;
			}
			Person.prototype.type = "灵长类";
			
			function SuperMan(name,sex,age,skill){
				// 继承来自父类Person的所有私有属性
				Person.apply(this,[name,sex,age]);
				this.skill = skill;
			}

			// 继承来自父类Person的所有的原型属性和原型方法
			SuperMan.prototype = new Person();
			
			SuperMan.prototype.fadazhao = function(){
				alert(this.skill)
			}
			let spiderMan = new SuperMan("蜘蛛侠","男",18,"吐丝儿")
        ```
		2. ES6的类和继承(原型对象的继承直接在写extends就已经继承过来了)
		```javascript
			class Person {
				constructor(name,age,sex){
					this.name = name;
					this.age = age;
					this.sex = sex;
				}
				sayName(){alert(this.name)}
			}
			let wdw = new Person("王大伟",18,'男')
			class SuperMan extends Person{
				constructor(name,age,sex,skill){
					// super关键字用于继承父类的私有属性,必须写在其他任何this添加新属性的开头
					super(name,age,sex)
					this.skill = skill
				}
				dazhao(){alert(this.skill)}
			}
			let gangtiexia = new SuperMan("钢铁侠",18,"男","钞能力");
        ```


#### BOM浏览器对象
 * window对象常用的属性和方法:(window.xxx大部分可以省略)
	+ 三个弹出框:特点阻塞代码执行
		- alert("内容") 弹出框
	    - confirm("提示信息") 确认框 
	    - prompt("提示信息","默认值") 输入框 !!返回值为字符串
	+ 两个定时器
		- setInterval(执行任务,间隔时间):连续执行定时器  clearInterval()停止计时器
		- setTimeout(执行任务,间隔时间):只执行一次		 clearTimeout() 停止定时器(一般用的不太多)
	+ 一个事件
		- onload事件:onload 事件会在页面或图像加载完成后立即发生。
 * location 地址对象
	+ location.href 可读写(读:document.write(location.href);写:location.href="http://www.baidu.com")
	+ location.repalce("地址") 转到其他页面
	+ location.reload(); 重载
 * document 文档对象(Document对象是Window对象的一部分)
	+ 文档写入 document.write()
		1.自带字符串解析
		2.如果该方法与事件连用，会直接覆盖原网页
	+ 找对象的方法
		- document.getElementById() 返回对拥有指定 id 的第一个对象的引用。
		- document.getElementsByName() 返回带有指定名称的对象集合。(一般是带name的表单元素)
		- document.getElementsByClassName() 返回带有指定标签名的对象集合。
		- document.getElementsByTagName() 返回带有指定标签名的对象集合。
		- document.querySelector("标签名"或"#id名"或".class名"); 获取单个的ID,类,标签元素
		- document.querySelectorAll("标签名"或".class名");批量获取标签和类  返回数组
			1. document.querySelectorAll("id名" "标签名")
			2. 节点也可以使用该方法 节点.querySelector(All) 从节点内部找,孙子节点也会查找
	+ 节点属性设置
		node.innerHTML获取/修改标签间的内容
		node.innerText获取/修改标签间纯文本
		node.outerHTML从标签外到内获取/修改标签间的内容
		
		node.className 设置/获取该元素class属性的属性值(兼容性不佳)

		node.setAttribute("属性","属性值") 设置该元素的某一个行内属性的属性值
		node.getAttribute("属性") 获取该元素的某一个行内属性的属性值
		node.removeAttribute("属性","属性值")移出该元素的某一个行内属性的属性值
#### DOM文档对象
  * 根据层次关系访问节点(包括文本和元素:空格和换行也会算一个文本节点)
    + parentNode 返回节点的父节点
    + childNodes 返回子节点集合,childNodes[i]
    + firstChild 返回节点的第一个子节点，最普遍的用法是访问该元素的文本节点
    + lastChild 返回节点的最后一个子节点
    + nextSibling 下一个节点
    + previousSibling 上一个节点
  * 通过层级关系访问元素节点(不包含文本)
    + children 返回子节点集合
    + firstElementChild 返回节点的第一个子节点，最普遍的用法是访问该元素的文本节点
    + lastElementChild 返回节点的最后一个子节点
    + nextElementSibling 下一个节点
    + previousElementSibling 上一个节点
  * 查询节点类型(node.nodeXxx)
        nodeType     nodeName    nodeValue
    元素节点     1          标签名         null
    属性节点     2          属性名       属性值
    文本节点     3          #text       文本内容
  * 节点的操作
    + document.createElement(HTML标签名)   创建一个元素节点
    + document.cteateTextNode(文本);	创建一个文本节点
    + node.appendChild(newChild)   newChild被添加到孩子列表中的末端
    + 父节点.insertBefore(要添加的子节点,参照节点);  将目标节点插入到参照节点之前。
      参照节点如果为null 那就和appendChild()一样
	+ node.remove(); 	删除node子节点。(新功能,无需提及父亲)
	  parentNode.removeChild(childnode);
	+ node.replaceChild(newChild, oldChild);  用newChild节点替换oldChild节点
	+ node.cloneNode() 克隆一个新节点作为返回值
	  node.cloneNode(true) 包括本身文本
  * this关键字
    + this 只要封装函数，任何一个函数系统都会内置一个叫this的变量，
    + this 变量储存的是地址，是当前函数主人的地址
    + this永远指向主人 没有主人默认指向window(window也是主人)
    一般情况下：对象方法this指向的是对象
  * 各种文本内容
    + innerHTML:将元素中所有的内容都获取到 包括HTML标签 但是不包括自身标签
        innerHTML添加元素innerHTML("<标签>文本</标签>");
    + innerText:将元素的内容获取出来不包括HTML标签
    + outerHTML:将自身以及子元素所有的内容都获取出来 包括HTML标签 包括自身标签
  * 获取非行内样式(兼容问题)
    + 节点.currentStyle["属性名"]; //IE兼容
    + getComputedStyle(节点,false)["属性名"];//火狐,谷歌兼容
        兼容写法
        ~~script
    function getCss(node,cssName){
    return node.currentStyle ? node.currentStyle["cssName"] : getComputedStyle(node)["cssName"];
    }
        ~~
  * 各种位置
    + 节点宽高和位置
        - offsetWidth 获取节点宽度 包括border和padding的长度(不包括margin)
        - offsetHeight  获取节点高度 包括border和padding的长度(不包括margin)
        【注】【offsetWidth/offsetHeight 如果取的值是一个移动的元素且是奇数会出问题(自动加一像素或减一像素让其变为偶数)】

        - offsetLeft   返回第一个有定位的父节点的左上角顶点到该元素左上角顶点X轴的距离
        - offsetTop    返回第一个有定位的父节点的左上角顶点到该元素左上角顶点Y轴的距离
        (在父元素均不设置position属性时，在Chrome，opera和IE浏览器中offsetLeft是元素边框外侧到浏览器窗口内侧的距离offsetTop同理)
    + 滚动条位置
        - scrollTop 相对于竖向滚动条顶点到竖向滚动条现在位置的距离
        - scrollLeft 相对于横向滚动条顶点到横向滚动条现在位置的距离
     兼容写法:var top = document.body.scrollTop || document.documentElement.scrollTop
  * 找对象的方法:document对象下的方法(document.xxxx)
    + document.getElementById("ID名") 通过ID获取元素 -> Node
    + document.getElementsByName() 返回带有指定名称的对象集合。(一般是带name的表单元素)
    + document.getElementsByTagName("标签名") 通过标签名获取元素 ->  NodeList
    + document.getElementsByClassName("class名") 通过类名获取元素 -> NodeList
  * 节点属性设置:Node节点:Object数据类型，对应的是页面中的某一个元素。(Node.)
    + Node.innerHTML 设置/获取该元素开始标签与结束标签之间的内容
    + Node.innerText 获取/修改标签间纯文本
    + node.outerHTML 从标签外到内获取/修改标签间的内容
    + node.value 设置/获取该表单元素标签之间的value值
    + Node.className 设置/获取该元素class属性的属性值(兼容性不佳)
    + Node.setAttribute("属性","属性值") 设置该元素的某一个行内属性的属性值
    + Node.getAttribute("属性") 获取该元素的某一个行内属性的属性值
    + Node.removeAttribute("属性","属性值")移出该元素的某一个行内属性的属性值
    + Node.style 设置/获取元素的行内样式  //如Node.style.css属性名 = "属性值"
    【Node.style.css属性名:可返回某一个元素的某一个行内属性的属性值】
  * Node与NodeList是完全独立的两个存在，它们之间的方法或属性都不互通。
    + Node:单个节点
    + NodeList(节点列表，节点集合):类数组，拥有数组下标的特性和.length的特性。由若干个Node节点构成的类数组，如果我们通过数组下标的特性提取出某一个成员，那么该成员就是Node节点。 

  
  * NodeList和HTMLcollection
    + 通过NodeList获取的节点列表是静态的,有数组的方法,如果forearch。。。。// 通过document.querySelectAll
    + 通过HTMLcollection获取的节点列表是动态的,只有length属性有用,无数组的一些方法 //通过document.getElementsByTagName或document.getElementsByClassName
#### Event事件(事件源,事件类型,事件对象)
* 事件流:
    + 事件流描述的是从页面中接收事件的顺序。
    + 事件发生时会在元素节点与根节点之间按照特定的顺序传播，路径所经过的所有节点都会收到该事件，这个传播过程即DOM事件流。
 * 事件冒泡和阻止以及事件捕获
    + 事件冒泡:当一个元素接收到事件的时候 会把他接收到的事件传给自己的父级，一直到window
    + 阻止事件冒泡:【一定加在事件传播源】
        - e.stopPropagation();  //非ie浏览器兼容 【Propagation传送】
		- e.cancelBubble = true; //ie浏览器兼容
        - e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true; //兼容写法
    + 事件捕获:事件从文档的根节点流向目标对象节点。途中经过各个层次的DOM节点，并在各节点上触发捕获事件,直到到达事件的目标节点。
 * 浏览器默认事件
    + 浏览器默认事件:如a标签的自带跳转功能,鼠标右键会弹出菜单
    + 阻止浏览器默认事件:
        1. 阻止写法1
            - e.preventDefault(); //非ie浏览器兼容 【Default默认】
            - e.returnValue = false; //ie浏览器兼容
            - e.preventDefault ? e.preventDefault() : e.returnValue = false; //兼容写法
        2. 阻止写法2
            funtion(){
                return false;
            }               // 可以实现，但不推荐使用
        (鼠标右键事件 :阻止鼠标右键:node.oncontextmenu = function(){})
 * 事件监听
    + 事件绑定的三种写法
        1. 在DOM元素中直接绑定:直接在DOM元素上绑定onclick、onmouseover、onmouseout、onmousedown、onmouseup、ondblclick、onkeydown、onkeypress、onkeyup等  //不推荐 不符合样式、行为、结构 三者分离的概念
            - 如:<button onclick = "fun()"></button>
                function fun(){}
            <!-- "fun()" == fun  是由于fun不能直接书写,所以写成"fun()"
			但结果都是绑定函数本身,而不是函数调用-->
        2. 在JavaScript代码中绑定
            - node.事件类型 = function(){}
        3. 绑定事件监听函数
            + node.addEventListener("去掉on的事件",回调函数【被当成参数的函数】,是否捕获【true为捕获 false或者不写都为冒泡】); //非ie浏览器兼容
            + node.attachEvent("带on的事件",function(){}); //ie浏览器兼容
            + function setlistener(node【事件源】,evt【不带on的事件】,fn【函数】){
                node.addEventListener ? node.addEventListener(evt,fn) : node.attachEvent("on"+evt,fn);} //兼容写法(由于ie浏览器兼容不关心是否捕获,该函数都为冒泡)
            + 事件监听的好处:
                - 可以为同样的元素绑定多次同一个事件 (本质就是代码的合并)
                - 可以决定当前的事件流是冒泡还是捕获     //一般搭配事件委托使用
            + 当冒泡和捕获存在时的执行顺序:
                W3c规定，任何发生在w3c事件模型中的事件，首是进入捕获阶段，直到达到目标元素，再进入冒泡阶段。
                资料(https://blog.csdn.net/moguzhale/article/details/53503044)
                绑定在被点击元素的事件是按照代码的顺序发生的，其他非绑定的元素则是通过冒泡或者捕获的触发。按照W3C的标准，先发生捕获事件，后发生冒泡事件。所以事件的整体顺序是：非目标元素捕获 -> 目标元素代码顺序 -> 非目标元素冒泡。
 * 事件委托
    + 事件委托：某个事件让其他元素来完成
        例如：页面上有1000个li,为每一个li添加单击事件,但是使用委托只需要在li父级上加一次事件就可以
    + 委托的好处：
        1. 把某个事件加到父元素上，提高程序的执行效率
            如:在ul上代理所有li的click事件。
        2. 动态创建的元素 可以在创建元素的函数体外部为其添加事件(新添加的元素还会有之前的事件。)
    + 委托的机制：
        - 利用事件冒泡（常见）或者事件捕获
        - 不是所有事件都可以实现事件委托【常见的就几个】
    + target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。
        - 语法为:event.target; (下文的e指的兼容写法后的event)
        - e.target  //非ie浏览器兼容
        - e.srcElement //ie浏览器兼容
        - var target = e.target || e.srcElement; //兼容写法
        - target.tagName:代表触发该事件节点的名字,返回值的是全大写标签名
    + 一些特殊的事件(如表单独有元素focus,blur.....),因为是持续事件所有不会冒泡,如果想用事件委托则需要通过事件捕获从委托元素到它进行委托(因为捕获阶段点击到的目标只会是最终捕获到的元素不会产生冲突所以捕获可行)
    【注】如果给父节设置点击事件,目标节点获取焦点事件会点击两次才会获取焦点;如果是失去焦点不会点两次
* 事件:对某个元素的某种操作
    + 事件对象:当某个事件触发时产生的对象，就是事件对象
        (event使用前提，必须有事件)
        事件对象的兼容写法： var e = evt || event;
        - 事件对象获取方式
        oBtn.onclick = function(形参){
            var 变量 = 形参 || window.event;
            console.log(变量);
        }
        - 事件对象的属性(事件对象拥有该事件相关的属性和方法):
        1. button
            0 左键
            1 滚轮
            2 右键
        2. 获取当前鼠标位置:(原点位置不一样)
        - pageX / pageY  相对于整个文档顶部和左侧的坐标 原点位置:整个页面的左上角
        - clientX / clientY  相对于局部窗口的左侧和顶部的坐标 原点位置:可视窗口的左上角为原点
        - offsetX / offsetY  相对于内部元素的距离左侧和顶部的坐标(常用于拖拽)
        - screenX /  screenY  原点位置:电脑屏幕的左上角
        3. keyCode: 获取键盘按键值   字母 对应其ASCII值识别
            【注意】:keyPress 的ctrl+回车返回值为10
            【注意】:键盘检测兼容写方法
            var key = e.keyCode || e.which || e.charCode;
            e.ctrlKey 判断ctrl是否被按下
            32空格 13回车
            小写字母的ASCLL码值[97,122],大写字母的ASCLL码值[65,90]
            数字转换位字符(返回值是一个字母): String.fromCharCode(Number)
 * 鼠标事件(可以绑定在任意的元素节点)
    click    单击
	dblclick 双击

	【注】该组经过子节点会重复触发
	mouseover 鼠标移入
	mouseout  鼠标移出
	【注】该组经过子节点不会重复触发，IE8以后兼容
	mouseenter 鼠标移入
	mouseleave 鼠标移出

	mousemove  鼠标移动(不停触发)
	mousedown  鼠标按下
	mouseup    鼠标抬起
        
 * 键盘事件
    - keydown  键盘按下(如果按下不放手,会一直触发)(不会生成字符)
	- keyup	   键盘抬起
	- keypress 键盘按下(生成一个字符取触发;功能键不支持，如enter，shift......)
 * HTML事件
	+ window事件
		- load	当页面加载完成以后会触发
		- unload	当页面解构的时候触发(刷新页面,关闭当前页面)只有ie兼容
		- scroll    当页面滚动时
		- resize	当页面窗口发生大小变化
	+ 表单事件
		- blur  失去焦点
		- focus 获取焦点
		- select 当在输入框内选中文本时触发
		- change 当我们对输入框的文本进行修改并且失去焦点
        - input 在用户输入时触发(类似于onchange事件,不同之处在于oninput事件在元素值发生变化是立即触发)
	  【注】该组必须添加到form元素上
		- submit
		- reset

【注】【帮助用户触发事件 去掉on 如input.focus();】
### 正则
  * 定义
      + 正则表达式(regular expression)是一个描述字符规则的对象。如：只能出现字母，只能出现数字，前三个必须是数字等。
      + 正则表达式的组成：普通字符 或者 特殊字符
      + 两种方式
          - a. /普通字符+特殊字符/修饰符 如:var reg = /a/;
          - b 构造方法 如:var reg = new RegExp("a");(new可省略)
  * 正则中的特殊字符:
      + 单个字符:
          ^  :正则开始
          $  :正则结束
          .  :元字符, 表示任意一个字符    
          \  :表示转义字符       如:\.表示.
          +  :表示其前面紧挨着的字符至少出现1次 等价{1,}
          *  :表示其前面出现的字符至少出现过0次  等价{0,}
          ?  :表示其前面出现的字符至少出现过0次，至多1次  等价{0,1}
          |  :表示或者
      + 组合字符:
          \d :0-9之间的任意一个数字 \d只占一个位置
          \D :除了\d
          \w :数字，字母 ，下划线 0-9 a-z A-Z _ 
          \W :除了\w
          \s :空格或者空白等 
          \S :除了\s
      + 括号:
          {m,n}表示括号前面紧挨着的字符至少出现m个,至多出现n个 如:以b开头至少3个a至多5个a  /^ba{3,5}&/
          {m}表示括号前面紧挨着的字符只能出现m个
          {m,}表示括号前面紧挨着的字符至少出现m个
          [] 表示括号内的任意一个字符         如[wd3h]
          [a-z]表示任意一个小写字母 [a-zA-Z0-9]
          [^  ]表示非括号内的任意一个字符
          ()一般与或连用 表示优先级
          [\u4e00-\u9fa5] 任意一个中文字符
  * 正则中的修饰符:
      i:无视大小写;
      g:全局匹配;
  * 正则对象的方法
    + reg.test(str)
    + reg.exec(str)根据正则表达式查找，结果满足,会返回一个长度为1的数组（数组只有一个值）
  * 正则中相关字符串的方法:
      + str.search(reg)  返回与正则表达式查找内容匹配的第一个子字符串的位置
      + str.match(reg)   使用正则表达式模式对字符串执行查找，并将包含查找的结果作为数组返回。
      + str.replace(reg,"替换后字符") 返回根据正则表达式进行文字替换后的字符串的复制
#### ajax和网络传输
* 网络传输
	+ ip地址 0-255的三位数字
	+ 127.0.0.1 或 localhost  本机ip
	+ 端口号:每个电脑都有65535端口(大多数端口是关闭的【降低被攻击的概率】)  https默认进入443端口  http默认进入80端口(阿帕奇占用这个端口,ip名不写默认就是80端口)
* ajax(HTTP脚本化):使用JavaScript来操作HTTP请求
    1. 实例化XMLHttpRequest对象
		+ let http = new XMLHttpRequest()
	2. 规划一个HTTP请求
		+ http.open(method,url,async)
			- mehods:String，请求方式，可以是"get"也可以是"post"
			- url:String，请求地址，比如："http://192.168.0.1/xxxx.txt"
			- async:Boolean，同步或异步,可选参数,默认是异步的。
				- ajax同步(false)：意味着此时请求Server后,JS代码不再继续执行,等待Server返回后才继续往下执行
				- ajax异步(true且可省略)：意味着此时请求Server后,JS代码继续执行,不管Server什么时候返回
	3. 发送HTTP请求
        如果是post请求使用http.send()发送参数
        post请求请求头:// 设置请求头用于解码
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
        如果是get直接open中带发送参数
	4. 接收来自服务器端的请求
		+ http.onreadystatechange = function(){
			if(http.status === 200 && http.readyState === 4){
				console.log(http.responseText)
			}
	    }
        + readyState是XMLHttpRequest对象的一个属性,用来标识当前XMLHttpRequest对象处于什么状态
            - 0：初始化，XMLHttpRequest对象还没有完成初始化
            - 1：载入，XMLHttpRequest对象开始发送请求
            - 2：载入完成，XMLHttpRequest对象的请求发送完成
            - 3：解析，XMLHttpRequest对象开始读取服务器的响应
            - 4：完成，XMLHttpRequest对象读取服务器响应结束
        + status是XMLHttpRequest对象的一个属性,表示响应的HTTP状态码
            - 1xx：信息响应类，表示接收到请求并且继续处理
                - 100——客户必须继续发出请求
                - 101——客户要求服务器根据请求转换HTTP协议版本
            - 2xx：处理成功响应类，表示动作被成功接收、理解和接受
                - 200——交易成功
                - 201——提示知道新文件的URL
                - 202——接受和处理、但处理未完成
                - 203——返回信息不确定或不完整
                - 204——请求收到，但返回信息为空
                - 205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件
                - 206——服务器已经完成了部分用户的GET请求
            - 3xx：重定向响应类，为了完成指定的动作，必须接受进一步处理
                - 300——请求的资源可在多处得到
                - 301——删除请求数据
                - 302——在其他地址发现了请求数据
                - 303——建议客户访问其他URL或访问方式
                - 304——客户端已经执行了GET，但文件未变化
                - 305——请求的资源必须从服务器指定的地址得到
                - 306——前一版本HTTP中使用的代码，现行版本中不再使用
                - 307——申明请求的资源临时性删除
            - 4xx：客户端错误，客户请求包含语法错误或者是不能正确执行
                - 400——错误请求，如语法错误
                - 401——请求授权失败
                - 402——保留有效ChargeTo头响应
                - 403——请求不允许
                - 404——没有发现文件、查询或URl
                - 405——用户在Request-Line字段定义的方法不允许
                - 406——根据用户发送的Accept拖，请求资源不可访问
                - 407——类似401，用户必须首先在代理服务器上得到授权
                - 408——客户端没有在用户指定的饿时间内完成请求
                - 409——对当前资源状态，请求不能完成
                - 410——服务器上不再有此资源且无进一步的参考地址
                - 411——服务器拒绝用户定义的Content-Length属性请求
                - 412——一个或多个请求头字段在当前请求中错误
                - 413——请求的资源大于服务器允许的大小
                - 414——请求的资源URL长于服务器允许的长度
                - 415——请求资源不支持请求项目格式
                - 416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段
                - 417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求
            - 5xx：服务端错误，服务器不能正确执行一个正确的请求
                - 500——服务器产生内部错误
                - 501——服务器不支持请求的函数
                - 502——服务器暂时不可用，有时是为了防止发生系统过载
                - 503——服务器过载或暂停维修
                - 504——关口过载，服务器使用另一个关口或服务来响应用户，等待时间设定值较长
                - 505——服务器不支持或拒绝支请求头中指定的HTTP版本
        + responseText:返回以文本形式存放的内容
        + responseXML:返回XML形式的内容
    5. 在请求时，发送请求参数
        - 规划了一个无请求参数的请求
            http.open("get","http://10.35.164.50/message.php");
        - 规划了一个有请求参数的请求
            http.open("get","http://10.35.164.50/message.php?name=wangdawei&age=18&sex=1");
        (需要使用json的正反解析)
            `JSON.stringify(xxxx)` 反解析
            `JSON.parse(xxxx)` 正解析
  
  * 同源策略【同协议/同域名/同IP地址/同端口】
  * 跨源的解决方式
    + 修改ajax同源协议(不建议)
    + 后端处理
## 客户端存储
* cookie：操作麻烦，需要大量的字符串处理。兼容性好，数据的生命周期可以灵活地设置。
    + 语法:
        - 设置一个会话cookie:document.cookie = "key=value";//不设置过期时间关闭浏览器时删除cookie
        - 设置有过期时间的cookie:
                let date = new Date("2020-12-05 01:00:00");
                document.cookie = `key=value;expires=${date}`;
        - 删除cookie的话就将cookie的时间调整为过去时间;
                let date = new Date("1970-01-01 00:00:00");
                document.cookie = `要删除的key=任意值;expires=${date}`;
        - 封装的函数
                // 读cookie
                function getCookie(key){
                    let cookie = document.cookie;
                    let arr = cookie.split("; ");
                    let result = {}
                    arr.forEach(item=>{
                        let key = item.split("=")[0];
                        let value = item.split("=")[1];
                        result[key] = value;
                    })

                    if(key){
                        return result[key];
                    }
                    return result;
                }
                // 删cookie
                function removeCookie(key){
                    let guoqu = new Date("1970-01-01 00:00:00")
                    if(key){
                        document.cookie = `${key}=beybey;expires=${guoqu}`
                    }
                    else{
                        let cookie = getCookie();
                        for(let i in cookie){
                            document.cookie = `${i}=beybey;expires=${guoqu}`
                        }
                    }
                }
                // 写cookie
                function setCookie(key,value,expires){
                    if(typeof expires === "number"){
                        let date = new Date();
                        date.setDate(date.getDate()+expires)
                        document.cookie = `${key}=${value};expires=${date}`;
                    }
                    else{
                        document.cookie = `${key}=${value};expires=${expires}`;
                    }
                }
    + cookie设置的过期时间是以服务器时间为基准,在浏览器得到服务器的任何HTTP响应头后会将浏览器的时间与服务器同步.而使用new Date()获取的本地时间并不准确.与服务器相差很大.本地时间可被客户修改.如果cookie使用本地时间可被人利用实现永久免登陆验.
    <!-- 参考资料https://www.cnblogs.com/huangqiao/p/9487421.html -->
* localStorage：相对于cookie来说兼容性稍差。数据的生命周期是永久性存储。
    + 语法:
        - localStorage.getItem("key");
        - localStorage.setItem("key","value");
        - localStorage.removeItem("key");
        - localStorage.clear();
* sessionStorage：数据生命周期在会话期（在当前标签页中），其余的所有特性都类似于localStorage的。
  + 语法
    - sessionStorage.getItem();
    - sessionStorage.setItem();
    - sessionStorage.removeItem();
    - sessionStorage.clear();


## ES6
  * let 命令
    + 不存在变量提升
    + 暂时性死区
    + 不允许重复声明
    + 块级作用域: ES5 只有全局作用域和函数作用域，没有块级作用域
  * const 命令
    + 声明一个只读的常量,一旦声明，常量的值就不能改变。
  * 解构赋值
    + 数组的解构
      ```js
        // 基本用法
          let [a, b, c] = [1, 2, 3]; // a = 1;b = 2;c = 3
        // 可嵌套
          let [a, [[b], c]] = [1, [[2], 3]]; // a = 1;b = 2;c = 3
        // 可忽略
          let [a, , b] = [1, 2, 3]; // a = 1;b = 3
        // 不完全解构
          let [a = 1, b] = []; // a = 1, b = undefined
        // 字符串
          let [a, b, c, d, e] = 'hello'; // a = 'h';b = 'e';c = 'l';d = 'l';e = 'o'
      ```
    + 对象的解构
      ```js
        // 基本用法
        let { foo, bar } = { foo:'aaa', bar:'bbb' }; // foo = 'aaa';bar = 'bbb'
      ```
  * 字符串的扩展
    + 字符串的遍历器接口: ES6 为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历
      ```js
        for (let codePoint of 'foo') {
          console.log(codePoint)
        }
      ```
    + 模板字符串: 是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
      ```js
        let n = 'good'
        `this is a ${n} text`
      ```
    + 字符串的新增方法
      - 实例方法includes()：返回布尔值，表示是否找到了参数字符串。
      - 实例方法endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
      - 实例方法startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
        ```js
          let s = 'Hello world!';
          s.startsWith('Hello') // true
          s.endsWith('!') // true
          s.includes('o') // true
        ```
      - 实例方法repeat()：返回一个新字符串，表示将原字符串重复n次
        ```js
          let s = 'Hello world!';
          s.repeat(2) // "Hello world!Hello world!"
        ```
      - 实例方法padStart()，padEnd(): 如果某个字符串不够指定长度，会在头部或尾部补全
        ```js
          'x'.padStart(5, 'ab') // 'ababx'
          'x'.padStart(4, 'ab') // 'abax'

          'x'.padEnd(5, 'ab') // 'xabab'
          'x'.padEnd(4, 'ab') // 'xaba'
        ```
      - 实例方法：trimStart()，trimEnd()： trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格，它们返回的都是新字符串，不会修改原始字符串
        ```js
          const s = '  abc  ';
          s.trim() // "abc"
          s.trimStart() // "abc  "
          s.trimEnd() // "  abc"
        ```
      - 实例方法：at(): 方法接受一个整数作为参数，返回参数指定位置的字符，支持负索引（即倒数的位置
        ```js
          const str = 'hello';
          str.at[1] // "e"
          str.at[-1] // "o"
        ```
  * 数字的扩展
    + Number.parseInt()，parseFloat():全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变
      ```js
        // ES5的写法
        parseInt('12.34') // 12
        parseFloat('123.45#') // 123.45

        // ES6的写法
        Number.parseInt('12.34') // 12
        Number.parseFloat('123.45#') // 123.45
      ```
    + Math 对象的扩展
      - Math.trunc(): 用于去除一个数的小数部分，返回整数部分
        ```js
          Math.trunc(-0.1234) // -0
        ```
  * 函数的扩展
    + 函数参数的默认值: 允许为函数的参数设置默认值，即直接写在参数定义的后面
      ```js
        function log(x, y = 'World') {
          console.log(x, y);
        }
        log('Hello') // Hello World
        function Point(x = 0, y = 0) {
          this.x = x;
          this.y = y;
        }
        const p = new Point();
        p // { x: 0, y: 0 }
      ```
    + rest 参数：ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中
      ```js
        function push(array, ...items) { // est 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
          items.forEach(function(item) {
            array.push(item);
            console.log(item);
          });
        }
        var a = [];
        push(a, 1, 2, 3)
      ```
    + name 属性:函数的name属性，返回该函数的函数名。
      ```js
        function foo() {}
        foo.name // "foo"
      ```
    + 箭头函数: 箭头函数表达式的语法比函数表达式更简洁
      + 用法:
        ```js
          function (a){alert(1);}   -> a =>{alert(1);}
          function (a,b){alert(1);}   -> (a,b)=>{alert(1);}
          function test(a){alert(1);} -> let test = (a)=>{alert(1);}
          function test(a){return a+10}  ->  let test = a => a + 10;// 如果函数体内只有一条return语句的用法
          function (){return { name:"陈二狗" }}   -> () => ({ name:"陈二狗" }) // 如果返回值是一个对象,那么使用时需要加()
          // 最适合的用法:
          var arr = [1,2,3,4,5,6,7,8,9]
          let newArr = arr.filter(function(item){   ->  let newArr = arr.filter(item => item < 5)
            return item < 5;                         
          })
          let newArr = arr.map(function(item){      ->  let newArr = arr.map(item => item*2)
            return item* 2;  
          })
          let newArr = arr.forEach(function(item){  ->  let newArr = arr.forEach(item => item)          
            return item;                         
          })
        ```
      + 注意:
        - 箭头函数没有自己的this对象
        - 不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误。
        - 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
        - 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
  * 数组的扩展
    + 扩展运算符
      ```js
        console.log(1, ...[2, 3, 4], 5) // 1 2 3 4 5
        let [a, ...b] = [1, 2, 3]; // 配合解构使用  a = 1;b = [2, 3]
        let arr1 = [1, 2, 3];console.log([...arr1]) // 复制数组[1, 2, 3]
        let arr3 = [...[1, 2, 3],...[4, 5, 6] ] // 合并数组 arr3 = [1, 2, 3, 4, 5, 6]
        let arr2 = [...'hello']  // 字符串扩展运算 arr2 = [ "h", "e", "l", "l", "o" ]

        let nodeList = document.querySelectorAll('div');
        let array = [...nodeList]; // querySelectorAll方法返回的是一个NodeList对象。它不是数组，而是一个类似数组的对象。这时，扩展运算符可以将其转为真正的数组，原因就在于NodeList对象实现了 Iterator ,实现了 遍历器(Iterator) 接口的对象
      ```
    + Array.from(): 用于将两类对象转为真正的数组[类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）]
      ```js
        // NodeList对象
          let ps = document.querySelectorAll('p');
          Array.from(ps).filter(p => {
            return p.textContent.length > 100;
          });
      ```
    + Array.of(): 用于将一组值，转换为数组
      ```js
        Array.of(3, 11, 8) // [3,11,8]
      ```
    + 实例方法：find() 和 findIndex()
        - find():用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined 
        - findIndex(): 与find方法非常类似，但返回的返回第一个符合条件的数组成员的位置
      ```js
        [1, 5, 10, 15].find(function(value, index, arr) {
          return value > 9;
        }) // 10
        [1, 5, 10, 15].findIndex(function(value, index, arr) {
          return value > 9;
        }) // 2
      ```
    + 实例方法: fill() :使用给定值，填充一个数组
      ```js
        ['a', 'b', 'c'].fill(7)// [7, 7, 7]
      ``` 
    + 实例方法：entries()，keys() 和 values() : 用于遍历数组。它们都返回一个遍历器对象[可以用for...of循环进行遍历]
      -  entries() :是对键值对的遍历
      -  keys() :是对键名的遍历
      -  values() :是对键值的遍历
      ```js
        for (let index of ['a', 'b'].keys()) {
          console.log(index);
        }
        // 0
        // 1

        for (let elem of ['a', 'b'].values()) {
          console.log(elem);
        }
        // 'a'
        // 'b'

        for (let [index, elem] of ['a', 'b'].entries()) {
          console.log(index, elem);
        }
        // 0 "a"
        // 1 "b"
      ```
  * 对象的扩展
    // 复制对象
      let obj1 = { x:1,y:2,z:3 }
      let obj2 = { ...obj1 } // obj2 = {x:1,y:2,z:3}
    // 合并对象
      let obj1 = { x:1, y:2, z:3 }
      let obj2 = { x:4, y:5, z:6 }
      let obj3 = { ...obj1, ...obj2 } // obj3 = { x:1, y:2, z:3, x:4, y:5, z:6 }
    // 自定义属性
      let obj1 = { x:1, y:2, z:3 }
      let obj2 = { ...obj1, a:4, b:5, c:6 } // obj2 = { x:1, y:2, z:3, a:4, b:5, c:6 }


  <!-- 为什么使用以下两种方法(ES5提供的foreach使用break不能中断循环，使用return也不能返回到外层函数) -->
  + for...in(遍历下标),常用于遍历普通或json对象,
      - 语法:for(let key in obj) 
      - 注意:会遍历到自定义的原型方法,如不需要可在内部使用obj.hasOwnPropery(key)方法判断某属性是否是该对象的实例属性再输出
  + for...of(遍历值)可遍历Arrays数组,Strings字符串,Maps映射,Sets集合等可迭代的数据结构等(不可遍历对象)
      - 语法:for(let value of obj)
  * Array.from(类数组) 将类数组或SET和MAP数据结构的对象转换为真实数组
  * map数据结构:它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键;
  * set数据结构:它类似于数组，但是成员的值都是唯一的，没有重复的值。
      - let set = new Set([1,5,6,3,4,1,2,5])
          set.add(10)
          set.delete(5)
          set.has(4)
      let arr = [1,5,6,3,4,1,2,5]
      console.log(Array.from(new Set(arr)))
  * console的其他属性如error,table
  * try和catch:try抛出的语句如果错误那么立即执行catch中的语句不会报错
  * Promise
    + 概念:是一个异步的解决回调地狱的方案,可读性好(回调函数层层嵌套,可读性差)
    + 三个状态: pendding 等待;resolve 成功;reject 失败
    + 语法: 
    ```js
      new Promise((resolve,reject)=>{
        if(成功条件){
          resolve(成功信息)
        }
        if(失败条件){
          reject(失败信息)
        }
      })
    ```
    
## 扩展与总结

#### 动画及运动
  * 概念:用计时器不停的去获取一个元素的某一个行内样式的属性值并进行一个计算然后把计算结果重新赋值给这个元素。
    + 游戏30帧-60帧流畅,电影24帧流程(每秒钟播放24幅画面,因为有动态模糊概念)
  * 移动的套路 
    + 被移动的元素要有初始的行内样式
    + 在计时器里要不停的获取到这个行内样式的值并用parseInt()或parseFloat()的方法强制转换为数字(为了去掉px单位并得到数字类型)
    + 要将得到的数字进行一定的计算后重新赋值给这个元素(注意单位)
    + 间隔时间的取值范围要在16ms~32ms之间  //1s 30-60帧;1000ms = 30-60帧,1帧 = 33.33ms-16.66ms
  * 判断结束情况，在满足结束情况下要清除掉计时器.
    + 一般不要判断相等 
  	+ 在结束动画的判断语句里，要把元素的样式写成最终形态，防止冲过。
  * 动画锁(由于用户多次快速操作开启多个定时器且无法关闭)[保证只能有一个定时器启动(每次启动定时器前将上一次定时器关闭)]
    + 声明一个变量isXXX = false;先判断这个变量是否为真,是就跳出if(XXX){return},执行动画后isXXX = false;在关闭定时器的判断条件内再将变量变为isXXX = true
  * 多物体运动
    + 定时器不能共用
    + 任何数据都不能共用
  * 缓冲运动
    + 特性:速度和距离成正相关 (距离就等于1帧的速度,将距离变小就是速度变快) 距离=目标值-当前值
    + 问题:计算机最小识别的像素是1像素,如果速度小于1,计算机自动成0(判断是否大于0向上取整math.ceil,否则向下取整math.floor)
#### this出现场景的指向问题
  * 在普通函数内或全局作用域下，指向的window对象
  * 出现在对象中的函数：指向的该对象. 
    ```js
      let obj = {
        data:{name:"陈二狗"},
        test:function(){
          console.log(this.data); //该this指向obj
        }
      }
    ```
  * 出现在事件处理函数时，指向触发事件的元素（Node节点）
  * 出现在构造函数中：指向的是实例化对象。(需要new的对象)
  * 出现在原型中,this指的就是这个原型的主人。(实例化对象)
  * 出现在箭头函数中: 继承上一级的指向位置 (无视当前函数)
#### 重绘与回流
  * 重绘(repaint):当元素样式的改变不影响布局时,浏览器将使用重绘对元素进行更新,此时由于只需要UI层面的重新像素绘制,因此损耗较少,常见的重绘操作有：改变元素颜色
  * 回流(reflow):当元素的尺寸、结构或者触发某些属性时,浏览器会重新渲染页面,称为回流。此时,浏览器需要重新经过计算,计算后还需要重新页面布局,因此是较重的操作。常见的回流操作有：浏览器窗口大小改变,添加或者删除可见的DOM元素
  * 回流必定会触发重绘,重绘不一定会触发回流。重绘的开销较小,回流的代价较高。
#### 防抖与节流
  * 函数节流:(https://www.cnblogs.com/fightjianxian/p/12077570.html)
    + 作用: 在 n 秒中只执行一次函数
    + 实现:
      ```js
          // 函数节流
          var pass = true;
          document.getElementById("throttle").onscroll = function(){
              if(!pass){
              // 判断是否已空闲，如果在执行中，则直接return
                  return;
              }
              pass = false;
              setTimeout(function(){
                  console.log("函数节流");
                  pass = true;
              }, 300);
          };
      ```
    + 应用场景: 高频触发的事件,多数在监听页面元素滚动事件
  * 函数防抖:(https://www.cnblogs.com/fightjianxian/p/12077451.html)
    + 作用: 在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
    + 实现:
      ```js
        var timer = false;
        document.getElementById("debounce").onscroll = function(){
            clearTimeout(timer); // 清除未执行的代码，重置回初始化状态
            timer = setTimeout(function(){
                console.log("函数防抖");
            }, 300);
        }; 
      ```
    + 应用场景:如邮箱验证和手机号验证。只有等用户输入完毕后，前端才需要检查格式是否正确，如果不正确，再弹出提示语
#### 闭包
  * 作用: 将局部变量变为全局变量,修改该变量的唯一途径就是调用内层函数,可以避免全局变量污染,设计私有的方法和变量。但是由于成为常驻内存变量则有内存泄漏的风险。
  * 实现: 声明一个自调用函数,在其函数体内声明一个变量并return一个新的函数,在新的函数体内操作声明的变量后将变量return,该变量即可不被垃圾回收装置回收永久存在。
    ```js
      let add = (function(){
        var a = 5;
        return function(){
          a ++;
          return a;
        }
      })()
      console.log(add()) // a = 6
      console.log(add()) // a = 7
    ```
  * 原理: 自调用函数初始会运行一次,并返回了新的函数的函数体,所以当调用外层函数时实际调用了内层函数,内层函数会将变量return并让外层函数的作用域存储下来,所以内部变量会一直存在全局
  * 使用场景:
    + 使用闭包来实现防抖
      ```js
        function debounce(callback, time) {
          var timer;
          return function () {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
              callback()
            }, time)
          }
        }
      ```
    + 使用闭包设计单例模式
      ```js
        class Car{
          constructor(color){
            this.color = color
          }
        }
        var proxy = (function createCar() {
          var instance;
          return function (color) {
            if (!instance) {
              instance = new Car(color)
            }
            return instance
          }
        })()
        var car = proxy('white')
      ```
    + 使用闭包遍历取索引值
      ```js
        for (var i = 0; i < 10; i++) {
          setTimeout(function(){console.log(i)},0) //10个10
        }
        for (var i = 0; i < 10; i++) {
          (function(j){
            setTimeout(function(){console.log(j)},0) // 0 - 9
          })(i)
        }
      ```
#### JSONP
  * 作用: 解决跨域问题的方法之一
  * 实现: 客户端通过script标签的src属性向服务端发送一个get请求,并提前准备好一个回调函数,这个回调函数的函数名会在请求参数中在callback参数值中传递给后端。后端接收到请求后,拆解出callback参数的参数值并且以此为函数名拼接一段执行调用函数的JS代码段返回给前端并把数据当做这个函数的实参一并发送,前端接收到执行函数的代码段后会自动调用之前声明的回调函数，回调函数中的形参就代表后端返回的数据。
    ```html
      <script src="http://xxxxxx?callback=xxx"></script>
      <script type="text/javascript">
        function xxx(data) {//回调函数
          console.log(data);
        }
      </script>
    ```
    ```js
      // backend
      let callback = res.request.callback
      res.send(`${callback}(${JSON.stringify(data)})`)
    ```
  * 原理: script标签引入不同于http请求,其拥有跨域能力
#### 其他
  * js小数精度问题:乘一个小数会出现1.0000004这种数,解决办法先乘整数再除一个数