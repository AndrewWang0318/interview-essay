# HTML
## 概述
#### 盒模型
   盒模型也叫框模型,HTML中每个元素都可以看作盒模型,具备:内容区(content)、内填充(padding)、边框(border)、外边距(margin)四个部分
#### 怪异模式和标准模式
   IE盒模型(border-box)和W3C标准盒模型(content-box),不同点IE定义的盒模型宽高包含边框和内填充
#### BFC规范
   Block formatting context(块级格式化上下文):就是页面上的一个隔离的独立容器,容器里面的子元素不会影响到外面的元素;简言之,他就是一些规则集合的名称。(页面中的根元素 html 就是一个典型的遵循BFC的元素)
- BFC规范布局规则
   - 内部的Box会在垂直方向,一个接一个地放置。
   - Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠,上下排列的盒子的上下margin值不是累加显示。(解决margin传递问题)
   - 每个元素的margin box的左边, 与包含块border box的左边相接触
   - BFC的区域不会与float box重叠。(两栏布局)
   - BFC就是页面上的一个隔离的独立容器,容器里面的子元素不会影响到外面的元素。反之也如此。
   - 计算BFC的高度时,浮动元素也参与计算。(解决高度塌陷)

## 元素
#### 主内容元素
###### 元数据内容
   - base
   - link
   - meta
   
   - noscript
###### 流式内容

#### 作用元素
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
#### 语义化元素
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
## 属性
#### 通用属性
   - id
   - class
#### 私有属性
   - disabled
## 指南

---


  ### 行内元素/块级元素有哪些?
   + 行内元素有：span  a b strong i em br   
   + 块级元素有：div p ul ol li  dl dt dd h1-h6 table
   + 行内块：img input textarea select button