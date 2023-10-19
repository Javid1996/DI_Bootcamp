

// const router = require('./router.js');

const getMethodHomepage = (req, res) => {
    res.send("Homepage");
};

const getMethodAbout =  (req, res) => {
    res.send("About Us page");
};

module.export = {
    getMethodAbout,getMethodHomepage
}
