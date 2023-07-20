import {invertBoolean} from "../src/invert-boolean.js";

describe("Test case for invertBoolean", () => {
    test("Boolean", () => {
        expect(invertBoolean(true))
            .toBe(false);
    });
    test("Invalid type", () => {
        expect(() => invertBoolean('str'))
            .toThrow(TypeError)
    });
});