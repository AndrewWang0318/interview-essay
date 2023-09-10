# CSS
> css标签选择使用select表示
### 概述
#### 媒体查询
  媒体查询可以让我们根据设备显示器的特性(如视口宽度、屏幕比例、设备方向：横向或纵向)为其设定不同的CSS样式,如果你需要设置设计响应式的页面就需要用到媒体查询
###
### 
### 指南
  - 脱离BFC规范的方式:
    - float的值不是none。
    - position的值不是static或者relative。
    - display的值是inline-block、table-cell、flex、table-caption或者inline-flex
    - overflow的值不是visible
  - 清除浮动的方式:
    - 父元素设置高度 缺点：高度不能自适应原则
    - (触发BFC)父元素设置溢出隐藏 缺点：溢出在父元素框之外的部分会被隐藏
    - 给浮动元素的下方添加一个块级元素,用clear:both清浮动属性 缺点：代码中会出现很多空的标签,造成代码冗余
    - 通过伪元素选择器的方法添加元素
      ```css
        select::after{
          content:" ";
          clear:both;
          display:block;
        }
      ```
  - margin传递问题:
    - 父子级margin向上上传递解决办法
      - 使用padding代替margin;
      - 给父元素添加边框或者内边距;
      - 让其不属于同一个BFC规范(给父元素或者是该元素添加浮;给父元素添加overflow:hidden)
    - 兄弟级margin上下重叠解决办法:
      - (让其不属于同一个BFC规范)
  - 如何让chrome浏览器显示小于12px的文字
    - 利用css3的缩放属性：transform:scale()
---
# Css3新增的特性
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
# 定位的属性值有何区别
   + 相对定位 relative;参考物:自己本身;特点:移动之后依然占位,定位元素的层级要比普通元素的层级要高
   + 绝对定位 aboslute;参考物:有定位的第一个祖先元素 特点:脱离文档流,会遮挡后面元素的文字,margin:auto会失效,内联元素会变成块级元素,宽度自适应会失效
   + 固定定位 position:fixed;参考物 浏览器窗口 特点:不会跟随滚动条进行滚动,margin: auto失效,宽度自适应会失效,脱离文档流
   + 粘性定位 position:sticky;参考物 浏览器窗口 特点:未达到top值之前,普通元素,达到top值之后类似于固定定位,脱离文档流
   + 默认值static
# 子元素如何在父元素中居中/元素垂直居中/垂直与水平居中的方式
  + 如果子元素是行内元素,父元素text-align:center,子元素设置行高line-height：父元素的高
  + 弹性盒子flex布局中  justify-content: center; align-items: center;
  + 利用定位来实现居中  子元素相对于父元素绝对定位,并且margin值减去自己宽高的一半 。
  + 利用定位来实现居中  子元素相对于父元素绝对定位,left right top bottom 都为0 并且margin值设置为：auto 
  + 利用Css3的变形属性  子元素相对于父元素绝对定位,并且利用transform让其位移相反方向的一半: translate( -50%, -50%);
# Css选择器有哪些,那些属性可以继承,优先级如何计算?Css3新增的伪类有哪些 
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