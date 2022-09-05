import app from "./app";
import getAllProducts from "./endpoints/GETallProducts";
import getAllPurchase from "./endpoints/GETallPurchase";
import getAllUsers from "./endpoints/GETallUser";
import postCreateProduct from "./endpoints/POSTcreateProduct";
import createUser from "./endpoints/POSTcreateUser"
import postPurchaseRecord from "./endpoints/POSTpurchaseRecord";

app.post("/users", createUser)

app.get("/users", getAllUsers)

app.post("/products",postCreateProduct)

app.get("/products", getAllProducts)

app.post("/purchases", postPurchaseRecord)

app.get("/users/:user_id/purchases", getAllPurchase)

