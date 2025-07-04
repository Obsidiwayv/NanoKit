import Drift from "../NK.Pipeline/Drift";
import Shard from "../NK.Pipeline/Shard";

const HexLetters = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
};

function ConvertLetter(hexPart: string) {
    return Drift.From(HexLetters, hexPart as keyof typeof HexLetters).ReturnElseIfNull();
}

export default function ToRGB(color: string) {
    const red = Shard.Fuse(
        ConvertLetter(color[0]!),
        ConvertLetter(color[1]!)
    );
    const green = Shard.Fuse(
        ConvertLetter(color[2]!),
        ConvertLetter(color[3]!)
    );
    const blue = Shard.Fuse(
        ConvertLetter(color[4]!),
        ConvertLetter(color[5]!)
    );
    return Shard.ToArray(red, green, blue);
}