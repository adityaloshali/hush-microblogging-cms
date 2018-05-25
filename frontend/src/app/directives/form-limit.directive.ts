import {  
    ReactiveFormsModule,  
    NG_VALIDATORS,  
    FormsModule,  
    FormGroup,  
    FormControl,  
    ValidatorFn,  
    Validator  
   } from '@angular/forms';  
   import { Directive } from '@angular/core';  
   @Directive({  
    selector: '[contentlimit][ngModel]',  
    providers: [  
     {  
      provide: NG_VALIDATORS,  
      useExisting: FormLimitDirective,  
      multi: true  
     }  
    ]  
   })  
   export class FormLimitDirective implements Validator {  
    validator: ValidatorFn;  
    constructor() {  
     this.validator = this.bodyValidator();  
    }  
    validate(c: FormControl) {  
     return this.validator(c);  
    }  
   
   bodyValidator(): ValidatorFn {  
     return (c: FormControl) => {  
      //let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);
      var word = [];
      if(c.value){
         word = c.value.trim().split(" ");  
      }  
      if ((word.length>3) && (word.length<151)) {  
       return null;  
      } else {  
       return {  
        contentlimit: {  
         valid: false  
        }  
       };  
      }  
     }  
    }  
   }