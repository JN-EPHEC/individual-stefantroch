

export const userValidator = (age : number ,role : string ,email : string ) : boolean =>{
    const hasDot = /[.]/.test(email);
    const hasArobase = /[@]/.test(email);
    const ageValide = /[0-9]/.test(age)
    

    if (ageValide){
        if (age > 120) {
             throw new Error('Âge invalide')
            }
        if (age < 18) {

            if (role == 'stagiaire' && hasDot && hasArobase){
                return true
            }
            else{
                return false
            }   
        } 

        if (18 <= age && age < 120){
            if(role == 'stagiaire' || role == 'admin' ||role == 'user'){
                if ( hasDot && hasArobase){return true} 
                else {return false}
                
            }
            else {
                throw new Error("Rôle invalide")
            };
        }

    }
    else {return false}
}