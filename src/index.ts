export function log(str: string): void {
    console.log(str)
}
class A {
    greeting = "Hello World!"
}
log(new A().greeting);
