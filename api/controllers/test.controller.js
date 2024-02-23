const test = (req, res) => {
    res.send({ message: "APIs is working!" });
    console.log("hi", req.body);
};

export default test;