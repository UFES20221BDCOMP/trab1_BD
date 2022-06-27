import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ICrustsRepository } from "../../repositories/ICrustsRepository";
import { inject, injectable } from "tsyringe";

interface IImportCrust {
    name: string,
    price: number,
}

@injectable()
class ImportCrustUseCase {

    constructor(
        @inject("CrustsRepository")
        private crustsRepository: ICrustsRepository) { }


    loadCrusts(file: Express.Multer.File): Promise<IImportCrust[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const crusts: IImportCrust[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [name, price] = line;
                crusts.push({
                    name,
                    price
                });
            })
                .on("end", () => {
                    fs.promises.unlink(file.path); //remover o arquivo da pasta tmp após a utilização
                    resolve(crusts);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const crusts = await this.loadCrusts(file);

        crusts.map(async (crust) => {
            const { name, price } = crust;

            const existCrust = await this.crustsRepository.findByName(name);

            if (!existCrust) {
                await this.crustsRepository.create({
                    name,
                    price
                })
            }
        })
    }
}

export { ImportCrustUseCase }