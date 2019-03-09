import { BehaviorSubject } from 'rxjs';

class Datastore {

  store = new BehaviorSubject(10);
}

export default new Datastore();
