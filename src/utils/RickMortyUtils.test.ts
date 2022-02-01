import RickMortyUtils from './RickMortyUtils';


describe('RickMortyUtils', () => {

    it('generates ids from a list of url paths', () => {

        const urls = [
            'https://rickandmortyapi.com/api/episode/1',
            'https://rickandmortyapi.com/api/episode/2',
            'https://rickandmortyapi.com/api/episode/3',
            'https://rickandmortyapi.com/api/episode/4',
            'https://rickandmortyapi.com/api/episode/5',
            'https://rickandmortyapi.com/api/episode/6',
            'https://rickandmortyapi.com/api/episode/7',
            'https://rickandmortyapi.com/api/episode/8',
            'https://rickandmortyapi.com/api/episode/9',
            'https://rickandmortyapi.com/api/episode/10'
        ]
        expect(RickMortyUtils.getIdsfromUrls(urls)).toEqual([1,2,3,4,5,6,7,8,9,10])
    })

});