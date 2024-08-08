# Arduino软件下载安装，驱动安装和库文件添加

1. Windows系统：

![](media/6cf6312dc7c7db27794b54d58a8bf80c.png)

## 1.1.下载安装Arduino软件：

（1）首先，进入arduino官方网站：[https://www.arduino.cc/](https://www.arduino.cc/)
，点击“SOFTWARE”进入下载页面，如下图所示：

![](media/e5f2b2b7d63ae674b2ddce5abc4eebf8.png)

![](media/e74472bf31c762e0c38db3cbae7640f2.png)

（2）然后，根据你的操作系统选择并下载相应的安装程序。如果你是Windows用户，请选择“Windows安装程序”下载正确的安装驱动程序。

![](media/6aae01e362ce3b059be463f5561d52ee.png)

选择点击Windows Win7 and newer下载Arduino 1.8.16版本的安装程序，需要手动安装。而当点击Windows ZIP file时，Arduino 1.8.16版本的zip文件将被直接下载，只需要解压缩它就可以完成安装。

![](media/a983a2f2eceb968afbff8ba0f0376240.png)

一般情况下，点击JUST DOWNLOAD就可以下载了，当然如果你愿意，你可以选择小小的赞助，以帮助伟大的Arduino开源事业。

（3）Arduino软件下载完成后，继续安装，当你收到操作系统的警告时，请允许驱动程序安装。首先点击I Agree, 然后选择好要安装的组件后再点击Next。

![](media/00e334d3c756a2495da6f0d1b2db680a.png)

![](media/de541d90a1cda992ad8e3f0cbaf95f94.png)

（4）选择安装目录(我们建议保持默认目录)，然后点击Install。

![](media/7da9aca1e8432c59372e7c7ab2574bd9.png)

（5）如果出现以下界面，则应选择Install。

![](media/7ed9e80a34185295e438910c641d8b1c.png)

该过程将提取并安装所有必需的文件，以正确执行Arduino软件(IDE)。

![](media/739c41701fbcab202f0e587f534bad30.png)

安装完成后，会在桌面上生成一个Arduino 软件快捷方式。

![](media/d28223c55a30f949760779720fe4ec24.png)

## 1.2.安装驱动：

（注意：如果电脑已经安装了CH340驱动程序，则不需要再安装驱动；如果没有，则需要进行以下操作）

安装Arduino IDE后，我们就开始安装驱动。将Nano主板用USB线连接在电脑上，如果是Windows10系统电脑，电脑会自动安装驱动。如果是其他系统电脑，如Windows7系统电脑，则需要手动安装驱动。

Nano主板的USB转串口芯片为CH340G，我们需要安装这芯片的驱动，驱动为usb_ch341_3.1.2009.06。第一次将Nano主板通过USB线连接电脑上时，右键点击计算机→属性→设备管理器，显示如下图：

![](media/5f3d941e99b4c73a935759db45b6ea86.png)

过一会儿后，Windows10系统一般会自动安装好USB-SERIAL CH340驱动的。但是，如果过一会儿后没有自动安装，则需要用手操作下，右键点击“USB2.0-Serial”，选择“更新驱动程序（P）”并点击。

![](media/ff4b2ac14c4031d5e3b3961e09616338.png)

跳转到以下页面，选择“浏览我的电脑以查找驱动程序（R）”并点击。

![](media/a1a464644f3fff58547405e3d1a9a575.png)

点击“浏览（R）...”选择“usb_ch341_3.1.2009.06 ”文件夹。

![](media/af05bfa4721ba709a648615092543fe5.png)

![](media/13c56c8a5ce57229638dc4305b58ac89.png)

几秒种后，驱动安装完成后，需要单击“关闭”。

![](media/72f72cb3bbc929fd8815b0587fb81d8c.png)

然后你可以右键单击“我的电脑”图标-\>单击“属性”-\>单击“设备管理器”-\>单击“端口”，你会看到设备如下图所示。

![](media/21158fb16c1f612757e6c59522ff5350.png)

如果你的电脑系统不是Windows10系统，而是Windows其他系统的话，需要手动操作选择驱动文件来安装驱动。（这里需要使用我们提供的驱动“usb_ch341_3.1.2009.06”）

![](media/af05bfa4721ba709a648615092543fe5.png)

其CH340驱动安装操作过程和上面是相同的。

## 1.3. Arduino IDE设置和工具栏介绍：

安装好了Nano主板的驱动后，下面需要了解Arduino IDE的使用，首先点击电脑桌面上的![](media/03c862147b3151f5635dca5aa1acdbf6.png)图标，打开Arduino IDE。

![](media/46fe35ba6492a15028464e65c2816d30.png)

为了避免将程序上载到主板上时出现任何错误，必须选择正确的Arduino板名称，该名称与连接到电脑的电路板相匹配。转到“工具”→“开发板”，然后选择你的板，如下图所示。（特别注意：本课程使用的主板是Nano板，在设置板型名称时选择Arduino Nano）

![](media/4bb003d93700408bd05f27ef12c7da7c.png)

Nano主板可以烧入新的和旧的Bootloader。新型号的板子已经更新了Nano板子的bootloader。从2018年1月开始卖得板子使用了新bootloader，而在这之前的板子使用的是旧的bootloader。新板子选择ATmega328P，要编辑旧板子就要选择ATmega328P(Old Bootloader). 如果不知道是哪种板子，可以试验，直到上载成功就可以了。

![](media/824fdc0729bb56138e4d89388b211b1b.png)

然后再选择正确的COM端口（安装驱动成功后可看到对应COM端口）。

注意：为了避免错误，COM端口应该与设备管理器上显示的端口保持一致。

![](media/21158fb16c1f612757e6c59522ff5350.png)

![](media/2b15138f808bced7930f451202ca9a7e.png)

我们的程序上传到Nano主板之前，我们必须演示Arduino IDE工具栏中出现的每个符号的功能。

![](media/c8512aa5121885e0ff4194e379fc882c.png)

A - 用于检查是否存在任何编译错误。

B - 用于将程序上传到Arduino板。

C - 用于创建新草图的快捷方式。

D - 用于直接打开示例草图之一。

E - 用于保存草图。

F - 用于从板接收串行数据并将串行数据发送到板的串行监视器。

## 1.4.启动你的第一个程序:

上面已经学习了怎么下载ArduinoIDE和怎么安装Nano主板的驱动，那下面就正式开始第一个程序。单击“文件”选择“示例”，选择第一个文件“01.Basics”里面的“Blink”程序。

![](media/620d6564298a9a5f79b57084ca42693b.png)

![](media/444cbd82a0abf2132772f35bb6ad0f94.png)

按照前面方法设置板型名称和COM端口，IDE右下角会显示对应的板型名称和COM端口。

![](media/7c7f8e184cf34044c829f548d41ff2f5.png)

点击![](media/ddd21c81338ae1f6b7f84de2a3caecf0.png)图标开始编译程序，检查错误，检查无误。

![](media/cd4e4528cef675961159731d73f041a0.png)

点击![](media/9c9158a5d49baa740ea2f0048f655017.png)图标开始上传程序，上传成功。

![](media/5a315fc9236eac80dcf154a86ee507e8.png)

程序上传成功，利用USB线上电，板载的LED灯亮一秒钟，灭一秒钟，恭喜你的第一个程序完成了！

2.  Mac系统:

## 2.1.下载安装Arduino IDE:

下载安装说明与1.1章相同，如下图所示：

![](media/16f52258f554cb022cca9d068ed93dce.png)

## 2.2.下载CH340驱动:

[https://fs.keyestudio.com/CH340-MAC](https://fs.keyestudio.com/CH340-MAC)

在我们对应的文件夹中，也提供了CH340驱动（MAC），可以不用下载。

![](media/ad2bb4b8635fe441e23090ca81fac931.png)

## 2.3.怎样安装CH340驱动:

请参考以下链接：[https://wiki.keyestudio.com/Download_CH340_Driver_on_MAC_System](https://wiki.keyestudio.com/Download_CH340_Driver_on_MAC_System)

## 2.4.设置Arduino IDE:

除了COM端口设置之外，其他的设置方法与第1.4章相类似，如下图所示：

![](media/6c920b67a1c45182c717300ca55fd1cc.png)

## 导入arduino库文件

在开始课程之前我们还需要安装课程里面代码需要的Arduino库文件。

### 1.什么是库文件?

库是一组代码，可以方便地连接到传感器、显示器、模块等。例如，内置的LiquidCrystal库可以帮助与LCD显示器对话。网上上还有数百个额外的库可供下载。参考资料(https://www.arduino.cc/en/Reference/Libraries)中列出了内置库和其中一些附加库。

### 2.如何安装库 ?

这里我们将介绍一种最简单的添加库的方法 .

第一步：下载好Arduino IDE后，可以鼠标右键单击Arduino IDE的图标，找到“打开文件夹所在的位置”选项，如下所示：

![](media/6f687f0f3390804b319de78e52094e58.png)

第二步：
单击“打开文件夹所在的位置”打开库文件夹，你可以看到library文件夹所在的位置，这个文件夹里面含有一些Arduino的库文件。

![](media/c1e56b9c1056ce596f4bb65270032aa8.png)

![](media/6f6fbf980aee7f8f57ec450a59706dec.png)

第三步：打开我们提供的资料里面的Arduino
库文件的文件夹，将文件夹中的库文件(四个文件)都复制粘贴到第二步我们打开的libraries文件夹内。

![](media/4aed2dadfec7402b7e8663de497b6cf9.png)

![](media/8a81336e512d764d8796c3a9c13316ab.png)

如果出现对话框，单击“替换目标中的文件（R）”以替换旧的库文件，复制好了之后我们的库文件就添加成功了。

![](media/3b8107fdab9cb0ef28810c9dee9cbc46.png)

![](media/ea854ea7aeedc7e9e4c4d438caeeaf9b.png)





