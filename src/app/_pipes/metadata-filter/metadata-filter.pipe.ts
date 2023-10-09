import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metadataFilter'
})
export class MetadataFilterPipe implements PipeTransform {
  transform(value: string): string {
    const URL_REGEX = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/;
    if (value) {
      const re = URL_REGEX.test(value);
      if (re) {
        const pttrn = /^(https?:\/\/)?(www\.)?([^/]+)/gm;
        const urlInfo = pttrn.exec(value);
        let domainName = value;
        if (urlInfo && urlInfo.length > 3) {
          domainName = urlInfo[3];
        }
        return `<a target="_blank" class="meta-data-desc" href="${value}">${domainName}</a>`
      }
    }
    return `${value}`;
  }
}
