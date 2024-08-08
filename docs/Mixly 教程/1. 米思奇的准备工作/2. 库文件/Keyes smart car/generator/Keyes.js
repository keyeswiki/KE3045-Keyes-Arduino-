'use strict';

goog.provide('Blockly.Arduino.Keyes');

goog.require('Blockly.Arduino');

//////////////////////////////////2WD-Car////////////////////////////////////////////

/////////////////////////led///////////////////////
Blockly.Arduino.desk_led = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_led'] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};


////////////////////////////////Desktop_Car//////////////////////////
Blockly.Arduino.Desktop_Car = function() {
  
  var value_speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //var speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var dropdown_type = this.getFieldValue('direction');

  Blockly.Arduino.definitions_['1front'] = 'void front() \n{\n  digitalWrite(4,HIGH);\n  analogWrite(5,'+value_speed+');\n  digitalWrite(2,HIGH);\n  analogWrite(9,'+value_speed+');\n}\n';
  Blockly.Arduino.definitions_['2back'] = 'void back() \n{\n  digitalWrite(4,HIGH);\n  analogWrite(5,'+value_speed+');\n  digitalWrite(2,HIGH);\n  analogWrite(9,'+value_speed+');\n}\n';

  var code = '';
  if (dropdown_type == "front") code += 'front();';
  if (dropdown_type == "back") code += 'back();';
  if (dropdown_type == "left") code += 'left();';
  if (dropdown_type == "right") code += 'right();';

  //Blockly.Arduino.setups_['setup_front_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
   //var code = '  digitalWrite(4,HIGH);\n  analogWrite(5,'+value_front+');\n  digitalWrite(2,HIGH);\n  analogWrite(9,'+value_front+');'; 
  return code;
};

////////////////////////////////front//////////////////////////
Blockly.Arduino.FRONT = function() {
  
  var value_front = Blockly.Arduino.valueToCode(this, 'speed_F', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';

   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,'+value_front+');\ndigitalWrite(2,HIGH);\nanalogWrite(6,'+value_front+');\n'; 
  return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.BACK = function() {
  
  var value_back = Blockly.Arduino.valueToCode(this, 'speed_B', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,'+value_back+');\ndigitalWrite(2,LOW);\nanalogWrite(6,'+value_back+');\n'; 
  return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.LEFT = function() {
  
  var value_left = Blockly.Arduino.valueToCode(this, 'speed_L', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,'+value_left+');\ndigitalWrite(2,HIGH);\nanalogWrite(6,'+value_left+');\n'; 
  return code;
};

////////////////////////////////turn_left//////////////////////////
Blockly.Arduino.TURN_LEFT = function() {
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,100);\ndigitalWrite(2,HIGH);\nanalogWrite(6,180);\n'; 
  return code;
};


////////////////////////////////right//////////////////////////
Blockly.Arduino.RIGHT = function() {
  
  var value_right = Blockly.Arduino.valueToCode(this, 'speed_R', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,'+value_right+');\ndigitalWrite(2,LOW);\nanalogWrite(6,'+value_right+');\n'; 
  return code;
};

////////////////////////////////turn_right//////////////////////////
Blockly.Arduino.TURN_RIGHT = function() {
  
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,180);\ndigitalWrite(2,HIGH);\nanalogWrite(6,100);\n'; 
  return code;
};

////////////////////////////////stop//////////////////////////
Blockly.Arduino.STOP = function() {
  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(6,0);\n'; 
  return code;
};

//////////////////////////红外避障///////////////////////////
Blockly.Arduino.desk_avoid = function() {
  var dropdown_type = this.getFieldValue('avoid02');
  Blockly.Arduino.setups_['setup_output_left'] = 'pinMode(A1, INPUT);';
  Blockly.Arduino.setups_['setup_output_right'] = 'pinMode(A2, INPUT);';

  var code = '';
  if (dropdown_type == "left") code += 'digitalRead(A1)';
  if (dropdown_type == "right") code += 'digitalRead(A2)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

///////////////////////desk超声波//////////////////////
Blockly.Arduino.desk_sr04 = function () {
    Blockly.Arduino.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
  + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
  + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
  + '  digitalWrite(12, LOW);\n'
  + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
  + '  delay(10);\n' + '  return distance;\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
};

//////////////////////////循迹模块///////////////////////////
Blockly.Arduino.desk_track = function() {
  var dropdown_type = this.getFieldValue('track');
  Blockly.Arduino.setups_['setup_output_trackleft'] = 'pinMode(11, INPUT);';
  Blockly.Arduino.setups_['setup_output_trackcenter'] = 'pinMode(7, INPUT);';
  Blockly.Arduino.setups_['setup_output_trackright'] = 'pinMode(8, INPUT);';

  var code = '';
  if (dropdown_type == "track_left") code += 'digitalRead(11)';
  if (dropdown_type == "track_center") code += 'digitalRead(7)';
  if (dropdown_type == "track_right") code += 'digitalRead(8)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

////////////////////蜂鸣器//////////////////////
Blockly.Arduino.tone_notes = function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.desk_buzzer=function(){
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   Blockly.Arduino.setups_['setup_output_3'] = 'pinMode(3, OUTPUT);';
   var code = ""; 
   /*if(window.isNaN(dropdown_pin)){
      code = code+'pinMode(11, OUTPUT);\n';
   }else{
      Blockly.Arduino.setups_['setup_output_11'] = 'pinMode(11, OUTPUT);';
   }*/
   code += "tone(3,"+fre+");\n";
   return code;
};

//////////////////////////music///////////////////////////
Blockly.Arduino.desk_music = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['1include_music'] = '#include<music.h>';
  //Blockly.Arduino.definitions_['2include_buzzer_pin'] = 'int buzzer_pin = '+dropdown_pin+';';
  Blockly.Arduino.definitions_['2include_buzzer_pin'] = 'int buzzer_pin = 3;';
  Blockly.Arduino.definitions_['3include_music2'] = 'music Music(buzzer_pin);';

  Blockly.Arduino.setups_['setup_output_music_pin'] = 'pinMode(buzzer_pin, OUTPUT);';

  var dropdown_type = this.getFieldValue('play');
  var code = '';
  if (dropdown_type == "Birthday") code += 'Music.birthday();\n';
  if (dropdown_type == "Ode to Joy") code += 'Music.Ode_to_Joy();\n';
  if (dropdown_type == "tetris") code += 'Music.tetris();';
  if (dropdown_type == "star_war") code += 'Music.star_war_tone();';
  if (dropdown_type == "super_mario") code += 'Music.super_mario();';
  if (dropdown_type == "christmas") code += 'Music.christmas();';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.desk_notone=function(){
   //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   Blockly.Arduino.setups_['setup_output'] = 'pinMode(3, OUTPUT);';
   var code='';
   code += "noTone(3);\n";
   return code;
};

//////////////////music/////////////////////////



///////////////////////红外接收///////////////////
Blockly.Arduino.desk_ir_r = function () {
    var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
       Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['1include_IRremote'] = '#include <IRremoteTank.h>\n';
    //Blockly.Arduino.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    Blockly.Arduino.definitions_['2var_ir_recv_A3'] = 'IRrecv irrecv(A3);\ndecode_results results;\n';
    Blockly.Arduino.setups_['setup_ir_recv_A3'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + '=results.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results.decode_type>=1&&results.decode_type<=13){\n';
    code += '    type=typelist[results.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.desk_bluetooth = function () {
  var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE);
  var val = this.getFieldValue('VAL');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  //var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);


  //Blockly.Arduino.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
  //Blockly.Arduino.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
  Blockly.Arduino.definitions_['1char'] = 'char '+val+';\n';

   var code = 'if (Serial.available())\n{\n  '+val+' = Serial.read();\n';
   code += branch;
   code += '}\n';
  return code;
};

///////////////////////////////Desktop_Car/////////////////////////////////////////////////



///////////////////////////////4WD_Car/////////////////////////////////////////////////
/////////////////////////led///////////////////////
Blockly.Arduino.ks4wd_led = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_led'] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

////////////////////////////////front//////////////////////////
Blockly.Arduino.ks4wd_FRONT = function() {
  
  var value_front = Blockly.Arduino.valueToCode(this, 'speed_F', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';

  var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,20+'+value_front+');\ndigitalWrite(2,HIGH);\nanalogWrite(6,'+value_front+');\n'; 
  return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.ks4wd_BACK = function() {
  
  var value_back = Blockly.Arduino.valueToCode(this, 'speed_B', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,20+'+value_back+');\ndigitalWrite(2,LOW);\nanalogWrite(6,'+value_back+');\n'; 
  return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.ks4wd_LEFT = function() {
  
  var value_left = Blockly.Arduino.valueToCode(this, 'speed_L', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,20+'+value_left+');\ndigitalWrite(2,HIGH);\nanalogWrite(6,'+value_left+');\n'; 
  return code;
};

////////////////////////////////turn_left//////////////////////////
Blockly.Arduino.ks4wd_TURN_LEFT = function() {
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,150);\ndigitalWrite(2,HIGH);\nanalogWrite(6,255);\n'; 
  return code;
};


////////////////////////////////right//////////////////////////
Blockly.Arduino.ks4wd_RIGHT = function() {
  
  var value_right = Blockly.Arduino.valueToCode(this, 'speed_R', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,20+'+value_right+');\ndigitalWrite(2,LOW);\nanalogWrite(6,'+value_right+');\n'; 
  return code;
};

////////////////////////////////turn_right//////////////////////////
Blockly.Arduino.ks4wd_TURN_RIGHT = function() {
  
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,255);\ndigitalWrite(2,HIGH);\nanalogWrite(6,150);\n'; 
  return code;
};

////////////////////////////////stop//////////////////////////
Blockly.Arduino.ks4wd_STOP = function() {
  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(6,0);\n'; 
  return code;
};



///////////////////////Tank超声波//////////////////////
Blockly.Arduino.ks4wd_sr04 = function () {
    Blockly.Arduino.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
  + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
  + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
  + '  digitalWrite(12, LOW);\n'
  + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
  + '  delay(10);\n' + '  return distance;\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
};


//////////////////////////循迹模块///////////////////////////
Blockly.Arduino.ks4wd_track = function() {
  var dropdown_type = this.getFieldValue('track');
  Blockly.Arduino.setups_['setup_output_trackleft'] = 'pinMode(11, INPUT);';
  Blockly.Arduino.setups_['setup_output_trackcenter'] = 'pinMode(7, INPUT);';
  Blockly.Arduino.setups_['setup_output_trackright'] = 'pinMode(8, INPUT);';

  var code = '';
  if (dropdown_type == "track_left") code += 'digitalRead(11)';
  if (dropdown_type == "track_center") code += 'digitalRead(7)';
  if (dropdown_type == "track_right") code += 'digitalRead(8)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};




///////////////////////////////舵机2/////////////////////////
  Blockly.Arduino.ks4wd_servo2 = function() {

  var value_degree = Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['1include_Servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['2var_servo'] = 'Servo servo_10;';
  Blockly.Arduino.setups_['setup_servo'] = 'servo_10.attach(10);';
  
  var code = 'servo_10.write('+value_degree+');\n';
  return code;
};

////////////////////////////////ks4wd_Matrix//////////////////////////
///////////////////////16*8点阵/////////////////////////////
//初始化
  Blockly.Arduino.Matrix_16and8_Init_4wd = function() {
   var SDA = this.getFieldValue('SDA');
   var SCL = this.getFieldValue('SCL');
   Blockly.Arduino.definitions_['1iic_scl'] = '#define IIC_SCL  '+SCL+'\n';
    Blockly.Arduino.definitions_['1iic_sda'] = '#define IIC_SDA  '+SDA+'\n';
    Blockly.Arduino.definitions_['1line'] = 'unsigned char data_line = 0;\n';
    Blockly.Arduino.definitions_['1count01'] = 'unsigned char delay_count = 0;\n';
    Blockly.Arduino.definitions_['3iic_start'] = 'void IIC_start()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);}\n';
    Blockly.Arduino.definitions_['4iic_send'] =  'void IIC_send(unsigned char send_data)\n{\n  for(char i = 0;i < 8;i++)\n  {\n      digitalWrite(IIC_SCL,LOW);\n      delayMicroseconds(3); \n      if(send_data & 0x01)\n      {\n        digitalWrite(IIC_SDA,HIGH);\n      }\n      else\n      {\n        digitalWrite(IIC_SDA,LOW);\n      }\n      delayMicroseconds(3);\n      digitalWrite(IIC_SCL,HIGH); \n      delayMicroseconds(3);\n      send_data = send_data >> 1;\n  }\n}\n';
    Blockly.Arduino.definitions_['5iic_end'] = 'void IIC_end()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);}\n';
    Blockly.Arduino.setups_['setup_iic'] = '  pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  digitalWrite(IIC_SCL,LOW);\n  digitalWrite(IIC_SDA,LOW);\n  IIC_start();\n    IIC_send(0x40);\n    IIC_end();\n    IIC_start();\n    IIC_send(0xc0);';

   var code='';
   return code;
 };
//点阵屏显示_显示图案
Blockly.Arduino.display_Matrix16and8_DisplayChar_4wd = function() {
  var matrixType = this.getFieldValue('TYPE');
  var matrixName = this.getFieldValue('matrixName');
  var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
  var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'LEDArray', Blockly.Arduino.ORDER_ASSIGNMENT);

  var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send('+dotMatrixArray+'[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';
  
  return code;
};

//点阵数组
Blockly.Arduino.display_Matrix16and8_LedArray_4wd = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  for (var i = 1; i < 17; i++) {  //有16列
    a[i] = new Array();
    for (var j = 1; j < 9; j++) {  //8行
      a[i][9-j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var i = 1; i < 17; i++) {
    var tmp = ""
    for (var j = 1; j < 9; j++) {
      tmp += a[i][j];
    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
    code += '0x' + tmp + ((i != 16) ? ',' : '');
  }
  code += '};';
  //Blockly.Arduino.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
  Blockly.Arduino.definitions_[varName] = "const uint8_t " + varName + "[16]=" + code;
  return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

///////////////显示表情//////////////////////
Blockly.Arduino.ks4wd_matrix = function() {

  Blockly.Arduino.definitions_['1start01'] = 'unsigned char start01[] = {0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01};\n';
  Blockly.Arduino.definitions_['2front'] = 'unsigned char front[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x12,0x09,0x12,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
  Blockly.Arduino.definitions_['3back'] = 'unsigned char back[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x48,0x90,0x48,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
  Blockly.Arduino.definitions_['4left'] = 'unsigned char left[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x44,0x28,0x10,0x44,0x28,0x10,0x44,0x28,0x10,0x00};\n';
  Blockly.Arduino.definitions_['5right'] = 'unsigned char right[] = {0x00,0x10,0x28,0x44,0x10,0x28,0x44,0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00,0x00};\n';
  Blockly.Arduino.definitions_['6Stop01'] = 'unsigned char STOP01[] = {0x2E,0x2A,0x3A,0x00,0x02,0x3E,0x02,0x00,0x3E,0x22,0x3E,0x00,0x3E,0x0A,0x0E,0x00};\n';
  Blockly.Arduino.definitions_['7clear'] = 'unsigned char clear[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';
  Blockly.Arduino.definitions_['8triange_full'] = 'unsigned char triangle_full[] = {0x80,0xC0,0xE0,0xF0,0xF8,0xFC,0xFE,0xFF,0xFF,0xFE,0xFC,0xF8,0xF0,0xE0,0xC0,0x80};\n';
  Blockly.Arduino.definitions_['9heart'] = 'unsigned char heart_full[] = {0x00,0x00,0x0C,0x1E,0x3F,0x7F,0xFE,0xFC,0xFE,0x7F,0x3F,0x1E,0x0C,0x00,0x00,0x00};\n';
  Blockly.Arduino.definitions_['atriange_back'] = 'unsigned char triangle_back[] = {0x01,0x03,0x07,0x0F,0x1F,0x3F,0x7F,0xFF,0xFF,0x7F,0x3F,0x1F,0x0F,0x07,0x03,0x01};\n';
  Blockly.Arduino.definitions_['bsmile'] = 'unsigned char smile[] = {0x00,0x00,0x00,0x0C,0x02,0x02,0x0C,0x20,0x20,0x20,0x0C,0x02,0x02,0x0C,0x00,0x00};\n';
  Blockly.Arduino.definitions_['csad'] = 'unsigned char sad[] = {0x00,0x00,0x02,0x02,0x02,0x12,0x08,0x04,0x08,0x12,0x22,0x02,0x02,0x00,0x00,0x00};\n';

  var dropdown_type = this.getFieldValue('matrix');
  var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send('+dropdown_type+'[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';
  
  return code;
};

// Blockly.Arduino.ks4wd_light = function() {

//   Blockly.Arduino.setups_['setup_input_A1'] = 'pinMode(A1, INPUT);';
//   Blockly.Arduino.setups_['setup_input_A2'] = 'pinMode(A2, INPUT);';
//   var dropdown_type = this.getFieldValue('light');


//   var code = '';
//   if (dropdown_type == "left_light") code += 'analogRead(A1)';
//   if (dropdown_type == "right_light") code += 'analogRead(A2)';
//   return [code, Blockly.Arduino.ORDER_ATOMIC];
// };



///////////////////////红外接收///////////////////
Blockly.Arduino.ks4wd_ir_r = function () {
    var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
       Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['1include_IRremote'] = '#include <IRremote.h>\n';
    //Blockly.Arduino.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    Blockly.Arduino.definitions_['2var_ir_recv_A0'] = 'IRrecv irrecv(A1);\ndecode_results results;\n';
    Blockly.Arduino.setups_['setup_ir_recv_A0'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + '=results.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results.decode_type>=1&&results.decode_type<=13){\n';
    code += '    type=typelist[results.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.ks4wd_bluetooth = function () {
  var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE);
  var val = this.getFieldValue('VAL');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  //var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);


  //Blockly.Arduino.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
  //Blockly.Arduino.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
  Blockly.Arduino.definitions_['1char'] = 'char '+val+';\n';

   var code = 'if (Serial.available())\n{\n  '+val+' = Serial.read();\n';
   code += branch;
   code += '}\n';
  return code;
};

///////////////////////////////4wd_Car/////////////////////////////////////////////////




////////////////////////////////////////////Tank-Car/////////////////////////

/////////////////////////led///////////////////////
Blockly.Arduino.tank_led = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_led'] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

////////////////////////////////front//////////////////////////
Blockly.Arduino.tank_FRONT = function() {
  
  var value_front = Blockly.Arduino.valueToCode(this, 'speed_F', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';

   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,'+value_front+');\ndigitalWrite(2,HIGH);\nanalogWrite(6,'+value_front+');\n'; 
  return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.tank_BACK = function() {
  
  var value_back = Blockly.Arduino.valueToCode(this, 'speed_B', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,'+value_back+');\ndigitalWrite(2,LOW);\nanalogWrite(6,'+value_back+');\n'; 
  return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.tank_LEFT = function() {
  
  var value_left = Blockly.Arduino.valueToCode(this, 'speed_L', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,'+value_left+');\ndigitalWrite(2,HIGH);\nanalogWrite(6,'+value_left+');\n'; 
  return code;
};

////////////////////////////////turn_left//////////////////////////
Blockly.Arduino.tank_TURN_LEFT = function() {
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,100);\ndigitalWrite(2,HIGH);\nanalogWrite(6,180);\n'; 
  return code;
};


////////////////////////////////right//////////////////////////
Blockly.Arduino.tank_RIGHT = function() {
  
  var value_right = Blockly.Arduino.valueToCode(this, 'speed_R', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,'+value_right+');\ndigitalWrite(2,LOW);\nanalogWrite(6,'+value_right+');\n'; 
  return code;
};

////////////////////////////////turn_right//////////////////////////
Blockly.Arduino.tank_TURN_RIGHT = function() {
  
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,180);\ndigitalWrite(2,HIGH);\nanalogWrite(6,100);\n'; 
  return code;
};

////////////////////////////////stop//////////////////////////
Blockly.Arduino.tank_STOP = function() {
  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(6,0);\n'; 
  return code;
};



///////////////////////Tank超声波//////////////////////
Blockly.Arduino.Tank_sr04 = function () {
    Blockly.Arduino.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
  + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
  + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
  + '  digitalWrite(12, LOW);\n'
  + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
  + '  delay(10);\n' + '  return distance;\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
};







///////////////////////////////舵机2/////////////////////////
  Blockly.Arduino.Tank_servo2 = function() {

  var value_degree = Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['include_pulsewidth'] = 'volatile int pulsewidth;';
  Blockly.Arduino.definitions_['var_angle'] = 'void procedure(int myangle) {\n  for (int i = 0; i <= 50; i = i + (1)) {\n    pulsewidth = myangle * 11 + 500;\n    digitalWrite(9,HIGH);\n    delayMicroseconds(pulsewidth);\n    digitalWrite(9,LOW);\n    delay((20 - pulsewidth / 1000));\n  }\n}\n';

  Blockly.Arduino.setups_['setup_servo'] = 'pulsewidth = 0;\n  pinMode(9, OUTPUT);';
  
  var code = 'procedure('+value_degree+');\n';
  return code;
};

////////////////////////////////tank_Matrix//////////////////////////
///////////////////////16*8点阵/////////////////////////////
//初始化
  Blockly.Arduino.tank_Matrix_16and8_Init = function() {
   var SDA = this.getFieldValue('SDA');
   var SCL = this.getFieldValue('SCL');
   Blockly.Arduino.definitions_['1iic_scl'] = '#define IIC_SCL  '+SCL+'\n';
    Blockly.Arduino.definitions_['1iic_sda'] = '#define IIC_SDA  '+SDA+'\n';
    Blockly.Arduino.definitions_['1line'] = 'unsigned char data_line = 0;\n';
    Blockly.Arduino.definitions_['1count01'] = 'unsigned char delay_count = 0;\n';
    Blockly.Arduino.definitions_['3iic_start'] = 'void IIC_start()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);}\n';
    Blockly.Arduino.definitions_['3iic_send'] =  'void IIC_send(unsigned char send_data)\n{\n  for(char i = 0;i < 8;i++)\n  {\n      digitalWrite(IIC_SCL,LOW);\n      delayMicroseconds(3); \n      if(send_data & 0x01)\n      {\n        digitalWrite(IIC_SDA,HIGH);\n      }\n      else\n      {\n        digitalWrite(IIC_SDA,LOW);\n      }\n      delayMicroseconds(3);\n      digitalWrite(IIC_SCL,HIGH); \n      delayMicroseconds(3);\n      send_data = send_data >> 1;\n  }\n}\n';
    Blockly.Arduino.definitions_['3iic_end'] = 'void IIC_end()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);}\n';
    Blockly.Arduino.setups_['setup_iic'] = '  pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  digitalWrite(IIC_SCL,LOW);\n  digitalWrite(IIC_SDA,LOW);\n  IIC_start();\n    IIC_send(0x40);\n    IIC_end();\n    IIC_start();\n    IIC_send(0xc0);';

   var code='';
   return code;
 };
//点阵屏显示_显示图案
Blockly.Arduino.tank_display_Matrix16and8_DisplayChar = function() {
  var matrixType = this.getFieldValue('TYPE');
  var matrixName = this.getFieldValue('matrixName');
  var NO = Blockly.Arduino.valueToCode(this, 'NO', Blockly.Arduino.ORDER_ATOMIC);
  var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'LEDArray', Blockly.Arduino.ORDER_ASSIGNMENT);

  var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send('+dotMatrixArray+'[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';
  
  return code;
};

//点阵数组
Blockly.Arduino.tank_display_Matrix16and8_LedArray = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  for (var i = 1; i < 17; i++) {  //有16列
    a[i] = new Array();
    for (var j = 1; j < 9; j++) {  //8行
      a[i][9-j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var i = 1; i < 17; i++) {
    var tmp = ""
    for (var j = 1; j < 9; j++) {
      tmp += a[i][j];
    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
    code += '0x' + tmp + ((i != 16) ? ',' : '');
  }
  code += '};';
  //Blockly.Arduino.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
  Blockly.Arduino.definitions_[varName] = "const uint8_t " + varName + "[16]=" + code;
  return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

///////////////显示表情//////////////////////
Blockly.Arduino.Tank_matrix = function() {

  Blockly.Arduino.definitions_['1start01'] = 'unsigned char start01[] = {0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01};\n';
  Blockly.Arduino.definitions_['2front'] = 'unsigned char front[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x12,0x09,0x12,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
  Blockly.Arduino.definitions_['3back'] = 'unsigned char back[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x48,0x90,0x48,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
  Blockly.Arduino.definitions_['4left'] = 'unsigned char left[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x44,0x28,0x10,0x44,0x28,0x10,0x44,0x28,0x10,0x00};\n';
  Blockly.Arduino.definitions_['5right'] = 'unsigned char right[] = {0x00,0x10,0x28,0x44,0x10,0x28,0x44,0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00,0x00};\n';
  Blockly.Arduino.definitions_['6Stop01'] = 'unsigned char STOP01[] = {0x2E,0x2A,0x3A,0x00,0x02,0x3E,0x02,0x00,0x3E,0x22,0x3E,0x00,0x3E,0x0A,0x0E,0x00};\n';
  Blockly.Arduino.definitions_['7clear'] = 'unsigned char clear[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';
  Blockly.Arduino.definitions_['8triange_full'] = 'unsigned char triangle_full[] = {0x80,0xC0,0xE0,0xF0,0xF8,0xFC,0xFE,0xFF,0xFF,0xFE,0xFC,0xF8,0xF0,0xE0,0xC0,0x80};\n';
  Blockly.Arduino.definitions_['9heart'] = 'unsigned char heart_full[] = {0x00,0x00,0x0C,0x1E,0x3F,0x7F,0xFE,0xFC,0xFE,0x7F,0x3F,0x1E,0x0C,0x00,0x00,0x00};\n';
  Blockly.Arduino.definitions_['atriange_back'] = 'unsigned char triangle_back[] = {0x01,0x03,0x07,0x0F,0x1F,0x3F,0x7F,0xFF,0xFF,0x7F,0x3F,0x1F,0x0F,0x07,0x03,0x01};\n';
  Blockly.Arduino.definitions_['bsmile'] = 'unsigned char smile[] = {0x00,0x00,0x00,0x0C,0x02,0x02,0x0C,0x20,0x20,0x20,0x0C,0x02,0x02,0x0C,0x00,0x00};\n';
  Blockly.Arduino.definitions_['csad'] = 'unsigned char sad[] = {0x00,0x00,0x02,0x02,0x02,0x12,0x08,0x04,0x08,0x12,0x22,0x02,0x02,0x00,0x00,0x00};\n';

  var dropdown_type = this.getFieldValue('matrix');
  var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send('+dropdown_type+'[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';
  
  return code;
};



Blockly.Arduino.Tank_light = function() {

  Blockly.Arduino.setups_['setup_input_A1'] = 'pinMode(A1, INPUT);';
  Blockly.Arduino.setups_['setup_input_A2'] = 'pinMode(A2, INPUT);';
  var dropdown_type = this.getFieldValue('light');


  var code = '';
  if (dropdown_type == "left_light") code += 'analogRead(A1)';
  if (dropdown_type == "right_light") code += 'analogRead(A2)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



///////////////////////红外接收///////////////////
Blockly.Arduino.Tank_ir_r = function () {
    var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
       Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['1include_IRremote'] = '#include <IRremoteTank.h>\n';
    //Blockly.Arduino.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    Blockly.Arduino.definitions_['2var_ir_recv_3'] = 'IRrecv irrecv(3);\ndecode_results results;\n';
    Blockly.Arduino.setups_['setup_ir_recv_3'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + '=results.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results.decode_type>=1&&results.decode_type<=13){\n';
    code += '    type=typelist[results.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.Tank_bluetooth = function () {
  var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE);
  var val = this.getFieldValue('VAL');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  //var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);


  //Blockly.Arduino.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
  //Blockly.Arduino.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
  Blockly.Arduino.definitions_['1char'] = 'char '+val+';\n';

  //Blockly.Arduino.setups_['2mySerial23'] = 'Serial.begin(9600);';

   var code = 'if (Serial.available())\n{\n  '+val+' = Serial.read();\n';
   code += branch;
   code += '}\n';
  return code;
};

////////////////////////////////////Turtle-Car///////////////////////////////////////

/////////////////////////led///////////////////////
Blockly.Arduino.turtle_led = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_led'] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};


////////////////////////////////front//////////////////////////
Blockly.Arduino.turtle_FRONT = function() {
  
  var value_front = Blockly.Arduino.valueToCode(this, 'speed_F', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';

   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,'+value_front+');\ndigitalWrite(2,LOW);\nanalogWrite(6,'+value_front+');\n'; 
  return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.turtle_BACK = function() {
  
  var value_back = Blockly.Arduino.valueToCode(this, 'speed_B', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,'+value_back+');\ndigitalWrite(2,HIGH);\nanalogWrite(6,'+value_back+');\n'; 
  return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.turtle_LEFT = function() {
  
  var value_left = Blockly.Arduino.valueToCode(this, 'speed_L', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,'+value_left+');\ndigitalWrite(2,HIGH);\nanalogWrite(6,'+value_left+');\n'; 
  return code;
};

////////////////////////////////turn_left//////////////////////////
Blockly.Arduino.turtle_TURN_LEFT = function() {
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,180);\ndigitalWrite(2,LOW);\nanalogWrite(6,100);\n'; 
  return code;
};


////////////////////////////////right//////////////////////////
Blockly.Arduino.turtle_RIGHT = function() {
  
  var value_right = Blockly.Arduino.valueToCode(this, 'speed_R', Blockly.Arduino.ORDER_ATOMIC);

  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,'+value_right+');\ndigitalWrite(2,LOW);\nanalogWrite(6,'+value_right+');\n'; 
  return code;
};

////////////////////////////////turn_right//////////////////////////
Blockly.Arduino.turtle_TURN_RIGHT = function() {
  
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,100);\ndigitalWrite(2,LOW);\nanalogWrite(6,180);\n'; 
  return code;
};

////////////////////////////////stop//////////////////////////
Blockly.Arduino.turtle_STOP = function() {
  //Blockly.Arduino.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
  Blockly.Arduino.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
   var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(6,0);\n'; 
  return code;
};

// //////////////////////////红外避障///////////////////////////
// Blockly.Arduino.turtle_avoid = function() {
//   var dropdown_type = this.getFieldValue('avoid02');
//   Blockly.Arduino.setups_['setup_output_left'] = 'pinMode(A0, INPUT);';
//   Blockly.Arduino.setups_['setup_output_right'] = 'pinMode(A2, INPUT);';

//   var code = '';
//   if (dropdown_type == "left") code += 'digitalRead(A0)';
//   if (dropdown_type == "right") code += 'digitalRead(A2)';
//   return [code, Blockly.Arduino.ORDER_ATOMIC];
// };

///////////////////////turtle超声波//////////////////////
Blockly.Arduino.turtle_sr04 = function () {
    Blockly.Arduino.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
  + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
  + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
  + '  digitalWrite(12, LOW);\n'
  + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
  + '  delay(10);\n' + '  return distance;\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
};

//////////////////////////循迹模块///////////////////////////
Blockly.Arduino.turtle_track = function() {
  var dropdown_type = this.getFieldValue('track');
  Blockly.Arduino.setups_['setup_output_trackleft'] = 'pinMode(11, INPUT);';
  Blockly.Arduino.setups_['setup_output_trackcenter'] = 'pinMode(7, INPUT);';
  Blockly.Arduino.setups_['setup_output_trackright'] = 'pinMode(8, INPUT);';

  var code = '';
  if (dropdown_type == "track_left") code += 'digitalRead(11)';
  if (dropdown_type == "track_center") code += 'digitalRead(7)';
  if (dropdown_type == "track_right") code += 'digitalRead(8)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



//////////////////music/////////////////////////

///////////////////////////////舵机/////////////////////////
  Blockly.Arduino.turtle_servo2 = function() {
  //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['1include_Servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['2var_servo'] = 'Servo servo_10;';
  Blockly.Arduino.setups_['setup_servo'] = 'servo_10.attach(10);';
  
  var code = 'servo_10.write('+value_degree+');\n';
  return code;
};

///////////////////////////////舵机2/////////////////////////
  Blockly.Arduino.turtle_servo_bak = function() {

  var value_degree = Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['1include_pulsewidth'] = 'volatile int pulsewidth;';
  Blockly.Arduino.definitions_['2var_angle'] = 'void procedure(int myangle) {\n  for (int i = 0; i <= 20; i = i + (1)) {\n    pulsewidth = myangle * 11 + 500;\n    digitalWrite(A3,HIGH);\n    delayMicroseconds(pulsewidth);\n    digitalWrite(A3,LOW);\n    delay((20 - pulsewidth / 1000));\n  }\n}\n';

  Blockly.Arduino.setups_['setup_servo'] = 'pulsewidth = 0;\n  pinMode(9, OUTPUT);';
  
  var code = 'procedure('+value_degree+');\n';
  return code;
};

//////////////////////////////点阵初始化/////////////////////////////
Blockly.Arduino.turtle_matrix_init = function() {
  var SDA = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  var SCL = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
  //var addr = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
  var matrixName = this.getFieldValue('matrixName');
  Blockly.Arduino.definitions_['include_Matrix'] = '#include <ks_Matrix.h>';
  Blockly.Arduino.definitions_[matrixName] = 'Matrix '+ matrixName +'('+SDA+','+SCL+');';
  Blockly.Arduino.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
  Blockly.Arduino.setups_['setup_' + matrixName] = matrixName + '.begin(112); \n';
  var code= matrixName+'.clear();\n';
  return code;
};


////////////////////////////////点阵1////////////////////////////
//执行器_点阵屏显示_显示图案
Blockly.Arduino.turtle_matrix1 = function() {
  var matrixName = this.getFieldValue('matrixName');
  var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'LEDArray', Blockly.Arduino.ORDER_ASSIGNMENT);
//  var code='Matrix_'+SDA+'_'+SCL+'.clear()dotMatrix;\n';
  var code='';
  code+='for(int i=0; i<8; i++)\n';
  code+='{\n'
  code+='  LEDArray[i]='+dotMatrixArray+'[i];\n';
  code+='  for(int j=7; j>=0; j--)\n'
  code+='  {\n'
  code+='    if((LEDArray[i]&0x01)>0)\n';
  code+='    '+ matrixName +'.drawPixel(j, i,1);\n';
  code+='    LEDArray[i] = LEDArray[i]>>1;\n';
  code+='  }  \n'
  code+='}\n'
  code+= matrixName+'.writeDisplay();\n'
  return code;
};
//执行器_点阵屏显示_点阵数组
Blockly.Arduino.turtle_matrix2 = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  for (var i = 1; i < 9; i++) {
    a[i] = new Array();
    for (var j = 1; j < 9; j++) {
      a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var i = 1; i < 9; i++) {
    var tmp = ""
    for (var j = 1; j < 9; j++) {
      tmp += a[i][j];
    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
    code += '0x' + tmp + ((i != 8) ? ',' : '');
  }
  code += '};';
  //Blockly.Arduino.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
  Blockly.Arduino.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
  //return ["LedArray_"+clearString(this.id), Blockly.Arduino.ORDER_ATOMIC];
  return [varName, Blockly.Arduino.ORDER_ATOMIC];
};

//////////////////////////6个图案///////////////////////////
Blockly.Arduino.turtle_Matrix_6 = function() {
  0x66,0x99,0x81,0x81,0x42,0x24,0x18,0x00
  Blockly.Arduino.definitions_['1smile'] = 'uint8_t matrix_smile[8]={0x42,0xa5,0xa5,0x00,0x00,0x24,0x18,0x00};';
  Blockly.Arduino.definitions_['1heart'] = 'uint8_t matrix_heart[8]={0x66,0x99,0x81,0x81,0x42,0x24,0x18,0x00};';
  Blockly.Arduino.definitions_['2front2'] = 'uint8_t matrix_front2[8]={0x18,0x24,0x42,0x99,0x24,0x42,0x81,0x00};';
  Blockly.Arduino.definitions_['3back2'] = 'uint8_t matrix_back2[8]={0x00,0x81,0x42,0x24,0x99,0x42,0x24,0x18};';
  Blockly.Arduino.definitions_['4left2'] = 'uint8_t matrix_left2[8]={0x48,0x24,0x12,0x09,0x09,0x12,0x24,0x48};';
  Blockly.Arduino.definitions_['5right2'] = 'uint8_t matrix_right2[8]={0x12,0x24,0x48,0x90,0x90,0x48,0x24,0x12};';
  Blockly.Arduino.definitions_['6stop2'] = 'uint8_t matrix_stop2[8]={0x18,0x18,0x18,0x18,0x18,0x00,0x18,0x18};';

  var dropdown_type = this.getFieldValue('display');
  var code = 'for(int i=0; i<8; i++)\n  {\n    LEDArray[i]='+dropdown_type+'[i];\n    for(int j=7; j>=0; j--)\n    {\n      if((LEDArray[i]&0x01)>0)\n      myMatrix.drawPixel(j, i,1);\n      LEDArray[i] = LEDArray[i]>>1;\n    }\n  }\n  myMatrix.writeDisplay();';
  
  return code;
};

////////////////////////清屏/////////////////////////////
Blockly.Arduino.turtle_Matrix_CLEAR = function() {
  var matrixName = this.getFieldValue('matrixName');
  var code = matrixName + '.clear();\n'
  code += matrixName +'.writeDisplay();\n';
  return code;
};



///////////////////////红外接收///////////////////
Blockly.Arduino.turtle_ir_r = function () {
    var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
       Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['1include_IRremote'] = '#include <IRremote.h>\n';
    //Blockly.Arduino.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    Blockly.Arduino.definitions_['2var_ir_recv_A1'] = 'IRrecv irrecv(A1);\ndecode_results results;\n';
    Blockly.Arduino.setups_['setup_ir_recv_A1'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + '=results.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results.decode_type>=1&&results.decode_type<=13){\n';
    code += '    type=typelist[results.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.turtle_bluetooth = function () {
  var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE);
  var val = this.getFieldValue('VAL');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  //var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);


  //Blockly.Arduino.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
  //Blockly.Arduino.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
  Blockly.Arduino.definitions_['1char'] = 'char '+val+';\n';

   var code = 'if (Serial.available())\n{\n  '+val+' = Serial.read();\n';
   code += branch;
   code += '}\n';
  return code;
};



/////////////////////////////////OTTO/////////////////////////
// 'use strict';
// goog.provide('Blockly.Arduino.ottotop-car');
// goog.require('Blockly.Arduino');

////////////////////////////////OTTO_init//////////////////////////
Blockly.Arduino.OTTO_init = function() {
  
  var value_YL = Blockly.Arduino.valueToCode(this, 'YL', Blockly.Arduino.ORDER_ATOMIC);
  var value_YR = Blockly.Arduino.valueToCode(this, 'YR', Blockly.Arduino.ORDER_ATOMIC);
  var value_RL = Blockly.Arduino.valueToCode(this, 'RL', Blockly.Arduino.ORDER_ATOMIC);
  var value_RR = Blockly.Arduino.valueToCode(this, 'RR', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['1init1'] = '#include <Servo.h>\n#include <Oscillator.h>\n#include <EEPROM.h>\n#define N_SERVOS 4\n//-- First step: Configure the pins where the servos are attached\n/*\n         --------------- \n        |     O   O     |\n        |---------------|\nYR 3==> |               | <== YL 2\n         --------------- \n            ||     ||\n            ||     ||\nRR 5==>   -----   ------  <== RL 4\n         |-----   ------|\n*/\n#define EEPROM_TRIM false\n// Activate to take callibration data from internal memory//调整机械角度\n#define TRIM_RR '+value_RR+'  //right02\n#define TRIM_RL '+value_RL+'  //left02\n#define TRIM_YR '+value_YR+'  //right01\n#define TRIM_YL '+value_YL+'  //left01\n#define PIN_RR 5\n#define PIN_RL 4\n#define PIN_YR 3\n#define PIN_YL 2\n#define INTERVALTIME 10.0 \nOscillator servo[N_SERVOS];\n#include "SR04.h"\n#define TRIG_PIN 6\n#define ECHO_PIN 7\nSR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);\nlong a;\nint i = 0;\nint val = 0;\nvoid goingUp(int tempo);\nvoid drunk (int tempo);\nvoid noGravity(int tempo);\nvoid kickLeft(int tempo);\nvoid kickRight(int tempo);\nvoid run(int steps, int T=500);\nvoid walk(int steps, int T=1000);\nvoid backyard(int steps, int T=3000);\nvoid backyardSlow(int steps, int T=5000);\nvoid turnLeft(int steps, int T=3000);\nvoid turnRight(int steps, int T=3000);\nvoid moonWalkLeft(int steps, int T=1000);\nvoid moonWalkRight(int steps, int T=1000);\nvoid crusaito(int steps, int T=1000);\nvoid swing(int steps, int T=1000);\nvoid upDown(int steps, int T=1000);\nvoid flapping(int steps, int T=1000);\nint t=495;\ndouble pause=0;\n';
  Blockly.Arduino.setups_['setup_init1'] = 'Serial.begin(9600);\n  servo[0].attach(PIN_RR);\n  servo[1].attach(PIN_RL);\n  servo[2].attach(PIN_YR);\n  servo[3].attach(PIN_YL);\n  int trim;\n  if(EEPROM_TRIM){\n    for(int x=0;x<4;x++){\n      trim=EEPROM.read(x);\n      if(trim>128)trim=trim-256;\n      Serial.print("TRIM ");\n      Serial.print(x);\n      Serial.print(" en ");\n      Serial.println(trim);\n      servo[x].SetTrim(trim);\n    }\n  }\n  else{\n    servo[0].SetTrim(TRIM_RR);\n    servo[1].SetTrim(TRIM_RL);\n    servo[2].SetTrim(TRIM_YR);\n    servo[3].SetTrim(TRIM_YL);\n  }\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);';
  Blockly.Arduino.definitions_['2oscillate1'] = 'void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){\n  for (int i=0; i<4; i++) {\n    servo[i].SetO(O[i]);\n    servo[i].SetA(A[i]);\n    servo[i].SetT(T);\n    servo[i].SetPh(phase_diff[i]);\n  }\n  double ref=millis();\n   for (double x=ref; x<T+ref; x=millis()){\n     for (int i=0; i<4; i++){\n        servo[i].refresh();\n     }\n  }\n}\n';
  Blockly.Arduino.definitions_['3moveNServos_001'] = 'unsigned long final_time;\nunsigned long interval_time;\nint oneTime;\nint iteration;\nfloat increment[N_SERVOS]; \nint oldPosition[]={90,90,90,90};\n';
  Blockly.Arduino.definitions_['4moveNServos'] = 'void moveNServos(int time, int  newPosition[]){\n  for(int i=0;i<N_SERVOS;i++) increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);\n  final_time =  millis() + time; \n  iteration = 1; \n  while(millis() < final_time){ //Javi del futuro cambia esto  \n      interval_time = millis()+INTERVALTIME;  \n      oneTime=0;\n      while(millis()<interval_time){\n          if(oneTime<1){ \n              for(int i=0;i<N_SERVOS;i++){\n                  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i]));\n              }\n              iteration++;\n              oneTime++;\n          }\n      }\n  }   \n\n  for(int i=0;i<N_SERVOS;i++){  \n    oldPosition[i] = newPosition[i];\n  }   \n}\n';
  var code = '';
  return code;
};



////////////////////////////////front//////////////////////////
Blockly.Arduino.otto_FRONT = function() {
  var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['1walk'] = ' void walk(int steps, int T)\n{\n  int A[4]= {15, 15, 30, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
  var code = 'walk('+value_steps+','+value_speed1+'*t);\n';
  return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.otto_BACK = function() {
  var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['1back1'] = ' void backyard(int steps, int T)\n{\n  int A[4]= {15, 15, 30, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
  var code = 'backyard('+value_steps+','+value_speed1+'*t);\n';
  return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.otto_LEFT = function() {
  var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['1left1'] = ' void turnLeft(int steps, int T)\n{\n  int A[4]= {20, 20, 10, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
  var code = 'turnLeft('+value_steps+','+value_speed1+'*t);\n';
  return code;
};

////////////////////////////////right//////////////////////////
Blockly.Arduino.otto_RIGHT = function() {
  var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['1turnRight'] = ' void turnRight(int steps, int T)\n{\n  int A[4]= {20, 20, 30, 10};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
  var code = 'turnRight('+value_steps+','+value_speed1+'*t);\n';
  return code;
};


////////////////////////////////stop//////////////////////////
Blockly.Arduino.otto_STOP = function() {
  Blockly.Arduino.definitions_['1Stop'] = 'void Stop()\n{\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n}\n';
   var code = 'Stop();\n'; 
  return code;
};

////////////////////////////////moon_left//////////////////////////
Blockly.Arduino.otto_moon_LEFT = function() {
  var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['moonLEFT'] = ' void moonLEFT(int steps, int T)\n{\n  int A[4]= {25, 25, 0, 0};\n  int O[4] = {-15, 15, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 - 120), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
  var code = 'moonLEFT('+value_steps+','+value_speed1+'*t);\n';
  return code;
};

////////////////////////////////moon_right//////////////////////////
Blockly.Arduino.otto_moon_RIGHT = function() {
  var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['moonRight'] = ' void moonRight(int steps, int T)\n{\n  int A[4]= {25, 25, 0, 0};\n  int O[4] = {-15, 15, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
  var code = 'moonRight('+value_steps+','+value_speed1+'*t);\n';
  return code;
};

////////////////////////////////otto_kickLeft//////////////////////////
Blockly.Arduino.otto_kickLeft = function() { 
  Blockly.Arduino.definitions_['kickLeft'] = 'void kickLeft(int tempo){\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n  delay(tempo);\n  servo[0].SetPosition(50); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(30); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(30); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo);\n}\n';
  var code = 'kickLeft(t);\n';
  return code;
};

////////////////////////////////otto_kickright//////////////////////////
Blockly.Arduino.otto_kickright = function() { 
  Blockly.Arduino.definitions_['kickright'] = 'void kickRight(int tempo){\nfor(int i=0;i<4;i++) servo[i].SetPosition(90);\n  delay(tempo);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(130); //pie izquiero\n  delay(tempo);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(100); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(150); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(80); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(150); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(100); //pie izquiero\n  delay(tempo);\n}\n';
  var code = 'kickRight(t);\n';
  return code;
};

////////////////////////////////otto_drunk//////////////////////////
Blockly.Arduino.otto_drunk = function() { 
  var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['drunk'] = 'void drunk (int tempo){\n  pause=millis();\n  int move1[] = {60,70,90,90};\n  int move2[] = {110,120,90,90};\n  int move3[] = {60,70,90,90};\n  int move4[] = {110,120,90,90};\n  moveNServos(tempo*0.235,move1);\n  moveNServos(tempo*0.235,move2);\n  moveNServos(tempo*0.235,move3);\n  moveNServos(tempo*0.235,move4);\n  while(millis()<(pause+tempo));\n}\n';
  var code = 'drunk('+value_speed1+'*t);\n';
  return code;
};

////////////////////////////////otto_noGravity//////////////////////////
Blockly.Arduino.otto_noGravity = function() {
  Blockly.Arduino.definitions_['noGravity'] = 'void noGravity(int tempo){\n  int move1[4] = {120,140,90,90};\n  int move2[4] = {140,140,90,90};\n  int move3[4] = {120,140,90,90};\n  int move4[4] = {90,90,90,90};\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n  for(int i=0;i<N_SERVOS;i++) oldPosition[i]=90;\n  moveNServos(tempo*2,move1);\n  moveNServos(tempo*2,move2);\n  delay(tempo*2);\n  moveNServos(tempo*2,move3);\n  moveNServos(tempo*2,move4);\n}\n';
  var code = 'noGravity(2*t);\n';
  return code;
};


////////////////////////////////otto_crusaito//////////////////////////
Blockly.Arduino.otto_crusaito = function() {
  var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['crusaito'] = 'void crusaito(int steps, int T){\n    int A[4]= {25, 25, 30, 30};\n    int O[4] = {- 15, 15, 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)}; \n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
  var code = 'crusaito('+value_steps+','+value_speed1+'*t);\n';
  return code;
};

////////////////////////////////otto_segunda1//////////////////////////
Blockly.Arduino.otto_segunda1 = function() {
  Blockly.Arduino.definitions_['segunda1'] = 'void segunda1() \n{\nint move1[4] = {90,90,80,100};\n  int move2[4] = {90,90,100,80};\n  int move3[4] = {90,90,80,100};\n  int move4[4] = {90,90,100,80};\n     pause=millis();\n      moveNServos(t*0.15,move1);\n      moveNServos(t*0.15,move2);\n      moveNServos(t*0.15,move3);\n      moveNServos(t*0.15,move4);\n      while(millis()<(pause+t));\n    }\n';
  var code = 'segunda1();\n';
  return code;
};

////////////////////////////////otto_jump//////////////////////////
Blockly.Arduino.otto_jump = function() {
  Blockly.Arduino.definitions_['jump'] = 'void jump() \n{\nint move5[4] = {70,110,80,100};\n  int move6[4] = {70,110,100,80};\n  int move7[4] = {90,90,80,100};\n  int move8[4] = {90,90,100,80};\npause=millis();\n    moveNServos(t*0.15,move5);\n    moveNServos(t*0.15,move6);\n    moveNServos(t*0.15,move7);\n    moveNServos(t*0.15,move8);\n    while(millis()<(pause+t));\n  }\n';
  var code = 'jump();\n';
  return code;
};

////////////////////////////////otto_crusaito//////////////////////////
Blockly.Arduino.otto_swing = function() {
  var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['swing'] = 'void swing(int steps, int T){\n    int A[4]= {15, 15, 8, 8};\n    int O[4] = {-A[0], A[1], 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180), DEG2RAD(90), DEG2RAD(-90)};\n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
  var code = 'swing('+value_steps+','+value_speed1+'*t);\n';
  return code;
};

////////////////////////////////otto_swing//////////////////////////
Blockly.Arduino.otto_flapping = function() {
  var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['flapping'] = 'void flapping(int steps, int T){\n    int A[4]= {25, 25, 0, 0};\n    int O[4] = {-15, 15, 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
  
  var code = 'flapping('+value_steps+','+value_speed1+'*t);\n';
  return code;
};

////////////////////////////////otto_goingUp//////////////////////////
Blockly.Arduino.otto_goingUp = function() {
  var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['goingUp'] = 'void goingUp(int tempo){\n      pause=millis();\n      for(int i=0;i<4;i++) servo[i].SetPosition(90);\n      delay(tempo);\n      servo[0].SetPosition(80);\n      servo[1].SetPosition(100);\n      delay(tempo);\n      servo[0].SetPosition(70);\n      servo[1].SetPosition(110);\n      delay(tempo);\n      servo[0].SetPosition(60);\n      servo[1].SetPosition(120);\n      delay(tempo);\n      servo[0].SetPosition(50);\n      servo[1].SetPosition(130);\n      delay(tempo);\n      while(millis()<pause+8*t);\n}\n';
  var code = 'goingUp('+value_speed1+'*t);\n';
  return code;
};

////////////////////////////////otto_dance//////////////////////////
/*Blockly.Arduino.otto_dance = function() { 
  Blockly.Arduino.definitions_['dance'] = '';
  var code = 'dance(t);\n';
  return code;
};*/

//舵机
  Blockly.Arduino.otto_servo = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'time', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['1include_Servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['2var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};

///////////////////////otto超声波//////////////////////
Blockly.Arduino.otto_sr04 = function () {
    Blockly.Arduino.setups_['setup_output_T'] = 'pinMode(6, OUTPUT);';
    Blockly.Arduino.setups_['setup_output_E'] = 'pinMode(7, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
  + '  digitalWrite(6, LOW);\n' + '  delayMicroseconds(2);\n'
  + '  digitalWrite(6, HIGH);\n' + '  delayMicroseconds(10);\n'
  + '  digitalWrite(6, LOW);\n'
  + '  float distance = pulseIn(7, HIGH) / 58.00;\n'
  + '  delay(10);\n' + '  return distance;\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
};


/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.otto_bluetooth = function () {
  var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE);
  var val = this.getFieldValue('VAL');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  //var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);


  //Blockly.Arduino.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
  //Blockly.Arduino.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
  Blockly.Arduino.definitions_['1char'] = 'char '+val+';\n';

  Blockly.Arduino.setups_['2mySerial23'] = 'Serial.begin(9600);';

   var code = 'if (Serial.available())\n{\n  '+val+' = Serial.read();\n';
   code += branch;
   code += '}\n';
  return code;
};



