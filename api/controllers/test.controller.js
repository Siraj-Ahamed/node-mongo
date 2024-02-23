const test = (req, res) => {
    res.send({ message: "APIs is working bro!" });
    console.log("hi", req.body);
};

export default test;