import { validatePassword } from "../utils/password";
describe("Password Validator - White Box Testing", () => {
    // Test initial pour initialiser le rapport de couverture
    // Ce test ne couvre que la première ligne de la fonction (Branch 1)
    it("devrait rejeter un mot de passe vide", () => {
        const result = validatePassword("", 25);
        expect(result).toBe(false);
    });
    it('pwd plus grand que 20', () => {
        const result = validatePassword('qqqdsdfdsssssssssssssssssssssssfdddddddddqqqqqq', 25);
        expect(result).toBe(false);
    });
});
describe("Password Validator - WBT Branch 3", () => {
    it('pwd plus petit que 8', () => {
        const result = validatePassword("qsdsd", 25);
        expect(result).toBe(false);
    });
});
describe("Password Validator - WBT branch 4", () => {
    it('Enfant, pas de minuscules', () => {
        const result = validatePassword('12345678', 11);
        expect(result).toBe(false);
    });
    it('Enfant minuscules', () => {
        const result = validatePassword('fsdfsdf45454', 11);
        expect(result).toBe(true);
    });
});
describe('Branche 5 adulte', () => {
    it('pwd sans maj', () => {
        const result = validatePassword('abc1defghiklj', 40);
        expect(result).toBe(false);
    });
    it('pwd sans min', () => {
        const result = validatePassword('ABC1DEFGHTIEZDSS', 40);
        expect(result).toBe(false);
    });
    it('pwd sans nombre', () => {
        const result = validatePassword('dsfjzfgkdKFZEKE', 40);
        expect(result).toBe(false);
    });
});
describe('branche 6 adulte', () => {
    it('pwd sans special charact', () => {
        const result = validatePassword('sfdFSE343dsfes', 40);
        expect(result).toBe(false);
    });
});
describe('Branche 7 senior', () => {
    it('pwd sans nombre', () => {
        const result = validatePassword('qdqsdqdqdqsdqdq', 70);
        expect(result).toBe(false);
    });
});
describe('Final', () => {
    it('finale adulte', () => {
        const result = validatePassword('3EREsdvnvs@dvknjk', 40);
        expect(result).toBe(true);
    });
    it('finale senior', () => {
        const result = validatePassword('3EREsdvnvsdvknjk', 70);
        expect(result).toBe(true);
    });
    it('FInal enfant', () => {
        const result = validatePassword('3EREsdvnvs@dvknjk', 8);
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=password.test.js.map