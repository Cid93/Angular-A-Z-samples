import { Observable } from 'rxjs/Observable';

export abstract class ApiService {
    getPosts: () => Observable<any>;
    postPost: (body: any) => Observable<any>
}
