import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { IMeatsRepository } from "../../repositories/IMeatsRepository";
import { inject, injectable } from "tsyringe";

interface IImportMeat {
    name: string,
    price: number,
}

@injectable()
class ImportMeatUseCase {

    constructor(
        @inject("MeatsRepository")
        private meatsRepository: IMeatsRepository) { }


    loadMeats(file: Express.Multer.File): Promise<IImportMeat[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const meats: IImportMeat[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [name, price] = line;
                meats.push({
                    name,
                    price
                });
            })
                .on("end", () => {
                    fs.promises.unlink(file.path); //remover o arquivo da pasta tmp após a utilização
                    resolve(meats);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const meats = await this.loadMeats(file);

        meats.map(async (meat) => {
            const { name, price } = meat;

            const existMeat = await this.meatsRepository.findByName(name);

            if (!existMeat) {
                await this.meatsRepository.create({
                    name,
                    price
                })
            }
        })
    }
}

export { ImportMeatUseCase }