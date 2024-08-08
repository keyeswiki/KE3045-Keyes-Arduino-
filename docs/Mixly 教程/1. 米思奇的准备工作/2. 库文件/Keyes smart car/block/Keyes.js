'use strict';

goog.provide('Blockly.Blocks.keyesAll');
Blockly.Blocks.keyesAll.HUE = 120;

goog.provide('Blockly.Blocks.desktop_car');
Blockly.Blocks.desktop_car.HUE = 200;

goog.provide('Blockly.Blocks.Small_Turtle_Robot');
Blockly.Blocks.Small_Turtle_Robot.HUE = 250;

goog.provide('Blockly.Blocks.Mini_Tank_Robot');
Blockly.Blocks.Mini_Tank_Robot.HUE =50;//'#ae3838';//40;

goog.provide('Blockly.Blocks.keyes_4wd');
Blockly.Blocks.keyes_4wd.HUE = 100;

goog.provide('Blockly.Blocks.OTTO_Frog');
Blockly.Blocks.OTTO_Frog.HUE = 200;


goog.require('Blockly.Blocks');



//////////////////2wdCar///////////////////////////
//////////////////LED////////////////
Blockly.Blocks.desk_led = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
    .appendField("LED")
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_led.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.Desk_on_off)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


///////////////////////////front////////////////
Blockly.Blocks.FRONT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_forward)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_runing.png", 60, 60))
    .appendField(Blockly.Desk_left);
    this.appendValueInput("speed_F", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.Desk_right);
    this.appendValueInput("speed_F2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////back////////////////
Blockly.Blocks.BACK = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_backward)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_runing.png", 60, 60))
    .appendField(Blockly.Desk_left);
    this.appendValueInput("speed_B", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.Desk_right);
    this.appendValueInput("speed_B2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////left////////////////
Blockly.Blocks.LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_left)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_runing.png", 60, 60))
    .appendField(Blockly.Desk_left);
    this.appendValueInput("speed_L", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.Desk_right);
    this.appendValueInput("speed_L2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_left////////////////
Blockly.Blocks.TURN_LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_turn_left)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_runing.png", 60, 60));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////right////////////////
Blockly.Blocks.RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_right)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_runing.png", 60, 60))
    .appendField(Blockly.Desk_left);
    this.appendValueInput("speed_R", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.Desk_right);
    this.appendValueInput("speed_R2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_right////////////////
Blockly.Blocks.TURN_RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_turn_right)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_runing.png", 60, 60));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


////////////////////////////stop////////////////
Blockly.Blocks.STOP = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.Desk_stop)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_runing.png", 60, 60))
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

///////////避障传感器////////////////////
Blockly.Blocks.desk_avoid = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Desk_L_ir_a, "left"],[Blockly.Desk_R_ir_a, "right"]]), 'avoid02');
    this.appendDummyInput("")
    //.appendField("avoid")
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_ir_avoid.png", 43, 32));
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////////超声波/////////////////////////
Blockly.Blocks.desk_sr04 = {
  init: function () {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.Desk_sr01)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_sr01.png", 50, 40));
    
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};

///////////循迹传感器////////////////////
Blockly.Blocks.desk_track = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.Desk_L_track, "track_left"],[Blockly.Desk_C_track, "track_center"],[Blockly.Desk_R_track, "track_right"]]), 'track');
    this.appendDummyInput("")
    //.appendField("track")
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_track.png", 60, 60));
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

//////////////////蜂鸣器//////////////////
var TONE_NOTES=[["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
           ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]];


Blockly.Blocks.tone_notes = {
   init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.desk_buzzer={
init:function(){
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.Desk_buzzer)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_buzzer.png", 70, 32));
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Desk_fre);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
  }
};


///////////music////////////////////
Blockly.Blocks.desk_music = {
  init: function() {
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Desk_play_music)
        .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_buzzer.png", 70, 32));
    this.appendDummyInput("")
        //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
        .appendField(new Blockly.FieldDropdown([
            [Blockly.ks_Ode_to_joy, "Ode to Joy"],
            [Blockly.ks_birthday, "Birthday"],
            [Blockly.ks_tetris, "tetris"],
            [Blockly.ks_star_war, "star_war"],
            [Blockly.ks_super_mario, "super_mario"],
            [Blockly.ks_christmas, "christmas"]
            ]), 'play');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

////////////////////关闭蜂鸣器////////////////////////
Blockly.Blocks.desk_notone={
init:function(){
    this.setColour(Blockly.Blocks.desktop_car.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Desk_notone)
        .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_buzzer.png", 70, 32));
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

////////////////红外接收////////////////////////////
//红外接收模块
Blockly.Blocks.desk_ir_r = {
    init: function () {
        this.setColour(Blockly.Blocks.desktop_car.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('ir_rec'), 'VAR')
            .appendField(Blockly.Desk_ir_R)
            .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_irr.png", 70, 32));
        this.appendStatementInput('DO')
            .appendField(Blockly.Desk_ir_RD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

//////////////////////蓝牙////////////////////////////
Blockly.Blocks.desk_bluetooth = {
    init: function () {
        this.setColour(Blockly.Blocks.desktop_car.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(Blockly.Desk_Bluetooth)
            .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_bluetooth4.0.png", 70, 32))
        this.appendStatementInput('DO')
            .appendField(Blockly.Desk_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};


///////////////////////Turtle-Car////////////////////////

//////////////////LED////////////////
Blockly.Blocks.turtle_led = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
    .appendField("LED")
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_led.png", 60, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.turtle_on_off)
    .appendField(new Blockly.FieldDropdown([[Blockly.turtle_high, "HIGH"], [Blockly.turtle_low, "LOW"]]), "STAT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

///////////////////////////front////////////////
Blockly.Blocks.turtle_FRONT = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_forward)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_runing.png", 70, 70))
    .appendField(Blockly.turtle_left);
    this.appendValueInput("speed_F", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.turtle_right);
    this.appendValueInput("speed_F2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////back////////////////
Blockly.Blocks.turtle_BACK = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_backward)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_runing.png", 70, 70))
    .appendField(Blockly.turtle_left);
    this.appendValueInput("speed_B", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.turtle_right);
    this.appendValueInput("speed_B2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////left////////////////
Blockly.Blocks.turtle_LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_left)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_runing.png", 70, 70))
    .appendField(Blockly.turtle_left);
    this.appendValueInput("speed_L", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.turtle_right);
    this.appendValueInput("speed_L2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_left////////////////
Blockly.Blocks.turtle_TURN_LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.turtle_turn_left)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_runing.png", 70, 70));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////right////////////////
Blockly.Blocks.turtle_RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_right)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_runing.png", 70, 70))
    .appendField(Blockly.turtle_left);
    this.appendValueInput("speed_R", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.turtle_right);
    this.appendValueInput("speed_R2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_right////////////////
Blockly.Blocks.turtle_TURN_RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.turtle_turn_right)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_runing.png", 70, 70));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


////////////////////////////stop////////////////
Blockly.Blocks.turtle_STOP = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.turtle_stop)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_runing.png", 70, 70))
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

///////////避障传感器////////////////////
Blockly.Blocks.turtle_avoid = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.turtle_L_ir_a, "left"],[Blockly.turtle_R_ir_a, "right"]]), 'avoid02');
    this.appendDummyInput("")
    //.appendField("avoid")
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_ir_avoid.png", 43, 32));
    this.setOutput(true, Boolean);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////////超声波/////////////////////////
Blockly.Blocks.turtle_sr04 = {
  init: function () {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.turtle_sr01)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_sr01.png", 50, 40));
    
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};

///////////循迹传感器////////////////////
Blockly.Blocks.turtle_track = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.turtle_L_track, "track_left"],[Blockly.turtle_C_track, "track_center"],[Blockly.turtle_R_track, "track_right"]]), 'track');
    this.appendDummyInput("")
    //.appendField("track")
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_track.png", 60, 60));
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

//////////////////蜂鸣器//////////////////
var TONE_NOTES=[["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
           ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]];


Blockly.Blocks.tone_notes = {
   init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.turtle_buzzer={
init:function(){
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.turtle_buzzer)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_buzzer.png", 70, 32));
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.turtle_fre);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
  }
};


///////////music////////////////////
Blockly.Blocks.turtle_music = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.turtle_play_music)
        .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_buzzer.png", 70, 32));
    this.appendDummyInput("")
        //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
        .appendField(new Blockly.FieldDropdown([[Blockly.turtle_Ode_to_joy, "Ode to Joy"],[Blockly.turtle_birthday, "Birthday"]]), 'play');
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

////////////////////关闭蜂鸣器////////////////////////
Blockly.Blocks.turtle_notone={
init:function(){
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.turtle_notone)
        .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_buzzer.png", 70, 32));
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};


///////////////////////////舵机///////////////////////////////////
Blockly.Blocks.turtle_servo = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_turtle_SERVO)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_servo.png", 70, 60));
    this.appendValueInput("angle", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("0~180");
    this.appendValueInput("time", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DELAY+'('+Blockly.MIXLY_DELAY_MS+')');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};

///////////////////////////舵机///////////////////////////////////
Blockly.Blocks.turtle_servo2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_turtle_SERVO)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_servo.png", 70, 60));
    this.appendValueInput("angle", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("0~180");
    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


/////////////////////8*8点阵/////////////////////

Blockly.Blocks.turtle_matrix_init = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE)
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_turtle_matrix)
        .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_matrix.png", 80, 80));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
    //this.appendValueInput("address", Number)
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField("address:");
    this.appendValueInput("PIN1").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("SDA#");
    this.appendValueInput("PIN2").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("SCL#"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//   this.setTooltip("display_点阵屏初始化");
   }
};

//执行器_点阵屏显示_显示图案
Blockly.Blocks.turtle_matrix1 = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName')
        .appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW)
        .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_matrix.png", 80, 80));
    this.appendValueInput("LEDArray")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DISPLAY_MATRIX_PICARRAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip();
  }
};
//执行器_点阵屏显示_图案数组
Blockly.Blocks.turtle_matrix2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DISPLAY_MATRIX_ARRAYVAR)
        .appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a18").appendField(new Blockly.FieldCheckbox("FALSE"), "a17").appendField(new Blockly.FieldCheckbox("FALSE"), "a16").appendField(new Blockly.FieldCheckbox("FALSE"), "a15").appendField(new Blockly.FieldCheckbox("FALSE"), "a14").appendField(new Blockly.FieldCheckbox("FALSE"), "a13").appendField(new Blockly.FieldCheckbox("FALSE"), "a12").appendField(new Blockly.FieldCheckbox("FALSE"), "a11");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a28").appendField(new Blockly.FieldCheckbox("FALSE"), "a27").appendField(new Blockly.FieldCheckbox("FALSE"), "a26").appendField(new Blockly.FieldCheckbox("FALSE"), "a25").appendField(new Blockly.FieldCheckbox("FALSE"), "a24").appendField(new Blockly.FieldCheckbox("FALSE"), "a23").appendField(new Blockly.FieldCheckbox("FALSE"), "a22").appendField(new Blockly.FieldCheckbox("FALSE"), "a21");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a38").appendField(new Blockly.FieldCheckbox("FALSE"), "a37").appendField(new Blockly.FieldCheckbox("FALSE"), "a36").appendField(new Blockly.FieldCheckbox("FALSE"), "a35").appendField(new Blockly.FieldCheckbox("FALSE"), "a34").appendField(new Blockly.FieldCheckbox("FALSE"), "a33").appendField(new Blockly.FieldCheckbox("FALSE"), "a32").appendField(new Blockly.FieldCheckbox("FALSE"), "a31");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a48").appendField(new Blockly.FieldCheckbox("FALSE"), "a47").appendField(new Blockly.FieldCheckbox("FALSE"), "a46").appendField(new Blockly.FieldCheckbox("FALSE"), "a45").appendField(new Blockly.FieldCheckbox("FALSE"), "a44").appendField(new Blockly.FieldCheckbox("FALSE"), "a43").appendField(new Blockly.FieldCheckbox("FALSE"), "a42").appendField(new Blockly.FieldCheckbox("FALSE"), "a41");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a58").appendField(new Blockly.FieldCheckbox("FALSE"), "a57").appendField(new Blockly.FieldCheckbox("FALSE"), "a56").appendField(new Blockly.FieldCheckbox("FALSE"), "a55").appendField(new Blockly.FieldCheckbox("FALSE"), "a54").appendField(new Blockly.FieldCheckbox("FALSE"), "a53").appendField(new Blockly.FieldCheckbox("FALSE"), "a52").appendField(new Blockly.FieldCheckbox("FALSE"), "a51");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a68").appendField(new Blockly.FieldCheckbox("FALSE"), "a67").appendField(new Blockly.FieldCheckbox("FALSE"), "a66").appendField(new Blockly.FieldCheckbox("FALSE"), "a65").appendField(new Blockly.FieldCheckbox("FALSE"), "a64").appendField(new Blockly.FieldCheckbox("FALSE"), "a63").appendField(new Blockly.FieldCheckbox("FALSE"), "a62").appendField(new Blockly.FieldCheckbox("FALSE"), "a61");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a78").appendField(new Blockly.FieldCheckbox("FALSE"), "a77").appendField(new Blockly.FieldCheckbox("FALSE"), "a76").appendField(new Blockly.FieldCheckbox("FALSE"), "a75").appendField(new Blockly.FieldCheckbox("FALSE"), "a74").appendField(new Blockly.FieldCheckbox("FALSE"), "a73").appendField(new Blockly.FieldCheckbox("FALSE"), "a72").appendField(new Blockly.FieldCheckbox("FALSE"), "a71");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a88").appendField(new Blockly.FieldCheckbox("FALSE"), "a87").appendField(new Blockly.FieldCheckbox("FALSE"), "a86").appendField(new Blockly.FieldCheckbox("FALSE"), "a85").appendField(new Blockly.FieldCheckbox("FALSE"), "a84").appendField(new Blockly.FieldCheckbox("FALSE"), "a83").appendField(new Blockly.FieldCheckbox("FALSE"), "a82").appendField(new Blockly.FieldCheckbox("FALSE"), "a81");
    this.setOutput(true, Number);
    //this.setTooltip();
  }
};

///////////6个////////////////////
Blockly.Blocks.turtle_Matrix_6 = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW)
        .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_matrix.png", 80, 80));
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([["∩_∩", "matrix_smile"],["♥", "matrix_heart"],["↑", "matrix_front2"],["↓", "matrix_back2"],["←", "matrix_left2"],["→", "matrix_right2"],["STOP", "matrix_stop2"]]), 'display');
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

//执行器_点阵屏显示_清除屏幕
Blockly.Blocks.turtle_Matrix_CLEAR = {
  init: function() {
    this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName')
        .appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DISPLAY_MATRIX_CLEAR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip();
  }
};

////////////////红外接收////////////////////////////
//红外接收模块
Blockly.Blocks.turtle_ir_r = {
    init: function () {
        this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('ir_rec'), 'VAR')
            .appendField(Blockly.turtle_ir_R)
            .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_irr.png", 70, 32));
        this.appendStatementInput('DO')
            .appendField(Blockly.turtle_ir_RD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

//////////////////////蓝牙////////////////////////////
Blockly.Blocks.turtle_bluetooth = {
    init: function () {
        this.setColour(Blockly.Blocks.Small_Turtle_Robot.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(Blockly.turtle_Bluetooth)
            .appendField(new Blockly.FieldImage("../../media/keyesAll/turtle_bluetooth4.0.png", 70, 32))
        this.appendStatementInput('DO')
            .appendField(Blockly.turtle_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};


/////////////////////////////////////////////////////////////////
///////////////////Tank-car////////////////////////

//////////////////LED////////////////
Blockly.Blocks.tank_led = {
  init: function() {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    this.appendDummyInput("")
    .appendField("LED")
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_led.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.Desk_on_off)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

///////////////////////////front////////////////
Blockly.Blocks.tank_FRONT = {
  init: function() {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_forward)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 60, 60))
    .appendField(Blockly.tank_left);
    this.appendValueInput("speed_F", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.tank_right);
    this.appendValueInput("speed_F2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


////////////////////////////back////////////////
Blockly.Blocks.tank_BACK = {
  init: function() {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_backward)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 60, 60))
    .appendField(Blockly.tank_left);
    this.appendValueInput("speed_B", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.tank_right);
    this.appendValueInput("speed_B2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////left////////////////
Blockly.Blocks.tank_LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_left)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 60, 60))
    .appendField(Blockly.tank_left);
    this.appendValueInput("speed_L", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.tank_right);
    this.appendValueInput("speed_L2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_left////////////////
Blockly.Blocks.tank_TURN_LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.tank_turn_left)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 60, 60));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////right////////////////
Blockly.Blocks.tank_RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ksCar_right)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 60, 60))
    .appendField(Blockly.tank_left);
    this.appendValueInput("speed_R", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.tank_right);
    this.appendValueInput("speed_R2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_right////////////////
Blockly.Blocks.tank_TURN_RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.tank_turn_right)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 60, 60));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


////////////////////////////stop////////////////
Blockly.Blocks.tank_STOP = {
  init: function() {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.tank_stop)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 60, 60))
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};



///////////////超声波/////////////////////////
Blockly.Blocks.Tank_sr04 = {
  init: function () {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.tank_sr01)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/sr01.png", 50, 40));
    
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};





///////////////////////////舵机///////////////////////////////////
Blockly.Blocks.Tank_servo2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_Tank_SERVO)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/servo.png", 70, 60));
    this.appendValueInput("angle", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("0~180");
    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

//////////////////tank_matrix////////////////
//////////////////////////////////////16 * 8 点阵//////////////////////////////////
Blockly.Blocks.tank_Matrix_16and8_Init = {
  init: function () {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    this.appendDummyInput("")
      .appendField(Blockly.matrix16and8_init)
      .appendField(new Blockly.FieldImage("../../media/keyesAll/tank_matrix.png", 100, 60));
    //this.appendDummyInput("")
      //.appendField(Blockly.MIXLY_MATRIX_NAME);
      //.appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
    this.appendDummyInput("")
      // .appendField(Blockly.MIXLY_4DIGITDISPLAY_TM1637_INIT)
      .appendField('SCL')
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "SCL")
      .appendField('SDA')
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "SDA");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_INIT);
    this.setFieldValue("SCL", "SCL");
    this.setFieldValue("SDA", "SDA");

  }
};

//点阵屏显示_显示图案
Blockly.Blocks.tank_display_Matrix16and8_DisplayChar = {
  init: function () {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    this.appendDummyInput("")
      .appendField(Blockly.matrix16and8)
      .appendField(new Blockly.FieldImage("../../media/keyesAll/tank_matrix.png", 100, 60));
      //.appendField(new Blockly.FieldDropdown([['HT16K33', 'HT16K33'], ['MAX7219', 'MAX7219']]), 'TYPE');
    //this.appendDummyInput("")
     // .appendField(Blockly.MIXLY_MATRIX_NAME);
      //.appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
    //this.appendValueInput("NO")
      //.setCheck(Number)
      //.setAlign(Blockly.ALIGN_RIGHT)
      //.appendField(Blockly.MIXLY_MAX7219_NO);
    this.appendValueInput("LEDArray")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_DISPLAY_MATRIX_PICARRAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_DISPLAYCHAR);
  }
};

Blockly.Blocks.tank_display_Matrix16and8_LedArray = {
  init: function () {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    this.appendDummyInput("")
      .appendField(Blockly.MIXLY_DISPLAY_MATRIX_ARRAYVAR)
      .appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a11")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a21")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a31")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a41")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a51")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a61")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a71")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a81")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a91")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a101")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a111")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a121")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a131")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a141")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a151")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a161");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a12")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a22")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a32")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a42")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a52")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a62")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a72")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a82")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a92")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a102")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a112")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a122")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a132")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a142")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a152")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a162");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a13")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a23")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a33")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a43")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a53")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a63")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a73")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a83")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a93")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a103")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a113")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a123")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a133")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a143")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a153")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a163");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a14")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a24")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a34")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a44")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a54")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a64")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a74")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a84")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a94")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a104")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a114")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a124")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a134")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a144")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a154")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a164");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a15")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a25")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a35")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a45")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a55")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a65")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a75")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a85")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a95")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a105")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a115")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a125")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a135")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a145")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a155")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a165");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a16")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a26")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a36")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a46")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a56")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a66")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a76")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a86")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a96")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a106")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a116")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a126")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a136")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a146")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a156")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a166");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a17")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a27")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a37")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a47")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a57")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a67")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a77")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a87")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a97")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a107")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a117")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a127")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a137")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a147")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a157")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a167");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a18")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a28")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a38")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a48")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a58")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a68")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a78")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a88")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a98")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a108")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a118")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a128")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a138")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a148")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a158")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a168");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_LEDARRAY);
  }
};
//tank_Matrix16and8_image
Blockly.Blocks.Tank_matrix = {
  init: function() {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.matrix16and8_image)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/tank_matrix.png", 100, 60));
    this.appendDummyInput("")
    .appendField(Blockly.tank_choose)
    .appendField(new Blockly.FieldDropdown([
        ["↑", "front"], 
        ["↓", "back"], 
        ["←", "left"], 
        ["→", "right"], 
        ["STOP", "STOP01"],
        ["V", "start01"],
        ["♥", "heart_full"],
        ["▲", "triangle_full"],
        ["▼", "triangle_back"],
        ["∩_∩", "smile"],
        ["￣へ￣", "sad"],
        ["clear", "clear"],
        ]), "matrix");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};



///////////光线传感器///////////////
Blockly.Blocks.Tank_light = {
  init: function() {
    this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown([[Blockly.left_light_sensor, "left_light"], [Blockly.right_light_sensor, "right_light"]]), "light")
    .appendField(new Blockly.FieldImage("../../media/keyesAll/light.png", 60, 32));
    //.appendField("tank_light");
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};


////////////////红外接收////////////////////////////
//红外接收模块
Blockly.Blocks.Tank_ir_r = {
    init: function () {
        this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('ir_rec'), 'VAR')
            .appendField(Blockly.tank_ir_R)
            .appendField(new Blockly.FieldImage("../../media/keyesAll/irr.png", 70, 32));
        this.appendStatementInput('DO')
            .appendField(Blockly.tank_ir_RD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

//////////////////////蓝牙////////////////////////////
Blockly.Blocks.Tank_bluetooth = {
    init: function () {
        this.setColour(Blockly.Blocks.Mini_Tank_Robot.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(Blockly.tank_Bluetooth)
            .appendField(new Blockly.FieldImage("../../media/keyesAll/bluetooth4.0.png", 70, 32))
        this.appendStatementInput('DO')
            .appendField(Blockly.tank_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};


////////////////////////////////////////////////////////////////////////
///////////////////////////////4wd-Car////////////////////////////////

//////////////////LED////////////////
Blockly.Blocks.ks4wd_led = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    this.appendDummyInput("")
    .appendField("LED")
    .appendField(new Blockly.FieldImage("../../media/keyesAll/desk_led.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.Desk_on_off)
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), "STAT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

///////////////////////////front////////////////
Blockly.Blocks.ks4wd_FRONT = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    
    this.appendDummyInput("")
    //.appendField(Blockly.ks4wd_front)
    .appendField(Blockly.ksCar_forward)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4wd_runing.png", 60, 60))
    .appendField(Blockly.ks4wd_left);
    this.appendValueInput("speed_F", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.ks4wd_right);
    this.appendValueInput("speed_F2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////back////////////////
Blockly.Blocks.ks4wd_BACK = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    
    this.appendDummyInput("")
    //.appendField(Blockly.ks4wd_back)
    .appendField(Blockly.ksCar_backward)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4wd_runing.png", 60, 60))
    //.appendField(Blockly.ks4wd_speed);
    .appendField(Blockly.ks4wd_left);
    this.appendValueInput("speed_B", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.ks4wd_right);
    this.appendValueInput("speed_B2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////left////////////////
Blockly.Blocks.ks4wd_LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    
    this.appendDummyInput("")
    //.appendField(Blockly.ks4wd_left)
    .appendField(Blockly.ksCar_left)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4wd_runing.png", 60, 60))
    .appendField(Blockly.ks4wd_left);
    this.appendValueInput("speed_L", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.ks4wd_right);
    this.appendValueInput("speed_L2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_left////////////////
Blockly.Blocks.ks4wd_TURN_LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ks4wd_turn_left)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4wd_runing.png", 60, 60));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////right////////////////
Blockly.Blocks.ks4wd_RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    
    this.appendDummyInput("")
    //.appendField(Blockly.ks4wd_right)
    .appendField(Blockly.ksCar_right)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4wd_runing.png", 60, 60))
    .appendField(Blockly.ks4wd_left);
    this.appendValueInput("speed_R", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM")
    .appendField(Blockly.ks4wd_right);
    this.appendValueInput("speed_R2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////turn_right////////////////
Blockly.Blocks.ks4wd_TURN_RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ks4wd_turn_right)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4wd_runing.png", 60, 60));
    
    this.appendDummyInput("")
    .appendField("PWM");
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


////////////////////////////stop////////////////
Blockly.Blocks.ks4wd_STOP = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.ks4wd_stop)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/4wd_runing.png", 60, 60))
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};



///////////////超声波/////////////////////////
Blockly.Blocks.ks4wd_sr04 = {
  init: function () {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ks4wd_sr01)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/sr01.png", 50, 40));
    
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};





///////////////////////////舵机///////////////////////////////////
Blockly.Blocks.ks4wd_servo2 = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ks4wd_SERVO)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/servo.png", 70, 60));
    this.appendValueInput("angle", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("0~180");
    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

//////////////////ks4wd_matrix////////////////
//////////////////////////////////////16 * 8 点阵//////////////////////////////////
Blockly.Blocks.Matrix_16and8_Init_4wd = {
  init: function () {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    this.appendDummyInput("")
      .appendField(Blockly.matrix16and8_init)
      .appendField(new Blockly.FieldImage("../../media/keyesAll/tank_matrix.png", 100, 60));
    //this.appendDummyInput("")
      //.appendField(Blockly.MIXLY_MATRIX_NAME);
      //.appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
    this.appendDummyInput("")
      // .appendField(Blockly.MIXLY_4DIGITDISPLAY_TM1637_INIT)
      .appendField('SCL')
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "SCL")
      .appendField('SDA')
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "SDA");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_INIT);
    this.setFieldValue("SCL", "SCL");
    this.setFieldValue("SDA", "SDA");

  }
};

//点阵屏显示_显示图案
Blockly.Blocks.display_Matrix16and8_DisplayChar_4wd = {
  init: function () {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    this.appendDummyInput("")
      .appendField(Blockly.matrix16and8)
      .appendField(new Blockly.FieldImage("../../media/keyesAll/tank_matrix.png", 100, 60));
      //.appendField(new Blockly.FieldDropdown([['HT16K33', 'HT16K33'], ['MAX7219', 'MAX7219']]), 'TYPE');
    //this.appendDummyInput("")
     // .appendField(Blockly.MIXLY_MATRIX_NAME);
      //.appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
    //this.appendValueInput("NO")
      //.setCheck(Number)
      //.setAlign(Blockly.ALIGN_RIGHT)
      //.appendField(Blockly.MIXLY_MAX7219_NO);
    this.appendValueInput("LEDArray")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_DISPLAY_MATRIX_PICARRAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_DISPLAYCHAR);
  }
};

Blockly.Blocks.display_Matrix16and8_LedArray_4wd = {
  init: function () {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    this.appendDummyInput("")
      .appendField(Blockly.MIXLY_DISPLAY_MATRIX_ARRAYVAR)
      .appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a11")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a21")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a31")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a41")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a51")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a61")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a71")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a81")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a91")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a101")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a111")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a121")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a131")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a141")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a151")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a161");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a12")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a22")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a32")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a42")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a52")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a62")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a72")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a82")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a92")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a102")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a112")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a122")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a132")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a142")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a152")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a162");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a13")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a23")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a33")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a43")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a53")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a63")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a73")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a83")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a93")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a103")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a113")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a123")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a133")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a143")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a153")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a163");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a14")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a24")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a34")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a44")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a54")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a64")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a74")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a84")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a94")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a104")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a114")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a124")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a134")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a144")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a154")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a164");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a15")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a25")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a35")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a45")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a55")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a65")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a75")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a85")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a95")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a105")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a115")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a125")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a135")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a145")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a155")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a165");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a16")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a26")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a36")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a46")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a56")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a66")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a76")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a86")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a96")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a106")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a116")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a126")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a136")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a146")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a156")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a166");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a17")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a27")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a37")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a47")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a57")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a67")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a77")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a87")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a97")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a107")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a117")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a127")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a137")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a147")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a157")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a167");
    this.appendDummyInput("")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a18")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a28")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a38")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a48")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a58")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a68")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a78")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a88")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a98")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a108")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a118")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a128")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a138")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a148")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a158")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "a168");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_Matrix_HK16T33_LEDARRAY);
  }
};
//Matrix16and8_image_4wd
Blockly.Blocks.ks4wd_matrix = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.matrix16and8_image)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/tank_matrix.png", 100, 60));
    this.appendDummyInput("")
    .appendField(Blockly.tank_choose)
    .appendField(new Blockly.FieldDropdown([
        ["↑", "front"], 
        ["↓", "back"], 
        ["←", "left"], 
        ["→", "right"], 
        ["STOP", "STOP01"],
        ["V", "start01"],
        ["♥", "heart_full"],
        ["▲", "triangle_full"],
        ["▼", "triangle_back"],
        ["∩_∩", "smile"],
        ["￣へ￣", "sad"],
        ["clear", "clear"],
        ]), "matrix");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

///////////循迹传感器////////////////////
Blockly.Blocks.ks4wd_track = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([[Blockly.ks4wd_L_track, "track_left"],[Blockly.ks4wd_C_track, "track_center"],[Blockly.ks4wd_R_track, "track_right"]]), 'track');
    this.appendDummyInput("")
    //.appendField("track")
    .appendField(new Blockly.FieldImage("../../media/keyesAll/track.png", 60, 60));
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};



///////////光线传感器///////////////
Blockly.Blocks.ks4wd_light = {
  init: function() {
    this.setColour(Blockly.Blocks.keyes_4wd.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown([["left_light_sensor", "left_light"], ["right_light_sensor", "right_light"]]), "light")
    .appendField(new Blockly.FieldImage("../../media/keyesAll/light.png", 60, 32));
    
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};


////////////////红外接收////////////////////////////
//红外接收模块
Blockly.Blocks.ks4wd_ir_r = {
    init: function () {
        this.setColour(Blockly.Blocks.keyes_4wd.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('ir_rec'), 'VAR')
            .appendField(Blockly.ks4wd_ir_R)
            .appendField(new Blockly.FieldImage("../../media/keyesAll/irr.png", 70, 32));
        this.appendStatementInput('DO')
            .appendField(Blockly.ks4wd_ir_RD);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

//////////////////////蓝牙////////////////////////////
Blockly.Blocks.ks4wd_bluetooth = {
    init: function () {
        this.setColour(Blockly.Blocks.keyes_4wd.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(Blockly.ks4wd_Bluetooth)
            .appendField(new Blockly.FieldImage("../../media/keyesAll/bluetooth4.0.png", 70, 32))
        this.appendStatementInput('DO')
            .appendField(Blockly.ks4wd_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};


////////////////////////////////////////////////////////////
///////////////////////////Frog-robot////////////////////

///////////////////////////OTTO_init////////////////
Blockly.Blocks.OTTO_init = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_init)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/otto_frog.png", 60, 80));
    this.appendDummyInput("")
    .appendField(Blockly.otto_YL);
    this.appendValueInput("YL", Number)
    .setCheck(Number);

    this.appendDummyInput("")
    .appendField(Blockly.otto_YR);
    this.appendValueInput("YR", Number)
    .setCheck(Number);


    this.appendDummyInput("")
    .appendField(Blockly.otto_RL);
    this.appendValueInput("RL", Number)
    .setCheck(Number);

    
    this.appendDummyInput("")
    .appendField(Blockly.otto_RR);
    this.appendValueInput("RR", Number)
    .setCheck(Number);
    
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};





///////////////////////////front////////////////
Blockly.Blocks.otto_FRONT = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_front);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));

    this.appendDummyInput("")
    .appendField(Blockly.otto_steps);
    this.appendValueInput("steps", Number)
    .setCheck(Number);

    this.appendDummyInput("")
    .appendField(Blockly.otto_speed);
    this.appendValueInput("speed1", Number)
    .setCheck(Number);
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////back////////////////
Blockly.Blocks.otto_BACK = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_back);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));

    this.appendDummyInput("")
    .appendField(Blockly.otto_steps);
    this.appendValueInput("steps", Number)
    .setCheck(Number);

    this.appendDummyInput("")
    .appendField(Blockly.otto_speed);
    this.appendValueInput("speed1", Number)
    .setCheck(Number);
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////left////////////////
Blockly.Blocks.otto_LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_turn_left);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));

    this.appendDummyInput("")
    .appendField(Blockly.otto_steps);
    this.appendValueInput("steps", Number)
    .setCheck(Number);

    this.appendDummyInput("")
    .appendField(Blockly.otto_speed);
    this.appendValueInput("speed1", Number)
    .setCheck(Number);
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


////////////////////////////right////////////////
Blockly.Blocks.otto_RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_turn_right);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));

    this.appendDummyInput("")
    .appendField(Blockly.otto_steps);
    this.appendValueInput("steps", Number)
    .setCheck(Number);

    this.appendDummyInput("")
    .appendField(Blockly.otto_speed);
    this.appendValueInput("speed1", Number)
    .setCheck(Number);
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


////////////////////////////stop////////////////
Blockly.Blocks.otto_STOP = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_stop);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32))
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////moon_left////////////////
Blockly.Blocks.otto_moon_LEFT = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_left_moonwalk);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));

    this.appendDummyInput("")
    .appendField(Blockly.otto_steps);
    this.appendValueInput("steps", Number)
    .setCheck(Number);

    this.appendDummyInput("")
    .appendField(Blockly.otto_speed);
    this.appendValueInput("speed1", Number)
    .setCheck(Number);
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////right////////////////
Blockly.Blocks.otto_moon_RIGHT = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_right_moonwalk);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));

    this.appendDummyInput("")
    .appendField(Blockly.otto_steps);
    this.appendValueInput("steps", Number)
    .setCheck(Number);

    this.appendDummyInput("")
    .appendField(Blockly.otto_speed);
    this.appendValueInput("speed1", Number)
    .setCheck(Number);
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////kickLeft////////////////
Blockly.Blocks.otto_kickLeft = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_left_galop);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32))
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////kickright////////////////
Blockly.Blocks.otto_kickright = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_right_galop);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32))
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////otto_drunk///////////////
Blockly.Blocks.otto_drunk = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_drunk);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));

    this.appendDummyInput("")
    .appendField(Blockly.otto_speed);
    this.appendValueInput("speed1", Number)
    .setCheck(Number);
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////noGravity////////////////
Blockly.Blocks.otto_noGravity = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_noGravity);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32))
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////crusaito////////////////
Blockly.Blocks.otto_crusaito = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_crusaito);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));

    this.appendDummyInput("")
    .appendField(Blockly.otto_steps);
    this.appendValueInput("steps", Number)
    .setCheck(Number);

    this.appendDummyInput("")
    .appendField(Blockly.otto_speed);
    this.appendValueInput("speed1", Number)
    .setCheck(Number);
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////segunda1////////////////
Blockly.Blocks.otto_segunda1 = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_friction_pace);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////jump////////////////
Blockly.Blocks.otto_jump = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_jump);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////flapping////////////////
Blockly.Blocks.otto_flapping = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_flapping);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));

    this.appendDummyInput("")
    .appendField(Blockly.otto_steps);
    this.appendValueInput("steps", Number)
    .setCheck(Number);

    this.appendDummyInput("")
    .appendField(Blockly.otto_speed);
    this.appendValueInput("speed1", Number)
    .setCheck(Number);
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////swing////////////////
Blockly.Blocks.otto_swing = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_swing);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));

    this.appendDummyInput("")
    .appendField(Blockly.otto_steps);
    this.appendValueInput("steps", Number)
    .setCheck(Number);

    this.appendDummyInput("")
    .appendField(Blockly.otto_speed);
    this.appendValueInput("speed1", Number)
    .setCheck(Number);
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////swing////////////////
Blockly.Blocks.otto_goingUp = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField(Blockly.otto_goingUp);
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32));


    this.appendDummyInput("")
    .appendField(Blockly.otto_speed);
    this.appendValueInput("speed1", Number)
    .setCheck(Number);
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

////////////////////////////dance////////////////
/*Blockly.Blocks.otto_dance = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    
    this.appendDummyInput("")
    .appendField("dance");
    //.appendField(new Blockly.FieldImage("../../media/keyesAll/runing.png", 43, 32))
 
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};*/

///////////////////////////舵机///////////////////////////////////
Blockly.Blocks.otto_servo = {
  init: function() {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.otto_servo)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput("angle", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.otto_angle);
    this.appendValueInput("time", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DELAY+'('+Blockly.MIXLY_DELAY_MS+')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};



///////////////超声波/////////////////////////
Blockly.Blocks.otto_sr04 = {
  init: function () {
    this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.otto_sr01)
    .appendField(new Blockly.FieldImage("../../media/keyesAll/otto_sr01.png", 50, 40));
    
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};



//////////////////////蓝牙////////////////////////////
Blockly.Blocks.otto_bluetooth = {
    init: function () {
        this.setColour(Blockly.Blocks.OTTO_Frog.HUE);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('bluetooth_val'), 'VAL')
            .appendField(Blockly.otto_Bluetooth)
            .appendField(new Blockly.FieldImage("../../media/keyesAll/otto_bluetooth4.0.png", 70, 32))
        this.appendStatementInput('DO')
            .appendField(Blockly.otto_Bluetooth_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};




