export const userValidator = (age, role, email) => {
    const hasDot = /[.]/.test(email);
    const hasArobase = /[@]/.test(email);
    if (age > 120) {
        throw new Error('Âge invalide');
    }
    if (age < 18) {
        if (role == 'stagiaire' && hasDot && hasArobase) {
            return true;
        }
        else {
            return false;
        }
    }
    if (18 <= age && age < 120) {
        if (role == 'stagiaire' || role == 'admin' || role == 'user') {
            if (hasDot && hasArobase) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            throw new Error("Rôle invalide");
        }
        ;
    }
};
//# sourceMappingURL=userValidator.js.map