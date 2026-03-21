/*userValidator(age,role,email)
— Âge (number) :
— Doit être un nombre valide.
— Si inférieur à 18 ans : Inscription refusée (retourne false), sauf si le rôle est ”stagiaire”
(retourne true).
— Si supérieur à 120 ans : Doit lever une erreur (throw new Error("Âge invalide")).
— Rôle (string) :
— N’accepte que trois valeurs exactes : ”admin”, ”user”, ou ”stagiaire”.
— Toute autre valeur lève une erreur (throw new Error("Rôle invalide")).
— Email (string) :
— Doit obligatoirement contenir un caractère @ et un point ..
— Sinon, retourne false


*/

import { userValidator } from "../utils/userValidator"

const ValidateUserTest = [
[16,'admin','test@test.test',false],
[16,'user','test@test',false],
[16,'stagiaire','testtest.test',false],
[16,'invalide','test@test.test',false],

[18,'admin','test@test',false],
[18,'user','testtest.test',false],
[18,'stagiaire','test@test.test',true],

]
const ValidateUserTestThrow = [

[18,'invalide','test@test','Rôle invalide'],
[121,'admin','testtest.test',"Âge invalide"],
[121,'user','test@test.test',"Âge invalide"],
[121,'stagiaire','test@test',"Âge invalide"],
[121,'invalide','testtest.test',"Âge invalide"],
]

describe('Pair Whise userValidator',()=>{
    test.each(ValidateUserTest)('Pour chaque situation : age %d, role %s, email %s',
        (age,role,email,expected)=>{
            const result = userValidator(age,role,email)
            expect(result).toBe(expected)

        }
    )
})


describe ('Pair whise userValidator throw errors',()=>{
     test.each(ValidateUserTestThrow)(
        'Pour chaque situation : age %d, role %s, email %s',
        (age, role, email, expected) => {
            expect(() => userValidator(age, role, email)).toThrow(expected)
        }
    )
})


describe('On fini le boulot avec la white box',()=>{
    it('stagiaire mineur  et email valide', ()=>{
    const result = userValidator(16,'stagiaire','test@test.test')
    expect(result).toBe(true)
    })

    /*it('age is not a number',()=>{
        const result = userValidator('dd','admin','test@test.test')
        expect(result).toBe(false)
    })*/
     it('adulte + email valide',()=> {
        const result = userValidator(18,'admin','test@test.test')
        expect(result).toBe(true)
   

    })
    it('adulte role ou email pas good',()=> {
        const result = userValidator(18,'admin','testtesttest')
        expect(result).toBe(false)


    })
})







