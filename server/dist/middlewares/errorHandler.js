export const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: 'Erreur Serveur' });
};
//# sourceMappingURL=errorHandler.js.map