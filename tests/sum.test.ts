import { sum } from "@/scripts/sum";
import { describe, test, expect} from "@jest/globals"
describe("add two numbers to sum them.", ()=> {

  test("add 1 + 1 expects to be 2", () => {
    expect(sum(1, 1)).toBe(2);
  })
  
})