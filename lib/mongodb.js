import mongoose from "mongoose"

export const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Conexão estabelecida!");
    } catch (error) {
        console.log("Erro ao connectar: ", error);
    }
}