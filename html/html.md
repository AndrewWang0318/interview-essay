# HTML
### 概述
- 盒模型
   - 盒模型也叫框模型,HTML中每个元素都可以看作盒模型,具备:内容区(content)、内填充(padding)、边框(border)、外边距(margin)四个部分
- 怪异模式和标准模式
   - IE盒模型(border-box)和W3C标准盒模型(content-box),不同点IE定义的盒模型宽高包含边框和内填充
- BFC规范
   - Block formatting context(块级格式化上下文):就是页面上的一个隔离的独立容器,容器里面的子元素不会影响到外面的元素;简言之,他就是一些规则集合的名称。(页面中的根元素 html 就是一个典型的遵循BFC的元素)
- BFC规范布局规则
   - 内部的Box会在垂直方向,一个接一个地放置。
   - Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠,上下排列的盒子的上下margin值不是累加显示。(解决margin传递问题)
   - 每个元素的margin box的左边, 与包含块border box的左边相接触
   - BFC的区域不会与float box重叠。(两栏布局)
   - BFC就是页面上的一个隔离的独立容器,容器里面的子元素不会影响到外面的元素。反之也如此。
   - 计算BFC的高度时,浮动元素也参与计算。(解决高度塌陷)

### 元素
   - Doctype
      - 标签: 单闭合标签，告知浏览器的解析器使用哪种HTML规范或XHTML规范解析页面
   - video
      - 标签: 双标签,用于在文档中嵌入音频内容
      - 属性: src;controls;muted;loop;autoplay
      - 格式: 支持的音频格式有MP4,WebM,Ogg
   - audio
      - 标签: 双标签,用于在文档中嵌入媒体播放器
      - 属性: src;controls;muted;loop;autoplay
      - 格式: 支持的音频格式有MP3,Wav,Ogg
   - source
      - 标签: 双标签,为picture,audio或者video元素指定多个媒体资源
      - 属性: src;type
   - ###### 语义化标签
      - header 头部
      - nav 导航
      - section 板块
      - aside 侧边栏
      - main 主区域
      - footer 底部
      - article 文章
      - mark 标记
      - time 时间
      - figure 代表一段独立的内容
      - ficaption 用于描述其父节点figure元素里的其他数据
### 属性
- #### 通用属性
   - 
- #### 私有属性
   - 
### 指南

---
  ### Css选择器有哪些,那些属性可以继承,优先级如何计算?Css3新增的伪类有哪些 
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
  ### 网页中有大量图片加载很慢 你有什么办法进行优化?
     + 图片懒加载,滚动到相应位置才加载图片
     + 图片预加载,如果为幻灯片、相册等,将当前展示图片的前一张和后一张优先下载。
     + 使用CSSsprite,SVGsprite,Iconfont,Base64等技术,如果图片为css图片的话。
     + 如果图片过大,可以使用特殊编码的图片,加载时会先加载一张压缩的特别厉害的缩略图,以提高用户体验。
  ### 行内元素/块级元素有哪些?
   + 行内元素有：span  a b strong i em br   
   + 块级元素有：div p ul ol li  dl dt dd h1-h6 table
   + 行内块：img input textarea select button
  ### Margin和padding在什么场合下使用
   + margin是用来隔开元素与元素的间距;margin用于布局分开元素使元素与元素互不相干；
   + padding是用来隔开元素与内容的间隔。padding用于元素与内容之间的间隔,让内容与(包裹)元素之间有一段“填充距离”。
  ### 怎么实现html标签的禁用
   + 使用{pointer-events: none;}样式
   + 表单使用disabled属性
  ### Flex布局原理
     + Flex是用于排列元素的一种布局模式,通过给父盒子添加flex属性,来控制子盒子的位置和排列方式。Flex布局中的元素是有伸展和收缩自身的能力的,目标就是为了撑满父元素,元素的大小是高度依赖父容器的大小的
  ### Flex布局属性有那些请简述?
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
  ### Px与Rem的区别
     + Px是相对于屏幕分辨率而言；
     + Rem是相对于根元素字体大小的单位
  ### Rem缺点
     + 目前对ie兼容性不好 对pc页面来讲使用次数不多；
     + 数据量大：所有的图片,盒子都需要我们去给一个准确的值；才能保证不同机型的适配
  ### 请简述媒体查询
   + 媒体查询可以让我们根据设备显示器的特性(如视口宽度、屏幕比例、设备方向：横向或纵向)为其设定不同的CSS样式,如果你需要设置设计响应式的页面就需要用到媒体查询
  ### 浏览器css私有属性
   + -moz- firefox浏览器私有属性
   + -ms- IE浏览器私有属性 
   + -o-  Opera浏览器私有属性
   + -webkit- chrome、safari私有属性
  ### 三栏布局方式(两边固定中间自适应)
   + 绝对定位布局：左右两栏采用绝对定位,分别固定于页面的左右两侧,中间的主体栏用左右margin值撑开距离。于是实现了三栏自适应布局。
   + 自身浮动布局：左右使用分别使用float:left和float:right,float使左右两个元素脱离文档流,中间元素正常在正常文档流中,使用margin指定左右外边距对其进行一个定位。
   + flex布局:用一个父盒子包括左中右三个盒子,父盒子使用flex中间的盒子用flex:1