import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ChangePasswordValidators {

    static validPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if (control.value !== 'password')
                resolve({ invalidPassword: true})
            else
                resolve(null)
        })
    }

    static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('newpassword')
        let confirmPassword = control.get('confirmpassword')
        if (newPassword !== confirmPassword)
            return { passwordsShouldMatch: true }
        
        return null
    }
    

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        
        return null
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'nate') 
                    resolve({ shouldBeUnique: true })
                else
                    resolve(null)
            }, 2000);
            
        }) 

    }
}