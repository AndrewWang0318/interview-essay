# HTML+CSS
  ##### Doctype作用
   + 告诉浏览器的解析器使用哪种HTML规范或者XHTML规范来解析页面
  ##### 请简述css盒模型
   + 盒模型也叫框模型,HTML中每个元素都可以看作盒模型,具备:内容区(content)、内填充(padding)、边框(border)、外边距(margin)四个部分。
   + 盒模型有两种:W3C标准盒模型(content-box)和IE定义的盒模型(border-box),不同点IE定义的盒模型宽高包含边框和内填充
  ##### 介绍视频/音频标签
   + 视频标签:使用video双标签,支持的视频格式有MP4,WebM,Ogg;
   + 音频标签:使用audio双标签,支持的音频格式有MP3,Wav,Ogg;
   + 它们有一些属性如:
        - src 引入文件地址
        - controls 显示控件
        - muted 预设静音
        - loop  循环播放   
        - autoplay 自动播放
   + 它们内部可使用source的单标签让浏览器选择它所支持的源文件
  ##### HTML5新增的内容有哪些
   + 用于媒体播放的video和audio元素
   + 用于图形的绘制的canvas元素
   + 两种本地存储的新方法:localStorage(长期储存)和sessionStorage(浏览器关闭)
   + 两种节点选择器querySelect和querySelectAll
   + 语义化标签,如 header、footer、nav、section、article
   + 新的输入类型,如 email、tel、time、data、url、search;输入属性 placeholder autofocus required(必填字段)
   + 表示当前窗口的浏览历史的history对象,它保存了当前窗口访问过的所有页面网址
   + json对象和字符串的互换:json.stringify/parse
   + geolocation地理定位
   + Web Worker: 允许JavaScript脚本创建多个线程
   + web socket：新的客户端和服务器端通信方案
   + fileReader: 上传文件
  ##### Html5新增的语义化标签有哪些
   + 头部 header 
   + 导航 nav
   + 板块 section
   + 侧边栏 aside
   + 主要内容区域 main
   + 图文 figure ficaption(图片说明)
        `
            <figure>
                <img src="">
                <figcaption>图片说明</figcaption>
            </figure>
        `
   + 底部 footer 
   + 文章 article
   + 标记 mark(内联元素)
   + 时间标签 time(内联元素)
  ##### Css3新增的特性
   + 过渡 transition
   + 2D或3D转换 transform: translate位移 scale放大 skew倾斜 rotate旋转
   + 动画 animation
   + 圆角 border-radius
   + 背景图的大小 background-size 关键字cover背景图会不断放大直到充满整个盒子,可能会出现裁切的情况contain背景图会不断的放大碰到边缘后就停止放大,可能会出现留白
   + 盒子阴影 box-shadow: (x轴偏移 y轴偏移 阴影模糊大小 阴影大小 阴影颜色 阴影位置)
   + 线性/径向渐变 linear-gradient()/radial-gradient();
   + 文本溢出 text-overflow  ellipsis显示省略符号来代表被修剪的文本
        - 单行文本溢出显示省略号
            - 设置宽度
            - 设置不换行 white-space:nowrap;
            - 设置溢出隐藏 overflow:hidden;
            - 设置文本溢出显示省略号 text-overflow:ellipsis;
   + 文字阴影 text-shadow: x轴偏移 y轴偏移 阴影模糊大小 阴影颜色  
   + 边框图像 border-image
  ##### 清除浮动的方式有哪些?请说出各自的优缺点
   + 父元素设置高度 缺点：高度不能自适应原则
   + (触发BFC)父元素设置溢出隐藏 缺点：溢出在父元素框之外的部分会被隐藏
   + 给浮动元素的下方添加一个块级元素,用clear:both清浮动属性 缺点：代码中会出现很多空的标签,造成代码冗余
   + 通过伪元素选择器的方法添加元素
        ```css
            高度塌陷的父元素::after{
                content:"";
                clear:both;
                display:block;
            }
        ```
  ##### 什么是BFC规范
   + 概念:Block formatting context(块级格式化上下文):就是页面上的一个隔离的独立容器,容器里面的子元素不会影响到外面的元素;简言之,他就是一些规则集合的名称。(页面中的根元素 html 就是一个典型的遵循BFC的元素)
   + BFC的布局规则
      - 内部的Box会在垂直方向,一个接一个地放置。
      - Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠,上下排列的盒子的上下margin值不是累加显示。(解决margin传递问题)
      - 每个元素的margin box的左边, 与包含块border box的左边相接触
      - BFC的区域不会与float box重叠。(两栏布局)
      - BFC就是页面上的一个隔离的独立容器,容器里面的子元素不会影响到外面的元素。反之也如此。
      - 计算BFC的高度时,浮动元素也参与计算。(解决高度塌陷)
   + 如何触发BFC:
      - float的值不是none。
      - position的值不是static或者relative。
      - display的值是inline-block、table-cell、flex、table-caption或者inline-flex
      - overflow的值不是visible
   + margin问题:(兄弟级:margin上下重叠;父子级:margin上传递)
      - 父子级解决办法+ 
        1. 使用padding代替margin;
        2. 给父元素添加边框或者内边距;
        3. 让其不属于同一个BFC规范(给父元素或者是该元素添加浮;给父元素添加overflow:hidden)
      - 兄弟级解决办法:(让其不属于同一个BFC规范)
  ##### 定位的属性值有何区别
   + 相对定位 relative;参考物:自己本身;特点:移动之后依然占位,定位元素的层级要比普通元素的层级要高
   + 绝对定位 aboslute;参考物:有定位的第一个祖先元素 特点:脱离文档流,会遮挡后面元素的文字,margin:auto会失效,内联元素会变成块级元素,宽度自适应会失效
   + 固定定位 position:fixed;参考物 浏览器窗口 特点:不会跟随滚动条进行滚动,margin: auto失效,宽度自适应会失效,脱离文档流
   + 粘性定位 position:sticky;参考物 浏览器窗口 特点:未达到top值之前,普通元素,达到top值之后类似于固定定位,脱离文档流
   + 默认值static
 ##### 子元素如何在父元素中居中/元素垂直居中/垂直与水平居中的方式
  + 如果子元素是行内元素,父元素text-align:center,子元素设置行高line-height：父元素的高
  + 弹性盒子flex布局中  justify-content: center; align-items: center;
  + 利用定位来实现居中  子元素相对于父元素绝对定位,并且margin值减去自己宽高的一半 。
  + 利用定位来实现居中  子元素相对于父元素绝对定位,left right top bottom 都为0 并且margin值设置为：auto 
  + 利用Css3的变形属性  子元素相对于父元素绝对定位,并且利用transform让其位移相反方向的一半: translate( -50%, -50%);
  ##### 如何让chrome浏览器显示小于12px的文字
     + 利用css3的缩放属性：transform:scale()
  ##### Css选择器有哪些,那些属性可以继承,优先级如何计算?Css3新增的伪类有哪些 
     + CSS 选择器：
          - id选择器(#id{})
          - class选择器(.classname{})
          - 标签选择器(div{})
          - 通配符选择器(*{})
          - 属性选择器([属性名]{})
          - 层次选择器
              1. 包含选择器                    选择器 选择器{}
              2. 群组选择器                    选择器,选择器{}
              3. 子代选择器(只能选择的孩子)     选择器>选择器{}
              4. 相邻选择器(相邻的后面兄弟)     选择器+选择器{}
              5. 兄弟选择器(相邻的后面的兄弟们) 选择器~选择器{}
     + 伪类选择器
        - 状态伪类选择器 :hover :focus a:link a:visited a:active
        - 结构性伪类选择器 child系列 nth-of-type系列
        - 目标伪类 元素:target{} 点击跳转到该板块之后样式才生效
     + 伪元素选择器 
          - xxx::after{}
          - xxxx::before{}

     + 可继承的样式：
          - 字体类：font-size(字体大小) font-family(字体类型) font-weight(字体加粗) font-style(字体倾斜) 
          - 文本类：color(文本颜色) text-indent(缩进) line-height(行高) letter-spacing(字符间距) word-spacing(单词之间的距离) text-align(文本对齐方式)
          - 列表属性：list-style
     + 不可继承的样式：
          - text-decoration(文本修饰) width height float padding margin border
  ##### 网页中有大量图片加载很慢 你有什么办法进行优化?
     + 图片懒加载,滚动到相应位置才加载图片
     + 图片预加载,如果为幻灯片、相册等,将当前展示图片的前一张和后一张优先下载。
     + 使用CSSsprite,SVGsprite,Iconfont,Base64等技术,如果图片为css图片的话。
     + 如果图片过大,可以使用特殊编码的图片,加载时会先加载一张压缩的特别厉害的缩略图,以提高用户体验。
  ##### 行内元素/块级元素有哪些?
   + 行内元素有：span  a b strong i em br   
   + 块级元素有：div p ul ol li  dl dt dd h1-h6 table
   + 行内块：img input textarea select button
  ##### Margin和padding在什么场合下使用
   + margin是用来隔开元素与元素的间距;margin用于布局分开元素使元素与元素互不相干；
   + padding是用来隔开元素与内容的间隔。padding用于元素与内容之间的间隔,让内容与(包裹)元素之间有一段“填充距离”。
  ##### 怎么实现html标签的禁用
   + 使用{pointer-events: none;}样式
   + 表单使用disabled属性
  ##### Flex布局原理
     + Flex是用于排列元素的一种布局模式,通过给父盒子添加flex属性,来控制子盒子的位置和排列方式。Flex布局中的元素是有伸展和收缩自身的能力的,目标就是为了撑满父元素,元素的大小是高度依赖父容器的大小的
  ##### Flex布局属性有那些请简述?
     + 形成弹性盒 display:flex;
     + 主轴对齐方式  justify-content
     + 交叉轴对齐方式 align-items
     + 主轴的方向 flex-direction
     + 换行 flex-wrap
     + 多行之间的对齐方式 align-content
     + 子项在交叉轴的对齐方式 align-self
     + 排列顺序 order
     + 压缩 flex-shrink 
     + 子项的宽度 flex-basic:数值+px
     + 子项占父项的多少 flex:数字
  ##### Px与Rem的区别
     + Px是相对于屏幕分辨率而言；
     + Rem是相对于根元素字体大小的单位
  ##### Rem缺点
     + 目前对ie兼容性不好 对pc页面来讲使用次数不多；
     + 数据量大：所有的图片,盒子都需要我们去给一个准确的值；才能保证不同机型的适配
  ##### 请简述媒体查询
   + 媒体查询可以让我们根据设备显示器的特性(如视口宽度、屏幕比例、设备方向：横向或纵向)为其设定不同的CSS样式,如果你需要设置设计响应式的页面就需要用到媒体查询
  ##### 浏览器css私有属性
   + -moz- firefox浏览器私有属性
   + -ms- IE浏览器私有属性 
   + -o-  Opera浏览器私有属性
   + -webkit- chrome、safari私有属性
  ##### 三栏布局方式(两边固定中间自适应)
   + 绝对定位布局：左右两栏采用绝对定位,分别固定于页面的左右两侧,中间的主体栏用左右margin值撑开距离。于是实现了三栏自适应布局。
   + 自身浮动布局：左右使用分别使用float:left和float:right,float使左右两个元素脱离文档流,中间元素正常在正常文档流中,使用margin指定左右外边距对其进行一个定位。
   + flex布局:用一个父盒子包括左中右三个盒子,父盒子使用flex中间的盒子用flex:1

---
# JavaScript
> 变量使用x,y,z表示
 ##### Js数据类型的分类
  + 基本类型
   - string '字符串'
   - number '64位双精度浮点型数字'(包含NaN)
   - bigint '任意精度格式的整数'
   - boolean '布尔',
   - symbol '标记值'
   - undefined '没有任何值'
   - null '没有任何对象'

  + 引用类型
   - 对象'object'(Function也是一个特殊的对象)
  ##### 如何判断一个数据是NaN
     + 用全等判断 x === NaN;
     + 用isNaN(x) 来判断;
  ##### null与undefined区别
     + null 表示一个值被定义了,定义为“空值”;
     + undefined 表示根本不存在定义。
  ##### 为什么js是弱类型语言
     + 弱类型语言是数据类型可以被忽略的语言,一个变量可以赋予不同数据类型的值,而在js中所有的变量都可以重新赋不同类型的值
  ##### 数组方法有哪些请简述
     + arr.push() 从后添,返回值为添加完后的数组的长度
     + arr.pop() 从后删一个,返回值是删除的元素
     + arr.unshift() 从前添,返回值是添加后数组的长度
     + arr.shift() 从前删一个,返回值是删除的元素
     + arr.splice(i,n)从数组中添加/删除/修改值,返回值被改动的值
     + arr.concat() 连接两个数组 返回值为连接后的新数组
     + arr.sort() 将数组进行排序,返回值是排好的数组,默认是按照最左边的数字进行排序,不是按照数字大小排序的
     + arr.reverse() 将数组反转,返回值是反转后的数组
     + arr.slice(start,end) 切一段从索引值start到end(不包含)的数组,返回值是切出来的数组
     + arr.join(separator)  把数组的所有元素放入一个字符串,方法内的参数作为分隔符,省略该参数,则使用逗号作为分隔符
     + arr.forEach(callback) 遍历数组,无return  即使有return,也不会返回任何值,并且会影响原来的数组
     + arr.map(callback) 映射数组(遍历数组),有return 返回一个新数组
     + arr.filter(callback) 过滤数组,返回一个满足要求的数组 
  ##### 字符串方法有哪些
     + str.charAt(index)	返回在指定位置的字符
     + str.concat(stringA,stringB,...,stringZ) 连接两个或多个字符串,返回连接后的字符串
     + str.indexOf(检索的字符串,开始检索的位置【可省略】)检索字符串返回某个指定的字符串值在字符串中首次出现的位置,如果没有返回-1
     + str.lastIndexOf(检索的字符串,开始检索的位置【可省略】) 从后向前搜索字符串,返回一个指定的字符串值最后出现的位置,如果没有返回-1
     + str.replace(正则表达式/检索的字符串,替换成的字符串)在字符串中用一些字符替换另一些字符,或替换一个与正则表达式匹配的子串。
     + str.slice(起始下标【slice独有:可为负数,-1指字符串的最后一个字符】,结尾的下标【可省略,如果省略则代表一直到字符串结尾】) 提取字符串的片断,返回被提取的部分.从start开始到end结束(不包括结尾的下标所代表的值)
     + str.substr(起始下标,长度【可选】) 返回从起始索引号提取字符串中指定数目的字符。
     + str.substring(起始下标,结束的下标【可选】) 返回提取字符串中两个指定的索引号之间的字符。
     + str.split(字符串或正则表达式,从该参数指定的地方分割,多少个【可选】) 把字符串分割为字符串数组。
  ##### 请列出2种以上数组去重的方式
      1. 双层for循环
      ```js
          function unique(arr){            
              for(let i=0; i<arr.length; i++){
                  for(let j = i+ 1; j < arr.length; j++){
                    if(arr[i]==arr[j]){//第一个等同于第二个,splice方法删除第二个
                          arr.splice(j,1); j--;//删除后需要让j的位置回退一个,不然会跳过一个数
                      }
                  }
              }
              return arr;
          }
      ```
      2. 利用indexOf去重
      ```js
          function unique(arr) {
              let array = [];
              for (let i = 0; i < arr.length; i++) {
                  if (array.indexOf(arr[i]) === -1) {
                      array.push(arr[i])
                  }
              }
              return array;
          }
      ```
      3. 利用filter过滤
      ```js
          function unique(arr) {
              return arr.filter(function(item, index, arr) {
                  //如果当前元素在原始数组的第一个索引==当前循环索引,返回当前元素,不然就过滤掉
                  return arr.indexOf(item,0) === index;
              });
          }
      ```
      4. 利用ES6 Set去重
      ```js
          function unique(arr) {
              return Array.from(new Set(arr))
          }
      ```
  ##### 请掌握2种以上数组排序的方式
      1. 冒泡排序
      ```js
      function sort(arr) {
          let temp = null;
          for(let i = 0;i < arr.length-1; i++){
              for(let j = 0;j < arr.length-i-1 ;j++){
                  if(arr[j] > arr[j+1]){
                      temp =  arr[j];
                      arr[j] = arr[j+1];
                      arr[j+1] = temp;
                  }
              }
          }
          return arr;
      }
      ```
      2. 擂台排序
      ```js
      function sort(arr){
          let temp = null;
          for(let i =0;i < arr.length - 1 ; i++ ){
              for(let j = i+ 1 ;j < arr.length ; j++ ){    
                  if(arr[i] > arr[j]){
                      temp = arr[i];
                      arr[i] = arr[j];
                      arr[j] = temp;
                  }
              }
          }
          return arr;
      }
      ```
      3. sort排序
      ```js
      function sort(arr){
          arr.sort((small,big)=>{
              return small-big;
          })
          return arr;
      }
      ```
  ##### 如何遍历一个多维数组
      ```js
      function each(obj){
          for(let key in obj){
              typeof(obj[key]) == "object" ? each(obj[key]) : console.log(key+'--'+obj[key])
          }
      }
      ```
  ##### Json如何新增/删除键值对
     + 新增:
          1. 使用数组下标形式添加 Object["属性名"] ='xxx';
          2. 使用对象参数的形式添加 Object.属性名  = 'xxx';
     + 删除:
          使用delete删除        delete Object.属性名
  ##### map,forEach和for循环区别:
     + forEach只是进行简单的数组遍历,无返回值,且break和return语句不能跳出循环,for可以适用于更复杂的循环且效率更高
      map代表是映射它有返回值,返回值是一个处理过后的新数组且不改变原数组
  ##### ES6新特性
     + const和let
     + 模板字符串
     + 箭头函数
     + 函数的参数默认值
     + 对象和数组解构
     + for...of 和 for...in
     + ES6中的类
     + Promise对象
     + async函数
  ##### Let与var与const的区别
     + var声明的变量会挂载在window上,而let和const声明的变量不会
     + var声明变量存在变量提升,let和const不存在变量提升
     + let和const声明形成块级作用域
     + 同一作用域下let和const不能声明同名变量,而var可以
     + let 有暂存死区
  ##### Ajax如何使用
      1. 实例化XMLHttpRequest对象:    
      2. 规划一个HTTP请求:            
      3. 发送HTTP请求:                
      4. 接收来自服务器端的请求 
      ```javaScript
      let http = new XMLHttpRequest();
      http.open(post,"https://www.baidu.com",false)
      //http.open(method,url,async);
      http.send();
      http.onreadystatechange = function(){
          if(http.status === 200 && http.readyState === 4) {
              console.log(http.responseText);
          }
      }
      ```
  ##### 请简述ajax的执行过程 以及常见的HTTP状态码
     + 执行过程: 
          1. 实例化XMLHttpRequest对象
          2. open()准备发送
          3. send()执行发送动作 
          4. onreadystatechange指定回调函数 
          5. responseText返回内容
     + 常见的HTTP状态码:
          - 1##：信息响应类,表示接收到请求并且继续处理
              - 100  继续。客户端应继续其请求
          - 2##：处理成功响应类,表示动作被成功接收、理解和接受
              - 200  正常返回数据
          - 3##：重定向响应类,为了完成指定的动作,必须接受进一步处理
              - 301 Moved Permanently  永久性转移/重定向
              - 302 Move Temporarily   临时转移
              - 307 Temporary Redirect 临时重定向,一般应用于服务器的负载均衡
              - 304 Not Modified ——客户端已经执行了GET,但文件未变化
          - 4##：客户端错误,客户请求包含语法错误或者是不能正确执行
              - 400 Bad Request 请求参数错误
              - 401 Unauthorized 无权限访问
              - 404 Not Found 地址错误
              - 405 Method Not Allowed 当前请求的方式服务器不支持
          - 5##：服务端错误,服务器不能正确执行一个正确的请求
              - 500 Internal Server Error 未知服务器错误
              - 503 Service Unavailable 服务器超负荷
  ##### Get和post不同
      1. get安全性低,post有加密所有安全性高
      2. get发送的数据会暴露在地址栏并且会被保存在历史记录里,而post不会
      3. get参数通过URL传递,post放在Request body中。
      4. 传输的数据量不同,get传输的量小,不能大于2kb,post理论上没有限制
      5. get一般用于获取数据,post一般用于发送数据
  ##### 本地存储与Cookie的区别
     + Cookie:它有4kb的大小限制,数据的生命周期比较灵活,不设置失效时间默认关闭浏览器后失效,原生Cokkie接口不好需要二次封装,可以通过它设置记住密码功能,存储的内容会保留在HTTP请求的Header中,并且会随每次请求发送到浏览器
     + 本地储存:是HTML5新增技术,有localStorage和sessionStorage两种,他们可存储的大小为5mb,localStorage的生命周期是永久存储,sessionStorage的生命周期是当页面关闭后销毁
  ##### 什么是jsonp工作原理是什么?他为什么不是真正的ajax
   + 工作原理:前端动态生成一个script标签向后端发送http请求,然后准备函数接收数据,并用callback为键将函数名发送给后端,后端接收函数名后将数据作为实参拼接一段执行调用函数的js代码返回给前端,前端接收到执行函数的代码后会自动调用声明的函数,函数的形参就是后端返回的数据。
   + ajax的核心是:通过XmlHttpRequest获取非本页内容
   + jsonp的核心:通过<script>标签来调用服务器提供的js脚本,[所以jsonp也只能发送get请求,POST不能通过script标签引入一段js脚本]
  ##### 事件委托是什么?如何确定事件源
     + 事件委托就是利用事件冒泡机制,只给一个元素绑定事件,就可以代理管理某一类型的所有事件。
      事件源通过事件对象的target属性来确定
  ##### This指向
      1. 在一般函数内或全局作用域下,指向的window对象
      2. 在对象的方法中,指向的该对象
      3. 在事件处理函数中,指向触发事件的元素(Node节点)
      4. 在箭头函数中: 继承上一级的指向位置(无视当前函数)
      5. 在构造函数中,指向的是实例化对象。(需要new的对象)
      ```js
      function People(name,age){
          this.sayMyName = alert(name);
          this.age = age;
      }
      let student = new People("二狗",18);
      student.sayMyName
      ```
      6. 在新增原型对象属性中,this指的就是这个原型的主人(实例化的对象)
  ##### 箭头函数与普通函数的区别
     + 箭头函数都是匿名函数,没有自己this,arguments,原型对象
  ##### 闭包是什么有什么特性,对页面会有什么影响
     + 闭包就是一个"定义在一个函数内部的函数"。当其中一个内部函数在包含它们的外部函数之外被调用时,就会形成闭包。
     + 代码
        ```js
            let add = (function(){
                var a = 5;
                return function(){
                    a++;
                    return a;
                }
            })()
                console.log(add())
                console.log(add())
          ```
     + 特性：
          1. 函数内变量以私有成员的存在,避免了全局变量的污染
          2. 函数内部可以引用外部的参数和变量
          3. 这些变量的值始终保持在内存中,不会在外层函数调用后被自动清除
          4. 参数和变量不会被垃圾回收机制回收
     + 影响：
          - 常驻内存会增大内存的使用量,会造成内存泄露
  ##### 什么是js内存泄露?
      - 内存因为某些原因没有被垃圾回收装置回收成为常驻内存,造成系统内存的浪费,可能会导致程序运行速度减慢甚至崩溃
  ##### 普通函数和构造函数的区别
      1. 写法不同构造函数习惯上首字母大写
      2. 调用方式不一样,普通函数可以用 函数名() 的形式直接调用,构造函数需要用new关键字来调用创建实例对象
      3. 返回值不一样,普通函数返回值由return决定,构造函数返回值是实例化的对象
  ##### 什么是面向对象请简述
     + 面向对象的三大特征 继承、封装、多态
          - 继承:通过继承使子类可以使用在父类中定义的属性和方法
          - 封装:就是指把内部的实现封装起来,然后暴露必要的方法让外部调用。
          - 多态:多态指的是同一类事物有多种形态,如文件有:文本文件,可执行文件,视频文件等...
  ##### 请简述原型/原型链/继承
     + 原型:每个函数都有一个prototype属性,这个属性指向一个对象.这个对象用来存储通过这个函数所创建的所有实例共有的属性和方法,这个对象称为所有实例的原型对象.
     + 原型链:每个构造函数都有一个原型对象,而其实例化的对象有一个指向其原型对象的的指针,如果让一个构造函数的原型对象等于另一个实例化对象,此时的其原型对象里就包含了一个指向另一个原型对象的指针,而另一个原型对象的里可能又包含了一个指向其他原型对象的指针,如此层层嵌套,就构成了一条原型链
     + 继承:是面向对象编程中的一个重要概念,通过继承可以使子类的实例使用在父类中定义的属性和方法。[每当代码读取某个对象的某个属性时,都会执行一次搜索,目标是具有给定名字的属性。搜索首先从对象实例本身开始。如果在实例中找到了具有给定名字的属性,则返回该属性的值；如果没有找到,则继续搜索_proto_指针指向的原型对象,在原型对象中查找具有给定名字的属性。如果在原型对象中找到了这个属性,则返回该属性的值。]
  ##### Js中.call()与.apply()区别
     + call和apply都是函数的方法,它们可以帮助函数调用一次本身,并且可以通过第一个参数调整本次执行函数中this的指向,不同的一点是如果需要传参,call会把实参依次排列在第一个参数之后,而apply则是将实参放到一个数组中,它们常用于实现继承功能
  ##### 原型和继承,prototype,call和apply继承的区别:
      答案见上两题
  ##### 请写出一个简单的类与继承
      ```js
      class Person{
          constructor(name,sex){
              this.name = name;
              this.sex = sex;
          }
          sayName(){alert(this.name)}
      }
      class Superman extends Person{
          constructor(name,sex,skill){
              super(name,sex)
              this.skill = skill
          }
          useSkill(){alert(this.skill)}
      }
      ```
  ##### 请简述async的用法(https://segmentfault.com/a/1190000007535316)
     + async用于申明一个函数是异步的并且它会返回一个Promise对象,函数的返回值就是.then()里的数值
      [await只能出现在async函数中,await在等待一个async函数完成,因为 async 函数返回一个 Promise 对象,所以 await 可以用于等待一个 async 函数的返回值——这也可以说是 await 在等 async 函数,但要清楚,它等的实际是一个返回值]
  ##### 深浅拷贝是什么如何实现?
     + js有两种类型基本类型和引用类型,基本类型它的名和值会储存在栈内存中,当我们复制它时会开一条新内存再创建一个同样的值,但是引用类型在我们新建的时候它会在栈内存中储存它的名和一个指向它堆内存的地址,当我们复制的时候其实只是复制了它的引用地址并非堆里面的值,如果要深拷贝我们就需要新建一个和它一样的堆内存的值
  ##### 什么时候用深拷贝/浅拷贝
     + 当我们创建了一个对象并复制,如果我们想修改复制的对象,但却不想让原对象也随之改变的时候使用深拷贝,但是如果我们只是想复制它的基本类型的数据或者指向它的堆内存的指针的时候使用浅拷贝
  ##### 深拷贝的代码实现
     + 简单深拷贝(一层拷贝)
      ```js
          function deepCopy(obj){
              let copyObj = Array.isArray(obj) ? [] : {};
              for(let key in obj){
                  copyObj[key] = obj[key];
              }
              return copyObj;
          }
      ```
     + 复杂深拷贝(递归实现多层拷贝)
      ```js
          function deepCopy(obj){
              let copyObj = Array.isArray(obj) ? [] : {};
              for(let key in obj){
                  if( obj.hasOwnProperty(key) ){
                      copyObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key] ;
                  }
              }
              return copyObj;
          }
      ```
  ##### 函数节流和函数防抖的区别(两者都是优化高频率执行js代码的一种手段)
     + 函数节流:指定时间间隔内只会执行一次任务
     + 函数防抖:任务频繁触发的情况下,只有任务触发的间隔超过指定间隔,任务才会执行
  ##### 函数节流:(https://www.cnblogs.com/fightjianxian/p/12077570.html)
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
  ##### 函数防抖:(https://www.cnblogs.com/fightjianxian/p/12077451.html)
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
  ##### Promise的理解
     + promise是为解决异步处理回调地狱问题而产生的;它是一个构造函数,可以通过new得到一个Promise的实例对象,Promise里有两个函数分别叫做 resolve(成功之后的回调函数)和reject(失败之后的回调函数)在Promise构造函数的Prototype属性上,有一个.then()和.catch()方法,只要是Promise的实例化对象都可以使用
  ##### Promise在哪里使用过
     + 在使用ajax,axios等一类的数据请求的时候用过,只要是一些需要解决回调函数问题的都可以用(在函数中return一个promise实例,成功后干嘛失败后干嘛,则该函数就可以使用.then和catch方法)
  ##### Promise.all输入是由多个Promise对象组成的一个数组，最后输出一个新的Promise对象。成功时返回的是一个结果数组，和输入的promise数组顺序是一致的，失败时则返回最先被reject的错误值。
      ```js
      let p1 = new Promise((resolve, reject) => {
      resolve('p1')
      })
      let p2 = new Promise((resolve, reject) => {
      resolve('p2')
      })
      let p3 = Promise.reject('p3 error')
      
      Promise.all([p1,p2,p3]).then(results => {
          console.log(results)
      }).catch(error => {
          console.log(error)      // 'p3 error'
      })
      ```
  ##### typeof和istanceof区别?(如果想要完美的检测数据类型的话，推荐使用Object.prototype.toString.call()方法：)
   + typeof 会返回一个运算数的基本类型，instanceof 返回的是布尔值
   + instanceof 可以准确判断引用数据类型，但是不能正确判断原始数据类型
   + typeof 虽然可以判断原始数据类型（null 除外），但是无法判断引用数据类型（function 除外）

## 浏览器及其运行原理
  ##### 网页的三层结构有哪些
   + 结构层由HTML或XHTML之类的标记语言 负责创建内容的结构
   + 表示层由CSS负责创建 负责“如何显示有关内容”
   + 行为层由Javascript和DOM操控,负责“如何对事件做出反应”。
  ##### 主流浏览器内核介绍
  ##### 重绘以及回流是什么
   + 重绘(repaint):当元素样式的改变不影响布局时,浏览器将使用重绘对元素进行更新,此时由于只需要UI层面的重新像素绘制,因此损耗较少,常见的重绘操作有：改变元素颜色
   + 回流(reflow):当元素的尺寸、结构或者触发某些属性时,浏览器会重新渲染页面,称为回流。此时,浏览器需要重新经过计算,计算后还需要重新页面布局,因此是较重的操作。常见的回流操作有：浏览器窗口大小改变,添加或者删除可见的DOM元素
   + 回流必定会触发重绘,重绘不一定会触发回流。重绘的开销较小,回流的代价较高。
  ##### 事件循环(Event Loop)
   + 解释:代码顺序执行时会先进入调用栈,可以立即完成的会从调用栈移除,需要等待的则将执行结果进入Web API,然后再从调用栈移除,当Web API中的代码执行完成后,会进入callback Queue(回调函数队列),在此期间事件循环机制(Event Loop)会不断的执行,把callback Queue中的代码再次推送到调用栈执行
   + 宏任务微任务:遇到同步任务直接执行,遇到异步任务分类为宏任务(macro-task)和微任务(micro-task)。有微则微,无微则宏:
        - 宏任务: 整体代码 定时器 AJAX DOM事件
        - 微任务: promise async/await
   + 微任务 > DOM渲染 > 宏任务
  ##### 同步与异步的区别/阻塞与非阻塞区别(https://blog.csdn.net/qq_22855325/article/details/72958345)
   + 同步任务指的是,在主线程上排队执行的任务,只有前一个任务执行完毕,才能执行下一个任务；
   + 异步任务指的是,不进入主线程、而进入"任务队列",只有等主线程任务执行完毕,"任务队列"才开始通知主线程,请求执行任务,该任务才会进入主线程执行
    [javascript是单线程,所有任务需要排队,前一个任务结束,才会执行后一个任务]
   + 阻塞:调用时,如果被调用者状态未就绪,会导致调用线程被挂起。
   + 非阻塞:调用时,如果被调用者就绪则立即返回结果,如果未就绪也会返回一个错误值,告诉调用者当前的状态

## 网络
  ##### http是什么?有什么特点
     + http是客户端浏览器或其他程序与Web服务器之间的应用层通信协议
     + 特点:
          1. 简单快速灵活:客户向服务器请求服务时,只需传送请求方法和路径且HTTP允许传输任意类型的数据对象
          2. 无连接:每次连接只处理一个请求,收到用户应答后,就断开连接
          3. 无状态:协议对于事务处理没有记忆能力,如果后续处理需要前面的信息,则它必须重传
  ##### HTTP协议和HTTPS区别
      1. 传输信息安全性不同;前者是超文本传输协议,信息是明文传输,后者是具有安全性的ssl加密传输协议
      2. 连接方式不同:前者很简单是无状态的,后者是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议
      3. 端口不同:前者端口是80,后者是443
  ##### 什么是csrf攻击
     + csrf(cross-site request forgery)是跨站请求伪造;攻击者盗用了用户的身份,以用户的名义发送恶意请求,它可以做的事情包括 以用户的名义发邮件,发消息,购买物品和盗取用户账户
  ##### 为什么会造成跨域/请简述同源策略
     + 不符合同源协议(不同协议;不同域名/IP;不同端口号),
     + 解决方法:
          1. jsonp请求:jsonp的原理是利用<script>标签的跨域特性,可以不受限制地从其他域中加载资源
          2. CORS跨域:就是使用自定义的HTTP头部让浏览器与服务器进行沟通,从而决定请求或响应是应该成功还是应该失败。
          3. Web sockets跨域:是HTML5一种新的协议。它实现了浏览器与服务器全双工通信,同时允许跨域通讯,在js中创建WebSockets后,会有一个HTTP请求发送到浏览器以发起连接。在取得服务器响应后,建立的连接会使用HTTP升级从HTTP协议交换为WebSocket协议,所以只能支持此协议的专门服务器才能正常工作
          4. proxy代理:请求不会直接发给目标主机,而是先发给代理机再向目标主机发送,接收目标机数据后再由代理服务器返还给用户
  ##### 什么是CORS
     + CORS是一个W3C标准,全称是"跨域资源共享"(Cross-Origin Resource Sharing)。它允许浏览器向跨源服务器,发出XMLHttpRequest请求,从而克服了AJAX只能同源使用的限制。


## Vue
  ##### Vue的核心是什么
   + 数据驱动和组件化
        - 数据驱动:视图的内容随着数据的改变而改变
        - 组件化:把页面封装成为若干个组件进行拼装,让页面的复用性达到最高
  ##### 请简述你对vue的理解
     + 一套渐进式的自底向上增量开发的前端MVVM框架
          - 渐进式:可以只使用部分功能,也可以整个用vue开发,不做职责之外的事
          - 自底向上增量开发:先编写出基础页面,再逐步扩大规模,补充和升级某些功能和效果
          - M代表模型层也是数据层V代表视图层,VM是用来沟通的桥梁,负责监听模型层或者视图层的修改
  ##### mvvm框架是什么?它和其它框架(jquery)的区别是什么?哪些场景适合?
     + M代表数据层V代表视图层,VM是用来沟通的桥梁,负责监听模型层或者视图层的修改
     + 区别：vue数据驱动,通过数据来显示视图层而不是节点操作。 
     + 场景：数据操作比较多的场景,更加便捷。
  ##### MVVM与MVC的区别
     + MVC中Model和View还有Controller是完全独立的,由Controller作为中间人来负责二者的交互
     + MVVM中VM是V与M沟通的桥梁,开发者只需关注业务逻辑,不需要手动操作DOM,不需要关注数据状态的同步问题,复杂的数据状态维护完全由MVVM来管理
  ##### 请简述vue的单向数据流
     + 组件之间一旦传值完毕,接收数据的这个组件无论怎么修改,传递数据的那个组件的数据都不会改变;我们经常会采用父子组件通过正向/逆向传值来对数据进行传递。以上的这些模式非常脆弱,通常会导致无法维护的代码。
  ##### Vue常用的修饰符有哪些
     + 事件修饰符:
          - prevent(阻止事件的默认行为)
          - stop(阻止事件冒泡)
          - capture(让事件传递成为捕获)
          - self(只会触发自己范围内的事件,不包含子元素)
          - once(只会触发一次)
     + 按键修饰符(按下某个键):up down ctrl enter space
  ##### 什么是计算属性
     + 它是一种属性,有“计算”这个特殊性质。每次取得它的值得时候,它并不像普通属性那样直接返回结果,而是经过一系列的计算之后再返回结果。
  ##### v-text与{{}}区别
     + {{}}是模板插值,v-text是指令,{{}}如果数据过多可能会把大括号显示出来(屏幕闪动)需要使用v-cloak指令
  ##### v-on可以绑定多个方法吗
     + 可以 使用v-on"{click:dbclick,mouseomve:mouseclick}"
  ##### Vue循环的key作用
     + key的作用主要是为了高效的更新虚拟DOM,是遍历数组或元素中的唯一标识,增加或删减元素时,通过key判断是否是之前的元素,如果是则直接会复用该标签,不会将所有标签重新删除和创建,只会重新渲染数据,然后再创建新的元素直到数据渲染完为止
  ##### v-for与v-if优先级
     + v-for比v-if具有更高的优先级,但是不能把v-if与v-for用在同一个元素上,因为如果两者同时出现的话,那每次循环都会执行v-if,会很浪费性能
  ##### Vue单页面的优缺点
     + 优点:用户体验好,速度快,内容的改变不需要再加载整个页面,前后端分离,组件化便于修改和调整
     + 缺点:初次加载耗时高,页面复杂度提高,导航需要自行实现前进后退,不利于seo搜索引擎优化
  ##### Vue的生命周期请简述
     + beforeCreate:创建vue实例前
     + created:创建实例完成后,开始监听data对象数据变化情况,初始化VUE内部事件
     + beforeMount:编译模板,把data里面的数据和模板生成html
     + mounted:用编译好的html替换掉el属性所指向的DOM对象
     + beforeUpate:数据更新前
     + updated:数据更新后
     + beforedestroy:销毁实例前
     + destroyed:销毁所有事件监听器和子实例,完成销毁vue实例
  ##### Vue生命周期一共几个阶段:
     + 共8个阶段如上题;
  ##### Vue生命周期的作用:
     + 给使用者在不同阶段添加自己的代码的机会
  ##### DOM渲染在那个生命周期阶段内完成
     + mounted
  ##### Vue中路由跳转方式(声明式/编程式)
     + 声明式: <router-link>
     + 编程式: this.$router.push("/路由名")
  ##### 跨域的解决方式
      1. 在vue.config.js中进行proxy配置
      2. 在后台用cors跨域
  ##### Vue路由的实现
     + 通过hash和history两种模式来实现,它们分别基于location和history对象
  ##### Vue路由模式hash和history,简单讲一下
     + hash模式:基于location对象,地址栏会出现#(hash)符,只有#前的内容会被包含在请求中,前端路由修改的是#后的信息,所以刷新是不会向服务端请求添加#后面的参数,所以刷新不会出问题
     + history模式:基于History对象,前端的URL必须和实际向后端发起请求的URL一致,不然会出现404错误(比如刷新的时候),需要后端配置一下apache或是nginx的url重定向,重定向到我的首页路由上。
  ##### Vue路由懒加载(按需加载路由)
     + 因为vue的路由技术是为了完成单页面应用的,在第一次页面初始化的时候路由会把所有的路由页面都渲染好可能会造成用户的页面白屏相应慢: component:()=>import('路由组件路径')
  ##### Route与router区别
     + route对象表示当前的路由信息,是一个局部对象,包含了当前URL解析得到的信息。包含当前的路径,参数,query对象等。
     + router对象是全局路由的实例,他包含所有的路由拥有的对应的对象,属性和方法.比如history对象
  ##### Vue路由传参的两种方式,prams和query方式与区别
     + params:需要在路由规则中绑定接收的参数名,通过路由规则的name值来绑定发送的参数,传递的参数不会暴露在地址栏相对安全
     + query:不需要在路由规则中绑定参数名,通过路由规则的path路径来绑定发送的参数,传递的参数会暴露在地址栏不安全
  ##### Vue数据绑定的几种方式
     + 普通文本绑定v-text
     + 解释HTML标签的绑定v-html
     + 数据特殊属性v-bind
     + 双向绑定 v-model
  ##### Vue注册一个全局组件
      1. 在main.js通过import引入封装的组件
      2. 使用vue.component("设置使用时的组件名",引入的组件)
  ##### Vue的路由钩子函数/路由守卫有哪些
     + 全局钩子:
          - 路由前置：router.beforeEach((to,from,next)=>{})
          - 路由后置：router.afterEach((to,from,next)=>{})
     + 路由独享钩子:在路由规则中写入 只有前置beforeEnter:(to,from,next)=>{}
     + 组件内钩子:beforeRouteEnter(to,from,next){} beforeRouteLeave(to,from,next){}
  ##### Vue中如何进行动态路由设置?有哪些方式?怎么获取传递过来的数据?
     + 前端列表页点击之后通过params或query的声明式(<router-link to=""></router-link>)或编程式发送参数(this.$router.push(name/路径,params/query:{}))如果使用params传参需要在路由规则中配置接收参数的参数名
      最后详情页再通过this.$route.params/query.接收的参数名后 发送不同参数的请求接收不同的数据渲染页面
  ##### Vue中指令有哪些
     + v-text 将普通数据显示在页面上
     + v-html 输出html内容
     + v-show 控制元素的显示和隐藏
     + v-if 判断是否加载内容 v-else-if:满足一项先执行它 v-else:不然就执行它
     + v-model 用于表单的双向绑定
     + v-for 遍历数据
     + v-bind 绑定特殊属性
     + v-once 只渲染一次 数据改变不会影响该值的变化
     + v-on 绑定事件
  ##### Vue-cli中如何自定义指令
     + 自定义指令有5个钩子;
          - bind代表绑定指令到元素上,只执行一次
          - inserted代表绑定指令的元素插入到页面时就调用(常用)
          - componentUpdated：指令所在组件的节点及其子节点全部更新完成后调用
          - update:所有组件节点更新时调用
          - unbind:解除指令和元素的绑定,只执行一次
     + 如果时局部指令使用directives:{自定义指令的名字：{钩子函数(el){操作逻辑}}}写在data同级
     + 如果时全局使用Vue.directive('自定义的名字',{钩子函数(el){操作逻辑}})
  ##### Watch请简述
     + 监听data模型数据 当模型数据改变的时候就会触发;watch初始化的时候不会运行,只有数据被改变之后才会运行
  ##### 计算属性与watch区别
     + 计算属性是依赖于缓存的,当依赖的值发生改变才会触发。而watch是当watch监听的值发生改变就会被调用相应方法
      计算属性适合在数据展示时做一些处理
  ##### Vue如何定义一个过滤器
     + 全局过滤器使用Vue.filter('过滤器名字',function(val){return 返回的内容})在app.vue中
     + 局部过滤器使用filters('',function(val){})在data同级
     + 通过{{要过滤的数据|过滤器名}}来调用
  ##### 对vue中keep-alive的理解
     + 切换过程中将状态保留在内存中,防止重复渲染DOM,减少加载时间及性能消耗,提高用户体验性
     + 用<keep-alive>元素将其路由出口包裹起来;它有两个钩子函数 activated(激活后)和deactivated(停用后)
  ##### 如何让组件中的css在当前组件生效
     + 在组件中的style前面加上scoped
  ##### Vue组件中的data为什么是函数
     + data数据会以函数返回值形式定义,这样每复用一次组件,就会返回一份新的data,相当于给每个组件实例创建一个私有的数据空间,让各个组件实例维护各自的数据。如果是对象形式,就使得所有组件实例共用了一份data,就会造成数据的公用的结果。
  ##### Vue双数据绑定过程中,这边儿数据改变了怎么通知另一边改变
     + 当我们读取或者设置对象属性的时候,都会触发Object.defineProperty()函数的get和set方法,在这两个方法中添加操作从而劫持数据,当属性发生变化的时候,会执行一系列的渲染视图操作
  ##### Vue双向绑定的原理
     + 数据劫持:当我们读取或者设置对象属性的时候,都会触发Object.defineProperty()函数的get和set方法,在这两个方法中添加操作从而劫持数据,当属性发生变化的时候,会执行一系列的渲染视图操作
     + 发布者订阅模式:对象间一种一对多的依赖关系,当一个对象的状态发生改变时,所有依赖于它的对象都将得到通知。
  ##### Vue中组件怎么传值
     + 正向传值：
          1. 在子组件用props新建一个数据名并使用,来接收父组件传过来的值
          2. 在父组件中使用子组件,并以特殊属性的方式,把需要传递的数据通过props数据名传递给子组件
     + 逆向传值：可以使用自定义事件传值 或者ref获取节点传值或vuex传值
          1. 需通过事件函数来触发一个自定义事件: this.$emit("自定义事件名",传递的数据)
          2. 在使用子组件的父组件中,使用事件绑定指令绑定抛出的自定义事件名并让其等于一个函数,函数的形参就是传递的数据
  ##### Vue兄弟组件传值
     + 可以使用传统的子传父 父再传子的办法或vuex或者eventBus
          1. 在父组件中使用两个子组件让其成为兄弟
          2. 在兄弟a引入事件总线,并通过事件函数来触发一个自定义事件 eventBus.$emit("自定义事件名","要传递的数据")
          3. 在兄弟b引入事件总线,在钩子函数中使用eventBus.$on("自定义事件名",(val)=>{})接收传递的数据,回调函数中的形参就是传递的数据
  ##### 如果一个组件在多个项目中使用怎么办
     + 可以在package.json中来使用git url获取特定的公用代码
  ##### 槽口请简述
     + 父组件中子组件中数量不同内容也不相同的时候使用的技术;
      子组件中插入<slot></slot> 则可在父组件的子组件开标签内部写入标签和内容
  ##### Vue首屏加载慢的原因,怎么解决的,白屏时间怎么检测,怎么解决白屏问题
     + 使用路由懒加载(还有如将第三方依赖打包进入CDN服务器,按需引入ui,压缩代码,精灵图等等)
  ##### Vuex是什么?怎么使用?在那种场景下使用?
     + 状态(数据)管理工具,就是一个数据的仓库,将数据全部存入仓库,组件就可以自由使用数据
     + 将数据保存在state中,通过(this.$store.state.数据名)来调用数据,修改数据在Mutations中,在Actions调用mutations中的方法异步操作数据,在需要使用的组件通过this.$store.dispatch()来调用和传递实参
     + 用于开发中大型web单页应用中对应用的状态进行管理或解决组件间数据通信麻烦的问题
  ##### Vuex流程
     + 如上题第二条
  ##### vuex的优势
      1. 能够集中管理和共享数据,易于开发和维护
      2. 能够高效地实现组件之间的数据传递,提高开发效率
      3. 数据都是响应式的,能够实时保持数据与页面的同步
  ##### Vuex怎么请求异步数据
     + 在action使用封装的axios发送请求,接收到数据后使用commit调用mutation给state数据赋值
  ##### Vuex中action如何提交给mutation的
     + 在组件内通过this.$store.dispatch()调用action的方法并传递实参,在action中使用commit调用mutation方法,通过mutation修改state中的数据
  ##### vuex有哪几种状态和属性
     + 数据保存的地方:State
     + 对数据过滤的:Getter
     + 修改数据的:Mutation
     + 处理异步操作的:Action
     + 让数据模块化的:Module
  ##### vuex的State特性是?
     + state就是存放数据的仓库,特性就是若store中的state数据发生改变,依赖这个数据的组件也会相应更新(当mutation修改了state的数据的时候,他会动态的去修改所有的调用这个变量的组件里的值)
  ##### vuex的Getter特性是?
     + getter用来获取数据,类似于计算属性
  ##### vuex的Mutation特性是?
     + 同步执行,修改state数据的唯一途径,直接变更state数据。
  ##### vuex的actions特性是?
     + 用于异步请求数据,不能直接操作state,需要通过提交给mutation来修改state数据
  ##### $set:解决data数据改变和视图不改变(vue3.0以上已解决,面试常问)
  ##### vue中的拖拽+js原生拖拽说思路？
      1. 需要三个事件 鼠标 按下\移动\抬起
      2. 当按下时获取鼠标点击元素的内部鼠标的位置
      移动时获取鼠标在页面的位置并减去元素内部鼠标的位置,同时判断边界条件,当减去的位置的x轴小于零代表出屏幕的左边,当减去的位置的y轴小于零代表出屏幕的右边，当大于时则需要算出页面的宽度高度(window.innnerXXX)减去元素的宽高度,当大于这个值就等于这个值,
      当抬起时把移动的事件归位为null
  ##### vue中assets和public里的静态区别?
      - public放不会变动的文件（相当于vue-cli2.x中的static）public/ 目录下的文件并不会被Webpack处理：它们会直接被复制到最终的打包目录（默认是dist/static）下。必须使用绝对路径引用这些文件，这个取决于你vue.config.js中publicPath的配置，默认的是/。
      - assets放可能会变动的文件assets目录中的文件会被webpack处理解析为模块依赖，只支持相对路径形式。简单来说就是就是public放别人家js文件（也就是不会变动），assets放自己写的js文件（需要改动的文件）
  ##### 怎么提升页面性能?性能优化有哪些?
     + 不用将所有的数据都在data中注册,不需要响应式的数据可以定义在实例上
     + v-for循环生产的代码,要操作dom可以用事件委托
     + 使用keep-alive缓存组件,防止切换路由时来回创建组件浪费性能
     + 如果没有安全性考虑使用v-show代替v-if指令
     + 使用路由懒加载

## React
  ##### 请简述你对react的理解
     + 是Facebook出的一个为了构建数据不断变化大型应用的Js库,它比较高效和灵活,是单向响应数据流,它有组件化的特点,采用了JSX语法,它用于开发复杂和交互式的 Web 和移动 UI。
  ##### React有什么特点
     + 它采用声明式设计,使用虚拟DOM更加高效的利用资源,更加灵活可以与已知的库或框架很好的配合,组件化让代码更加容易得到复用,遵循单向数据流
  ##### React有哪些限制?
      1. React 只是一个库，而不是一个完整的框架
      2. 它的库非常庞大，需要时间来理解
      3. 新手程序员可能很难理解
      4. 编码变得复杂，因为它使用内联模板和 JSX
  ##### 什么是JSX？
     + JavaScript和XML(严格的W3C规范)结合的一种格式 ,遇到 { 就当JavaScript解析,遇到 < 就当HTML解析
  ##### Vue与react区别
      1. 模板编写方式不同,vue采用原生HTML的编写方式,而React则采用JSX语法来编写
      2. 状态管理不同,在React中需要有一个state对象且使用setState方法去更新状态,在vue中通过data属性进行管理,且可以直接进行修改,且数据改动视图就会更新
  ##### 请简述虚拟DOM与Diff算法
     + 虚拟DOM：相当于真实DOM改变前的一个缓存,
      通过用js对象结构表示DOM树的结构,再用其构建一个真正的DOM树,插入文档,当状态改变后重新生成一个js对象树,然后通过Diff算法对比新旧虚拟DOM的差异,将差异的部分更新到真实的DOM中
     + Diff算法：是一种对新旧虚拟DOM树进行比较,得出两者差异,确定最小DOM更新操作的算法
  ##### 解释 React 中 render() 的目的。
     + 每个React组件强制要求必须有一个 render(),它返回一个React元素,同时生成一段虚拟DOM来与旧DOM进行比对,如果渲染多个html元素它需要包裹在一个封闭标签中
  ##### react diff 原理
     + 是一种对新旧虚拟DOM树进行比较,得出两者差异,确定最小DOM更新操作的算法
     + React用 三大策略 将O(n^3)复杂度 转化为 O(n)复杂度
          - tree diff : Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。
          - component diff : 拥有相同类的两个组件 生成相似的树形结构,拥有不同类的两个组件 生成不同的树形结构。
          - element diff : 对于同一层级的一组子节点，通过唯一id区分。
  ##### 你对组件的理解
     + 组件指的是实现页面局部功能的代码合集,React有两种组件,类组件和函数组件,类组件可以获取本身的状态数据也就是state而函数组件没有state状态,主要通过Hook来进行状态管理,且函数组件不会实例化,整体渲染性能可以得到提升
  ##### React 中构建组件的方式
     + 函数组件/无状态组件:通过创建一个大写函数名的函数并返回一段JSX
     + 类组件/有状态组件:使用es6的类继承来创建
  ##### State与props区别?/(组件的)状态(state)和属性(props)之间有何不同?
     + props是一个从外部传进组件的参数,主要作用是从父组件向子组件传递数据,它具有可读性和不变性
     + state是内部数据状态,且可以通过this.setState()方法来改变状态
  ##### 组件之间的数据传递
     + 组件传值
          - 正向传值
          - 逆向传值
          - 使用pubsub同胞传值
     + 跨组件传值
          - 上下文对象context
          - redux
  ##### 调用 setState 之后发生了什么?
     + React会将传入的参数对象与组件当前的状态合并,然后触发调和过程,调和过程就是以高效的方式根据新的状态构建虚拟DOM树,再通过diff算法对比新旧虚拟DOM树差异,从而达到最小化重新渲染
  ##### React中的事件是什么？
     + 在React中,事件是对鼠标悬停、鼠标单击、按键等特定操作的触发反应。处理这些事件类似于处理 DOM 元素中的事件。但是有一些语法差异,如：使用驼峰命名,事件作为函数而不是字符串传递
  ##### 你对 React 的 refs 有什么了解？
     + 用来标识组件内部的元素
  ##### react 生命周期函数
     + 挂载阶段
          - constructor(){}     完成React数据的初始化
          - componentWillMount(){}   组件已经经历了constructor()初始化数据,但还未渲染DOM时。
          - componentDidMount(){}    组件第一次渲染完成,此时dom节点已经生成
     + 更新阶段
          - componentWillReceiveProps(nextProps){}   在组件接收到一个新的prop时被调用。
          - shouldComponentUpdate(nextProps最新的props,nextState最新的state){}  判定组件是否要更新html,主要用于性能优化
          - componentWillUpdate(nextProps, nextState){}  组件即将更新html时候  
          - componentDidUpdate(prevProps, prevState){}  在组件完成更新后立即调用。
          - render() 会插入jsx生成的dom结构,每一次组件更新时比对新旧DOM树重新渲染
     + 卸载阶段
          - componentWillUnmount(){}    在此处完成组件的卸载和数据的销毁。
  ##### 为什么虚拟 dom 会提高性能?(必考)
     + 因为虚拟DOM相当于在 js 和真实 dom 中间加了一个缓存，利用diff算法避免了没有必要的dom操作,从而提高性能。
  ##### shouldComponentUpdate 是做什么的
     + 判定组件是否要更新html,主要用于性能优化
  ##### 何为受控组件和非受控组件
     + 表单的value值由state控制,value通过change事件每当更新时就触发setState进行修改
     + 它的值不受组件自身的state或props控制
  ##### 调用super(props)的目的是什么
      1. 用来继承父组件方法和属性
      2. 在super()被调用之前,子类不能使用this,用于初始化this
  ##### 什么是高阶组件（HOC）？
     + 把组件中可以复用的代码与逻辑内容提取出来 封装成一个高阶组件用来提高复用性
      本质: 参数是一个组件同时返回值也是一个组件
  ##### 你能用HOC做什么？
     + HOC可用于许多任务，例如：
          - 代码重用，逻辑和引导抽象
          - 渲染劫持
          - 状态抽象和控制
          - Props 控制
  ##### React 中 key 的重要性是什么？
     + key 用于识别唯一的虚拟DOM元素及其驱动UI的相应数据。当状态发送改变的时候,React会先根据他们的key重新排序元素而不是整体重渲染。
  ##### MVC框架的主要问题是什么？
      1. 对 DOM 操作的代价非常高
      2. 程序运行缓慢且效率低下
      3. 内存浪费严重
      4. 由于循环依赖性，组件模型需要围绕 models 和 views 进行创建
  ##### 什么是Redux？
     + Redux是为javascript应用程序提供一个状态管理工具(和vuex概念一致)
  ##### Redux遵循的三个原则是什么？
      1. 单一数据源:整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中
      2. State 是只读的:唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象
      3. 使用纯函数来执行修改:为了描述 action 如何改变 state tree ，你需要编写 reducers(一些纯函数，它接收先前的 state 和 action，)
  ##### Redux的各种模块作用:
     + Store：管理着整个应用的状态，可以通过getState()来重新获得最新的状态(state)。
     + Action：是唯一可以改变状态(state)的方式，服务器的各种推送、用户自己做的一些操作，最终都会转换成一个个的Action，而且这些Action就是修改的动作，可以通过dispatch()方法来进行调用
     + Reducer：Reducer 是一个纯函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。（纯函数就是只要传入相同的参数，每次都应返回相同的结果）。
  ##### 什么是React 路由？
     + 根据不同的url 来切换对应的组件实现spa（单页面应用）应用：整个项目只有一个完整页面页面切换不会刷新页面（不会感觉页面的闪烁 更加贴近原生应用的体验）
  #####  为什么React Router 中使用 switch 关键字 ？
     + 代表了唯一渲染,渲染到指定匹配的路由之后就不会向下渲染(保证路由只渲染一个路径)



## 微信小程序
  ##### 小程序的页面构成(4个文件)
     + .json (配置当前页面标题和引入组件等)
     + .wxml (页面结构)
     + .wxss (页面样式表)
     + .js (页面的逻辑，请求和数据处理等)
  ##### 小程序的生命周期
      1. 组件生命周期
         + onLaunch: 初始化小程序时触发，全局只触发一次
         + onShow: 小程序初始化完成或用户从后台切换到前台显示时触发
         + onHide: 用户从前台切换到后台隐藏时触发
         + onError: 小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
      2. 页面生命周期
         + onLoad: 首次进入页面加载时触发，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
         + onShow: 加载完成后、后台切到前台或重新进入页面时触发
         + onReady: 页面首次渲染完成时触发
         + onHide: 从前台切到后台或进入其他页面触发
         + onUnload: 页面卸载时触发

         + onPullDownRefresh: 监听用户下拉动作
         + onReachBottom: 页面上拉触底事件的处理函数
         + onShareAppMessage: 用户点击右上角分享
  ##### 小程序如何请求数据

  ##### 如何提高小程序的首屏加载时间

  ##### 请简述你经常使用的小程序的组件

  ##### Wxss与css的区别请简述

  ##### 小程序如何实现响应式

  ##### 怎么优化小程序

  ##### 小程序如何显示用户头像与用户名

  ##### 请谈谈小程序的双向绑定和vue的异同?

  ##### 小程序中传参是怎么传的

  ##### 说一下微信小程序的适配问题

  ##### 小程序页面间有哪些传递数据的方法?

  ##### 你是怎么封装微信小程序的数据请求的

  ##### 说一下微信小程序的适配问题

  ##### 小程序跳转页面的方式

  ##### 微信小程序如何跳转到其他小程序

  ##### 小程序加载过慢的解决方式





## TypeScript
  ##### Typescript是什么 请简述?
     + javascript的强类型版本超集
  ##### Typescript 与javascript 的优势?
     + Typescript优势
          1. 能帮助开发人员检测出错误并修改
          2. TypeScript工具使重构更变的容易、快捷
          3. 类型安全能在编码期间检测错误,可以更好的协作,对于大型项目更友好
          4. 便于开发人员做注释
     + javascript优势
          1. 不需要编译,直接由浏览器执行
          2. 社区成熟,可以很方便地找到大量成熟的开发项目和可用资源
          3. 比较灵活

## Webpack
  ##### Webpack与gulp区别
     + Webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack在很多场景下可以替代Gulp/Grunt类的工具。
  ##### 请简述webpack中的loaders与plugin的区别
     + loader：模块转换器(翻译器)，如 less --> css, 如识别 js 结尾的，css 结尾的，图片格式结尾的，通过 loader 转换成相应的文件格式
     + plugin：扩展插件，如 HtmlWebpackPlugin
  ##### 说一下webpack的打包原理
     + 把所有依赖打包成一个bundle.js文件，通过代码分割成单元片段并按需加载。
  ##### 说一下对websocket的理解
     + WebSocket是html5出的一个持久化的协议,它是HTTP协议上的一种补充,因为HTTP协议通信只能由客户端发起,如果要获取一些实时性较高的信息,只能通过“轮询”一类的方式,但是要不停连接所以轮询的效率低，非常浪费资源。所以通过websocket协议可以让服务器主动向客户端推送消息解决了这种问题,做到双向平等对话
## NodeJs
  ##### Node使用来做什么的
     + 是一个运行在GoogleV8引擎的开发平台,主要用于编写像Web服务器一样的网络应用

## Git
  ##### Git如何使用/常用指令有哪些
   + 初始化本地仓库：git init
   + 关联远程仓库：git remote add origin “HTTPS地址”
   + 提交前git pull一下更新别人提交的代码，避免冲突。

   + git add -A 提交到缓存区
   + git commit -m 注释
## 其他
  ##### 预加载和懒加载的区别,预加载在什么时间加载合适
     + 预加载是在页面加载完成前,提前将所需资源下载,之后使用时从缓存中调用,会增加服务器的压力
     + 懒加载是延迟加载,等满足特定条件的时候再加载对应的资源,会缓解服务器压力
  ##### 请列出三种减少页面加载时间的方式
    1. 减少http请求(合并文件、合并图片)
    2. 选择更小的图片格式,优化图片文件,减小其尺寸
    3. 压缩Js、CSS代码
    4. 标明高度和宽度(如果浏览器没有找到这两个参数,它需要一边下载图片一边计算大小,如果图片很多,浏览器需要不断地调整页面。这不但影响速度,也影响浏览体验.当浏览器知道了高度和宽度参数后,即使图片暂时无法显示,页面上也会腾出图片的空位,然后继续加载后面的内容.从而加载时间快了,浏览体验也更好了.)
    5. 网址后面加上“/”:对服务器而言,不加斜杠服务器会多一次判断的过程,加斜杠就会直接返回网站设置的存放在网站根目录下的默认页面
  ##### 如何对网站的文件和资源进行优化?
    1. 选中更小的图片格式或使用精灵图,优化图片文件,减小其尺寸
    2. 压缩Js、CSS代码
    3. 使用缓存,添加Expire/Cache-Control头。
    4. 避免在css中使用表达式
  ##### Ajax,fetch,axios的区别
   + ajax是最初出现的发送临时请求的技术,属于原生js标准,核心是使用XMLHttpRequest对象,使用并存并有先后顺序的话,容易产生地狱。
   + fetch号称可以代替ajax的技术,是基于es6中的Promise对象设计的,参数和jQuery中的ajax类似,它并不是对ajax的进一步封装,它属于原生js尺寸。没有使用XMLHttpRequest对象。
   + axios不是原生js,使用时需要进行进行安装,客户端和服务器端都可以使用,可以在请求和相应阶段进行拦截，基于promise对象。
  ##### 网络中使用最多的图片格式有哪些:
     + 主要有JPEG、PNG、GIF、ICO格式;
     + JPEG采取有损压缩法,可以达到最大压缩比,身材小容貌好(将不易被人眼察觉的图像颜色删除)
     + PNG只支持无损压缩,体积比JPEG大,支持透明背景图像
     + GIF分为静态和动态的,支持透明背景图像(原理是将多副图像保存在一个图像文件)
     + ICO:属于图标文件,主要用于网站标题前面的标识图标
  ##### Css预处理sass less是什么?为什么使用他们
     + Sass和LESS都是是CSS预处理器,是一种特殊的语法,最终会编译成CSS,因为使用它们结构清晰,便于扩展,可以轻松实现多重继承,完全兼容CSS代码,可以方便地应用到老项目中
  ##### Jquery选择器有哪些(https://blog.csdn.net/meng_xiaohua/article/details/105097362)
      1. 基本选择器直接在$("")内写#id名,.class名,标签名等
      2. 层次选择器通过在$("节点1 (关系符如空格,+,~,>等) 节点2")的形式
      3. 过滤选择器:过滤规则与CSS中的伪类选择器语法相同,每个选择器以:开头 $("tr:even")[从0开始选择所有tr后的偶数元素]
      4. 表单选择器:通过:表单的特殊属性来查找 $(":password")
  ##### Jquery插入节点的方法
      1. append()、appendTo() : 在父级内的末尾插入节点;把节点添加到父级末尾
      2. prepend()、prependTo() : 在父级内的最前面插入节点;把节点添加到父级内最前面
      3. before()、insertBefore() : 在指定节点的前面添加节点;把节点插入到指定节点的前面
      4. after()、insertAfter() : 在指定节点的后面添加节点;把节点插入到指定节点的后面
  ##### 怎么转换less为css
      1. 全局安装less : npm install -g less
      2. cd到less文件夹 : lessc XXX.less XXX.css
  ##### Elementui中的常用组件有哪些?请简述你经常使用的 并且他们的属性有哪些?
     + 表单组件：表单校验(为空)----el-form使用rules,el-form-item使用prop 表单为空,不执行提交
     + Message 消息提示框
  ##### Vantui请简述下
     + 是有赞团队维护的一个适用于Vue框架的移动端UI组件库
  ##### Bootstrap的原理
     + 通过定义容器大小,平分12份(也有平分成24份或32份,但12份是最常见的),再调整内外边距,最后结合媒体查询,就制作出了强大的响应式网格系统。
  ##### echarts使用最多的是什么
     + 它是一个Js的图标库,我平时使用多的有折线图,柱状图,饼图,雷达图等等
  ##### 后台传递过来的数据格式有哪些
      1. json：一段用数组或对象表示得键值对
      2. arraybuffer: 通用的、固定长度的原始二进制数据缓冲区,它是一个字节数组
      3. blob : 一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取
      4. document : 如xml一类的文件格式
      5. text : 文本格式
      6. stream : 数据流
  