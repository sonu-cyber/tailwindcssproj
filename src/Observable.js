import { Observable } from "rxjs";

// Creating an Observable
function dataObservable() {
  const observable = new Observable((subscriber) => {
    subscriber.next("Hello");
    subscriber.next("World");
    subscriber.complete();
  });

  // Subscribing to the observable
  observable.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.log(err),
    complete: () => console.log("completed"),
  });
  return;
}
export default dataObservable;
