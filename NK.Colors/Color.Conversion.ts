import Shard from "../NK.Pipeline/Shard";

export default function ToRGB(color: string) {
    const red = Shard.Fuse(
        color[0],
        color[1]
    );
    const green = Shard.Fuse(
        color[2],
        color[3]
    );
    const blue = Shard.Fuse(
        color[4],
        color[5]
    );
    return Shard.ToArray(red, green, blue);
}