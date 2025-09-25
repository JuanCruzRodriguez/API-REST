let users = [
    { id: 1, name: "Carlos", email: "carlos@gmail.com" },
    { id: 2, name: "Juan", email: "juan@gmail.com" },
    { id: 3, name: "Julieta", email: "julieta@gmail.com" }
];

const postUser = (req, res) => {
    try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ msg: "Faltan campos" });
        return;
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password
    };

    users.push(newUser);

    res.status(201).json({ msg: "Usuario creado", data: newUser });
    } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "No se pudo guardar el usuario" });
    }
};

const getUsers = (req, res) => {
    try {
    res.status(200).json({ msg: "ok", data: users });
    } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "No se pudo obtener los usuarios" });
    }
};

export { postUser, getUsers };
