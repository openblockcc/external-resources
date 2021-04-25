#include "ESP32_Motor.h"
#include "Arduino.h"

Motor :: Motor(motor_num_t num ,uint8_t dirPin,uint8_t speedPin)
{
    setMotornum(num,dirPin,speedPin);    
}
Motor :: ~Motor()
{
    
} 

void Motor::setMotornum(motor_num_t num,uint8_t dirPin,uint8_t speedPin)
{    
    switch (num)
    {
	case motor_1:
      Dire_Pin = dirPin;
      Speed_Pin = speedPin;
	    MCPWM = MCPWM0A;
      MCPWM_OPR = MCPWM_OPR_A;
      MCPWM_TIMER = MCPWM_TIMER_0;
	    break;
	case motor_2:
      Dire_Pin = dirPin;
      Speed_Pin = speedPin;
	    MCPWM = MCPWM0B;
      MCPWM_OPR = MCPWM_OPR_B;
      MCPWM_TIMER = MCPWM_TIMER_0;
	    break;
  case motor_3:
      Dire_Pin = dirPin;
      Speed_Pin = speedPin;
      MCPWM = MCPWM1A;
      MCPWM_OPR = MCPWM_OPR_A;
      MCPWM_TIMER = MCPWM_TIMER_1;
      break;  
  case motor_4:
      Dire_Pin = dirPin;
      Speed_Pin = speedPin;
      MCPWM = MCPWM1B;
      MCPWM_OPR = MCPWM_OPR_B;
      MCPWM_TIMER = MCPWM_TIMER_1;
      break;  	
	default:
	    break;
    }
   
}

void Motor :: mcpwm_begin()
{  
    pinMode(Dire_Pin,OUTPUT);
    mcpwm_gpio_init(MCPWM_UNIT_0, MCPWM, Speed_Pin);

    mcpwm_config_t pwm_config;
    pwm_config.frequency = 1000;    //frequency = 500Hz,    
    pwm_config.cmpr_a = 0;    //duty cycle of PWMxA = 0
    pwm_config.cmpr_b = 0;    //duty cycle of PWMxB = 0
    pwm_config.counter_mode = MCPWM_UP_COUNTER;
    pwm_config.duty_mode = MCPWM_DUTY_MODE_0;
    mcpwm_init(MCPWM_UNIT_0, MCPWM_TIMER, &pwm_config);
  
  }

void Motor :: Motor_Run(float duty_cycle)
{    
     if(duty_cycle>=0){
      
        digitalWrite(Dire_Pin,LOW);
        mcpwm_set_duty(MCPWM_UNIT_0, MCPWM_TIMER, MCPWM_OPR, duty_cycle);
        mcpwm_set_duty_type(MCPWM_UNIT_0, MCPWM_TIMER, MCPWM_OPR, MCPWM_DUTY_MODE_0);      
    }
    
    else{
        digitalWrite(Dire_Pin,HIGH);
        mcpwm_set_duty(MCPWM_UNIT_0, MCPWM_TIMER, MCPWM_OPR, -duty_cycle);
        mcpwm_set_duty_type(MCPWM_UNIT_0, MCPWM_TIMER, MCPWM_OPR, MCPWM_DUTY_MODE_0);
        }
       
}






