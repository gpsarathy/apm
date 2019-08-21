import { Pipe,PipeTransform } from '@angular/core';

@Pipe(
    {
        name:"ConvertToStars"
    }
)

export class PConvertToStars implements PipeTransform
{
    val:string='';
    transform(rating: string, ...args: any[]) {

        var rt =parseInt(rating);
        while( rt-->0)
        {
        this.val+='*';
        }
        this.val= this.val+'end';
        return this.val;
    }
    
}