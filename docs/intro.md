---
sidebar_position: 1
---
Welcome to the ParticleLib wiki!

这是 Zoyn 在没事的时候写一写粒子的相关类库 —— 2020年

# 前言
ParticleLib 是一个基于 BukkitAPI 编写的**粒子特效**程序库，只需要简单的几步即可生成出你想要的粒子轨迹

若需要兼容其他服务端, 可移步至 [TabooLib](https://github.com/TabooLib/taboolib) 的 [module-effect](https://github.com/TabooLib/taboolib/tree/master/module/module-effect) 两者都是 我(602723113/Zoyn/莫老) 所编写的内容, 但 TabooLib 更新会慢于 ParticleLib

# 开始使用
- [安装 与 API导入]()
- [创建你的第一个粒子特效：圆]()
- [如何做到持续的显示]()

# 粒子特效对象
在 ParticleLib 当中所有的特效都是通过 new 直接构造, 具体构造方法读者可以自行至源码处查阅, 注释已经写得比较清晰

所有的特效都是基于 [ParticleObject](https://github.com/602723113/ParticleLib/blob/master/src/main/java/top/zoyn/particlelib/pobject/ParticleObject.java)  这个**抽象类**进行的构造

因此 ParticleObject 是所有特效的基础, 且 ParticleObject 支持直接添加 Matrix 矩阵的方式直接对所要生成的粒子进行 变换(Transformation) 的操作