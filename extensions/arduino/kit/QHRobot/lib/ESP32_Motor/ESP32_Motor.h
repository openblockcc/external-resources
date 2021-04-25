/**********************************************************
      Make in goouuu.com
	  Maker:MDC
***********************************************************/
#ifndef ESP32_Motor_H
#define ESP32_Motor_H


#include <stdio.h>

#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_attr.h"

#include "driver/mcpwm.h"
#include "soc/mcpwm_reg.h"
#include "soc/mcpwm_struct.h"

typedef enum
{
    motor_1    =1,
    motor_2    =2,
    motor_3    =3,
    motor_4    =4,
} motor_num_t;

class Motor
{
  private:
          int  pin;   
          int  Dire_Pin;
          int  Speed_Pin;

          void setMotornum(motor_num_t num,uint8_t dirPin,uint8_t speedPin);

          mcpwm_io_signals_t  MCPWM;
          mcpwm_operator_t  MCPWM_OPR;          
          mcpwm_timer_t MCPWM_TIMER;

  public:  //公共方法
     Motor(motor_num_t num,uint8_t dirPin,uint8_t speedPin);//构造函数
     ~Motor();//析构函数

     
     void mcpwm_begin();
     void Motor_Run(float duty_cycle);
     
};


 

#endif
