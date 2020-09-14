let wait=0;
enum pen_onoff {
  上げる,
  下げる,
}



//% color="#3943c6" block="ﾌﾟﾛｯﾀｰ・ｶｰ" icon="\uf1b9"

namespace eureka_plotter_car {









  //% color="#3943c6" weight=71　blockId=plottercar_forward
  //% block="前へ |%F_cm| ｃｍ進む" group="3　基本の動き"
  //% F_cm.min=0 F_cm.max=20
  export function plottercar_forward(F_cm: number): void {
	    led.enable(false)
    for (let index = 0; index < (F_cm / 18.23) * 512; index++) {
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      let i=0;
      for ( i = 0; i < 1000; i++ );{}

      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
       for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
       for ( i = 0; i < 1000; i++ );{}
    }
  }

  //% color="#3943c6" weight=69　blockId=plottercar_back
  //% block="後へ |%F_cm| ｃｍ進む" group="3　基本の動き"
  //% F_cm.min=0 F_cm.max=20
  export function plottercar_back(F_cm: number): void {
	    led.enable(false)
    for (let index = 0; index < (F_cm / 18.23) * 512; index++) {
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      let i=0;
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for ( i = 0; i < 1000; i++ );{}
    }
  }

  //% color="#3943c6" weight=66　blockId=plottercar_L_cycle
  //% block="左回り　角度 |%L_degree| " group="3　基本の動き"
  //% L_degree.min=0 L_degree.max=360
    export function plottercar_L_cycle(L_degree: number): void {
    for (let index = 0; index < (L_degree / 360) * 512 * 1.64; index++) {
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      let i=0;
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for ( i = 0; i < 1000; i++ );{}
    }
  }

  //% color="#3943c6" weight=60　blockId=plottercar_rest
  //% block="停止状態（電流ＯＦＦ）" group="3　基本の動き"
  export function plottercar_frest(): void {
    pins.digitalWritePin(DigitalPin.P3, 0);
    pins.digitalWritePin(DigitalPin.P4, 0);
    pins.digitalWritePin(DigitalPin.P6, 0);
    pins.digitalWritePin(DigitalPin.P7, 0);
    pins.digitalWritePin(DigitalPin.P13, 0);
    pins.digitalWritePin(DigitalPin.P14, 0);
    pins.digitalWritePin(DigitalPin.P15, 0);
    pins.digitalWritePin(DigitalPin.P16, 0);
  }

  //% color="#3943c6" weight=64　blockId=plottercar_R_cycle
  //% block="右回り　角度 |%R_degree| " group="3　基本の動き"
  //% R_degree.min=0 R_degree.max=360
  export function plottercar_R_cycle(R_degree: number): void {
    for (let index = 0; index < (R_degree / 360) * 512 * 1.64; index++) {
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      let i=0;
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 1);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 1);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 0);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 0);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 1);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 1);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 0);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 0);
      for ( i = 0; i < 1000; i++ );{}
      pins.digitalWritePin(DigitalPin.P3, 1);
      pins.digitalWritePin(DigitalPin.P4, 0);
      pins.digitalWritePin(DigitalPin.P6, 0);
      pins.digitalWritePin(DigitalPin.P7, 1);
      pins.digitalWritePin(DigitalPin.P13, 1);
      pins.digitalWritePin(DigitalPin.P14, 0);
      pins.digitalWritePin(DigitalPin.P15, 0);
      pins.digitalWritePin(DigitalPin.P16, 1);
      for ( i = 0; i < 1000; i++ );{}
    }
  }


  //% color="#525252" weight=90 blockId=eureka_relay block="ペン |%mode| " group="4_ペンの状態"
  export function plottercar_pen(mode: pen_onoff) {
        if (mode == pen_onoff.下げる) {
     　　pins.servoWritePin(AnalogPin.P8, 0);
         basic.pause(1000);
        }
        if (mode == pen_onoff.上げる) {
     　　pins.servoWritePin(AnalogPin.P8, 90);  
         basic.pause(100);
        }

    }
}

