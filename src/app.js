const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.port || 3000 ;

const static_web = (path.join(__dirname,"../public"));
const static_view = (path.join(__dirname,"../template/views"));
const static_partial = (path.join(__dirname,"../template/partials"));



// using hbs view engine
app.set('view engine', 'hbs');
// changing view engine by partials 
app.set('views', static_view);
// useing partial 
hbs.registerPartials(static_partial);

app.use(express.static(static_web));

app.get("", (rq, rs) => {
    rs.render("index");
})

app.get("/about", (rq, rs) => {
    rs.render("about");
})

app.get("/weather", (rq, rs) => {
    rs.render("weather");
})
app.get("/employes", (rq, rs) => {
    rs.render("employes");
})

app.get("*", (rq, rs) => {
    rs.render("err404", {
        //props message
        errmsg: 'oops! something went Wrong'            

    });
})

app.listen(port, () => {
    console.log(`host from the port no ${port}`);
})
