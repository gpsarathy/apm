import { Pipe,PipeTransform } from '@angular/core';

@Pipe(
    {
        name:"ConvertToStars"
    }
)

export class PConvertToStars implements PipeTransform
{
    
    transform(rating: string, ...args: any[]) {

        var rt =parseInt(rating);
        var val='';
        while( rt-->0)
        {
        val+='*';
        }
        
        return val;
    }
    
}