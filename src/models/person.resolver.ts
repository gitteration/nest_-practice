import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Person')
export class PersonResolver {
    @Query()
    async getAllPerson() {
        return [
            {
                id: '1',
                name: '코시',
                number: '010-1111-1111',
                email: 'show1003272@google.com',
            },
            { id: '2', name: '시코', number: '010-2222-2222' },
        ];
    }
}
