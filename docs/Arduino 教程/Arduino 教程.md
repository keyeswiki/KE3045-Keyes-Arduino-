# Arduino 教程

## Arduino软件下载安装，驱动安装和库文件添加

**1.Windows系统：**

![](media/6cf6312dc7c7db27794b54d58a8bf80c.png)

### 1.1.下载安装Arduino软件：

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

### 1.2.安装驱动：

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

### 1.3. Arduino IDE设置和工具栏介绍：

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

### 1.4.启动你的第一个程序:

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

**2.Mac系统:**

### 2.1.下载安装Arduino IDE:

下载安装说明与1.1章相同，如下图所示：

![](media/16f52258f554cb022cca9d068ed93dce.png)

### 2.2.下载CH340驱动:

[https://fs.keyestudio.com/CH340-MAC](https://fs.keyestudio.com/CH340-MAC)

在我们对应的文件夹中，也提供了CH340驱动（MAC），可以不用下载。

![](media/ad2bb4b8635fe441e23090ca81fac931.png)

### 2.3.怎样安装CH340驱动:

请参考以下链接：[https://wiki.keyestudio.com/Download_CH340_Driver_on_MAC_System](https://wiki.keyestudio.com/Download_CH340_Driver_on_MAC_System)

### 2.4.设置Arduino IDE:

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


1.  Arduino软件下载安装，CH340驱动安装和Arduino库文件添加：

本教程的Arduino软件下载安装，CH340驱动安装和Arduino库文件添加都在“1.
有关arduino课前准备”文件夹中。如果Arduino软件已经下载安装好，CH340驱动也已经安装好和Arduino库文件也添加好了，就跳过这一步；否则，进入项目课程之前需要先将Arduino软件下载安装好，CH340驱动也要安装好和Arduino库文件也需要添加好才能进入下面的项目课程。本教程的Arduino软件下载安装方法，CH340驱动安装方法和Arduino库文件添加方法及软件如下所示：

![](media/c4b622f4024734496bdb8c9770ea3645.png)

## 硬件项目：

当你通过每个项目的工作方式，你将学习如何编程机器人移动，舞蹈，和跟随障碍等。

### 项目 1: Keyes NANO CH340

![](media/5e7ae2024a544b46583730214c0be3a5.jpg)

（1）项目介绍:

keyes Nano CH340主板是一款基于ATmega328P-AU的小型、完整、易于操作的主板。与ARDUINO NANO相比，keyes NANO使用的usb转串口芯片是CH340G，所以除了安装的驱动文件不一样，其他的使用方法完全一样。它有14个数字输入/输出引脚(其中6个可作为PWM输出)，8个模拟输入，一个16mhz晶体振荡器，一个迷你USB接口，一个ICSP接口和一个复位按钮。其中ICSP接口是用来给ATMEGA328P-AU烧录固件，由于这个该芯片我们在出厂前都以烧录好固件，所以一般不用。使用时我们可以利用miniUSB线供电，还可以利用排母接口Vin GND（DC 7-12V）供电。

（2）规格参数:

|微控制器|ATmega328P-AU|
|-|-|
|工作电压|5V|
|输入电压 (推荐)|DC7-12V|
|数字 I/O 引脚|14 (D0-D13) (其中6个提供PWM输出)|
|PWM 数字 I/O 引脚|6 (D3, D5, D6, D9, D10, D11)|
|模拟输入引脚|8 (A0-A7)|
|每个I/O引脚直流电流|40 mA|
|闪存|32 KB，其中2 KB由引导加载程序使用|
|静态存储器|2 KB|
|只读储存器|1 KB|
|时钟频率|16 MHz|
|内置LED|D13|


（3）各个接口和主要元件说明:

这里是一个解释图，每一个元件和接口是可以做什么:

![](media/4fccad6f9d3fbb36df428f40b310fbf0.jpg)









|1|ICSP Header|是一个AVR，一个由MOSI，MISO，SCK，RESET，VCC和GND组成的的微型编程头。它通常被称为SPI（串行外设接口），可以被认为是输出的“扩展”。实际上，你是将输出设备从属到SPI总线的主机。连接电脑时，可以给ATMEGA328P-AU烧录固件。|
|-|-|-|
|2|LED indicator （RX）|控制板通过串口通信，接收到信息时，RX灯闪烁。|
|3|LED indicator （TX）|控制板通过串口通信，发送信息时，TX灯闪烁。|
|4|LED indicator （POW）|给控制板供电时，LED亮起，否则熄灭。|
|5|LED indicator （L）|当D13为高电平时，LED亮起，为低电平时，LED熄灭。|
|6|RX0（D0） TX1（D1） D2-D13|有14个数字I/O引脚（D0-D13）（其中6个提供PWM（脉宽调制）输出），这些引脚可配置为数字输入引脚，用于读取逻辑值（0或1）；或作为数字输出引脚来驱动不同的模块，如LED，继电器等。|
|7|RST|可外按键，和ResetButton功能一样。|
|8|MEGA 328P|每个控制板板都有自己的微控制器。你可以假设它作为板的大脑。微控制器通常是ATMEL公司的。在从Arduino IDE加载新程序之前，你必须知道你的板上有什么IC。此信息位于IC顶部。这个控制板的微控制器是ATMEGA328P-AU。有关IC结构和功能的更多详细信息，请参阅数据表。|
|9|MINI USB|利用mini USB线连接到电脑USB端口，可以给控制板供电，还可以给控制板上传程序。|
|10|3V3 pin|提供DC 3.3V 输出电压。|
|11|REF|代表模拟参考。它有时用于设置外部参考电压（0至5伏之间）作为模拟输入引脚的上限。|
|12|A0-A7|8个模拟引脚A0-A7|
|13|5V pin|提供DC 5V 输出电压。|
|14|GND|GND|
|15|VIN|外部输入DC 7-12V电压，给控制板供电。|
|16|Reset Button|可以重置你的控制板|
|17|CH340G|USB转串口芯片，将电脑USB信号转化成串口信号。|
|18|AMS1117|它将外部输入的DC 7-12V电压转化成DC 5V电压，然后将DC 5V电压转送给处理器和其他元件。|



（4）特殊功能接口说明：

串口通信接口：RX0、TX1

PWM接口（脉宽调制）：D3 D5 D6 D9 D10 D11

外部中断接口：D2(中断0)和D3 (中断)

SPI通信接口：D10为SS、D11为MOSI、D12为MISO、D13为SCK

IIC通信端口：A4为SDA、A5为SCL

### 项目 2: keyestudio NANO 扩展板

（1）说明：

keyes Nano ch340作为一款小巧的基于arduino平台的控制板，一直深受大家的喜爱。但是，当keyes Nano ch340主板需要连接多个传感器模块，当keyes Nano ch340主板需要外接电源时，需要用到面包板接线。接线很不方便。

![](media/d9bea4acc090ef924d64a913fbcbc9f8.jpg)为此，我们特别设计了这款扩展板，它完全兼容keyes Nano ch340主板。这款扩展板不但将keyes Nano ch340主板上的数字口和模拟口扩展成GND 5V
信号端3PIN接口（2.54间距排针引出），还引出了一些常用的通信接口，如串口通信、I2C通信，大大方便了keyes Nano ch340和其他传感器模块的连接。扩展板还自带有一个电源指示灯和一个复位按键。

同时为方便外接电源，扩展板上自带一个PH2.0-2P接口（输入DC 7-12V），自带一个自锁开关（Power_Switch），用于控制电源开关。为方便给其他传感器供电，扩展板自带3路DC 3.3V电源输出端（2.54间距排针引出）。为方便将扩展板将扩展板固定在其他设备，扩展板自带4个直径为3mm的定位孔。

（2）特点：

A.将12路数字口扩展板成3pin 接口

B.将8路模拟口扩展板成3pin 接口

C.自带1个串口通信接口（蓝牙模块接口）

D.自带1个I2C通信接口

E.自带3路DC 3.3V电源输出接口

F.自带1个电源指示灯和1个复位按键

G.自带1个外接电源接口（PH2.0-2P）和1个控制按键

（3）相关参数：

输入电压：DC 7-12V

电源接口：PH2.0-2P

排针/排母间距：2.54mm

定位孔大小：直径 3mm

尺寸：57\*54\*17mm

重量：20.4g

（4）兼容控制器：

keyes Nano ch340

（5）引脚说明：

![](media/7cf5685279e9a8c414a121ae4ec92359.jpg)

（6）使用方法：

只需将keyes Nano ch340主板堆叠到keyestudio Nano扩展板上,通过白色接头用电池供电。

![](media/a3f329492731c70eeec3032217a5dc4e.png)

### 项目 3: 调节舵机角度 

1.  简介：

![](media/9a87f1082013c7c697b72d6444c68f2a.jpg)在青蛙机器人DIY的过程中，青蛙机器人的每个关节都有一个180的舵机。我们可以控制每个关节处的舵机进行不同角度的旋转，从而控制青蛙机器人进行不同的动作。在本课程中，我们将重点介绍青蛙机器人套件中舵机的原理和使用。舵机是一种位置伺服驱动器，可以在0到180度之间旋转。如果你想让你的机器人助手帮你拿一本书，机器人手臂旋转角度太大或太小，以致无法拿起书。只有角度刚刚好，才能完成取书的任务，所以才需要准确地控制关节处的舵机角度。

舵机是一种位置控制的旋转执行器。它主要由外壳、电路板、无芯电机、齿轮和位置传感器组成。
还包括与您的舵机装在一起的各种黑色轴。

2.  工作原理:

舵机的工作原理是由接收机或者单片机发出信号给舵机，其内部有一个基准电路，产生周期为20ms，宽度为1.5ms的基准信号，将获得的直流偏置电压与电位器的电压比较，获得电压差输出。

舵机有很多规格，但所有的舵机都有外接三根线，分别用棕、红、橙三种颜色进行区分，由于舵机品牌不同，颜色也会有所差异，棕色为接地线，红色为电源正极线，橙色为信号线。

![](media/35084ae289a08e35bdb8c89ceb134ba4.png)

舵机的转动的角度是通过调节PWM（脉冲宽度调制）信号的占空比来实现的，标准PWM（脉冲宽度调制）信号的周期固定为20ms（50Hz），理论上脉宽分布应在1ms到2ms
之间，但是，事实上脉宽可以在0.5ms 到2.5ms
之间，脉宽和舵机的转角0°～180°相对应。所以，舵机的信号线最好接到PWM数字口。但请注意，对于不同品牌的电机，相同的信号可能有不同的旋转角度。

![](media/9c287c5ca4f5792f52b8c72d0d2a5448.png)

我们可以在Arduino IDE软件中设置相应引脚的HIGH/LOW，从而调整伺服角度;此外，我们还专门创建了机器人库，以简化的代码方便地控制伺服角度。

3.  规格参数：

工作电压：DC 4.8V〜6V

可操作角度范围：大约 About 180°(在 500→2500 μsec)

脉波宽度范围：500→2500 μsec

空载转速：0.12±0.01 sec/60（DC 4.8V） 0.1±0.01 sec/60（DC 6V）

空载电流：200±20mA（DC 4.8V） 220±20mA（DC 6V）

停止扭力：1.3±0.01kg·cm（DC 4.8V） 1.5±0.1kg·cm（DC 6V）

停止电流：≦850mA（DC 4.8V） ≦1000mA（DC 6V）

待机电流：3±1mA（DC 4.8V） 4±1mA（DC 6V）

导线长度：250 ± 5 mm

外观尺寸：22.9\*12.2\*30mm

重量:9± 1 g (without servo horn)

保存温度:-20℃〜60℃

操作温度:-10℃〜50℃

4.  接线图：

只需将keyes Nano ch340主板堆叠到keyestudio Nano扩展板。连接舵机引脚到数字引脚4 。

![](media/d8ec79d87f840007ff2d994fbb8082fb.png)

5. 测试代码：

测试舵机在0°到180°之间的运动角度。

```
##include <Servo.h>

Servo servo_4;    //实例化舵机

void setup(){
  servo_4.attach(4);     //将舵机信号线（黄线）连接到数字引脚4
}

void loop(){
  for (int i = 0; i <= 180; i = i + (1)) {   //设置变量i来存储舵机位置,从0度到180度，步长为1
    servo_4.write(i);    //告诉舵机转到变量i的位置
    delay(200);         //等待200ms舵机转到变量i的位置
  }
  for (int i = 180; i >= 0; i = i + (-1)) {     //设置变量i来存储舵机位置,从180度到0度，步长为1
    servo_4.write(i);     //告诉舵机转到变量i的位置
    delay(200);          //等待200ms舵机转到变量i的位置
  }

}

```



6. 测试结果：

上传代码成功，按下Power_Switch按键，舵机将在0°到180°之间来回旋转。

7. 代码说明：

\#include <Servo.h\>是Arduino自带的Servo函数及其语句，下面是舵机函数的几个常用语句：
1、attach（接口）——设定舵机的接口。
2、write（角度）——用于设定舵机旋转角度的语句，可设定的角度范围是0°到180°。
3、read（）——用于读取舵机角度的语句，可理解为读取最后一条write()命令中的值。
4、attached（）——判断舵机参数是否已发送到舵机所在接口。

注：以上语句的书写格式均为“舵机变量名.具体语句（）”例如：myservo.attach(4)。

8. 拓展试验:

请参阅测试代码。尝试复位舵机和转速(提示:设置舵机角度延迟时间;或者调整增加/减少步长，步长应该能被180整除，比如2,3,5。)


```
##include <Servo.h>

Servo servo_4;    //实例化舵机

void setup(){
  servo_4.attach(4);     //将舵机信号线（黄线）连接到数字引脚4
}

void loop(){
  for (int i = 0; i <= 180; i = i + (1)) {   //设置变量i来存储舵机位置,从0度到180度，步长为1
    servo_4.write(i);    //告诉舵机转到变量i的位置
    delay(1000);         //等待1000ms舵机转到变量i的位置
  }
  for (int i = 180; i >= 0; i = i + (-1)) {     //设置变量i来存储舵机位置,从180度到0度，步长为1
    servo_4.write(i);     //告诉舵机转到变量i的位置
    delay(1000);          //等待1000ms舵机转到变量i的位置
  }

}
```

```
##include <Servo.h>

Servo servo_4;    //实例化舵机

void setup(){
  servo_4.attach(4);     //将舵机信号线（黄线）连接到数字引脚4
}

void loop(){
  for (int i = 0; i <= 180; i = i + (20)) {   //设置变量i来存储舵机位置,从0度到180度，步长为20
    servo_4.write(i);    //告诉舵机转到变量i的位置
    delay(200);         //等待200ms舵机转到变量i的位置
  }
  for (int i = 180; i >= 0; i = i + (-20)) {     //设置变量i来存储舵机位置,从180度到0度，步长为20
    servo_4.write(i);     //告诉舵机转到变量i的位置
    delay(200);          //等待200ms舵机转到变量i的位置
  }

}
```


### 项目 4: 超声波检测的障碍

1.  简介：

触发信号后，超声波模块发出超声波。当超声波遇到物体并被反射回来时，模块输出一个回波信号，因此它可以从触发信号和回波信号的时间差来确定物体的距离。我们可以用超声波传感器来探测前方是否有障碍物。通常用于测量前方障碍物与机器人之间的距离。在机器人DIY的过程中，我们可以利用超声波传感器测量到的距离来构建功能机器人，如自动躲避、跟随等。

在实验中，我们使用超声波传感器测量机器人与前方障碍物之间的距离。下图是一个超声波模块。

![](media/1b2e1ee1e245982de475fb901e9f15e7.jpg)

2.  规格参数：

工作电压：5V（DC）

工作电流：15mA

工作频率：40khz

最大探测距离：3-5m

最小探测距离：2cm

感应角度：不大于15度

高精度：可达3mm

3.  接线图：

![](media/27a9237ed4d99f775c77ec222f7b9400.png)

将超声波传感器连接到NANO扩展板上，VCC引脚连接到5V(V)，
Trig引脚连接到数字6 (S)， Echo引脚连接到数字7 (S)，
GND引脚连接到GND(G)；然后将keyes Nano ch340主板堆叠到NANO扩展板上。

4.  测试代码：

```
float checkdistance() {       //测距函数
  // 产生一个10us的高脉冲去触发TrigPin
  digitalWrite(6, LOW);     //设置引脚6的输出电压为低电平
  delayMicroseconds(2);   //延迟2微秒
  digitalWrite(6, HIGH);   //设置引脚6的输出电压为高电平
  delayMicroseconds(10);  //延迟10微秒
  digitalWrite(6, LOW);   //设置引脚6的输出电压为低电平
  // 检测脉冲宽度，并计算出距离
  float distance = pulseIn(7, HIGH) / 58.00;   // 读取引脚7上的高电平脉冲，最大脉冲时间除以58.00，并且把结果以浮动值的形式赋给distance变量
  delay(10);    // 延迟10毫秒
  return distance;  //返回距离值
}

void setup(){
  Serial.begin(9600);      //打开串行端口，将数据传输速率设置为9600bps
  pinMode(6, OUTPUT);    //将数字引脚6初始化为输出模式，接超声波传感器的Trig
  pinMode(7, INPUT);     //将数字引脚7初始化为输入模式，接超声波传感器的Echo
  Serial.begin(9600);  
}

void loop(){
  Serial.println(checkdistance());    //通过串口换行输出checkdistance()值
  delay(200);  //延迟200毫秒

}
```



5.  测试结果：

上传代码成功，按下NANO扩展板上的Power_Switch按键。点击![](media/affd123b80bcd2cbfc8ffeba35dc1a3c.png)打开串口监视器，设置波特率为9600。将你的手或一个大的、扁平的物体移近或移远超声波传感器。当物体接近或远离时，监视器将显示从传感器读取的距离(单位:厘米)。

![](media/717fc9b7be27eac15422ada9610ae1cc.png)

6.  代码说明：

float distance = pulseIn(7, HIGH) / 58.00

pulseIn函数其实就是一个简单的测量脉冲宽度的函数，默认单位是us。也就是说pulseIn测出来的是超声波从发射到接收所经过的时间。对于除数58也很好理解，声音在干燥、摄氏
20度的空气中的传播速度大约为343米/秒，合34,300厘米/秒。或者，我们作一下单位换算，34,300除以1,000,000厘米/微秒。即为：0.0343厘米/微秒，再换一个角度，1/（0.0343
厘米/微秒）即：29.15
微秒/厘米。这就意味着，每291.5微秒表示10CM的距离。1厘米就是29.15微秒。但是发送后到接收到回波，声音走过的是2倍的距离呀。

所以实际距离就是1厘米，对应58.3微秒。实际上整个测距过程是测的发出声波到收到回波的时间，你的程序里的第一个distance实际上是时间us。所以换成距离cm，要除以58。当然除以58.3可能更精确。所以我们可以用
pulseIn(7, HIGH) / 58.00获取测得的距离。

7.  拓展试验:



1.  你可以在显示器上添加新的文本或距离单位(厘米).

```
float checkdistance() {  //测距函数
  // 产生一个10us的高脉冲去触发TrigPin
  digitalWrite(6, LOW);  //设置引脚6的输出电压为低电平
  delayMicroseconds(2);  //延迟2微秒
  digitalWrite(6, HIGH);  //设置引脚6的输出电压为高电平
  delayMicroseconds(10);  //延迟10微秒
  digitalWrite(6, LOW);   //设置引脚6的输出电压为低电平
  // 检测脉冲宽度，并计算出距离
  float distance = pulseIn(7, HIGH) / 58.00;   // 读取引脚7上的高电平脉冲，最大脉冲时间除以58.00，并且把结果以浮动值形式赋值给distance变量
  delay(10);  // 延迟10毫秒
  return distance;  //返回距离值
}

void setup(){
  Serial.begin(9600);  //打开串行端口，将数据传输速率设置为9600bps
  pinMode(6, OUTPUT);  //将数字引脚6初始化为输出模式，接超声波传感器的Trig
  pinMode(7, INPUT);   //将数字引脚7初始化为输入模式，接超声波传感器的Echo
  Serial.begin(9600);  
}

void loop(){
  Serial.print(checkdistance());   //通过串口不换行输出checkdistance()值
  Serial.println("cm");            //通过串口换行输出字符串“cm”
  delay(200);                      //延迟200毫秒

}

```



2.  修改波特率和延迟时间即可查看结果.

```
float checkdistance() {  //测距函数
  // 产生一个10us的高脉冲去触发TrigPin
  digitalWrite(6, LOW);  //设置引脚6的输出电压为低电平
  delayMicroseconds(2);  //延迟2微秒
  digitalWrite(6, HIGH);  //设置引脚6的输出电压为高电平
  delayMicroseconds(10);  //延迟10微秒
  digitalWrite(6, LOW);   //设置引脚6的输出电压为低电平
  // 检测脉冲宽度，并计算出距离
  float distance = pulseIn(7, HIGH) / 58.00;   // 读取引脚7上的高电平脉冲，最大脉冲时间除以58.00，并且把结果以浮动值形式赋值给distance变量
  delay(10);  // 延迟10毫秒
  return distance;  //返回距离值
}

void setup(){
  Serial.begin(9600);  //打开串行端口，将数据传输速率设置为9600bps
  pinMode(6, OUTPUT);  //将数字引脚6初始化为输出模式，接超声波传感器的Trig
  pinMode(7, INPUT);   //将数字引脚7初始化为输入模式，接超声波传感器的Echo
  Serial.begin(9600);  
}

void loop(){
  Serial.println(checkdistance());   //通过串口换行输出checkdistance()值
  delay(1000);                      //延迟1000毫秒
}
```

## 青蛙机器人项目：

让我们开始组装可爱的青蛙机器人，让它移动、跳舞，甚至跟随物体。通过蓝牙APP轻松操作机器人!
遵循这个简单的指导，如何安装和编程你的青蛙机器人呢？

### 青蛙机器人组装 

制作青蛙机器人的所有部件都包含在工具包中，组装它们很容易，通常需要大约半小时左右。

![](media/df7724924d5e87a8915ec6cf280523cd.jpg)

注意:

在安装青蛙机器人之前，首先需要调节4个舵机到90°，然后将4个舵机连接到Nano扩展板上；分别将4个舵机连接到数字引脚5、4、3、2，再把keyes Nano ch340主板堆叠到Nano扩展板上。

![](media/6320562f65a132627230afb64cd9a873.png)

舵机初始化代码:

上传下面的代码，将4个舵机都转到90°的位置。

(参考项目3)

```
##include <Servo.h>

Servo servo_2;  //实例化舵机2
Servo servo_3;  //实例化舵机3
Servo servo_4;  //实例化舵机4
Servo servo_5;  //实例化舵机5

void setup(){
  servo_2.attach(2);  //将舵机2信号线（黄线）连接到数字引脚2
  servo_3.attach(3);  //将舵机3信号线（黄线）连接到数字引脚3
  servo_4.attach(4);  //将舵机4信号线（黄线）连接到数字引脚4
  servo_5.attach(5);  //将舵机5信号线（黄线）连接到数字引脚4
}

void loop(){
  servo_2.write(90);  //设定舵机2的角度是90°
  delay(500);         //延迟500毫秒
  servo_3.write(90);  //设定舵机3的角度是90°
  delay(500);         //延迟500毫秒
  servo_4.write(90);  //设定舵机4的角度是90°
  delay(500);         //延迟500毫秒
  servo_5.write(90);  //设定舵机5的角度是90°
  delay(500);         //延迟500毫秒
}
```



#### 固定脚 

材料：①、两片青蛙脚背亚克力。

②、一卷亚克力胶带。

工具：①、一把剪刀（自备）。

安装：将亚克力外皮纸撕下，用剪刀把亚克力胶带剪成6小段，贴到亚克力上，如右图A-1。

注意：脚背亚克力两只脚丫子向外。

材料：①、A-1亚克力组件。

②、两片脚底板亚克力。

工具：①、一把剪刀（自备）。

安装：将亚克力外皮纸撕下，用剪刀把亚克力胶带的另一面膜撕下，贴合到亚克力上，如右图A-2。

注意：螺丝孔位对齐。

安装：以上安装可得到亚克力组件A，如右图A。

#### 把腿固定在脚上

材料：①、2个M3X10十字螺丝。

②、2个M3防松螺母。

③、2个φ8X3法兰轴承。

④、4片亚克力。

工具：①、一把M3螺丝刀。

②、M3小扳手（自备）。

安装：将亚克力外皮纸撕下，按照图B-1中排列安装，无需拧紧螺丝，保证两片亚克力能旋转，如右图B-1。

材料：①、4个M2X10十字螺丝。

②、4个M2螺母。

③、2个9G舵机。

④、2片亚克力。

工具：①、一把M3螺丝刀。

安装：将亚克力外皮纸撕下，按照图B-2中排列安装，注意舵机的安装方向靠里，拧紧螺丝，舵机保证已调好的90°。如右图B-2。

![](media/6bb0ec6cfd4364e190f93d45af008f76.png)![](media/f44abdcbc38442547830fdf970f56351.png)

材料：①、4个M1.2X5自攻螺丝。

②、2个9G舵机单边支架。

③、2片亚克力。

工具：①、一把M3螺丝刀。

安装：将亚克力外皮纸撕下，按照图B-3中排列安装，拧紧螺丝。如右图B-3。

![](media/11c8036451eb03b2b7aabe3563f5882c.png)![](media/22e4de168a35f8c597e5b1fa0517812b.png)

材料：①、B-2组件。

②、B-3组件。

③、2个舵机包里的M2X4螺丝。

工具：①、一把M3螺丝刀。

安装：准备两个装好的组件，按照图B-4中排列安装，拧紧螺丝，保证舵机的90°方向。如右图B-4。

![](media/7f2ec9a88c7b037a603bca5b59650ef0.png)

材料：①、A组件。

②、B-1组件。

③、B-4组件。

④、4个M3X10 十字螺丝。

⑤、4个M3螺母。

工具：①、一把M3螺丝刀。

安装：准备三个装好的组件，按照图A-B中排列安装，同样的方法安装两条腿，拧紧螺丝，注意孔位对齐。如右图A-B。

#### 固定头部到身体

材料：①、4个M1.6X10螺丝。

②、4个M1.6螺母。

③、1块超声波板子。

④、1块青蛙脸部亚克力。

工具：①、一把M3螺丝刀。

安装：将亚克力外皮纸撕下，按照图C-1中排列安装，拧紧螺丝，注意孔位对齐。如右图C-1。

材料：①、4个M3X30双通铜柱。

②、4个M3X6螺丝。

③、1块青蛙头部亚克力。

工具：①、一把M3螺丝刀。

安装：将亚克力外皮纸撕下，按照图C-2中排列安装，拧紧螺丝，注意铜柱在logo的同一面，保持孔位对齐。如右图C-2。

材料：①、4个M3X10双通铜柱。

②、4个M3X6螺丝。

③、安装好的C-2组件。

工具：①、一把M3螺丝刀。

安装：准备好材料，按照图C-3中排列安装，拧紧螺丝，注意铜柱在logo的背面，保持孔位对齐。如右图C-3。

材料：①、安装好的C-1组件。

②、安装好的C-3组件。

③、1个M3X10平头螺丝。

④、1个M3螺母。

工具：①、一把M3螺丝刀。

安装：将M3螺母卡到十字型的亚克力孔上，用螺丝从底下将两片亚克力固定在一起，按照图C-4中排列安装，注意保持孔位对齐，适当力拧螺丝，避免亚克力断裂。如右图C-4。

材料：①、安装好的C-4组件。

②、1个18650电池盒。

③、2个M3X10平头螺丝。

④、2个M3螺母。

工具：①、一把M3螺丝刀。

安装：将电池盒孔对齐亚克力孔，用螺丝从底下向上固定，按照图C-5中排列安装，注意保持孔位对齐，电池盒方向的线在logo的下边。如右图C-5。

材料：①、安装好的C-5组件。

②、1块NANO控制主板。

③、4个M3X6十字螺丝。

④、一块NANO拓展板。

工具：①、一把M3螺丝刀。

安装：将NANO扩展板的四个孔对齐4个M3X10双通铜柱孔，按照图C中排列安装，注意保持孔位对齐，用M3螺丝刀向下适当力拧螺丝固定。再将NANO控制主板堆叠在NANO扩展板上。如右图C。

#### 国定舵机到身体上

材料：①、4个M2X10螺丝。

②、4个M2螺母。

③、2个9G舵机。

④、1块青蛙头部底板亚克力。

工具：①、一把M3螺丝刀。

安装：将亚克力外皮纸撕下，用螺丝从底下向上固定舵机的两个孔，按照图D-1中排列安装，注意保持孔位对齐，舵机的旋转轴在同一侧，舵机保证90°。如右图D-1。

材料：①、4个M1.2X5自攻螺丝。

②、2个舵机一字支架。

③、2块工字亚克力板。

工具：①、一把M3螺丝刀。

安装：将亚克力外皮纸撕下，用螺丝从右向左固定舵机支架的两个孔，按照图D-2中排列安装，注意保持孔位对齐。如右图D-2。

材料：①、1块D-1组件。

②、1块D-2组件。

③、2个舵机包里的M2X4 螺丝。

工具：①、一把M3螺丝刀。

安装：将D-2组件支架卡入舵机旋转轴，用M2X4螺丝固定舵机支架，按照图D中排列安装，注意保持舵机的90°状态（安装舵机配件前，舵机角度已经调节为90°角度，不能手动更改。也许舵机设置为90度时，也没能和连接块以90度安装起来，不过没关系，只需要尽量接近90度，后面再在程序里调整角度）。如右图D。

#### 完整的青蛙机器人

材料：①、1块A-B组件。

②、1块D组件。

③、4个M3X10 十字螺丝。

④、4个M3螺母。

工具：①、一把M3螺丝刀。

安装：将D组件支架舵机旋转90°如图A-B-D，在将组件带螺母亚克力卡位卡入，用M3X10螺丝从上向下拧紧，按照图A-B-D中排列安装，同样的办法安装好青蛙的两条腿，注意螺丝拧紧时不宜用力过度，保证亚克力不断裂。如右图A-B-D。

材料：①、1块A-B-D组件。

②、1块C组件。

③、4个M3X6 十字螺丝。

工具：①、一把M3螺丝刀。

安装：将A-B-D组件支架舵机旋转90°如图A-B-C-D，再将C组件的4根铜柱对应A-B-D组件的孔，从下向上用M3X6螺丝锁紧固定，按照图A-B-C-D中排列安装，同样的办法安装固定好4个螺丝，保证亚克力不断裂。如右图A-B-C-D。这样，青蛙机器人已安装完全了，剩下的就是接线部分了。

#### 接线图：

先将keyes Nano ch340主板堆叠到keyestudio NANO
扩展板上，然后用4根母对母杜邦线将HC-SR04超声波传感器模块连接到keyestudio NANO
扩展板上，超声波传感器的VCC引脚连接至5V(V)，Trig引脚至数字6(S)，Echo引脚至数字7(S)，Gnd引脚至Gnd(G)（超声波传感器布线可以参考项目
4）

将舵机的棕色线是与Gnd(G)相连，红色线与5v(V)相连，橙色线是分别与数字口5,4,3,2相连的。

(4个舵机的接线可以参考项目3)

![](media/75307f2e2faf6b608474109c7af1c5c4.png)

4个舵机控制接口可以参考下图:

         ---------------
        |     O   O     |
        |---------------|
YR D3==> |             |   <== YL D2
         ---------------
            ||     ||
            ||     ||
RR D5==>  -----   ------   <== RL D4
         |-----   ------|


插入DX-BT24 V5.1 BLE蓝牙模块，引脚头TX, RX, GND, 5V在Keyestudio NANO扩展板上。








|Keyestudio NANO扩展板|DX-BT24 V5.1 BLE蓝牙模块|
|-|-|
|TX|RXD|
|RX|TXD|
|GND|GND|
|5V|VCC|

</tbody>
</table>

![](media/3d32e9d0aaa5e9a80ccb50f82eb025cf.jpg)

### 项目 5: 行走

![](media/e0159d10648782e4beca4dad9d5d06b6.jpg)

1.  设计思路：

完成机器人组装后，你会看到机器人上的4个舵机连接到keyestudio Nano
扩展板上。我们前面已经介绍了如何调整舵机角度的相关知识。在电路中，我们将利用keyestudio Nano 扩展板使4个舵机进行不同角度的切换，从而控制青蛙机器人行走起来。

2.  青蛙是如何工作的?

设计青蛙机器人，需要设计4个舵机的安装位置，以及对应的控制接口。舵机的详细安装位置，我们可以参考前面的安装方法，控制接口可以参考下图。

         ---------------
        |     O   O     |
        |---------------|
YR D3==> |             |   <== YL D2
         ---------------
            ||     ||
            ||     ||
RR D5==>  -----   ------   <== RL D4
         |-----   ------|



3.  接线图:

只需将keyes Nano ch340主板堆叠到keyestudio Nano扩展板上。将4个舵机与数字引脚2,3,4,5分别连接。

![](media/6320562f65a132627230afb64cd9a873.png)

4.  测试代码:


```
##include <Servo.h>
##include <Oscillator.h>
##include <EEPROM.h>
##define N_SERVOS 4
//-- 第一步: 配置连接舵机的引脚
/*
         ---------------
        |     O   O     |
        |---------------|
YR 3==> |               | <== YL 2
         ---------------
            ||     ||
            ||     ||
RR 5==>   -----   ------  <== RL 4
         |-----   ------|
*/
##define EEPROM_TRIM false

//调整开始舵机的角度 (注意：这里必须调整)
##define TRIM_RR -5  //right02
##define TRIM_RL 5  //left02
##define TRIM_YR -5  //right01
##define TRIM_YL 0  //left01

//舵机引脚
##define PIN_RR 5
##define PIN_RL 4
##define PIN_YR 3
##define PIN_YL 2
##define INTERVALTIME 10.0
Oscillator servo[N_SERVOS];

##include "SR04.h"
##define TRIG_PIN 6   //超声波发送引脚
##define ECHO_PIN 7   //超声波接收引脚
SR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);
long a;
int i = 0;  
int val = 0;

//各函数声明
void goingUp(int tempo);
void drunk (int tempo);
void noGravity(int tempo);
void kickLeft(int tempo);
void kickRight(int tempo);
void run(int steps, int T=500);
void walk(int steps, int T=1000);
void backyard(int steps, int T=3000);
void backyardSlow(int steps, int T=5000);
void turnLeft(int steps, int T=3000);
void turnRight(int steps, int T=3000);
void moonWalkLeft(int steps, int T=1000);
void moonWalkRight(int steps, int T=1000);
void crusaito(int steps, int T=1000);
void swing(int steps, int T=1000);
void upDown(int steps, int T=1000);
void flapping(int steps, int T=1000);

int t=495;
double pause=0;

//机器人停止
void Stop()
{
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
}

//机器人后退
 void backyard(int steps, int T)
{
  int A[4]= {15, 15, 30, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人左转
 void turnLeft(int steps, int T)
{
  int A[4]= {20, 20, 10, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人右转
 void turnRight(int steps, int T)
{
  int A[4]= {20, 20, 30, 10};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人前进
 void walk(int steps, int T)
{
  int A[4]= {15, 15, 30, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){
  for (int i=0; i<4; i++) {
    servo[i].SetO(O[i]);
    servo[i].SetA(A[i]);
    servo[i].SetT(T);
    servo[i].SetPh(phase_diff[i]);
  }
  double ref=millis();
   for (double x=ref; x<T+ref; x=millis()){
     for (int i=0; i<4; i++){
        servo[i].refresh();
     }
  }
}

unsigned long final_time;
unsigned long interval_time;
int oneTime;
int iteration;
float increment[N_SERVOS];
int oldPosition[]={90,90,90,90};

void moveNServos(int time, int  newPosition[]){
  for(int i=0;i<N_SERVOS;i++) increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);
  final_time =  millis() + time;
  iteration = 1;
  while(millis() < final_time){ //Javi del futuro cambia esto
      interval_time = millis()+INTERVALTIME;
      oneTime=0;
      while(millis()<interval_time){
          if(oneTime<1){
              for(int i=0;i<N_SERVOS;i++){
                  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i]));
              }
              iteration++;
              oneTime++;
          }
      }
  }

  for(int i=0;i<N_SERVOS;i++){
    oldPosition[i] = newPosition[i];
  }
}

void setup(){
  Serial.begin(9600);
  servo[0].attach(PIN_RR);
  servo[1].attach(PIN_RL);
  servo[2].attach(PIN_YR);
  servo[3].attach(PIN_YL);
  int trim;
  if(EEPROM_TRIM){
    for(int x=0;x<4;x++){
      trim=EEPROM.read(x);
      if(trim>128)trim=trim-256;
      Serial.print("TRIM ");
      Serial.print(x);
      Serial.print(" en ");
      Serial.println(trim);
      servo[x].SetTrim(trim);
    }
  }
  else{
    servo[0].SetTrim(TRIM_RR);
    servo[1].SetTrim(TRIM_RL);
    servo[2].SetTrim(TRIM_YR);
    servo[3].SetTrim(TRIM_YL);
  }
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
}

void loop(){
  walk(5,2*t);  //以2*t的速度前进5步 
  backyard(5,2*t);  //以2*t的速度后退5步 
  Stop();    //停止
  delay(1000); //延迟1000毫秒
  turnLeft(5,2*t);  //以2*t的速度左转5步 
  turnRight(5,2*t);  //以2*t的速度右转5步 
  Stop();    //停止
  delay(1000);  //延迟1000毫秒

}
```


（注意：应先上传代码成功，再插入蓝牙模块。否则，代码上传失败。）

5.  实验结果：

上传代码完成后，按下 Nano
扩展板上的Power_Switch按键后。青蛙机器人准备向前走5步，后退5步，保持站立1秒，向左转5步，向右转5步，保持站立1秒，交替循环。

![](media/95115f78bc601069dac0ed9992c55bbb.jpg)

### 项目 6: 跳舞

![](media/4ed53c1e88d238563f162aae65ac73d5.jpg)

1.  设计思路：

基于机器人行走电路，我们可以使用相同的电子元件和接线方法。只要修改代码，让青蛙机器人跳舞就行了。

2.  接线图:

将 Nano ch340 主板堆叠到Nano
扩展板上；分别将4个舵机连接到数字引脚2、3、4、5。

![](media/6320562f65a132627230afb64cd9a873.png)

3.  测试代码:

```
##include <Servo.h>
##include <Oscillator.h>
##include <EEPROM.h>
##define N_SERVOS 4
//-- 第一步：配置连接舵机的引脚
/*
         ---------------
        |     O   O     |
        |---------------|
YR 3==> |               | <== YL 2
         ---------------
            ||     ||
            ||     ||
RR 5==>   -----   ------  <== RL 4
         |-----   ------|
*/
##define EEPROM_TRIM false

//调整开始舵机的角度 (注意：这里必须调整)
##define TRIM_RR (-5)  //right02
##define TRIM_RL 5  //left02
##define TRIM_YR (-5)  //right01
##define TRIM_YL 0  //left01

//舵机引脚
##define PIN_RR 5
##define PIN_RL 4
##define PIN_YR 3
##define PIN_YL 2
##define INTERVALTIME 10.0
Oscillator servo[N_SERVOS];

##include "SR04.h"
##define TRIG_PIN 6  //超声波发送引脚
##define ECHO_PIN 7  //超声波接收引脚
SR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);
long a;
int i = 0;
int val = 0;

//各函数声明
void goingUp(int tempo);
void drunk (int tempo);
void noGravity(int tempo);
void kickLeft(int tempo);
void kickRight(int tempo);
void run(int steps, int T=500);
void walk(int steps, int T=1000);
void backyard(int steps, int T=3000);
void backyardSlow(int steps, int T=5000);
void turnLeft(int steps, int T=3000);
void turnRight(int steps, int T=3000);
void moonWalkLeft(int steps, int T=1000);
void moonWalkRight(int steps, int T=1000);
void crusaito(int steps, int T=1000);
void swing(int steps, int T=1000);
void upDown(int steps, int T=1000);
void flapping(int steps, int T=1000);

int t=495;
double pause=0;

//机器人停止
void Stop()
{
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
}

//机器人后退
 void backyard(int steps, int T)
{
  int A[4]= {15, 15, 30, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人前进
 void walk(int steps, int T)
{
  int A[4]= {15, 15, 30, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){
  for (int i=0; i<4; i++) {
    servo[i].SetO(O[i]);
    servo[i].SetA(A[i]);
    servo[i].SetT(T);
    servo[i].SetPh(phase_diff[i]);
  }
  double ref=millis();
   for (double x=ref; x<T+ref; x=millis()){
     for (int i=0; i<4; i++){
        servo[i].refresh();
     }
  }
}

unsigned long final_time;
unsigned long interval_time;
int oneTime;
int iteration;
float increment[N_SERVOS];
int oldPosition[]={90,90,90,90};

void moveNServos(int time, int  newPosition[]){
  for(int i=0;i<N_SERVOS;i++) increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);
  final_time =  millis() + time;
  iteration = 1;
  while(millis() < final_time){ //Javi del futuro cambia esto
      interval_time = millis()+INTERVALTIME;
      oneTime=0;
      while(millis()<interval_time){
          if(oneTime<1){
              for(int i=0;i<N_SERVOS;i++){
                  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i]));
              }
              iteration++;
              oneTime++;
          }
      }
  }

  for(int i=0;i<N_SERVOS;i++){
    oldPosition[i] = newPosition[i];
  }
}

//机器人滑步
void crusaito(int steps, int T){
    int A[4]= {25, 25, 30, 30};
    int O[4] = {- 15, 15, 0, 0};
    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)};
    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人摆动
void drunk (int tempo){
  pause=millis();
  int move1[] = {60,70,90,90};
  int move2[] = {110,120,90,90};
  int move3[] = {60,70,90,90};
  int move4[] = {110,120,90,90};
  moveNServos(tempo*0.235,move1);
  moveNServos(tempo*0.235,move2);
  moveNServos(tempo*0.235,move3);
  moveNServos(tempo*0.235,move4);
  while(millis()<(pause+tempo));
}

//机器人摇摆运动
void flapping(int steps, int T){
    int A[4]= {25, 25, 0, 0};
    int O[4] = {-15, 15, 0, 0};
    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人慢慢踮起脚
void goingUp(int tempo){
      pause=millis();
      for(int i=0;i<4;i++) servo[i].SetPosition(90);
      delay(tempo);
      servo[0].SetPosition(80);
      servo[1].SetPosition(100);
      delay(tempo);
      servo[0].SetPosition(70);
      servo[1].SetPosition(110);
      delay(tempo);
      servo[0].SetPosition(60);
      servo[1].SetPosition(120);
      delay(tempo);
      servo[0].SetPosition(50);
      servo[1].SetPosition(130);
      delay(tempo);
      while(millis()<pause+8*t);
}

//机器人跳动
void jump()
{
int move5[4] = {70,110,80,100};
  int move6[4] = {70,110,100,80};
  int move7[4] = {90,90,80,100};
  int move8[4] = {90,90,100,80};
pause=millis();
    moveNServos(t*0.15,move5);
    moveNServos(t*0.15,move6);
    moveNServos(t*0.15,move7);
    moveNServos(t*0.15,move8);
    while(millis()<(pause+t));
  }

//机器人左快步
void kickLeft(int tempo){
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
  delay(tempo);
  servo[0].SetPosition(50); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo);
  servo[0].SetPosition(80); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(30); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(80); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(30); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(80); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo);
}

//机器人右快步
void kickRight(int tempo){
for(int i=0;i<4;i++) servo[i].SetPosition(90);
  delay(tempo);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(130); //pie izquiero
  delay(tempo);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(100); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(150); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(80); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(150); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(100); //pie izquiero
  delay(tempo);
}

//机器人走左太空步
 void moonLEFT(int steps, int T)
{
  int A[4]= {25, 25, 0, 0};
  int O[4] = {-15, 15, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 - 120), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人走右太空步
 void moonRight(int steps, int T)
{
  int A[4]= {25, 25, 0, 0};
  int O[4] = {-15, 15, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人失重状态
void noGravity(int tempo){
  int move1[4] = {120,140,90,90};
  int move2[4] = {140,140,90,90};
  int move3[4] = {120,140,90,90};
  int move4[4] = {90,90,90,90};
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
  for(int i=0;i<N_SERVOS;i++) oldPosition[i]=90;
  moveNServos(tempo*2,move1);
  moveNServos(tempo*2,move2);
  delay(tempo*2);
  moveNServos(tempo*2,move3);
  moveNServos(tempo*2,move4);
}

//机器人摩擦摩擦
void segunda1()
{
int move1[4] = {90,90,80,100};
  int move2[4] = {90,90,100,80};
  int move3[4] = {90,90,80,100};
  int move4[4] = {90,90,100,80};
     pause=millis();
      moveNServos(t*0.15,move1);
      moveNServos(t*0.15,move2);
      moveNServos(t*0.15,move3);
      moveNServos(t*0.15,move4);
      while(millis()<(pause+t));
    }

//机器人游泳姿势运动
void swing(int steps, int T){
    int A[4]= {15, 15, 8, 8};
    int O[4] = {-A[0], A[1], 0, 0};
    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180), DEG2RAD(90), DEG2RAD(-90)};
    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

void setup(){
  Serial.begin(9600);
  servo[0].attach(PIN_RR);
  servo[1].attach(PIN_RL);
  servo[2].attach(PIN_YR);
  servo[3].attach(PIN_YL);
  int trim;
  if(EEPROM_TRIM){
    for(int x=0;x<4;x++){
      trim=EEPROM.read(x);
      if(trim>128)trim=trim-256;
      Serial.print("TRIM ");
      Serial.print(x);
      Serial.print(" en ");
      Serial.println(trim);
      servo[x].SetTrim(trim);
    }
  }
  else{
    servo[0].SetTrim(TRIM_RR);
    servo[1].SetTrim(TRIM_RL);
    servo[2].SetTrim(TRIM_YR);
    servo[3].SetTrim(TRIM_YL);
  }
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
}

void loop(){
  goingUp(2*t);     //以2*t的速度慢慢踮起脚
  for (int i = 0; i <= 2; i = i + (1)) {  //设置变量i来存储摩擦次数,从0到2，步长为1
    segunda1();    // 机器人摩擦摩擦
  }
  for (int i = 0; i <= 2; i = i + (1)) {  //设置变量i来存储跳动次数,从0到2，步长为1
    jump();       // 机器人跳动
  }
  walk(3,2*t);       //以2*t的速度前进3步
  backyard(3,2*t);  //以2*t的速度后退3步
  crusaito(1,5*t);  //以5*t的速度滑步1步
  crusaito(1,1*t);  //以1*t的速度滑步1步
  crusaito(1,3*t);  //以3*t的速度滑步1步
  for (int i = 0; i <= 2; i = i + (1)) {  //设置变量i来存储摆动次数,从0到2，步长为1
    drunk(4*t);     //以4*t的速度摆动
  }
  moonLEFT(5,2*t);    //以2*t的速度走左太空步5步，
  noGravity(2*t);    //以2*t的速度执行失重状态
  swing(5,2*t);      //以2*t的速度走游泳姿势5步
  moonRight(5,2*t);  //以2*t的速度走右太空步5步
  Stop();           //停止
  flapping(5,2*t);  //以2*t的速度摇摆运动5步
  Stop();          //停止
  kickLeft(t);     //左快步
  for (int i = 0; i <= 2; i = i + (1)) {  //设置变量i来存储跳动次数,从0到2，步长为1
    jump();        //跳动
  }
  Stop();         //停止
  kickRight(t);   //右快步
  for (int i = 0; i <= 2; i = i + (1)) {  //设置变量i来存储跳动次数,从0到2，步长为1
    jump();      //跳动
  }
  Stop();        //停止

}
```




（注意：应先上传代码成功，再插入蓝牙模块。否则，代码上传失败。）

.

4. 测试结果：

上传代码完成，按下Nano扩展板上的Power_Switch按键后。青蛙机器人将会跳舞。你会看到令人难以置信的舞蹈动作。

![](media/cc88f6c785476d7ae8f0c78416aea68c.jpg)

### 项目 7: 跟随

![](media/d422cd0910f9b8768522af632b2990f0.jpg)

1.  设计思路：

在以上章节中，我们介绍了如何利用超声波传感器检测前方障碍物距离。同时对青蛙机器人的多种动作进行了操作。在该设计思路中，首先用超声波传感器测量前方障碍物的距离，然后根据距离值来控制机器人的运动方式，从而实现跟随功能。

超声波跟随的具体逻辑如下图所示:









|检测|超声波测试前方障碍物距离|distance（单位：cm）|
|-|-|-|
|设置|青蛙机器人初始站立||
|条件|distance＞20并且distance＜60||
|状态|机器人前进1步（速度为2）||
|条件|distance＞10并且distance≤20||
|distance≥60||
|状态|站立停止||
|条件|distance≤10||
|状态|后退1步（速度为2）||

</tbody>
</table>

在设计思路的基础上，可以开始制作带有超声波传感器的障碍物跟踪机器人。参照下面的接线图和测试代码.

2.  接线图:

将 Nano ch340主板堆叠到Nano
扩展板上；分别将4个舵机连接到数字引脚2、3、4、5。

![](media/c66eedfaeb982e07648a554f7ce14d7f.png)

3.  测试代码:

```
##include <Servo.h>
##include <Oscillator.h>
##include <EEPROM.h>
##define N_SERVOS 4
//-- 第一步：配置连接舵机的引脚
/*
         ---------------
        |     O   O     |
        |---------------|
YR 3==> |               | <== YL 2
         ---------------
            ||     ||
            ||     ||
RR 5==>   -----   ------  <== RL 4
         |-----   ------|
*/
##define EEPROM_TRIM false

//调整开始舵机的角度 (注意：这里必须调整)
##define TRIM_RR (-5)  //right02
##define TRIM_RL 5  //left02
##define TRIM_YR (-5)  //right01
##define TRIM_YL 0  //left01

//舵机引脚
##define PIN_RR 5
##define PIN_RL 4
##define PIN_YR 3
##define PIN_YL 2
##define INTERVALTIME 10.0
Oscillator servo[N_SERVOS];

##include "SR04.h"
##define TRIG_PIN 6  //超声波发送引脚
##define ECHO_PIN 7  //超声波接收引脚
SR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);
long a;
int i = 0;
int val = 0;

//各函数声明
void goingUp(int tempo);
void drunk (int tempo);
void noGravity(int tempo);
void kickLeft(int tempo);
void kickRight(int tempo);
void run(int steps, int T=500);
void walk(int steps, int T=1000);
void backyard(int steps, int T=3000);
void backyardSlow(int steps, int T=5000);
void turnLeft(int steps, int T=3000);
void turnRight(int steps, int T=3000);
void moonWalkLeft(int steps, int T=1000);
void moonWalkRight(int steps, int T=1000);
void crusaito(int steps, int T=1000);
void swing(int steps, int T=1000);
void upDown(int steps, int T=1000);
void flapping(int steps, int T=1000);

int t=495;
double pause=0;

volatile int distance;  //整数变量，用于存放超声波传感器接收到的距离值

//机器人停止
void Stop()
{
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
}

//机器人后退
 void backyard(int steps, int T)
{
  int A[4]= {15, 15, 30, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人前进
 void walk(int steps, int T)
{
  int A[4]= {15, 15, 30, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){
  for (int i=0; i<4; i++) {
    servo[i].SetO(O[i]);
    servo[i].SetA(A[i]);
    servo[i].SetT(T);
    servo[i].SetPh(phase_diff[i]);
  }
  double ref=millis();
   for (double x=ref; x<T+ref; x=millis()){
     for (int i=0; i<4; i++){
        servo[i].refresh();
     }
  }
}

unsigned long final_time;
unsigned long interval_time;
int oneTime;
int iteration;
float increment[N_SERVOS];
int oldPosition[]={90,90,90,90};

void moveNServos(int time, int  newPosition[]){
  for(int i=0;i<N_SERVOS;i++) increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);
  final_time =  millis() + time;
  iteration = 1;
  while(millis() < final_time){ //Javi del futuro cambia esto
      interval_time = millis()+INTERVALTIME;
      oneTime=0;
      while(millis()<interval_time){
          if(oneTime<1){
              for(int i=0;i<N_SERVOS;i++){
                  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i]));
              }
              iteration++;
              oneTime++;
          }
      }
  }

  for(int i=0;i<N_SERVOS;i++){
    oldPosition[i] = newPosition[i];
  }
}

float checkdistance() {  //测距函数
  // 产生一个10us的高脉冲去触发TrigPin
  digitalWrite(6, LOW);  //设置引脚6的输出电压为低电平
  delayMicroseconds(2);  //延迟2微秒
  digitalWrite(6, HIGH);  //设置引脚6的输出电压为高电平
  delayMicroseconds(10);  //延迟10微秒
  digitalWrite(6, LOW);  //设置引脚6的输出电压为低电平
  // 检测脉冲宽度，并计算出距离
  float distance = pulseIn(7, HIGH) / 58.00; // 读取引脚7上的高电平脉冲，最大脉冲时间除以58.00，并且把结果以浮动值形式赋值给distance变量
  delay(10);  // 延迟10毫秒
  return distance;  //返回距离值
}

void setup(){
  distance = 0;
  Serial.begin(9600);
  Serial.begin(9600);
  servo[0].attach(PIN_RR);
  servo[1].attach(PIN_RL);
  servo[2].attach(PIN_YR);
  servo[3].attach(PIN_YL);
  int trim;
  if(EEPROM_TRIM){
    for(int x=0;x<4;x++){
      trim=EEPROM.read(x);
      if(trim>128)trim=trim-256;
      Serial.print("TRIM ");
      Serial.print(x);
      Serial.print(" en ");
      Serial.println(trim);
      servo[x].SetTrim(trim);
    }
  }
  else{
    servo[0].SetTrim(TRIM_RR);
    servo[1].SetTrim(TRIM_RL);
    servo[2].SetTrim(TRIM_YR);
    servo[3].SetTrim(TRIM_YL);
  }
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
  pinMode(6, OUTPUT);    //将数字引脚6初始化为输出模式，接超声波传感器的Trig
  pinMode(7, INPUT);     //将数字引脚7初始化为输入模式，接超声波传感器的Echo
  Serial.begin(9600);     //打开串行端口，将数据传输速率设置为9600bps
}

void loop(){
  distance = checkdistance();  //将checkdistance()值赋给于变量distance
  Serial.println(distance);  //通过串口换行输出checkdistance()值
  if (distance > 20 && distance < 60) {  //如果条件distance > 20且distance < 60成立时
    walk(1,2*t);  //以2*t的速度前进1步

  } else if (distance > 10 && distance <= 20) {  //否则如果条件distance > 10且distance <= 20成立时
    Stop();      //停止
  } else if (distance <= 10) {  //否则如果条件distance <= 10 成立时
    backyard(1,2*t);  //以2*t的速度后退1步
  } else {  //否则以上条件都未成立时
    Stop();  //停止

  }

}
```


(注意：应先上传代码成功，再插入蓝牙模块。否则，代码上传失败。)

4.  测试结果：

上传代码完成，按下Nano扩展板上的Power_Switch按键后，青蛙机器人会随着前面的障碍物移动。

![](media/5bd66d4c41559d3f0e3f30ce629659e2.jpg)

### 项目 8: 避障

![](media/d422cd0910f9b8768522af632b2990f0.jpg)

1.  设计思路：

在以上章节中，我们利用超声波传感器检测前方障碍物距离来控制青蛙实现跟随功能。那么在本实验的设计思路中，我们用超声波传感器测量前方障碍物的距离，然后根据距离值来控制机器人的运动方式，从而实现避障功能。

超声波避障的具体逻辑如下图所示:









|检测|超声波测试前方障碍物距离|distance（单位：cm）|
|-|-|-|
|设置|青蛙机器人初始站立||
|条件|distance≥10||
|状态|机器人前进1步（速度为2）||
|条件|distance＜10||
|状态|左转弯3步（速度为3）||

</tbody>
</table>

在设计思路的基础上，可以开始制作带有超声波传感器的障碍物避障机器人。参照下面的接线图和测试代码.

2.  接线图:

将 Nano ch340主板堆叠到Nano
扩展板上；分别将4个舵机连接到数字引脚2、3、4、5。

![](media/c66eedfaeb982e07648a554f7ce14d7f.png)

3.  测试代码:

4个舵机、1个超声波传感器和电源连接良好。在超声波测量距离的情况下要实现以下功能，我们要做到以下几点：

（1）代码编写步骤：

```
##include <Servo.h>
##include <Oscillator.h>
##include <EEPROM.h>
##define N_SERVOS 4
//-- First step: Configure the pins where the servos are attached
/*
         ---------------
        |     O   O     |
        |---------------|
YR 3==> |               | <== YL 2
         ---------------
            ||     ||
            ||     ||
RR 5==>   -----   ------  <== RL 4
         |-----   ------|
*/
##define EEPROM_TRIM false
//调整开始舵机的角度 (注意：这里必须调整)
##define TRIM_RR (-5)  //right02
##define TRIM_RL 5  //left02
##define TRIM_YR (-5)  //right01
##define TRIM_YL 0  //left01
//舵机引脚
##define PIN_RR 5
##define PIN_RL 4
##define PIN_YR 3
##define PIN_YL 2
##define INTERVALTIME 10.0
Oscillator servo[N_SERVOS];
##include "SR04.h"
##define TRIG_PIN 6  //超声波发送引脚
##define ECHO_PIN 7  //超声波接收引脚
SR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);
long a;
int i = 0;
int val = 0;
volatile int distance;

//各函数声明
void goingUp(int tempo);
void drunk (int tempo);
void noGravity(int tempo);
void kickLeft(int tempo);
void kickRight(int tempo);
void run(int steps, int T=500);
void walk(int steps, int T=1000);
void backyard(int steps, int T=3000);
void backyardSlow(int steps, int T=5000);
void turnLeft(int steps, int T=3000);
void turnRight(int steps, int T=3000);
void moonWalkLeft(int steps, int T=1000);
void moonWalkRight(int steps, int T=1000);
void crusaito(int steps, int T=1000);
void swing(int steps, int T=1000);
void upDown(int steps, int T=1000);
void flapping(int steps, int T=1000);
int t=495;
double pause=0;

void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){
  for (int i=0; i<4; i++) {
    servo[i].SetO(O[i]);
    servo[i].SetA(A[i]);
    servo[i].SetT(T);
    servo[i].SetPh(phase_diff[i]);
  }
  double ref=millis();
   for (double x=ref; x<T+ref; x=millis()){
     for (int i=0; i<4; i++){
        servo[i].refresh();
     }
  }
}

unsigned long final_time;
unsigned long interval_time;
int oneTime;
int iteration;
float increment[N_SERVOS];
int oldPosition[]={90,90,90,90};

void moveNServos(int time, int  newPosition[]){
  for(int i=0;i<N_SERVOS;i++) increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);
  final_time =  millis() + time;
  iteration = 1;
  while(millis() < final_time){ //Javi del futuro cambia esto
      interval_time = millis()+INTERVALTIME;
      oneTime=0;
      while(millis()<interval_time){
          if(oneTime<1){
              for(int i=0;i<N_SERVOS;i++){
                  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i]));
              }
              iteration++;
              oneTime++;
          }
      }
  }

  for(int i=0;i<N_SERVOS;i++){
    oldPosition[i] = newPosition[i];
  }
}

float checkdistance() {
  digitalWrite(6, LOW);
  delayMicroseconds(2);
  digitalWrite(6, HIGH);
  delayMicroseconds(10);
  digitalWrite(6, LOW);
  float distance = pulseIn(7, HIGH) / 58.00;
  delay(10);
  return distance;
}

 void walk(int steps, int T)
{
  int A[4]= {15, 15, 30, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

 void turnLeft(int steps, int T)
{
  int A[4]= {20, 20, 10, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

void setup(){
  Serial.begin(9600);
  distance = 0;
  Serial.begin(9600);
  servo[0].attach(PIN_RR);
  servo[1].attach(PIN_RL);
  servo[2].attach(PIN_YR);
  servo[3].attach(PIN_YL);
  int trim;
  if(EEPROM_TRIM){
    for(int x=0;x<4;x++){
      trim=EEPROM.read(x);
      if(trim>128)trim=trim-256;
      Serial.print("TRIM ");
      Serial.print(x);
      Serial.print(" en ");
      Serial.println(trim);
      servo[x].SetTrim(trim);
    }
  }
  else{
    servo[0].SetTrim(TRIM_RR);
    servo[1].SetTrim(TRIM_RL);
    servo[2].SetTrim(TRIM_YR);
    servo[3].SetTrim(TRIM_YL);
  }
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
  pinMode(6, OUTPUT);
  pinMode(7, INPUT);
}
void loop(){
  distance = checkdistance();
  Serial.println(distance);
  if (distance >= 10) {
    walk(1,2*t);
  } else {
    turnLeft(3,3*t);
  }
}
```





4.  测试结果：

上传代码完成，按下Nano扩展板上的Power_Switch按键后，青蛙机器人根据前面的障碍物的距离而左转弯。

![](media/47f54820a9d81173784a4e2c8eebd0ec.png)

### 项目 9: 蓝牙控制

![](media/d68b34e787e37c315ff23dee5aa79f38.jpg)

1.  简介：

我们现在准备给青蛙机器人另一种能力——蓝牙遥控!
对于一个智能机器人来说，应该有一个控制终端和一个被控制终端。在本项目实验中，我们使用手机作为控制台(主机)，与机器人连接的DX-BT24 5.1蓝牙模块（从机）作为被控制终端。使用时，我们需要在手机上安装一个APP，连接DX-BT24 5.1蓝牙模块，点击蓝牙APP上的按钮，就可以导航机器人的多种动作。同时在串口显示器上显示每个按键的控制字符。

#### DX-BT24 5.1蓝牙模块![](media/7a06e07e702bfdd7b6034da9f11d870b.png)

![](media/a0ce655633ca5cbffa9918fc6d230bec.png)

（1）描述：

DX-BT24 5.1蓝牙模块是为智能无线数据传输而打造，采用英国DAILOG公司14531芯片，配置
256Kb 空间，遵循V5.1 BLE蓝牙规范。支持AT
指令，用户可根据需要更改串口波特率、设备名称等参数，使用灵活。本模块支持
UART
接口，并支持蓝牙串口透传，具有成本低、体积小、功耗低、收发灵敏性高等优点，只需配备少许的外围元件就能实现其强大功能。

（2）技术参数：

蓝牙协议：Bluetooth Specification V5.1 BLE

工作距离：在开放环境中，实现40m超远距离通讯

工作频率：2.4GHz ISM频段

通信接口：UART

蓝牙认证：符合FCC CE ROHS REACH认证标准

串口参数：9600、8数据位、1停止位、无效位、无流控

电源：5V DC

工作温度：–10至+65摄氏度

（3）应用领域:

DX-BT24蓝牙模块同时支持 BT5.1 BLE 协议，可以同具备
BLE 蓝牙功能的 iOS 设备直
接连接，支持后台程序常驻运行。主要用于短距离的数据无线传输领域。避免繁琐的线缆
连接，能直接替代串口线。BT24 模块成功应用领域：

※ 蓝牙无线数据传输； ※ 手机、电脑周边设备； ※ 手持
POS 设备；

※ 医疗设备无线数据传输； ※ 智能家居控制； ※
蓝牙打印机；

※ 蓝牙遥控玩具； ※ 共享单车；

（4）接口说明：



![](media/cd97cf79ff5cdd5bbd78f4cc960d38e5.png)



①STATE：状态脚

②RX：接收脚

③TX：发送脚

④GND：接地脚

⑤VCC：电源脚

⑥EN：使能脚

将蓝牙连接到Keyestudio
Nano扩展板上：








|Keyestudio NANO扩展板|DX-BT24 V5.1 BLE蓝牙模块|
|-|-|
|TX|RXD|
|RX|TXD|
|GND|GND|
|5V|VCC|

</tbody>
</table>

#### 使用蓝牙APP

对于Android 系统:

![](media/d4a989dec12c7ce157f64b6e5f7076ba.png)

① 方法1.扫二维码下载APP  
注意：  
当我们扫码下载的时候需要使用浏览器打开，  
使用微信扫可能无效。

方法2.在浏览器中搜索：[http://8.210.52.206/Frog%20Otto.apk](http://8.210.52.206/Frog Otto.apk)
，即可下载。  
方法3.资料中已提供有Frog Otto.apk文件程序，你可以转移到手机或平板电脑上，点击安装即可。

![](media/f51fc6b4131a7c1f86ca9166d93fb133.png)

② APP安装完成后，点击Frog_Otto图标进入蓝牙APP，界面如下图所示：

![](media/6070584e34eb11992f3704c107497bda.png)

③ 将代码上传至Nano ch340控制板，连接蓝牙模块，蓝牙模块上的LED会闪烁。点击APP上的“CONNECT”选项，搜索蓝牙，HMSoft上出现“connect”。

![](media/ff4469b2988d1798effd48c303849bad.png)

④ 单击“connect”连接蓝牙之后。HMSoft上的“connect”变成“is connected”，蓝牙LED正常开启，说明蓝牙已连接上。

![](media/63cc1e4182d7be2360a7923d1f6c5ea8.png)

对于 iOS 系统:

1.  打开 APP商店。       ![](media/29c5a8fc3e39ca5259f31baf812ef041.png)

2.  点击搜索，搜索Frog Otto，下载搜索到的APP。

![](media/ef5c55343d214c9b6be0e7147fb43b54.png)

3.  点击打开Frog Otto。

![](media/398698470a5a3f3cc829dfe4c519978e.png)

4.  上传代码完成，连接蓝牙模块，蓝牙模块上的LED会闪烁。打开蓝牙APP，点击APP左上角的“CONNECT”按钮，搜索蓝牙，HMSoft上出现“connect”。

![](media/ca2fad052685e2c6d4810d2bf23538bc.png)

![](media/2f287fa94f4e79691414de4d514d08fc.png)

1.  单击“connect”连接蓝牙之后。HMSoft上的“connect”变成“is     connected”，蓝牙LED正常开启，说明蓝牙已连接上。

![](media/66badd1ca7dbcf9536de43b447164141.png)

#### 蓝牙测试

1.接线图:

先将 Nano ch340 主板堆叠到Nano
扩展板上，然后将蓝牙模块连接到Keyestudio
Nano扩展板上：








|Keyestudio NANO扩展板|DX-BT24 V5.1 BLE蓝牙模块|
|-|-|
|TX|RXD|
|RX|TXD|
|GND|GND|
|5V|VCC|

</tbody>
</table>

![](media/20504d3206b9b8d374a4a9ecae4f0188.png)

2.  测试代码:

下载APP，并将蓝牙模块和电源连接好，我们需要编写程序代码来了解蓝牙模块发出的是什么信号.

```
char bluetooth_val;  //字符变量，用于存放蓝牙接收到的值

void setup(){
  Serial.begin(9600);  //打开串行端口，将数据传输速率设置为9600bps
  Serial.begin(9600);
}

void loop(){
  if (Serial.available())  //判断串口缓存区是否有数据
  {
    bluetooth_val = Serial.read();  //读取串口缓存区的数据
    Serial.println(bluetooth_val);  //打印出来
  }

}
```

3. 测试结果：

①在Keyes nano ch340开发板上上传测试代码代码成功。

②将开发板堆叠在扩展板，按照接线图接线。

③利用mini USB线将Keyes nano ch340开发板连接到电脑上。

④在手机中安装好APP。

⑤上电后，按下扩展板上Power_Switch按键后，蓝牙指示灯闪烁，进入手机APP连接蓝牙。

⑥蓝牙连接成功后，点击![](media/0db3b8e677eafd049eb411a747691e32.png)打开串口监视器，设置波特率为9600。

⑦对准蓝牙模块按下APP按键，我们可以看到APP按键对应的控制字符，如下图。

![](media/47df75b76354e1bfb39033cb86a278e7.png)

#### 蓝牙控制青蛙机器人 

1.  设计思路:

我们可以结合APP上每个按键的控制字符，扩展到控制4个舵机的角度，从而使机器人移动.

蓝牙APP界面如下所示：

![](media/6070584e34eb11992f3704c107497bda.png)









|按钮|功能|
|-|-|
|![](media/f21f815bd6f7c65c30f50fdb5072b755.png)|配对连接DX-BT24蓝牙模块|
|![](media/b2a6c7930a6d209a474d1cf9c046d074.png)|进入蓝牙控制界面|
|![](media/c05b850ad0fdbe4f48543b3c06140cd4.png)|断开蓝牙连接|
|![](media/fe231f85c445acccf645384091bbcb65.png)|控制字符|功能|
|按住发送“F” 松开发送“S”|按住，小青蛙前进； 松开，停止。|
|![](media/01048cbcd049d814e1f70887e7a530c4.png)|按住发送“B” 松开发送“S”|按住，小青蛙后退； 松开，停止。|
|![](media/9632bba59b5df0cae04ab24576e160ce.png)|按住发送“L” 松开发送“S”|按住，小青蛙左转； 松开，停止。|
|![](media/e80859bae90a0e5504e43d929691117a.png)|按住发送“R” 松开发送“S”|按住，小青蛙右转； 松开，停止。|
|![](media/a98e1d7b57d03be394a38905561179c3.png)|按住发送“1” 松开发送“S”|按住，左侧漫步； 松开，停止。|
|![](media/af522bfd1c785730a355722bc3e86215.png)|按住发送“2” 松开发送“S”|按住，右侧漫步； 松开，停止。|
|![](media/6190ab224bfc326b08be2a54a2047a36.png)|按住发送“3” 松开发送“S”|按住，右侧跳步； 松开，停止。|
|![](media/6f5b3386172f3d9d407280e15836305b.png)|按住发送“4” 松开发送“S”|按住，左侧跳步； 松开，停止。|
|![](media/6c835a7ab04ee9955977d4616ed9a358.png)|按住发送“6” 松开发送“S”|点击，往右倾斜一次，再慢慢回复|
|![](media/f5f7f7ffdb61fad48b819a515e0bba87.png)|按住发送“7” 松开发送“S”|点击，滑步一次|
|![](media/4fc5e33179e8bd356effb7be71e6253d.png)|按住发送“8” 松开发送“S”|按住，摩擦摩擦； 松开，停止。|
|![](media/110dafca00a4431505ada7f73491638b.png)|按住发送“G” 松开发送“S”|按住，左右摆动； 松开，停止。|
|![](media/fd0803d3881e992f79106fbaa6443b14.png)|按住发送“9” 松开发送“S”|按住，跳； 松开，停止。|
|![](media/5a5cc643091ed79b07d2748418fd4eb9.png)|按住发送“H” 松开发送“S”|按住，游泳动作； 松开，停止。|
|![](media/9898df3bc5434f72e01cfddcaaa86160.png)|按住发送“J” 松开发送“S”|点击，慢慢踮起脚，再放下。|
|![](media/003d48d168b18a99d58965b1e8c16e1e.png)|按住发送“P” 松开发送“S”|点击，跳舞。|
|![](media/b4e7f9883b334b1a32cb5b058ba429f0.png)|点击一次发送“U” 再点击一次发送“S”|开启超声波跟随。|
|![](media/1b3b0fb97d1b12891db69fc4acafa8eb.png)|/|点击一次开启手机姿态控制；再点击一次关闭。|

</tbody>
</table>

在思路设计的基础上，可以开始构建蓝牙遥控青蛙机器人，参照下面的接线图和测试代码。

2. 接线图:

先将Nano ch340 主板堆叠到 Nano 扩展板上，然后将蓝牙连接到Keyestudio Nano扩展板上：








|Keyestudio NANO扩展板|DX-BT24 V5.1 BLE蓝牙模块|
|-|-|
|TX|RXD|
|RX|TXD|
|GND|GND|
|5V|VCC|

</tbody>
</table>

分别将4个舵机连接到数字引脚5、4、3、2。

![](media/c3c02a1319bad0aece5882b7117ee78d.png)

3. 测试代码:

```
##include <Servo.h>
##include <Oscillator.h>
##include <EEPROM.h>
##define N_SERVOS 4
//-- 第一步：配置连接舵机的引脚
/*
         ---------------
        |     O   O     |
        |---------------|
YR 3==> |               | <== YL 2
         ---------------
            ||     ||
            ||     ||
RR 5==>   -----   ------  <== RL 4
         |-----   ------|
*/
##define EEPROM_TRIM false

//调整开始舵机的角度 (注意：这里必须调整)
##define TRIM_RR (-5)  //right02
##define TRIM_RL 5  //left02
##define TRIM_YR (-5)  //right01
##define TRIM_YL 0  //left01

//舵机引脚
##define PIN_RR 5
##define PIN_RL 4
##define PIN_YR 3
##define PIN_YL 2
##define INTERVALTIME 10.0
Oscillator servo[N_SERVOS];

##include "SR04.h"
##define TRIG_PIN 6  //超声波发送引脚
##define ECHO_PIN 7  //超声波发送引脚
SR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);
long a;
int i = 0;
int val = 0;

//各函数声明
void goingUp(int tempo);
void drunk (int tempo);
void noGravity(int tempo);
void kickLeft(int tempo);
void kickRight(int tempo);
void run(int steps, int T=500);
void walk(int steps, int T=1000);
void backyard(int steps, int T=3000);
void backyardSlow(int steps, int T=5000);
void turnLeft(int steps, int T=3000);
void turnRight(int steps, int T=3000);
void moonWalkLeft(int steps, int T=1000);
void moonWalkRight(int steps, int T=1000);
void crusaito(int steps, int T=1000);
void swing(int steps, int T=1000);
void upDown(int steps, int T=1000);
void flapping(int steps, int T=1000);

int t=495;
double pause=0;

//机器人停止
void Stop()
{
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
}

//机器人后退
 void backyard(int steps, int T)
{
  int A[4]= {15, 15, 30, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

char bluetooth_val;   //字符变量，用于存放蓝牙接收到的值

//机器人左转
 void turnLeft(int steps, int T)
{
  int A[4]= {20, 20, 10, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人右转
 void turnRight(int steps, int T)
{
  int A[4]= {20, 20, 30, 10};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人前进
 void walk(int steps, int T)
{
  int A[4]= {15, 15, 30, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){
  for (int i=0; i<4; i++) {
    servo[i].SetO(O[i]);
    servo[i].SetA(A[i]);
    servo[i].SetT(T);
    servo[i].SetPh(phase_diff[i]);
  }
  double ref=millis();
   for (double x=ref; x<T+ref; x=millis()){
     for (int i=0; i<4; i++){
        servo[i].refresh();
     }
  }
}

unsigned long final_time;
unsigned long interval_time;
int oneTime;
int iteration;
float increment[N_SERVOS];
int oldPosition[]={90,90,90,90};

void moveNServos(int time, int  newPosition[]){
  for(int i=0;i<N_SERVOS;i++) increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);
  final_time =  millis() + time;
  iteration = 1;
  while(millis() < final_time){ //Javi del futuro cambia esto
      interval_time = millis()+INTERVALTIME;
      oneTime=0;
      while(millis()<interval_time){
          if(oneTime<1){
              for(int i=0;i<N_SERVOS;i++){
                  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i]));
              }
              iteration++;
              oneTime++;
          }
      }
  }

  for(int i=0;i<N_SERVOS;i++){
    oldPosition[i] = newPosition[i];
  }
}

void setup(){
  Serial.begin(9600);
  servo[0].attach(PIN_RR);
  servo[1].attach(PIN_RL);
  servo[2].attach(PIN_YR);
  servo[3].attach(PIN_YL);
  int trim;
  if(EEPROM_TRIM){
    for(int x=0;x<4;x++){
      trim=EEPROM.read(x);
      if(trim>128)trim=trim-256;
      Serial.print("TRIM ");
      Serial.print(x);
      Serial.print(" en ");
      Serial.println(trim);
      servo[x].SetTrim(trim);
    }
  }
  else{
    servo[0].SetTrim(TRIM_RR);
    servo[1].SetTrim(TRIM_RL);
    servo[2].SetTrim(TRIM_YR);
    servo[3].SetTrim(TRIM_YL);
  }
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
  Serial.begin(9600);
  Serial.begin(9600);
}

void loop(){
  if (Serial.available())  //判断串口缓存区是否有数据
  {
    bluetooth_val = Serial.read();  //读取串口缓存区的数据
    Serial.println(bluetooth_val);  //打印出来
  }
  switch (bluetooth_val) {  //变量bluetooth_val的值与各个case逐个进行比较
   case 'F':                //当变量bluetooth_val的值是'F'时
    walk(1,2*t);            //以2*t的速度前进1步
    break;                  //退出switch-case语句体
   case 'B':                //当变量bluetooth_val的值是'B'时
    backyard(1,2*t);        //以2*t的速度后退1步
    break;                   
   case 'L':                //当变量bluetooth_val的值是'L'时
    turnLeft(1,2*t);        //以2*t的速度左转1步 
    break;                   
   case 'R':                 //当变量bluetooth_val的值是'R'时
    turnRight(1,2*t);        //以2*t的速度右转1步 
    break;                  
   case 'S':                //当变量bluetooth_val的值是'S'时
    Stop();                 //停止
    break;                   
  }

}
```


（注意：应先上传代码成功，再插入蓝牙模块。否则，代码上传失败。）

4. 测试结果：

①在Keyes nano ch340开发板上上传代码成功。

②将keyes nano ch340开发板堆叠在Nano扩展板，按照接线图接线。

③使用mini USB线将Keyes nano ch340主板 与电脑连接上。

④在手机中安装好对应APP。

⑤上电后，按下Nano扩展板上的Power_Switch按键后，蓝牙指示灯闪烁，进入手机APP连接蓝牙。

⑥连接好蓝牙后，对准蓝牙模块，轻按蓝牙APP上的按键控制青蛙机器人，按住APP的![](media/8a9b800dbaa01916ab1dc2185ba01f22.png)按钮图案，机器人前进；按住APP![](media/f68db4be0d456b622fcd7ed623926983.png)按钮图案，机器人后退；按住APP![](media/35ccd61d0c0a8fb253406e546295fae3.png)按钮图案，机器人左转；按住APP![](media/6fae103488073bfb0fc6f82f3ecabcfb.png)按钮图案，机器人右转；松开所有按钮图案后，机器人站立停止。

![](media/fd5c2262d351d50193eb2606b3056ec2.jpg)

### 项目 10: 蓝牙多功能 

1.  设计思路：

如何将我们所学到的青蛙机器人的多种功能结合起来?在这个思路设计中，我们编写完整的代码来通过蓝牙APP实现不同功能的切换，非常简单地。

![](media/82c2fe68a36af5b696312207e0b0ba22.jpg)

2.  接线图:

将Nano ch340主板堆叠到Nano扩展板上；连接超声传感器到Nano扩展板上，VCC引脚到5V(V)，
Trig引脚到数字6 (S)， Echo引脚到数字7 (S)，
GND引脚到GND(G)。分别将4个舵机连接到数字引脚5、4、3、2。插入蓝牙模块引脚RXD, TXD, GND, VCC(RXD到TX, TXD到RX, GND到GND, VCC到5V)

![](media/75307f2e2faf6b608474109c7af1c5c4.png)

3.测试代码:

```
##include <Servo.h>
##include <Oscillator.h>
##include <EEPROM.h>
##define N_SERVOS 4
//-- 第一步：配置连接舵机的引脚
/*
         ---------------
        |     O   O     |
        |---------------|
YR 3==> |               | <== YL 2
         ---------------
            ||     ||
            ||     ||
RR 5==>   -----   ------  <== RL 4
         |-----   ------|
*/
##define EEPROM_TRIM false

//调整开始舵机的角度 (注意：这里必须调整)
##define TRIM_RR (-5)  //right02
##define TRIM_RL 5  //left02
##define TRIM_YR (-5)  //right01
##define TRIM_YL 0  //left01

//舵机引脚
##define PIN_RR 5
##define PIN_RL 4
##define PIN_YR 3
##define PIN_YL 2
##define INTERVALTIME 10.0
Oscillator servo[N_SERVOS];

##include "SR04.h"
##define TRIG_PIN 6    //超声波发送引脚
##define ECHO_PIN 7    //超声波接收引脚
SR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);
long a;
int i = 0;
int val = 0;

//各函数声明
void goingUp(int tempo);
void drunk (int tempo);
void noGravity(int tempo);
void kickLeft(int tempo);
void kickRight(int tempo);
void run(int steps, int T=500);
void walk(int steps, int T=1000);
void backyard(int steps, int T=3000);
void backyardSlow(int steps, int T=5000);
void turnLeft(int steps, int T=3000);
void turnRight(int steps, int T=3000);
void moonWalkLeft(int steps, int T=1000);
void moonWalkRight(int steps, int T=1000);
void crusaito(int steps, int T=1000);
void swing(int steps, int T=1000);
void upDown(int steps, int T=1000);
void flapping(int steps, int T=1000);
int t=495;
double pause=0;

volatile int distance;  //整数变量，用于存放超声波传感器接收到的距离值
volatile int flag;      //设置整数变量flag

//机器人停止
void Stop()
{
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
}

//机器人后退
 void backyard(int steps, int T)
{
  int A[4]= {15, 15, 30, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

char bluetooth_val;   //字符变量，用于存放蓝牙接收到的值

//机器人左转
 void turnLeft(int steps, int T)
{
  int A[4]= {20, 20, 10, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人右转
 void turnRight(int steps, int T)
{
  int A[4]= {20, 20, 30, 10};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人前进
 void walk(int steps, int T)
{
  int A[4]= {15, 15, 30, 30};
  int O[4] = {0, 0, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){
  for (int i=0; i<4; i++) {
    servo[i].SetO(O[i]);
    servo[i].SetA(A[i]);
    servo[i].SetT(T);
    servo[i].SetPh(phase_diff[i]);
  }
  double ref=millis();
   for (double x=ref; x<T+ref; x=millis()){
     for (int i=0; i<4; i++){
        servo[i].refresh();
     }
  }
}

unsigned long final_time;
unsigned long interval_time;
int oneTime;
int iteration;
float increment[N_SERVOS];
int oldPosition[]={90,90,90,90};

void moveNServos(int time, int  newPosition[]){
  for(int i=0;i<N_SERVOS;i++) increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);
  final_time =  millis() + time;
  iteration = 1;
  while(millis() < final_time){ //Javi del futuro cambia esto
      interval_time = millis()+INTERVALTIME;
      oneTime=0;
      while(millis()<interval_time){
          if(oneTime<1){
              for(int i=0;i<N_SERVOS;i++){
                  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i]));
              }
              iteration++;
              oneTime++;
          }
      }
  }

  for(int i=0;i<N_SERVOS;i++){
    oldPosition[i] = newPosition[i];
  }
}

float checkdistance() {    //测距函数
  // 产生一个10us的高脉冲去触发TrigPin
  digitalWrite(6, LOW);    //设置引脚6的输出电压为低电平
  delayMicroseconds(2);    //延迟2微秒
  digitalWrite(6, HIGH);   //设置引脚6的输出电压为高电平
  delayMicroseconds(10);   //延迟10微秒
  digitalWrite(6, LOW);    //设置引脚6的输出电压为低电平
  // 检测脉冲宽度，并计算出距离
  float distance = pulseIn(7, HIGH) / 58.00;  // 读取引脚7上的高电平脉冲，最大脉冲时间除以58.00，并且把结果以浮动值形式赋值给distance变量
  delay(10);  // 延迟10毫秒
  return distance;  //返回距离值
}

//机器人滑步
void crusaito(int steps, int T){
    int A[4]= {25, 25, 30, 30};
    int O[4] = {- 15, 15, 0, 0};
    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)};
    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人跳舞
void dance() {
  flag = 1;              //变量flag=1         
  while (flag == 1) {    //当变量flag=1时
    goingUp(2*t);        //以2*t的速度慢慢踮起脚
    for (int i = 0; i <= 2; i = i + (1)) { //设置变量i来存储摩擦次数,从0到2，步长为1
      segunda1();  // 机器人摩擦摩擦
    }
    for (int i = 0; i <= 2; i = i + (1)) {  //设置变量i来存储跳动次数,从0到2，步长为1
      jump();  // 机器人跳动
    }
    walk(3,2*t);      //以2*t的速度前进3步
    backyard(3,2*t);  //以2*t的速度后退3步
    crusaito(1,5*t);  //以5*t是速度滑步1步
    crusaito(1,1*t);  //以1*t的速度滑步1步
    crusaito(1,3*t);  //以3*t的速度滑步1步
    for (int i = 0; i <= 2; i = i + (1)) {  //设置变量i来存储摆动次数,从0到2，步长为1
      drunk(4*t);  //以4*t的速度摆动
    }
    moonLEFT(5,2*t);   //以2*t的速度走左太空步5步
    noGravity(2*t);    //以2*t的速度执行失重状态
    swing(5,2*t);      //以2*t速度游泳姿势5步
    moonRight(5,2*t);  //以2*t的速度走右太空步5步
    Stop();            //停止
    kickLeft(t);       //左快步
    for (int i = 0; i <= 2; i = i + (1)) {  //设置变量i来存储跳动次数,从0到2，步长为1
      jump();      //跳动
    } 
    Stop();        //停止
    kickRight(t);  //右快步
    for (int i = 0; i <= 2; i = i + (1)) {  //设置变量i来存储跳动次数,从0到2，步长为1
      jump();  //跳动
    }
    Stop();   //停止
    flag = 0;  //变量flag=0
    bluetooth_val = 'S';  //变量bluetooth_val的值为‘S’
  }
}

//机器人摆动
void drunk (int tempo){
  pause=millis();
  int move1[] = {60,70,90,90};
  int move2[] = {110,120,90,90};
  int move3[] = {60,70,90,90};
  int move4[] = {110,120,90,90};
  moveNServos(tempo*0.235,move1);
  moveNServos(tempo*0.235,move2);
  moveNServos(tempo*0.235,move3);
  moveNServos(tempo*0.235,move4);
  while(millis()<(pause+tempo));
}

//机器人跟随
void follow() {
  flag = 1;              //变量flag=1
  while (flag == 1) {    //当变量flag=1时
    distance = checkdistance();  //将checkdistance()值赋给于变量distance
    if (distance > 20 && distance < 60) {  //如果条件distance > 20且distance < 60成立时
      walk(1,2*t);  //以2*t的速度前进1步

    } else if (distance > 10 && distance < 20) {  //否则如果条件distance > 10且distance <= 20成立时
      Stop();     //停止
    } else if (distance <= 10) {  //否则如果条件distance <= 10 成立时
      backyard(1,2*t);  //以2*t的速度后退1步
    } else {    //否则以上条件都未成立时
      Stop();   //停止

    }
    if (Serial.available())  //判断串口缓存区是否有数据
    {
      bluetooth_val = Serial.read();  //读取串口缓存区的数据
      if (bluetooth_val == 'S') {  //如果变量bluetooth_val的值为‘S’
        flag = 0;  //变量flag = 0

      }
    }
  }
}

//机器人慢慢踮起脚
void goingUp(int tempo){
      pause=millis();
      for(int i=0;i<4;i++) servo[i].SetPosition(90);
      delay(tempo);
      servo[0].SetPosition(80);
      servo[1].SetPosition(100);
      delay(tempo);
      servo[0].SetPosition(70);
      servo[1].SetPosition(110);
      delay(tempo);
      servo[0].SetPosition(60);
      servo[1].SetPosition(120);
      delay(tempo);
      servo[0].SetPosition(50);
      servo[1].SetPosition(130);
      delay(tempo);
      while(millis()<pause+8*t);
}

//机器人跳动
void jump()
{
int move5[4] = {70,110,80,100};
  int move6[4] = {70,110,100,80};
  int move7[4] = {90,90,80,100};
  int move8[4] = {90,90,100,80};
pause=millis();
    moveNServos(t*0.15,move5);
    moveNServos(t*0.15,move6);
    moveNServos(t*0.15,move7);
    moveNServos(t*0.15,move8);
    while(millis()<(pause+t));
  }
  
//机器人左快步
void kickLeft(int tempo){
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
  delay(tempo);
  servo[0].SetPosition(50); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo);
  servo[0].SetPosition(80); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(30); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(80); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(30); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(80); //pie derecho
  servo[1].SetPosition(70); //pie izquiero
  delay(tempo);
}

//机器人右快步
void kickRight(int tempo){
for(int i=0;i<4;i++) servo[i].SetPosition(90);
  delay(tempo);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(130); //pie izquiero
  delay(tempo);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(100); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(150); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(80); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(150); //pie izquiero
  delay(tempo/4);
  servo[0].SetPosition(110); //pie derecho
  servo[1].SetPosition(100); //pie izquiero
  delay(tempo);
}

//机器人左太空步
 void moonLEFT(int steps, int T)
{
  int A[4]= {25, 25, 0, 0};
  int O[4] = {-15, 15, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 - 120), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人右太空步
 void moonRight(int steps, int T)
{
  int A[4]= {25, 25, 0, 0};
  int O[4] = {-15, 15, 0, 0};
  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)};
  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

//机器人失重状态
void noGravity(int tempo){
  int move1[4] = {120,140,90,90};
  int move2[4] = {140,140,90,90};
  int move3[4] = {120,140,90,90};
  int move4[4] = {90,90,90,90};
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
  for(int i=0;i<N_SERVOS;i++) oldPosition[i]=90;
  moveNServos(tempo*2,move1);
  moveNServos(tempo*2,move2);
  delay(tempo*2);
  moveNServos(tempo*2,move3);
  moveNServos(tempo*2,move4);
}

//机器人在地上摩擦摩擦 
void segunda1()
{
int move1[4] = {90,90,80,100};
  int move2[4] = {90,90,100,80};
  int move3[4] = {90,90,80,100};
  int move4[4] = {90,90,100,80};
     pause=millis();
      moveNServos(t*0.15,move1);
      moveNServos(t*0.15,move2);
      moveNServos(t*0.15,move3);
      moveNServos(t*0.15,move4);
      while(millis()<(pause+t));
    }

//机器人游泳姿势
void swing(int steps, int T){
    int A[4]= {15, 15, 8, 8};
    int O[4] = {-A[0], A[1], 0, 0};
    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180), DEG2RAD(90), DEG2RAD(-90)};
    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);
}

void setup(){
  distance = 0;
  flag = 0;
  Serial.begin(9600);
  servo[0].attach(PIN_RR);
  servo[1].attach(PIN_RL);
  servo[2].attach(PIN_YR);
  servo[3].attach(PIN_YL);
  int trim;
  if(EEPROM_TRIM){
    for(int x=0;x<4;x++){
      trim=EEPROM.read(x);
      if(trim>128)trim=trim-256;
      Serial.print("TRIM ");
      Serial.print(x);
      Serial.print(" en ");
      Serial.println(trim);
      servo[x].SetTrim(trim);
    }
  }
  else{
    servo[0].SetTrim(TRIM_RR);
    servo[1].SetTrim(TRIM_RL);
    servo[2].SetTrim(TRIM_YR);
    servo[3].SetTrim(TRIM_YL);
  }
  for(int i=0;i<4;i++) servo[i].SetPosition(90);
  Serial.begin(9600);
  Serial.begin(9600);
  pinMode(6, OUTPUT);
  pinMode(7, INPUT);
}

void loop(){
  if (Serial.available())  //判断串口缓存区是否有数据
  {
    bluetooth_val = Serial.read();  //读取串口缓存区的数据
    Serial.println(bluetooth_val);  //打印出来
  }
  switch (bluetooth_val) {  //变量bluetooth_val的值与各个case逐个进行比较
   case 'F':    //当变量bluetooth_val的值是'F'时
    walk(1,2*t);  //以2*t的速度前进1步
    break;       //退出switch-case语句体
   case 'B':  //当变量bluetooth_val的值是'B'时
    backyard(1,2*t);  //以2*t的速度后退1步
    break;    
   case 'L':  //当变量bluetooth_val的值是'L'时
    turnLeft(1,2*t);  //以2*t的速度左转1步
    break;  
   case 'R':  //当变量bluetooth_val的值是'R'时
    turnRight(1,2*t);  //以2*t的速度右转1步
    break;  
   case 'S':  //当变量bluetooth_val的值是'S'时
    Stop();  //停止
    break;
   case '1':  //当变量bluetooth_val的值是'1'时
    moonLEFT(1,2*t);  //以2*t的速度走左太空步1步
    break;
   case '2':  //当变量bluetooth_val的值是'2'时
    moonRight(1,2*t);  //以2*t的速度走右太空步1步
    break;
   case '3':   //当变量bluetooth_val的值是'3'时
    kickRight(t);  //右快步
    break;
   case '4':  //当变量bluetooth_val的值是'4'时
    kickLeft(t);  //左快步
    break;
   case '6':  //当变量bluetooth_val的值是'6'时
    noGravity(2*t);  //以2*t的速度失重状态中
    break;
   case '7':    //当变量bluetooth_val的值是'7'时
    crusaito(1,5*t);  //以5*t的速度滑步1步
    crusaito(1,1*t);  //以1*t的速度滑步1步
    crusaito(1,3*t);  //以3*t的速度滑步1步
    break;
   case '8':  //当变量bluetooth_val的值是'8'时
    segunda1();  // 机器人摩擦摩擦
    break;
   case 'G':  //当变量bluetooth_val的值是'G'时
    drunk(4*t);  //以4*t的速度摆动
    break;
   case '9':  //当变量bluetooth_val的值是'9'时
    jump();  //跳动
    break;
   case 'H':  //当变量bluetooth_val的值是'H'时
    swing(1,2*t);  //以2*t的速度走游泳姿势1步
    break;
   case 'J':  //当变量bluetooth_val的值是'J'时
    goingUp(2*t);  //以2*t的速度慢慢踮起脚
    break;
   case 'P':  //当变量bluetooth_val的值是'P'时
    dance();  //机器人跳舞
    break;
   case 'U':  //当变量bluetooth_val的值是'U'时
    follow();  //机器人跟随
    break;  
  }

}

```



（注意：应先上传代码成功，再插入蓝牙模块。否则，代码上传失败。）

4. 测试结果：

①在Keyes nano ch340开发板上上传测试代码代码成功。

②将开发板堆叠在扩展板，按照接线图接线。

③使用mini USB线将Keyes nano ch340主板与电脑连接上。

④在手机中安装好对应APP。

⑤上电后，按下扩展板上Power_Switch按键后，蓝牙指示灯闪烁，进入手机APP连接蓝牙。

⑥蓝牙连接成功，蓝牙指示灯常亮，对准蓝牙模块按下APP对应按键，实现对应功能。

![](media/249790b4bac00a94d59dc8def46d8a6b.jpg)





