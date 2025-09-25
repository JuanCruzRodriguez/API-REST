import User from "../models/userModel.js";

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ msg: "ok", data: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "No se pudieron obtener los usuarios" });
    }
    };

    const postUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
        return res.status(400).json({ msg: "Faltan campos obligatorios" });
        }
        const user = new User({ name, email, password });
        const data = await user.save();
        res.status(201).json({ msg: "Usuario creado", data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "No se pudo crear el usuario" });
    }
};

export { getUsers, postUser };
