import { calculateShipping } from "../utils/shipping";
const distanceCasesLong = [
    [0, 5, "standard", 10, "Distance faible, poids faible, livraison standard"],
    [0, 15, "standard", 15, "Distance faible, poids middle, livraison standard"],
    [0, 5, "express", 20, "Distance faible, poids faible, livraison express"],
    [0, 15, "express", 30, "Distance faible, poids middle, livraison express"],
    [75, 5, "standard", 25, "Distance middle, poids faible, livraison standard"],
    [75, 15, "standard", 37.5, "Distance middle, poids middle, livraison standard"],
    [75, 5, "express", 50, "Distance middle, poids faible, livraison express"],
    [75, 15, "express", 75, "Distance middle, poids middle, livraison express"],
    [800, 5, "standard", 50, "Distance longue, poids faible, livraison standard"],
    [800, 15, "standard", 75, "Distance longue, poids middle, livraison standard"],
    [800, 5, "express", 100, "Distance longue, poids faible, livraison express"],
    [800, 15, "express", 150, "Distance longue, poids middle, livraison express"],
];
/*
describe("Shipping test",() =>{
    it.each(distanceCasesLong)('devrait calculer avec une distance de : %dkm, poids : %d kg, type %s ',
        (distance,weight,type,expected,description) =>{
            const result = calculateShipping(distance,weight,type)
            expect(result).toBe(expected)
        })
        });
/*
const distanceCasesCourt=[
    [25,9,'standard',10, 'Couvre la paire de base (D1, W1) et (W1, T1)'],
    [25,50,'express',30,'Couvre (D1, W2) et (W2, T2).'],
    [500,5,'express',50,'Couvre (D2, T2)'],
    [500,45,'standard',37.5,'(D2, W2).'],
    [800,5,'express',100,'D3 + T2 et D3 +W1'],
    [800,50,'standard',75,'MAX'],

]

/*describe("Shipping N-wise",()=>{
    it.each(distanceCasesCourt)('Scénario : %dkm, %d kg, type %s => Total %d €  (%s)'    ,
        (distance,weight,type,expected,description)=>{
            const result = calculateShipping(distance,weight,type)
            expect(result).toBe(expected)
        })
         });
 */
describe("Shipping white box tests", () => {
    test('distance <0', () => {
        expect(() => calculateShipping(-1, 10, 'standard')).toThrow("Invalid distance");
    });
    test('weigth <0 ', () => {
        expect(() => calculateShipping(5, -1, 'standard')).toThrow("Invalid weight");
    });
    test('weigth >50 ', () => {
        expect(() => calculateShipping(5, 55, 'standard')).toThrow("Invalid weight");
    });
    test('distance < 50 => price 10', () => {
        expect(calculateShipping(45, 4, 'standard')).toBe(10);
    });
    test('distance <500', () => {
        expect(calculateShipping(400, 4, 'standard')).toBe(25);
    });
    test('distance > 500', () => {
        expect(calculateShipping(800, 4, 'standard')).toBe(50);
    });
    test('weight>=10', () => {
        expect(calculateShipping(25, 10, 'standard')).toBe(15);
    });
    test('express (x2) > 10', () => {
        expect(calculateShipping(10, 5, 'express')).toBe(20);
    });
});
//# sourceMappingURL=shipping.test.js.map