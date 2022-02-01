

class RickMortyUtils {

    static getIdsfromUrls(urls: string[]): number[] {
        const ids = urls.map(url => {
            const pathArray = url.split('/');
            return Number(pathArray[pathArray.length - 1]);
        });
        return ids;
    }

}

export default RickMortyUtils;