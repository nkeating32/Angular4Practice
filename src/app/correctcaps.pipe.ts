import { Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'correctCaps'
})
export class CorrectCaps implements PipeTransform {
    
    
    transform(value: string) {
        let prepositions = ['the', 'a', 'an', 'of', 'in', 'to', 'for', 'with', 'on', 'at', 'from', 'by']

        if (!value) return null
        let array = value.toLowerCase().split(" ")
        for (var i= 0; i < array.length; i++) {
            if (!(prepositions.includes(array[i]))) {
                array[i] = array[i].charAt(0).toUpperCase() + array.slice(1)
            }
        }

        return array.join(" ")
    }

}