interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}


export class Product implements Subject {
    public observers : string[]= [];
  public Notify: string[] = [];
 
  addObserver(observer: any): any {
    this.observers.push(observer);
    return this.observers;
  }

  removeObserver(observer: any): void {
    const removeIndex = this.observers.findIndex((obs) => observer === obs);
    if (removeIndex !== -1) {
      this.observers.splice(removeIndex, 1);
    }
  }

  update(observer: any): void {
    this.Notify.push(`${observer}, the product you want is back in stock.`);
  }
  notifyObservers(): void {
    this.observers.forEach((observer) => {
      this.update(observer);
    });
  }

  get getObservers(): string[] {
    return this.observers;
  }


}
