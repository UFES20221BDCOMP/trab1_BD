import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ISaucesRepository } from "../../repositories/ISaucesRepository";

interface IImportSauce {
    name: string,
    price: number,
}

class ImportSauceUseCase {

    constructor(private saucesRepository: ISaucesRepository) { }


    loadSauces(file: Express.Multer.File): Promise<IImportSauce[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const sauces: IImportSauce[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [name, price] = line;
                sauces.push({
                    name,
                    price
                });
            })
                .on("end", () => {
                    fs.promises.unlink(file.path); //remover o arquivo da pasta tmp após a utilização
                    resolve(sauces);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const sauces = await this.loadSauces(file);

        sauces.map(async (sauce) => {
            const { name, price } = sauce;

            const existSauce = this.saucesRepository.findByName(name);

            if (!existSauce) {
                this.saucesRepository.create({
                    name,
                    price
                })
            }
        })
    }
}

export { ImportSauceUseCase }