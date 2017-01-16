import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'},
            { id: 1, name: 'Alinanas' },
            { id: 2, name: 'Eurenius' },
            { id: 3, name: 'Kostya Fedirich'},
            { id: 4, name: 'Mrs. Vospetka'},
            { id: 5, name: 'Mr. Dekan'},
            { id: 666, name: 'BulbaMan'},
            { id: 6, name: 'OrloLeshchus'}
        ];
        return {heroes};
    }
}