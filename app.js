import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

/* Our Different Pages */

app.get("/frontpage", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("public/pages/contact/contact.html"));
});

app.get("/skills", (req, res) => {
    res.sendFile(path.resolve("public/pages/skills/skills.html"));
});

app.get("/projects", (req, res) => {
    res.sendFile(path.resolve("public/pages/projects/projects.html"));
});


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return
    }
    console.log("Server is running on port ", PORT);
});