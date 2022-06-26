import { Size } from "../../model/Size";
import { ICreateSizeDTO, ISizesRepository } from "../ISizesRepository";

class SizesRepository implements ISizesRepository{
    private sizes: Size[];

    private static INSTANCE: SizesRepository;

    private constructor(){
        this.sizes = [];
    }

    public static getInstance(): SizesRepository{
        if (!SizesRepository.INSTANCE){
            SizesRepository.INSTANCE = new SizesRepository();
        }
        return SizesRepository.INSTANCE;
    }

    create ({name, price}: ICreateSizeDTO):void{
        const size = new Size();

        Object.assign(size, {name, price});

        this.sizes.push(size);
    }

    list(): Size[]{
        return this.sizes
    }

    findByName(name: string): Size {
        const size = this.sizes.find(size => size.name === name);
        return size;
    }



}

export {SizesRepository}