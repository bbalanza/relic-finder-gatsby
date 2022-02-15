import Helpers from './Helpers';

describe('Test stripUrlParams', () => {
    const VALIDURLS = ['https://relic-finder.gelmanmuseum.org/0001', 'http://relic-finder.gelmanmuseum.org/0001']
    const INVALIDURLS = ['https://gelmanmuseum.org/0001', 'https://relic-finder.gelmanmuseum.org/', 'https://example.com/'];
    it('Strips the relic number from a valid URL, this includes http and https', () => {
        VALIDURLS.forEach(url => {
            expect(Helpers.getRelicID(url)).toEqual('/0001');
        })
    })
    it('Throws error if invalid URL is scanned', () => {
        INVALIDURLS.forEach(url => {
            expect(() => Helpers.getRelicID(url)).toThrow('Please scan a valid URL.');
        });
    })
})
describe('Test getCameraRatio', () => {
    const SCREENWIDTHRATIO = 16;
    const SCREENHEIGHTRATIO = 9;
    const SCREENPERCENTAGE = .8;
    it('Returns the correct ratio used to fit in a desired screen percentage', () => {
        expect(Helpers.getCameraRatio(SCREENWIDTHRATIO, SCREENHEIGHTRATIO, SCREENPERCENTAGE)).toBe(SCREENWIDTHRATIO / SCREENHEIGHTRATIO * SCREENPERCENTAGE)
    })
})