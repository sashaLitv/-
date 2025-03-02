import { Reader } from "./reader.module";

export class ReaderList{
    readers: Reader[] = [];
    addReader(r: Reader): void{
        this.readers.push(r);
    }

    sortReaderByAddress(): void{
        this.readers.sort((first, second) =>{
            const  firstAddress = first.address.toLowerCase();
            const  secondAddress = second.address.toLowerCase();
            if(firstAddress > secondAddress)        return 1;
            else if(firstAddress < secondAddress)   return -1;
            else                                    return 0;
        });
    }
}