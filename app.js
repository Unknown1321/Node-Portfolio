import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

/* My Different Pages */

/* My Frontpage Page */
app.get("/frontpage", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

/* My Contact Page */
app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("public/pages/contact/contact.html"));
});

/* Skills Page */
app.get("/skills", (req, res) => {
    res.sendFile(path.resolve("public/pages/skills/skills.html"));
});

/* Projects Page */
app.get("/projects", (req, res) => {
    res.sendFile(path.resolve("public/pages/projects/projects.html"));
});

/* Mandatory 1 Page */
app.get("/mandatory1", (req, res) => {
    res.sendFile(path.resolve("public/pages/projects/mandatory1.html"));
});

/* Mandatory 2 Page */
app.get("/mandatory2", (req, res) => {
    res.sendFile(path.resolve("public/pages/projects/mandatory2.html"));
});

/* Login Page */
app.get("/login", (req, res) => {
    res.sendFile(path.resolve("public/pages/login/login.html"));
});

/* Sign up Page */
app.get("/sign", (req, res) => {
    res.sendFile(path.resolve("public/pages/signup/sign.html"));
});


const PORT = 5000;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return
    }
    console.log("Server is running on port ", PORT);
});
                