import Arc from "../NK.Pipeline/Arc";

Arc.ForEach(["e", "a", "s", "p", "o", "r", "t", "s"], (i) => {
    console.log(i);
});

new Arc(["ea", "sports", "its", "in", "the"])
    .Push("game")
    .Foreach(console.log);