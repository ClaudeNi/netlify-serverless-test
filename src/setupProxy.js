const proxy = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        proxy.createProxyMiddleware("/.netlify/funcions/", {
            target: "http://localhost:9000/",
            pathRewrite: {
                "^\\netlify/funcions": "",
            },
        })
    );
};
