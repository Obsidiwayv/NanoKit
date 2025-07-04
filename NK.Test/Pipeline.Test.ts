import Pipeline from "../NK.Pipeline/Pipeline";
import Timer from "../NK.Pipeline/Timer";

class EA {
    public Eat() {
        console.log("hello");
    }
    public Arts() {
        console.log("world");
    }
}

new Pipeline(() => new EA())
    .WithTimer(Timer.Set(3000))
    .Into(
        (ea) => ea.Eat(),
        (ea) => ea.Arts()
    );
