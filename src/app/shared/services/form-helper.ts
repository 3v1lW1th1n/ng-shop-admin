import { Unsubscriber } from './unsubscriber';
import { FormGroup } from '@angular/forms';

export abstract class AbstractForm extends Unsubscriber {
  public form: FormGroup;

  public getField(name) {
    return this.form.get(name);
  }
}
