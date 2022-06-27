import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ISizesRepository } from "../../repositories/ISizesRepository";
import { inject, injectable } from "tsyringe";

interface IImportSize {
    name: string,
    price: number,
}

@injectable()
class ImportSizeUseCase {

    constructor(
        @inject("SizesRepository")
        private sizesRepository: ISizesRepository) { }


    loadSizes(file: Express.Multer.File): Promise<IImportSize[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const sizes: IImportSize[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [name, price] = line;
                sizes.push({
                    name,
                    price
                });
            })
                .on("end", () => {
                    fs.promises.unlink(file.path); //remover o arquivo da pasta tmp após a utilização
                    resolve(sizes);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const sizes = await this.loadSizes(file);

        sizes.map(async (size) => {
            const { name, price } = size;

            const existSize = await this.sizesRepository.findByName(name);

            if (!existSize) {
                await this.sizesRepository.create({
                    name,
                    price
                })
            }
        })
    }
}

export { ImportSizeUseCase }