export default function checkIdParam(req, res, next) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: "Id invalide" });
    }
    next();
}
//# sourceMappingURL=checkIdParam.js.map